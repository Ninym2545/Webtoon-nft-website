import Link from 'next/link'
import React, { useEffect } from 'react'
import $ from 'jquery'






function Mypagebanner() {

  useEffect(() => {

    $(document).on('click', '.ulday .liday', function () {
      $(this).addClass('liaction').siblings().removeClass('liaction')

    })

  }, [])

  return (

    <div className="fixed mx-auto pt-20 z-40 w-full bg-[#0F0F0F] opacity-[92%] sm:pt-[70px] ">

      <div className=" mx-auto lg:max-w-[865px]  relative sm:max-w-[820px] ">
        <ul className="ulday">

          <li className="liday liaction" >
            <Link className="linkx" href="#"><p className="Daybanner whitespace-pre-wrap break-all break-words font-bold ">กิจกรรม</p></Link>
          </li>
          <li className="liday">
            <Link className="linkx" href="#"><p className="Daybanner whitespace-pre-wrap break-all break-words font-bold  ">ตั๋วของขวัญ</p></Link>
          </li>
          
        </ul>
      </div>
    </div>


  )
}

export default Mypagebanner

