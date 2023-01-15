import Head from 'next/head'
import React, { useCallback, useEffect, useState } from 'react'
import Header from '../components/Header'
import Table from '../components/Table'
import Daybanner from '../components/Daybanner'
import $ from 'jquery'



function originalWebtoon() {

  const [currDay, setCurrDay] = useState(0)
  useEffect(() => {
    // $(document).on('click', '.ulday .liday', function() {
    //   $(this).addClass('active').siblings().removeClass('active')
    // })
    var dt = new Date();
    setCurrDay(dt.getDay())

    const element = document.getElementById([{ en: 'Mon', th: 'วันจันทร์', indexd: 1 }, { en: 'Tue', th: 'วันอังคาร', indexd: 2 }, { en: 'Wed', th: 'วันพุธ', indexd: 3 }, { en: 'Thu', th: 'วันพฤหัสบดี', indexd: 4 }, { en: 'Fri', th: 'วันศุกร์', indexd: 5 }, { en: 'Sat', th: 'วันเสาร์', indexd: 6 }, { en: 'Sun', th: 'วันอาทิตย์', indexd: 0 }].find(item => item.indexd === dt.getDay() )?.en||"");
    element?.scrollIntoView();


  }, [])

  function onclickday(date:number){
    setCurrDay(date)
  }

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
            <Daybanner currDay={currDay} onclickday={onclickday}/>
          <Table/>

            
          </main>
          {/* Modal */}
        </div>
      )
}

export default originalWebtoon