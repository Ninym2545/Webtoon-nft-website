
import {FC, useEffect} from 'react'
import React, { useState } from 'react'
import {Link} from 'react-scroll'




interface Props{
  currDay: number

}

const Daybanner:FC<Props> = ({currDay}) =>{
  const [click] = useState(false)

  return (
    
   
    <div className="fixed mx-auto pt-20 z-40 w-full bg-[#0F0F0F] opacity-[92%] sm:pt-[70px] ">
      
    
    <ul className="ulday items-center">

        <li className={click ? "liday active" : "liday"}  >
        <Link className="linkx" to="Mon" spy={true} smooth={true} offset={-120} duration={500}><p className="Daybanner whitespace-pre-wrap break-all break-words font-bold  "> จ.</p></Link>
        </li>
        <li className={click ? "liday active" : "liday"}  >
        <Link className="linkx" to="Tue" spy={true} smooth={true} offset={-100} duration={500}><p className="Daybanner whitespace-pre-wrap break-all break-words font-bold  "> อ.</p></Link>
        </li>
        <li className={click ? "liday active" : "liday"}  >
        <Link className="linkx"  to="Wed" spy={true} smooth={true} offset={-100} duration={500}><p className="Daybanner whitespace-pre-wrap break-all break-words font-bold  "> พ.</p></Link>
        </li>
        <li className={click ? "liday active" : "liday"}  >
        <Link className="linkx" to="Thu" spy={true} smooth={true} offset={-100} duration={500}><p className="Daybanner whitespace-pre-wrap break-all break-words font-bold  "> พฤ.</p></Link>
        </li>
        <li className={click ? "liday active" : "liday"}  >
        <Link className="linkx" to="Fri" spy={true} smooth={true} offset={-100} duration={500}><p className="Daybanner whitespace-pre-wrap break-all break-words font-bold  "> ศ.</p></Link>
        </li>
        <li className={click ? "liday active" : "liday"}  >
        <Link  className="linkx" to="Sat" spy={true} smooth={true} offset={-100} duration={500}><p className="Daybanner whitespace-pre-wrap break-all break-words font-bold  "> ส.</p></Link>
        </li>
        <li className={click ? "liday active" : "liday"}  >
        <Link  className="linkx" to="Sun" spy={true} smooth={true} offset={-100} duration={500}><p className="Daybanner whitespace-pre-wrap break-all break-words font-bold  "> อา.</p></Link>
        </li>
    </ul>
    </div>
  
 
  
 
    
  )
}

export default Daybanner

