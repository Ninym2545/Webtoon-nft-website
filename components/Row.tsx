import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { products } from '../db/WT_Description';
import { WT_Category } from '../db/WT_Category';



function Row() {

  return (

    <div className="sm:px-6 lg:max-w-full">

      {WT_Category.map(type => (
        <><h2 className="font-bold text-2xl">{type.typewt.th}</h2><Swiper className="group relative w-full h-full"

          breakpoints={{
            976: {
              slidesPerView: 5,
              spaceBetween: 90
            },
            480: {
              slidesPerView: 2,
            },

          }}

          //  spaceBetween={85} 
          //  slidesPerView={5}
          navigation={{
            nextEl: '.button-next-slide',
            prevEl: '.button-prev-slide'
          }}

          modules={[Navigation, Autoplay]}
        >


          {products.filter(dayproduct => dayproduct.typewt.en === type.typewt.en).map((product) => (


            <SwiperSlide className="pb-16 pt-2">
              <div className="mt-5  ">
                <div key={product.id} className="group relative">
                  <div className="aspect-w-1  aspect-h-1  h-[400px] w-[250px] ">
                    {/* Image h-400px w-250px */}
                    <div className="relative mb-2">
                      <img src={product.imageBg}
                        className="h-[400px] w-[250px]  mb-1 "
                      />
                      <div className="justify-end opacity-40 absolute flex  bottom-0  z-50  hover:opacity-0 ">
                        <Link href="/webtoonDetails">
                          <img src={product.imageBgText}
                            className="h-[400px] w-[250px] "
                          />
                        </Link>
                      </div>

                      <div className="justify-end  l  absolute flex  bottom-0 ">
                        <img src={product.imageFg}
                          className="h-[400px] w-[250px]"
                        />
                      </div>

                      <div className="flex absolute bottom-0  ">
                        <Link href="/webtoonDetails">
                          <img src={product.imageLogo} className="w-[250] h-[400px]" />
                        </Link>
                      </div>
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