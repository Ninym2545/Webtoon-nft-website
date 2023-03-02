import {
  ChevronDoubleRightIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import {
  ArrowRightCircleIcon,
  ArrowsPointingOutIcon,
} from "@heroicons/react/24/solid";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { products } from "../db/WT_ChapterBanner";

function banner() {
  return (
    <div>
      {products.map((product) => (
        <div className=" flex flex-col space-y-2  md:space-y-28 md:pb-10 lg:h-[70vh] lg:justify-evenly">
          <div className="absolute top-0 -z-10 h-full w-full">
            <img className="blackbg" src={product.imageSrc}></img>
          </div>
          <div className="absolute top-0 right-[445px] ">
            <img src="/rank_banner_fg/Bocchi_Banner.png" />
          </div>

          <div className=" lg:pl-[26rem] ">
            <div className="flex space-x-2 ">
              <div className=" bg-red-600 text-white h-6 text-sm font-semibold rounded-lg px-2 pt-[3px] mb-6 cursor-pointer">
                ยังไม่จบ
              </div>
              <div className=" bg-white text-black h-6 text-sm font-semibold rounded-lg px-2 pt-[3px] cursor-pointer">
                วันจันทร์
              </div>
              <div className=" bg-yellow-500 text-white h-6 text-sm font-semibold rounded-lg px-2 pt-[3px] cursor-pointer">
              หมวดหมู่
              </div>
            </div>

            <h1 className="text-6xl font-bold cursor-default">{product.name}</h1>
            <p className="text-shadow-md text-lg pl-1 pb-8 pt-1 cursor-default">ผู้แต่ง :</p>
            <p className="text-shadow-md text-xl pl-1 font-bold text-red-400 cursor-default pb-1">เรื่องย่อ</p>
            <p className="text-shadow-md text-xl max-w-xl pl-1 cursor-default">{product.description}</p>
           
           
          </div>

        </div>
      ))}
    </div>
  );
}

export default banner;
