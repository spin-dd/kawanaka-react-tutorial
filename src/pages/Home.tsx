import { sampleEntries } from '../data/sampleEntries'
import EntryList from '../components/EntryList'
import SummaryCards from '../components/SummaryCards'
import { useState } from 'react'
import { CURRENT_MONTH } from '../data/currentMonth'
import MonthNavigator from '../components/MonthNavigator'
import { shiftMonth } from '../utils/month'

function Home() {
  const [displayMonth, setDisplayMonth] = useState(CURRENT_MONTH)
  const monthEntries = sampleEntries.filter(entry => entry.date.slice(0, 7) === displayMonth)
  return (
    <div>
      <MonthNavigator 
      month={displayMonth} 
      onPrev={() => setDisplayMonth(shiftMonth(displayMonth, -1))} 
      onNext={() => setDisplayMonth(shiftMonth(displayMonth, 1))} />
      <SummaryCards entries={monthEntries} />
      <EntryList entries={monthEntries} />
    </div>
  )
}
export default Home