import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

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

function Row() {

  return (
    <div className="sm:px-6 lg:max-w-7xl">
      <h2 className="font-bold text-[1.30rem]">โรแมนซ์แฟนตาซี</h2>
        <Swiper className="group relative" 

        breakpoints={{

          976: {
                
                slidesPerView: 6,
                
              },
          480: {
                
                slidesPerView: 2,
                
              },
          890: {
                
                slidesPerView: 4,
                
              },


          }}
     
        // spaceBetween={1} 
        // slidesPerView={6}
        
        navigation={{
            nextEl:'.button-next-slide',
            prevEl:'.button-prev-slide'
          }}






        modules={[Navigation ,Autoplay]} 
        >
          
          {products.map((product) => (
          <>
          
          <SwiperSlide className="">
            <div className="ml-4 mr-5 mt-5  ">
              <div key={product.id} className="group relative">
                <div className="min-h-80 aspect-w-1  aspect-h-1 w-full   overflow-hidden  bg-gray-200 lg:aspect-none lg:h-[300px] lg:w-[180px] ">
                  <img
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center  lg:h-full lg:w-full md:h-70 md:w-70 sm:h-[18rem] sm:w-[18rem]"
                  />
                </div>

                <div className=" opacity-[0.91] bg-gradient-to-t from-black  h-[300px] w-[180px] absolute flex  bottom-0 hover:opacity-100 sm:h-[300px] sm:w-[200px]  ">
                </div>
                <div className=" mt-4 flex absolute  bottom-3 text-center inset-x-0 left-2 w-40">
                  <div>
                    <Link href={product.href}>
                    <h3 className="text-base font-bold text-white sm:text-sm  ">
                      {product.name}    
                    </h3>
                    </Link>
                  </div>
                </div>
                
              </div>
            </div>
        </SwiperSlide>
          </>
          ))}
           <div className="button-next-slide top-[35%]  z-10 w-[80px] h-[80px] absolute right-1  grid place-items-center opacity-50 text-white hover:opacity-100 hover:text-white ">
           <ChevronRightIcon />
          </div>
          <div className="button-prev-slide top-[35%]  z-10 w-[80px] h-[80px] absolute left-1  grid place-items-center  opacity-50  text-white hover:opacity-100 hover:text-white ">
           <ChevronLeftIcon />
          </div>
        </Swiper>
    </div>
  )
}

export default Row