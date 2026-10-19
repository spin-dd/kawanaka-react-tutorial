import type { Entry } from '../types/entry'
import EntryRow from './EntryRow'

function EntryList({ entries }: { entries: Entry[] }) {
    return (<div>
  <h2>明細</h2>
  <span>{entries.length} 件</span>
  <table>
  <tbody>
    {entries.map((entry) => (
      <EntryRow key={entry.id} entry={entry} />
    ))}
  </tbody>
</table>
</div>)
}

export default EntryList