import  {sampleEntries} from '../data/sampleEntries'//sampleEntries を読み込む行
import EntryList from '../components/EntryList' //EntryList を読み込む行

function Home() {
  return <EntryList entries={sampleEntries} />
}

export default Home