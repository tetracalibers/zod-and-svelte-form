import { z } from "zod"
import { today, toYYYYMMDD } from "../lib/date"

/* string ------------------------------------- */

export const zName = z.string().trim().min(1, { message: "氏名を入力してください" })

export const zEmail = z.string().trim().email({ message: "有効なメールアドレスを入力してください" })

export const zTwitter = z
  .string()
  .trim()
  .transform((id) => (id.startsWith("@") ? id.substring(1) : id))

export const zBlog = z
  .string()
  .url({ message: "有効なURLを入力してください" })
  .startsWith("http", { message: "httpかhttpsで始まるWeb上のURLである必要があります" })
  .or(z.literal(""))

export const zProfileText = z
  .string()
  .trim()
  .transform((text) => text.replace("\n", ""))
  .refine(
    (text) => text.length >= 20,
    (text) => ({ message: `あと${20 - text.length}文字必要です。` })
  )
  .refine(
    (text) => 120 >= text.length,
    (text) => ({ message: `${text.length - 120}文字削る必要があります。` })
  )
//.pipe(z.string().min(20).max(120)) // refineであればpipe不要

/* number ------------------------------------- */

export const zAge = z.coerce.number().nonnegative().nullable()

/* date --------------------------------------- */

export const zJoined = z.coerce
  .date({ errorMap: () => ({ message: "入社日を入力してください" }) })
  .min(new Date("2009-10-01"), { message: "会社設立前の日付は指定できません" })
  .max(today(), { message: "未来の日付は指定できません" })
  .transform((date) => toYYYYMMDD(date))

/* enum --------------------------------------- */

export const jobOptions = ["エンジニア", "デザイナー", "ディレクター", "編集", "事務"] as const

export const zJob = z
  .enum(jobOptions)
  .or(z.literal(""))
  .refine((occ) => occ !== "", { message: "職種を選択してください" })

/* object ------------------------------------- */

export const zBasicProfile = z.object({
  name: zName,
  email: zEmail,
  age: zAge,
  joined: zJoined,
  job: zJob
})

export const zDetailProfile = z.object({
  twitter: zTwitter,
  blog: zBlog,
  profile: zProfileText
})

/* union -------------------------------------- */

export const zProfile = z.discriminatedUnion("hidden", [
  zBasicProfile.extend({ hidden: z.literal(true) }),
  zBasicProfile.extend({ hidden: z.literal(false) }).merge(zDetailProfile)
])

/* type --------------------------------------- */

export type BasicProfile = z.infer<typeof zBasicProfile>
export type DetailProfile = z.infer<typeof zDetailProfile>
