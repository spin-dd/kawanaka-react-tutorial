import type { Entry } from '../types/entry'

function EntryRow({ entry }: { entry: Entry }) {
  const isUncategorized = entry.category === "未分類"
  return (
    <tr className={isUncategorized ? "border-b border-neutral-100 text-sm bg-amber-50" : ""}>
      <td>{entry.date.replaceAll("-", "/")}</td>
      <td>{entry.title}</td>
      <td><span className={isUncategorized ? "rounded-full px-2.5 py-1 text-xs font-medium bg-amber-100 text-amber-900" : ""}>{entry.category}</span></td>
      <td>{entry.type === 'income' ? '+' : '−'}¥{Math.abs(entry.amount).toLocaleString()}</td>
      <td>{entry.note !== "" ? "📝" : ""}</td>
    </tr>
  )
}

export default EntryRow