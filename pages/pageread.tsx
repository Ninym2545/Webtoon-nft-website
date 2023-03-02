import Head from 'next/head'
import React from 'react'
import HeaderChapter from '../components/HeaderChapter'
import PageRead from '../components/PageRead'




function pageread() {
  return (
    <div className="relative  bg-white  ">
      <Head>
        <title>NFT Webtoon</title>
        <link rel="icon" href="https://axistalent.io/uploads/blog/nft.png" />
      </Head>
      {/* Component */}
      <HeaderChapter/>
      <main className="relative ">
        <PageRead />
      </main>
      {/* Modal */}
    </div>
  )
}

export default pageread