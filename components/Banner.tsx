import { ChevronDoubleRightIcon, InformationCircleIcon } from "@heroicons/react/24/outline"
import { ArrowRightCircleIcon, ArrowsPointingOutIcon } from "@heroicons/react/24/solid"
import { Autoplay, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { products } from "../db/WT_Banner"





function banner() {
  return (
    
    <Swiper
    loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      
        modules={[Autoplay ]}
  >
    {products.map((product) => (

    <SwiperSlide>
      <div className=" flex flex-col space-y-2  md:space-y-28 md:pb-10 lg:h-[70vh] lg:justify-evenly">
        
       <div className="absolute top-0 -z-10 h-full w-full">
       <img className="blackbg" src={product.imageSrc}></img>
    </div>
    
    <div className="  lg:space-y-10 lg:pl-[23rem] md:space-y-5 md:pl-16 sm:space-y-4 sm:pl-10  ">

         <h1 className="text-2xl font-bold lg:text-7xl md:text-3xl">
           {product.name}
         </h1>
         <p className="max-w-xs text-shadow-md text-xs md:max-w-xl md:text-lg lg:max-w-2xl lg:text-2xl sm:text-base sm:max-w-sm ">
           {product.description}
         </p>
         <div className="flex space-x-3">
           <button className="bannerButton bg-white text-black"><ChevronDoubleRightIcon className="h-4 w-4 md:h-7 md:w-7 " /> อ่านเลย</button>
           <button className="bannerButton bg-[gray]/70"><InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8 " /> รายละเอียด</button>
         </div>

    </div>
    </div>
    </SwiperSlide>
    ))}

  </Swiper>
   
  )
}

export default banner