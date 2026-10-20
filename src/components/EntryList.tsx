import type { Entry } from '../types/entry'
import EntryRow from './EntryRow'

function EntryList({ entries }: { entries: Entry[] }) {
  return (<div>
    <h2>明細</h2>
    <span>{entries.length} 件</span>
    <table>
      <thead>
        <tr>
          <th>日付</th>
          <th>内容</th>
          <th>カテゴリ</th>
          <th>金額</th>
          <th>備考</th>
        </tr>
      </thead>
      <tbody>
        {entries.map((entry) => (
          <EntryRow key={entry.id} entry={entry} />
        ))}
      </tbody>
    </table>
  </div>)
}

export default EntryList