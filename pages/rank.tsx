import Head from 'next/head'
import React, { useState } from 'react'
import Header from '../components/Header'
import Rankbanner from '../components/Rankbanner'
import Ranktable from '../components/Ranktable'

function rank() {

  const [typewt, settypewt] = useState <String> ('romancefan')
  
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10
    to-[#010511] lg:h-[140vh]">
      <Head>
        <title>อันดับ</title>
        <link rel="icon" href="https://axistalent.io/uploads/blog/nft.png" />
      </Head>
      {/* Component */}
      <Header/>
      <main>
        <Rankbanner settypewt={settypewt} typewt={typewt}/>
        <Ranktable  typewt={typewt}/>

        
      </main>
      {/* Modal */}
    </div>
  )
}

export default rank