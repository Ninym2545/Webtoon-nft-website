
import React, { FC} from 'react'

import Link from 'next/link'




interface Props{
  currDay: number
  onclickday : (daynumber:number) => void
}

const Daybanner:FC<Props> = ({currDay, onclickday}) =>{



  
  return (
    
    <div className="fixed mx-auto pt-20 z-40 w-full bg-black opacity-[92%] sm:pt-[70px] ">
      
    <div className=" mx-auto lg:max-w-5xl px-4 sm:px-6 lg:px-8 md:px-10  relative sm:max-w-[820px] ">
    <ul className="ulday">

        <li className={`liday ${currDay === 1 ? "liaction":""}`} onClick={() => onclickday(1)} >
        <Link className="linkx" href="#Mon"><p className="Daybanner whitespace-pre-wrap break-all break-words font-bold  "> จ.</p></Link>
        </li>
        <li className={`liday ${currDay === 2 ? "liaction":""}`} onClick={() => onclickday(2)}  >
        <Link className="linkx" href="#Tue"><p className="Daybanner whitespace-pre-wrap break-all break-words font-bold  "> อ.</p></Link>
        </li>
        <li className={`liday ${currDay === 3 ? "liaction":""}`} onClick={() => onclickday(3)} >
        <Link className="linkx"  href="#Wed"><p className="Daybanner whitespace-pre-wrap break-all break-words font-bold  "> พ.</p></Link>
        </li>
        <li className={`liday ${currDay === 4 ? "liaction":""}`} onClick={() => onclickday(4)} >
        <Link className="linkx" href="#Thu"><p className="Daybanner whitespace-pre-wrap break-all break-words font-bold  "> พฤ.</p></Link>
        </li>
        <li className={`liday ${currDay === 5 ? "liaction":""}`} onClick={() => onclickday(5)} >
        <Link className="linkx" href="#Fri"><p className="Daybanner whitespace-pre-wrap break-all break-words font-bold  "> ศ.</p></Link>
        </li>
        <li className={`liday ${currDay === 6 ? "liaction":""}`} onClick={() => onclickday(6)} >
        <Link  className="linkx" href="#Sat"><p className="Daybanner whitespace-pre-wrap break-all break-words font-bold  "> ส.</p></Link>
        </li>
        <li className={`liday ${currDay === 0 ? "liaction":""}`} onClick={() => onclickday(0)} >
        <Link  className="linkx" href="#Sun"><p className="Daybanner whitespace-pre-wrap break-all break-words font-bold  "> อา.</p></Link>
        </li>
    </ul>
    </div>
  </div>
 
    
  )
}

export default Daybanner

