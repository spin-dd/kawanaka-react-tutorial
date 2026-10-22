import type { Entry } from '../types/entry'
import { formatYen } from '../utils/formatYen'
import Card from '../shared/ui/Card'

function SummaryCards({ entries }: { entries: Entry[] }) {
  const totalIncome = entries.filter(entry => entry.type === 'income').reduce((sum, entry) => sum + entry.amount, 0)
  const totalExpenses = entries.filter(entry => entry.type === 'expense').reduce((sum, entry) => sum + entry.amount, 0)
  const netIncome = totalIncome - totalExpenses
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <Card className="flex flex-col gap-1.5 px-5 py-4">
        <div className="text-xs text-neutral-600">収入</div>
        <div className="text-2xl font-bold text-green-800">{formatYen(totalIncome)}</div>
      </Card>
      <Card className="flex flex-col gap-1.5 px-5 py-4">
        <div className="text-xs text-neutral-600">支出</div>
        <div className="text-2xl font-bold text-red-700">{formatYen(totalExpenses)}</div>
      </Card>
      <Card className="flex flex-col gap-1.5 px-5 py-4">
        <div className="text-xs text-neutral-600">残高</div>
        <div className="text-2xl font-bold">{formatYen(netIncome)}</div>
      </Card>
    </div>
  )
}
export default SummaryCards