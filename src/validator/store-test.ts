import { get, writable } from "svelte/store"
import type { AnyZodObject, z, ZodType } from "zod"

export const useZodValidatorAll = <Z extends AnyZodObject, V extends z.infer<Z>>(
  schema: Z,
  initialValues: V
) => {
  const values = writable(initialValues)
  const initErrors = (): Record<keyof V, string[]> => {
    let result = Object.create(initialValues)
    for (const key in initialValues) {
      result[key] = []
    }
    return result
  }
  const errors = writable<Record<keyof V, string[]>>(initErrors())

  const validation = (key: keyof V) => {
    const value = get(values)[key]
    const result = schema.shape[key].safeParse(value)
    if (result.success) {
      // 検証成功時はエラーをリセット
      errors.update((prev) => ({ ...prev, [key]: [] }))
    } else {
      // 検証失敗時はエラーを格納
      errors.update((prev) => ({ ...prev, [key]: result.error.format()._errors }))
    }
  }

  const validationAll = <S extends ZodType>(schema: S, moreValues = {}) => {
    const result = schema.safeParse({ ...get(values), ...moreValues })
    console.log(result)
    if (!result.success) {
      const { fieldErrors } = result.error.flatten()
      errors.update((prev) => ({ ...prev, ...fieldErrors }))
    }
  }

  return {
    values,
    errors,
    validation,
    validationAll
  }
}
