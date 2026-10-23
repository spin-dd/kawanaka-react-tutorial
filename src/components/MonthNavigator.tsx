import { formatMonthLabel } from '../utils/month'
import { CURRENT_MONTH } from '../data/currentMonth'

type MonthNavigatorProps = {
  month: string;
  onPrev: () => void;
  onNext: () => void;
}

function MonthNavigator({ month, onPrev, onNext }: MonthNavigatorProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <button type="button" onClick={onPrev} className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-11 px-5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed bg-white text-neutral-900 border border-neutral-300 hover:bg-neutral-50 px-3!"
        aria-label="前月">
        <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6"></path>
        </svg>
        前月
      </button>
      <h1 className="min-w-[150px] text-center text-2xl font-bold">{formatMonthLabel(month)}</h1>
      <button type="button" onClick={onNext} className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-11 px-5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed bg-white text-neutral-900 border border-neutral-300 hover:bg-neutral-50 px-3!"
        aria-label="翌月">
        翌月
        <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 6l6 6-6 6"></path>
        </svg>
      </button>
      {month === CURRENT_MONTH && <span className="rounded-full px-2.5 py-1 text-xs font-medium bg-blue-100 text-blue-800">今月</span>}
    </div>
  )
}
export default MonthNavigator 