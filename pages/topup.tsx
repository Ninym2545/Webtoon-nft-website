import Head from 'next/head'
import React from 'react'
import HeaderChapter from '../components/HeaderChapter'
import PageRead from '../components/PageRead'
import Topup from '../components/Topup'




function pageread() {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10
    to-[#010511] ">
      <Head>
        <title>NFT Webtoon</title>
        <link rel="icon" href="https://axistalent.io/uploads/blog/nft.png" />
      </Head>
      {/* Component */}
      <main className="relative ">
        <Topup />
      </main>
      {/* Modal */}
    </div>
  )
}

export default pageread