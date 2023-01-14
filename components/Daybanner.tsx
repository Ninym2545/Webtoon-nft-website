import Link from 'next/link'
import React from 'react'
import $ from 'jquery'






function Daybanner() {



  
    $(document).on('click', '.ulday .liday', function() {
      $(this).addClass('liaction').siblings().removeClass('liaction')
    })
  

  return (
    
    <div className="fixed mx-auto pt-20 z-40 w-full bg-black opacity-[92%] sm:pt-[70px] ">
      
    <div className=" mx-auto lg:max-w-5xl px-4 sm:px-6 lg:px-8 md:px-10  relative sm:max-w-[820px] ">
    <ul className="ulday">

        <li className="liday liaction" >
        <Link className="linkx" href="#Mon"><p className="Daybanner whitespace-pre-wrap break-all break-words font-bold "> จ.</p></Link>
        </li>
        <li className="liday">
        <Link className="linkx" href="#"><p className="Daybanner whitespace-pre-wrap break-all break-words font-bold  "> อ.</p></Link>
        </li>
        <li className="liday">
        <Link className="linkx"  href="#"><p className="Daybanner whitespace-pre-wrap break-all break-words font-bold  "> พ.</p></Link>
        </li>
        <li className="liday">
        <Link className="linkx" href="#"><p className="Daybanner whitespace-pre-wrap break-all break-words font-bold  "> พฤ.</p></Link>
        </li>
        <li className="liday">
        <Link className="linkx" href="#Fri"><p className="Daybanner whitespace-pre-wrap break-all break-words font-bold  "> ศ.</p></Link>
        </li>
        <li className="liday">
        <Link  className="linkx" href="#"><p className="Daybanner whitespace-pre-wrap break-all break-words font-bold  "> ส.</p></Link>
        </li>
        <li className="liday">
        <Link  className="linkx" href="#"><p className="Daybanner whitespace-pre-wrap break-all break-words font-bold  "> อา.</p></Link>
        </li>
    </ul>
    </div>
  </div>
 
    
  )
}

export default Daybanner

