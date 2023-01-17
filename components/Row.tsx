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
    type: { en: 'romancefan', th: 'โรแมนซ์แฟนตาซี' }
  },
  {
    id: 2,
    name: 'Can We Become a Family?',
    href: '#',
    imageSrc: '/b-2.webp',
    type: { en: 'romancefan', th: 'โรแมนซ์แฟนตาซี' }
  },
  {
    id: 3,
    name: 'I Was Reincarnated as a Baby Fox God',
    href: '#',
    imageSrc: '/b-3.webp',
    type: { en: 'action', th: 'แอ็กชัน' }
  },
  {
    id: 4,
    name: 'Actually I Was the Real One',
    href: '#',
    imageSrc: '/b-4.jpg',
    type: { en: 'action', th: 'แอ็กชัน' }
  },
  {
    id: 5,
    name: 'Hey, Little Duke Only Trust Your Sister!',
    href: '#',
    imageSrc: '/b-5.webp',
    type: { en: 'drama', th: 'ดราม่า' }
  },
  {
    id: 6,
    name: 'I Plan to Divorce My Villain Husband but We Have A Child',
    href: '#',
    imageSrc: '/b-1.jpeg',
    type: { en: 'drama', th: 'ดราม่า' }
  },
  {
    id: 7,
    name: 'Can We Become a Family?',
    href: '#',
    imageSrc: '/b-2.webp',
    type: { en: 'commedy', th: 'ตลก' }
  },
  {
    id: 8,
    name: 'I Was Reincarnated as a Baby Fox God',
    href: '#',
    imageSrc: '/b-3.webp',
    type: { en: 'commedy', th: 'ตลก' }
  },
  {
    id: 9,
    name: 'Actually I Was the Real One',
    href: '#',
    imageSrc: '/b-4.jpg',
    type: { en: 'horror', th: 'สยองขวัญ' }
  },
  {
    id: 10,
    name: 'Hey, Little Duke Only Trust Your Sister!',
    href: '#',
    imageSrc: '/b-5.webp',
    type: { en: 'horror', th: 'สยองขวัญ' }
  },
  {
    id: 11,
    name: 'I Plan to Divorce My Villain Husband but We Have A Child',
    href: '#',
    imageSrc: '/b-1.jpeg',
    type: { en: 'romance', th: 'โรแมนซ์' }
  },
  {
    id: 12,
    name: 'I Plan to Divorce My Villain Husband but We Have A Child',
    href: '#',
    imageSrc: '/b-1.jpeg',
    type: { en: 'romance', th: 'โรแมนซ์' }
  },
  {
    id: 13,
    name: 'I Plan to Divorce My Villain Husband but We Have A Child',
    href: '#',
    imageSrc: '/b-1.jpeg',
    type: { en: 'romance', th: 'โรแมนซ์' }
  },
  {
    id: 14,
    name: 'I Plan to Divorce My Villain Husband but We Have A Child',
    href: '#',
    imageSrc: '/b-1.jpeg',
    type: { en: 'romance', th: 'โรแมนซ์' }
  },
  {
    id: 11,
    name: 'I Plan to Divorce My Villain Husband but We Have A Child',
    href: '#',
    imageSrc: '/b-1.jpeg',
    type: { en: 'romance', th: 'โรแมนซ์' }
  },
  {
    id: 12,
    name: 'I Plan to Divorce My Villain Husband but We Have A Child',
    href: '#',
    imageSrc: '/b-1.jpeg',
    type: { en: 'romance', th: 'โรแมนซ์' }
  },
  {
    id: 11,
    name: 'I Plan to Divorce My Villain Husband but We Have A Child',
    href: '#',
    imageSrc: '/b-1.jpeg',
    type: { en: 'romance', th: 'โรแมนซ์' }
  },
  {
    id: 12,
    name: 'I Plan to Divorce My Villain Husband but We Have A Child',
    href: '#',
    imageSrc: '/b-1.jpeg',
    type: { en: 'romance', th: 'โรแมนซ์' }
  },

]

function Row() {

  return (

    <div className="sm:px-6 lg:max-w-7xl">

      {[{ en: 'romancefan', th: 'โรแมนซ์แฟนตาซี' },{ en: 'romance', th: 'โรแมนซ์' }, { en: 'action', th: 'แอ็กชัน' }, { en: 'drama', th: 'ดราม่า' }, { en: 'horror', th: 'สยองขวัญ' }, { en: 'commedy', th: 'ตลก' }].map(type => (
        <><h2 className="font-bold text-2xl">{type.th}</h2><Swiper className="group relative"

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
            nextEl: '.button-next-slide',
            prevEl: '.button-prev-slide'
          }}

          modules={[Navigation, Autoplay]}
        >


          {products.filter(dayproduct => dayproduct.type.en === type.en).map((product) => (


            <SwiperSlide className="pb-16 pt-2 mr-3">
              <div className="ml-4 mr-5 mt-5  ">
                <div key={product.id} className="group relative">
                  <div className="min-h-80 aspect-w-1  aspect-h-1  bg-gray-200 lg:aspect-none h-[300px] w-[200px] ">
                    <img
                      src={product.imageSrc}
                      className="h-full w-full object-cover object-center   " />
                    <div className=" opacity-[0.91] bg-gradient-to-t from-black h-[300px] w-[200px] absolute flex  bottom-0 hover:opacity-100  ">
                  </div>
                  </div>

                  
                  <div className=" mt-4 flex absolute  bottom-3 text-center inset-x-5  w-40">
                    <div>
                      <Link href={product.href}>
                        <h3 className="text-base font-bold text-white ">
                          {product.name}
                        </h3>
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            </SwiperSlide>

          ))}
          <div className="button-next-slide top-[35%]  z-10 w-[80px] h-[80px] absolute right-1  grid place-items-center opacity-50 text-white hover:opacity-100 hover:text-white ">
            <ChevronRightIcon />
          </div>
          <div className="button-prev-slide top-[35%]  z-10 w-[80px] h-[80px] absolute left-1  grid place-items-center  opacity-50  text-white hover:opacity-100 hover:text-white ">
            <ChevronLeftIcon />
          </div>
        </Swiper></>
      ))}
    </div>
  )
}

export default Row