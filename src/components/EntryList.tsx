import type { Entry } from '../types/entry'
import EntryRow from '../components/EntryRow'
import Card from '../shared/ui/Card'

function EntryList({ entries }: { entries: Entry[] }) {
  return (
    <Card title="明細" headerRight={<span>{entries.length} 件</span>}>
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
    </Card>)
}

export default EntryList