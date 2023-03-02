import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
import Mypagebanner from '../components/Mypagebanner'
import Mypagetable from '../components/Mypagetable'


function mypage() {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10
    to-[#010511] lg:h-[140vh]">
      <Head>
        <title>ชั้นหนังสือ</title>
        <link rel="icon" href="https://axistalent.io/uploads/blog/nft.png" />
      </Head>
      {/* Component */}
      <Header/>
      <main>
        <Mypagebanner/>
      <Mypagetable/>

        
      </main>
      {/* Modal */}
    </div>
  )
}

export default mypage