import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
import Table from '../components/Table'
import Daybanner from '../components/Daybanner'
import Tablemon from '../components/Tmon'

function table() {
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
            <Daybanner/>
          <Table/>

            
          </main>
          {/* Modal */}
        </div>
      )
}

export default table