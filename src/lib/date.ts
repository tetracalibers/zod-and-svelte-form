export const today = () => {
  const now = new Date()
  now.setDate(now.getDate() - 1)
  return now
}

export const toYYYYMMDD = (date: Date, separator = "-") => {
  const yyyy = date.getFullYear()
  const mm = (date.getMonth() + 1).toString().padStart(2, "0")
  const dd = date.getDate().toString().padStart(2, "0")
  return [yyyy, mm, dd].join(separator)
}
