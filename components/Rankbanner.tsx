import Link from 'next/link'
import React, { useEffect } from 'react'
import $ from 'jquery'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper";





function Mypagebanner() {

  useEffect(() => {

    $(document).on('click', '.ulrank .lirank', function () {
      $(this).addClass('liactionrank').siblings().removeClass('liactionrank')

    })

  }, [])

  return (



    <div className="fixed  pt-20 z-40 w-full bg-[#0F0F0F] opacity-[92%] sm:pt-[70px] ">

      <ul className="ulrank">

          <li className="lirank liactionrank" >
            <Link className="linkxrank" href="#"><p className="Daybanner whitespace-pre-wrap break-all break-words font-bold ">โรแมนซ์แฟนตาซี</p></Link>
          </li>
          <li className="lirank">
            <Link className="linkxrank" href="#"><p className="Daybanner whitespace-pre-wrap break-all break-words font-bold  ">โรแมนซ์</p></Link>
          </li>
          <li className="lirank">
            <Link className="linkxrank" href="#"><p className="Daybanner whitespace-pre-wrap break-all break-words font-bold  ">แอ็กชัน</p></Link>
          </li>
          <li className="lirank">
            <Link className="linkxrank" href="#"><p className="Daybanner whitespace-pre-wrap break-all break-words font-bold  ">ดราม่า</p></Link>
          </li>
          <li className="lirank">
            <Link className="linkxrank" href="#"><p className="Daybanner whitespace-pre-wrap break-all break-words font-bold  ">สยองขวัญ</p></Link>
          </li>
          <li className="lirank">
            <Link className="linkxrank" href="#"><p className="Daybanner whitespace-pre-wrap break-all break-words font-bold  ">ตลก</p></Link>
          </li>
        </ul>
    </div>



  )
}

export default Mypagebanner

