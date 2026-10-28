import { sampleEntries } from "../data/sampleEntries";
import EntryList from "../components/EntryList";
import SummaryCards from "../components/SummaryCards";
import { useState } from "react";
import { CURRENT_MONTH } from "../data/currentMonth";
import MonthNavigator from "../components/MonthNavigator";
import { shiftMonth } from "../utils/month";
import EntryForm from "../components/EntryForm";
import type { Entry } from "../types/entry";

function Home() {
  const [displayMonth, setDisplayMonth] = useState(CURRENT_MONTH);
  const [allEntries, setAllEntries] = useState(sampleEntries);
  const monthEntries = allEntries.filter(
    (entry) => entry.date.slice(0, 7) === displayMonth,
  );
   function handleAdd(entry: Omit<Entry, "id">) {
    const newId = Math.max(...allEntries.map((e) => e.id)) + 1;
    setAllEntries([...allEntries, { ...entry, id: newId }]);
    setDisplayMonth(entry.date.slice(0, 7));
  }
  return (
    <div>
      <MonthNavigator
        month={displayMonth}
        onPrev={() => setDisplayMonth(shiftMonth(displayMonth, -1))}
        onNext={() => setDisplayMonth(shiftMonth(displayMonth, 1))}
      />
      <EntryForm onAdd={handleAdd} />
      <SummaryCards entries={monthEntries} />
      <EntryList entries={monthEntries} />
    </div>
  );
}
export default Home;