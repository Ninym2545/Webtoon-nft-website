import Head from 'next/head'
import React from 'react'
import Daybanner from '../components/Daybanner'
import Header from '../components/Header'
import Mypagebanner from '../components/Mypagebanner'
import Mypagetable from '../components/Mypagetable'
import Table from '../components/Table'

function mypage() {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10
    to-[#010511] lg:h-[140vh]">
      <Head>
        <title>ตารางเว็บตูน</title>
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