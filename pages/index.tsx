import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'
import Row from '../components/Row'
import HeaderIndex from '../components/HeaderIndex'

const Home: NextPage = () => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10
    to-[#010511] lg:h-[140vh] ">
      <Head>
        <title>NFT Webtoon</title>
        <link rel="icon" href="https://axistalent.io/uploads/blog/nft.png" />
      </Head>
      {/* Component */}
      <HeaderIndex/>
      <main className="relative ">
      <Banner />
        <section className="mx-auto max-w-[1240px] ">
          <Row/>
          

        </section>
        
      </main>
      {/* Modal */}
    </div>
  )
}

export default Home
