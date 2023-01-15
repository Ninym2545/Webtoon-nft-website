import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
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
    <header>
        
        <div className=" flex items-center space-x-2 md:space-x-10">
            <img src="/logo-new.png" 
                 width={60}
                 height={50}
                 className="cursor-pointer object-contain"
           />
           <ul className="hidden space-x-4 md:flex ">
            <Link href="/"><li className="headerLink ">NFT WEBTOON</li></Link>
            <Link href="/originalWebtoon"><li className="headerLink">ตารางเว็บตูน</li></Link>
            <Link href="/mypage"><li className="headerLink">ชั้นหนังสือ</li></Link>
            <Link href="#"><li className="headerLink">อันดับ</li></Link>
            <Link href="#"><li className="headerLink">กล่องของขวัญ</li></Link>
           </ul>
        </div>

        
        <div className="flex items-center space-x-4 text-sm text-white">
        <MagnifyingGlassIcon className="hidden h-6 w-6  sm:inline" />
        <Link href="/login"><Bars3Icon className="h-6 w-6 "/></Link>
        </div>
        
    </header>

  )
}

export default Header