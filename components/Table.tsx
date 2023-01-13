import Link from 'next/link'
import React from 'react'

const products = [
    {
      id: 1,
      name: 'I Plan to Divorce My Villain Husband but We Have A Child',
      href: '#',
      imageSrc: '/b-1.jpeg',
    },
    {
      id: 2,
      name: 'Can We Become a Family?',
      href: '#',
      imageSrc: '/b-2.webp',
    },
    {
      id: 3,
      name: 'I Was Reincarnated as a Baby Fox God',
      href: '#',
      imageSrc: '/b-3.webp',
    },
    {
      id: 4,
      name: 'Actually I Was the Real One',
      href: '#',
      imageSrc: '/b-4.jpg',
    },
    {
      id: 5,
      name: 'Hey, Little Duke Only Trust Your Sister!',
      href: '#',
      imageSrc: '/b-5.webp',
    },
    {
      id: 6,
      name: 'I Plan to Divorce My Villain Husband but We Have A Child',
      href: '#',
      imageSrc: '/b-1.jpeg',
    },
    {
      id: 7,
      name: 'Can We Become a Family?',
      href: '#',
      imageSrc: '/b-2.webp',
    },
    {
      id: 8,
      name: 'I Was Reincarnated as a Baby Fox God',
      href: '#',
      imageSrc: '/b-3.webp',
    },
    {
      id: 9,
      name: 'Actually I Was the Real One',
      href: '#',
      imageSrc: '/b-4.jpg',
    },
    {
      id: 10,
      name: 'Hey, Little Duke Only Trust Your Sister!',
      href: '#',
      imageSrc: '/b-5.webp',
    },
    {
      id: 11,
      name: 'I Plan to Divorce My Villain Husband but We Have A Child',
      href: '#',
      imageSrc: '/b-1.jpeg',
    },

  ]

function Table() {
  return (
    <div>
        
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 md:px-10">
        
      <div className="mx-auto  lg:pt-10 lg:max-w-6xl md:max-w-3xl md:pt-10 md:pb-9 ">
     
      <h2 className="font-bold text-[1.60rem] opacity-70">วันจันทร์</h2>

        <div className="mt-5 lg:grid lg:grid-cols-6 md:grid md:grid-cols-4 md:w-[750px] md:gap-y-2 md:gap-x-3 md:space-y-0 lg:gap-y-2 lg:gap-x-4 lg:space-y-0 lg:w-[1100px] content-start">
          {products.map((callout) => (
            <div key={callout.name} className="relative">
              <div className="min-h-80 aspect-w-1  aspect-h-1 w-full  m overflow-hidden  bg-gray-200 lg:aspect-none lg:h-[300px] lg:w-[180px]">
                <img
                  src={callout.imageSrc}
                  
                  className="h-full w-full object-cover object-center  lg:h-full lg:w-full md:h-70 md:w-70 sm:h-[18rem] sm:w-[18rem]"
                />
              </div>
              <div className=" opacity-[0.91] bg-gradient-to-t from-black md:h-[300px] md:w-[180px] h-[300px] w-[180px] absolute flex  bottom-0 hover:opacity-100">
                </div>
              <h3 className="mt-4 flex absolute  bottom-3 text-center inset-x-0 left-2 w-40">
                <Link href={callout.href}>
                    <h3 className="text-base font-bold text-white ">
                      {callout.name}    
                    </h3>
                </Link>
              </h3>
              
            </div>
          ))}
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default Table