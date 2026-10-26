export function formatMonthLabel(month: string): string {
  const [year, monthNumber] = month.split("-")
  return `${year}年${monthNumber}月`
}

export function shiftMonth(month: string, delta: number): string {
  const [year, monthNumber] = month.split("-")
  const date = new Date(parseInt(year), parseInt(monthNumber) - 1 + delta)
  const y = date.getFullYear()
  const m = date.getMonth() + 1
  return String(y) + "-" + String(m).padStart(2, "0")
}