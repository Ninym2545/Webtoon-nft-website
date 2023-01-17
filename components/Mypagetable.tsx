import Link from 'next/link'
import React from 'react'
import { Bars3Icon, ChevronRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'

const products = [
  {
    id: 1,
    name: 'I Plan to Divorce My Villain Husband but We Have A Child',
    href: '#',
    imageSrc: '/b-1.jpeg',
    day: { en: 'Mon', th: 'วันจันทร์' },
    imageBg: '/spy_bg.png',
    chapter: '001'
  },
  {
    id: 1,
    name: 'I Plan to Divorce My Villain Husband but We Have A Child',
    href: '#',
    imageSrc: '/b-1.jpeg',
    day: { en: 'Mon', th: 'วันจันทร์' },
    imageBg: '/spy_bg2.png',
    chapter: '001'
  },
  {
    id: 1,
    name: 'I Plan to Divorce My Villain Husband but We Have A Child',
    href: '#',
    imageSrc: '/b-1.jpeg',
    day: { en: 'Mon', th: 'วันจันทร์' },
    imageBg: '/spy_bg.png',
    chapter: '001'
  },
  {
    id: 1,
    name: 'I Plan to Divorce My Villain Husband but We Have A Child',
    href: '#',
    imageSrc: '/b-1.jpeg',
    day: { en: 'Mon', th: 'วันจันทร์' },
    imageBg: '/spy_bg.png',
    chapter: '001'
  },
  {
    id: 1,
    name: 'I Plan to Divorce My Villain Husband but We Have A Child',
    href: '#',
    imageSrc: '/b-1.jpeg',
    day: { en: 'Mon', th: 'วันจันทร์' },
    imageBg: '/spy_bg.png',
    chapter: '001'
  },
  {
    id: 1,
    name: 'I Plan to Divorce My Villain Husband but We Have A Child',
    href: '#',
    imageSrc: '/b-1.jpeg',
    day: { en: 'Mon', th: 'วันจันทร์' },
    imageBg: '/spy_bg.png',
    chapter: '001'

  },
  {
    id: 1,
    name: 'I Plan to Divorce My Villain Husband but We Have A Child',
    href: '#',
    imageSrc: '/b-1.jpeg',
    day: { en: 'Mon', th: 'วันจันทร์' },
    imageBg: '/spy_bg.png',
    chapter: '001'
  },
  {
    id: 1,
    name: 'I Plan to Divorce My Villain Husband but We Have A Child',
    href: '#',
    imageSrc: '/b-1.jpeg',
    day: { en: 'Mon', th: 'วันจันทร์' },
    imageBg: '/spy_bg.png',
    chapter: '001'
  },
  {
    id: 1,
    name: 'I Plan to Divorce My Villain Husband but We Have A Child',
    href: '#',
    imageSrc: '/b-1.jpeg',
    day: { en: 'Mon', th: 'วันจันทร์' },
    imageBg: '/spy_bg.png',
    chapter: '001'
  },
  {
    id: 1,
    name: 'I Plan to Divorce My Villain Husband but We Have A Child',
    href: '#',
    imageSrc: '/b-1.jpeg',
    day: { en: 'Mon', th: 'วันจันทร์' },
    imageBg: '/spy_bg.png',
    chapter: '001 '
  },



]

function Table() {
  return (
    <div>

      <div className="relative pt-[65px] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 md:px-10 z-1">


        {[{ en: 'Mon', th: 'วันจันทร์' }].map(day => (

          <div id={day.en} className="mx-auto  lg:pt-[60px] lg:scroll-mt-24 lg:pb-0 lg:max-w-6xl md:max-w-3xl ">
            <div>
              <h2 className="text-right mr-11 font-bold text-3xl opacity-70 pb-3">คุณพึ่งได้อ่าน</h2>
              <h2 className="text-right mr-11 font-bold text-3xl opacity-70 pb-3">I Plan to Divorce My Villain Husband but We Have A Child</h2>
              <h2 className="text-right mr-11 font-bold text-3xl opacity-70 pb-9">ไปล่าสุด</h2>
            </div>

            <div className=" lg:grid lg:grid-cols-5 md:grid md:grid-cols-4 md:w-[750px] md:gap-y-2 md:gap-x-3 md:space-y-0 lg:gap-y-5 lg:gap-x-5 lg:space-y-0 lg:w-[1100px] content-start">
              {products.filter(dayproduct => dayproduct.day.en === day.en).map((callout) => (
                <div key={callout.name} className="relative ">
                  <div className=" min-h-80 aspect-w-1  aspect-h-1 w-full   overflow-hidden  bg-gray-200 lg:aspect-none lg:h-[400px] lg:w-[220px] mt-16">
                    <img
                      src={callout.imageSrc}

                      className="h-full w-full object-cover object-center  lg:h-full lg:w-full md:h-70 md:w-70 sm:h-[18rem] sm:w-[18rem]"
                    />
                  </div>
                  <div className=" opacity-[0.91] bg-gradient-to-t from-black md:h-[400px] md:w-[220px] h-[300px] w-[180px] absolute flex  bottom-0 hover:opacity-100">
                  </div>
                  <div className="   md:h-[470px] md:w-[220px] h-[300px] w-[180px] absolute flex  bottom-0 -z-20">
                    <img src={callout.imageBg} className="flex  bottom-0 -z-10" />
                  </div>
                  <Link href="#">
                    <h3 className="top-4 flex absolute inset-x-24 w-40 font-semibold text-base">{callout.chapter} <ChevronRightIcon className="h-5 w-5 pt-[1px] pl-1 "/> </h3>
                  </Link>

                  <h3 className="mt-4 flex absolute  bottom-3 text-center inset-x-8  w-40">
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

        ))}

      </div>
    </div>
  )
}

export default Table