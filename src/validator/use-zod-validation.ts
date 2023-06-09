import { get, writable } from "svelte/store"
import type { ZodEffects, ZodType } from "zod"

export const useZodValidator = <T, O extends T, Z extends ZodType<T>>(
  zSchema: Z | ZodEffects<Z, O>
) => {
  const errors = writable<string[]>([])
  const invalid = writable(false)

  const validation = (value: T) => {
    const result = zSchema.safeParse(value)
    if (result.success) {
      // 検証成功時はエラーをリセット
      errors.set([])
    } else {
      // 検証失敗時はエラーを格納
      errors.set(result.error.format()._errors)
    }
    // エラーの有無によってinvalidフラグを切り替え
    invalid.set(get(errors).length > 0)
  }

  return { validation, errors, invalid }
}
