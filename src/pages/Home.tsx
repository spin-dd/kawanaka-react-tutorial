import  {sampleEntries} from '../data/sampleEntries'
import EntryList from '../components/EntryList' 
import SummaryCards from '../components/SummaryCards'

function Home() {
  return (
    <div>
      <SummaryCards entries={sampleEntries} />
      <EntryList entries={sampleEntries} />
    </div>
  )
}

export default Home