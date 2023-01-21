import Head from 'next/head'
import React from 'react'
import GiftBanner from '../components/GiftBanner'
import Gifttable from '../components/Gifttable'
import Header from '../components/Header'


function gift() {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10
    to-[#010511] lg:h-[140vh] ">
      <Head>
        <title>NFT Webtoon</title>
        <link rel="icon" href="https://axistalent.io/uploads/blog/nft.png" />
      </Head>
      {/* Component */}
      <Header/>
      <GiftBanner/>
      <main className="relative ">
        <Gifttable/>
        
        
      </main>
      {/* Modal */}
    </div>
  )
}

export default gift