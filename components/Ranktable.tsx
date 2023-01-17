import Link from 'next/link'
import React from 'react'

const products = [
  {
    id: 1,
    name: 'I Plan to Divorce My Villain Husband but We Have A Child',
    href: '#',
    imageSrc: '/b-1.jpeg',
    day: { en: 'Mon', th: 'วันจันทร์' }
  },
  {
    id: 1,
    name: 'I Plan to Divorce My Villain Husband but We Have A Child',
    href: '#',
    imageSrc: '/b-1.jpeg',
    day: { en: 'Mon', th: 'วันจันทร์' }
  },
  {
    id: 1,
    name: 'I Plan to Divorce My Villain Husband but We Have A Child',
    href: '#',
    imageSrc: '/b-1.jpeg',
    day: { en: 'Mon', th: 'วันจันทร์' }
  },
  {
    id: 1,
    name: 'I Plan to Divorce My Villain Husband but We Have A Child',
    href: '#',
    imageSrc: '/b-1.jpeg',
    day: { en: 'Mon', th: 'วันจันทร์' }
  },
  {
    id: 1,
    name: 'I Plan to Divorce My Villain Husband but We Have A Child',
    href: '#',
    imageSrc: '/b-1.jpeg',
    day: { en: 'Mon', th: 'วันจันทร์' }
  },
  {
    id: 1,
    name: 'I Plan to Divorce My Villain Husband but We Have A Child',
    href: '#',
    imageSrc: '/b-1.jpeg',
    day: { en: 'Mon', th: 'วันจันทร์' }
  },
  {
    id: 1,
    name: 'I Plan to Divorce My Villain Husband but We Have A Child',
    href: '#',
    imageSrc: '/b-1.jpeg',
    day: { en: 'Mon', th: 'วันจันทร์' }
  },
  {
    id: 1,
    name: 'I Plan to Divorce My Villain Husband but We Have A Child',
    href: '#',
    imageSrc: '/b-1.jpeg',
    day: { en: 'Mon', th: 'วันจันทร์' }
  },
  {
    id: 1,
    name: 'I Plan to Divorce My Villain Husband but We Have A Child',
    href: '#',
    imageSrc: '/b-1.jpeg',
    day: { en: 'Mon', th: 'วันจันทร์' }
  },
  {
    id: 1,
    name: 'I Plan to Divorce My Villain Husband but We Have A Child',
    href: '#',
    imageSrc: '/b-1.jpeg',
    day: { en: 'Mon', th: 'วันจันทร์' }
  },



]
const Banner = [
  {
    id: 1,
    imageFG:'/spy_fg.png',
    imageBG:'/spy_bg.png',
    imageText: '/Spy_×_Family_logo.png',

  },
]

function Table() {
  return (
    <div>

      <div className="relative pt-[65px] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 md:px-10 z-1">


        {[{ en: 'Mon', th: 'วันจันทร์' }].map(day => (

          <div id={day.en} className="mx-auto  lg:pt-[60px] lg:scroll-mt-24 lg:pb-0 lg:max-w-6xl md:max-w-3xl ">

            {Banner.map((Banner) => (
              <div className="relative mb-2">
              <img src={Banner.imageBG}
                className="h-[500px] w-full object-cover object-center mb-1 z-10"
              />

              <div className=" opacity-[0.91] left-0 justify-end right-12 bg-gradient-to-t from-[#0A2A22]  h-full w-full absolute flex  bottom-0 hover:opacity-100">
                <img src={Banner.imageFG}
                  className="h-full w-fit object-center mb-1 "
                />
              </div>
              <h3 className="mt-4 top-40 flex absolute  bottom-1 text-center inset-x-12 ">
                <img src={Banner.imageText}
                  className="w-fit h-[200px] object-cover mb-1 "
                />
              </h3>
            </div>
            ))}
            
            <div className=" lg:grid lg:grid-cols-5 md:grid md:grid-cols-4  gap-y-2 gap-x-1 space-y-0 justify-center ">
              {products.filter(dayproduct => dayproduct.day.en === day.en).map((callout) => (

                <div key={callout.name} className="relative">
                  <div className="">
                    <img
                      src={callout.imageSrc}

                      className="h-full w-full object-cover object-center  lg:h-full lg:w-full md:h-70 md:w-70 sm:h-[18rem] sm:w-[18rem]"
                    />
                  </div>
                  <div className=" opacity-[0.91] bg-gradient-to-t from-black  h-full w-full absolute flex  bottom-0 hover:opacity-100">
                  </div>
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