import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'
import Row from '../components/Row'
import HeaderIndex from '../components/HeaderIndex'
import ChapterBannerDetail from '../components/ChapterBannerDetail'
import HeaderChapter from '../components/HeaderChapter'
import Table from '../components/Table'
import Mypagetable from '../components/Mypagetable'
import ChapterRow from '../components/ChapterRow'

const Home: NextPage = () => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10
    to-[#010511] lg:h-[140vh] ">
      <Head>
        <title>NFT Webtoon</title>
        <link rel="icon" href="https://axistalent.io/uploads/blog/nft.png" />
      </Head>
      {/* Component */}
      <HeaderChapter/>
      <main className="relative ">
      <ChapterBannerDetail />
      <ChapterRow/>
        
      </main>
      {/* Modal */}
    </div>
  )
}

export default Home
