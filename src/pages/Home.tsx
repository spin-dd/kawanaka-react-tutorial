import  {sampleEntries} from '../data/sampleEntries'
import EntryList from '../components/EntryList' 

function Home() {
  return <EntryList entries={sampleEntries} />
}

export default Home