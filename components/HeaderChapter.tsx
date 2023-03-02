import {  ArrowLeftIcon, Bars3Icon, HeartIcon  } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useEffect, useState } from 'react'



function Header() {
  const [isScrolled,setIsScrolled] = useState(false)

  useEffect(() =>{
    const handleScroll = () =>{
      if(window.scrollY > 0){
        setIsScrolled(true)
      }else{
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll",handleScroll)

    return() =>{
      window.removeEventListener("scroll",handleScroll)
    }
  },[])


  return (
    <header className={`${isScrolled && 'bg-[#0F0F0F] '  }`}>
        
        <div className=" flex items-center space-x-2 md:space-x-10">
        <Link href="/"><ArrowLeftIcon className="hidden h-6 w-6  sm:inline"/></Link>
          
        </div>

        
        <div className="flex items-center space-x-4 text-sm text-white">
        
        <HeartIcon className="hidden h-6 w-6  sm:inline"/>
        
        </div>
        
    </header>

  )
}

export default Header