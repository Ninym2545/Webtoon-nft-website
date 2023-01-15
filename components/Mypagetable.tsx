import Link from 'next/link'
import React from 'react'

const products = [
    {
      id: 1,
      name: 'I Plan to Divorce My Villain Husband but We Have A Child',
      href: '#',
      imageSrc: '/b-1.jpeg',
      day:{en:'Mon' , th:'วันจันทร์'}
    },
    {
      id: 1,
      name: 'I Plan to Divorce My Villain Husband but We Have A Child',
      href: '#',
      imageSrc: '/b-1.jpeg',
      day:{en:'Mon' , th:'วันจันทร์'}
    },
    {
      id: 1,
      name: 'I Plan to Divorce My Villain Husband but We Have A Child',
      href: '#',
      imageSrc: '/b-1.jpeg',
      day:{en:'Mon' , th:'วันจันทร์'}
    },
    {
      id: 1,
      name: 'I Plan to Divorce My Villain Husband but We Have A Child',
      href: '#',
      imageSrc: '/b-1.jpeg',
      day:{en:'Mon' , th:'วันจันทร์'}
    },
    {
      id: 1,
      name: 'I Plan to Divorce My Villain Husband but We Have A Child',
      href: '#',
      imageSrc: '/b-1.jpeg',
      day:{en:'Mon' , th:'วันจันทร์'}
    },
    {
      id: 1,
      name: 'I Plan to Divorce My Villain Husband but We Have A Child',
      href: '#',
      imageSrc: '/b-1.jpeg',
      day:{en:'Mon' , th:'วันจันทร์'}
    },
    {
      id: 1,
      name: 'I Plan to Divorce My Villain Husband but We Have A Child',
      href: '#',
      imageSrc: '/b-1.jpeg',
      day:{en:'Mon' , th:'วันจันทร์'}
    },
    {
      id: 1,
      name: 'I Plan to Divorce My Villain Husband but We Have A Child',
      href: '#',
      imageSrc: '/b-1.jpeg',
      day:{en:'Mon' , th:'วันจันทร์'}
    },
    {
      id: 1,
      name: 'I Plan to Divorce My Villain Husband but We Have A Child',
      href: '#',
      imageSrc: '/b-1.jpeg',
      day:{en:'Mon' , th:'วันจันทร์'}
    },
    {
      id: 1,
      name: 'I Plan to Divorce My Villain Husband but We Have A Child',
      href: '#',
      imageSrc: '/b-1.jpeg',
      day:{en:'Mon' , th:'วันจันทร์'}
    },  
    


  ]

function Table() {
  return (
    <div>
        
    <div className=" pt-[20px] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 md:px-10">
        
      
     {[{en:'Mon' , th:'วันจันทร์'}].map(day => (
      
           <div id={day.en} className="mx-auto  lg:pt-[110px] lg:pb-0 lg:max-w-6xl md:max-w-3xl md:pt-10 md:pb-9 ">
           <h2 className="font-bold text-[1.60rem] opacity-70">{day.th}</h2>
     
             <div className="mt-5 lg:grid lg:grid-cols-4 md:grid md:grid-cols-4 md:w-[750px] md:gap-y-2 md:gap-x-3 md:space-y-0 lg:gap-y-2 lg:gap-x-4 lg:space-y-0 lg:w-[1100px] content-start">
               {products.filter(dayproduct => dayproduct.day.en === day.en ).map((callout) => (
                 <div key={callout.name} className="relative">
                   <div className="min-h-80 aspect-w-1  aspect-h-1 w-full  m overflow-hidden  bg-gray-200 lg:aspect-none lg:h-[440px] lg:w-[275px]">
                     <img
                       src={callout.imageSrc}
                       
                       className="h-full w-full object-cover object-center  lg:h-full lg:w-full md:h-70 md:w-70 sm:h-[18rem] sm:w-[18rem]"
                     />
                   </div>
                   <div className=" opacity-[0.91] bg-gradient-to-t from-black md:h-[440px] md:w-[275px] h-[300px] w-[180px] absolute flex  bottom-0 hover:opacity-100">
                     </div>
                   <h3 className="mt-4 flex absolute  bottom-3 text-center inset-x-4  w-60">
                     <Link href={callout.href}>
                         <h3 className="text-lg font-bold text-white ">
                           {callout.name}    
                         </h3>
                     </Link>
                   </h3>
                   
                 </div>
               ))}
             </div> 
           </div>
          
     ))}

    </div>
  </div>
  )
}

export default Table