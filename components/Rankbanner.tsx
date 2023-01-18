import Link from 'next/link'
import React, { FC, useEffect } from 'react'
import $ from 'jquery'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper";
import { WT_Category } from '../db/WT_Category';




interface Props {
  settypewt: React.Dispatch<React.SetStateAction<String>>
  typewt: String

}

const Rankbanner: FC<Props> = ({ settypewt, typewt }) => {

  useEffect(() => {

    $(document).on('click', '.ulrank .lirank', function () {
      $(this).addClass('liactionrank').siblings().removeClass('liactionrank')

    })

  }, [])

  return (



    <div className="fixed  pt-20 z-40 w-full bg-[#0F0F0F] opacity-[92%] sm:pt-[70px] ">

      <ul className="ulrank">
        {
          WT_Category.map(ty_cat => (
            <li className={`lirank ${ty_cat.typewt.en === typewt ? "liactionrank" : ""}`} >
              <button className="linkxrank" onClick={() => { settypewt(ty_cat.typewt.en) }} ><p className="Daybanner whitespace-pre-wrap break-all break-words font-bold ">{ty_cat.typewt.th}</p></button>
            </li>
          ))
        }
      </ul>
    </div>



  )
}

export default Rankbanner

