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
  {
    id: 2,
    name: 'Can We Become a Family?',
    href: '#',
    imageSrc: '/b-2.webp',
    day: { en: 'Tue', th: 'วันอังคาร' }
  },
  {
    id: 2,
    name: 'Can We Become a Family?',
    href: '#',
    imageSrc: '/b-2.webp',
    day: { en: 'Tue', th: 'วันอังคาร' }
  },
  {
    id: 2,
    name: 'Can We Become a Family?',
    href: '#',
    imageSrc: '/b-2.webp',
    day: { en: 'Tue', th: 'วันอังคาร' }
  },
  {
    id: 2,
    name: 'Can We Become a Family?',
    href: '#',
    imageSrc: '/b-2.webp',
    day: { en: 'Tue', th: 'วันอังคาร' }
  },
  {
    id: 2,
    name: 'Can We Become a Family?',
    href: '#',
    imageSrc: '/b-2.webp',
    day: { en: 'Tue', th: 'วันอังคาร' }
  },
  {
    id: 2,
    name: 'Can We Become a Family?',
    href: '#',
    imageSrc: '/b-2.webp',
    day: { en: 'Tue', th: 'วันอังคาร' }
  },
  {
    id: 2,
    name: 'Can We Become a Family?',
    href: '#',
    imageSrc: '/b-2.webp',
    day: { en: 'Tue', th: 'วันอังคาร' }
  },
  {
    id: 2,
    name: 'Can We Become a Family?',
    href: '#',
    imageSrc: '/b-2.webp',
    day: { en: 'Tue', th: 'วันอังคาร' }
  },
  {
    id: 2,
    name: 'Can We Become a Family?',
    href: '#',
    imageSrc: '/b-2.webp',
    day: { en: 'Tue', th: 'วันอังคาร' }
  },
  {
    id: 2,
    name: 'Can We Become a Family?',
    href: '#',
    imageSrc: '/b-2.webp',
    day: { en: 'Tue', th: 'วันอังคาร' }
  },
  {
    id: 3,
    name: 'I Was Reincarnated as a Baby Fox God',
    href: '#',
    imageSrc: '/b-3.webp',
    day: { en: 'Wed', th: 'วันพุธ' }
  },
  {
    id: 3,
    name: 'I Was Reincarnated as a Baby Fox God',
    href: '#',
    imageSrc: '/b-3.webp',
    day: { en: 'Wed', th: 'วันพุธ' }
  },
  {
    id: 3,
    name: 'I Was Reincarnated as a Baby Fox God',
    href: '#',
    imageSrc: '/b-3.webp',
    day: { en: 'Wed', th: 'วันพุธ' }
  },
  {
    id: 3,
    name: 'I Was Reincarnated as a Baby Fox God',
    href: '#',
    imageSrc: '/b-3.webp',
    day: { en: 'Wed', th: 'วันพุธ' }
  },
  {
    id: 3,
    name: 'I Was Reincarnated as a Baby Fox God',
    href: '#',
    imageSrc: '/b-3.webp',
    day: { en: 'Wed', th: 'วันพุธ' }
  },
  {
    id: 3,
    name: 'I Was Reincarnated as a Baby Fox God',
    href: '#',
    imageSrc: '/b-3.webp',
    day: { en: 'Wed', th: 'วันพุธ' }
  },
  {
    id: 3,
    name: 'I Was Reincarnated as a Baby Fox God',
    href: '#',
    imageSrc: '/b-3.webp',
    day: { en: 'Wed', th: 'วันพุธ' }
  },
  {
    id: 3,
    name: 'I Was Reincarnated as a Baby Fox God',
    href: '#',
    imageSrc: '/b-3.webp',
    day: { en: 'Wed', th: 'วันพุธ' }
  },
  {
    id: 3,
    name: 'I Was Reincarnated as a Baby Fox God',
    href: '#',
    imageSrc: '/b-3.webp',
    day: { en: 'Wed', th: 'วันพุธ' }
  },
  {
    id: 3,
    name: 'I Was Reincarnated as a Baby Fox God',
    href: '#',
    imageSrc: '/b-3.webp',
    day: { en: 'Wed', th: 'วันพุธ' }
  },
  {
    id: 4,
    name: 'Actually I Was the Real One',
    href: '#',
    imageSrc: '/b-4.jpg',
    day: { en: 'Thu', th: 'วันพฤหัสบดี' }
  },
  {
    id: 4,
    name: 'Actually I Was the Real One',
    href: '#',
    imageSrc: '/b-4.jpg',
    day: { en: 'Thu', th: 'วันพฤหัสบดี' }
  },
  {
    id: 4,
    name: 'Actually I Was the Real One',
    href: '#',
    imageSrc: '/b-4.jpg',
    day: { en: 'Thu', th: 'วันพฤหัสบดี' }
  },
  {
    id: 4,
    name: 'Actually I Was the Real One',
    href: '#',
    imageSrc: '/b-4.jpg',
    day: { en: 'Thu', th: 'วันพฤหัสบดี' }
  },
  {
    id: 4,
    name: 'Actually I Was the Real One',
    href: '#',
    imageSrc: '/b-4.jpg',
    day: { en: 'Thu', th: 'วันพฤหัสบดี' }
  },
  {
    id: 4,
    name: 'Actually I Was the Real One',
    href: '#',
    imageSrc: '/b-4.jpg',
    day: { en: 'Thu', th: 'วันพฤหัสบดี' }
  },
  {
    id: 4,
    name: 'Actually I Was the Real One',
    href: '#',
    imageSrc: '/b-4.jpg',
    day: { en: 'Thu', th: 'วันพฤหัสบดี' }
  },
  {
    id: 4,
    name: 'Actually I Was the Real One',
    href: '#',
    imageSrc: '/b-4.jpg',
    day: { en: 'Thu', th: 'วันพฤหัสบดี' }
  },
  {
    id: 4,
    name: 'Actually I Was the Real One',
    href: '#',
    imageSrc: '/b-4.jpg',
    day: { en: 'Thu', th: 'วันพฤหัสบดี' }
  },
  {
    id: 4,
    name: 'Actually I Was the Real One',
    href: '#',
    imageSrc: '/b-4.jpg',
    day: { en: 'Thu', th: 'วันพฤหัสบดี' }
  },
  {
    id: 5,
    name: 'Hey, Little Duke Only Trust Your Sister!',
    href: '#',
    imageSrc: '/b-5.webp',
    day: { en: 'Fri', th: 'วันศุกร์' }
  },
  {
    id: 5,
    name: 'Hey, Little Duke Only Trust Your Sister!',
    href: '#',
    imageSrc: '/b-5.webp',
    day: { en: 'Fri', th: 'วันศุกร์' }
  },
  {
    id: 5,
    name: 'Hey, Little Duke Only Trust Your Sister!',
    href: '#',
    imageSrc: '/b-5.webp',
    day: { en: 'Fri', th: 'วันศุกร์' }
  },
  {
    id: 5,
    name: 'Hey, Little Duke Only Trust Your Sister!',
    href: '#',
    imageSrc: '/b-5.webp',
    day: { en: 'Fri', th: 'วันศุกร์' }
  },
  {
    id: 5,
    name: 'Hey, Little Duke Only Trust Your Sister!',
    href: '#',
    imageSrc: '/b-5.webp',
    day: { en: 'Fri', th: 'วันศุกร์' }
  },
  {
    id: 5,
    name: 'Hey, Little Duke Only Trust Your Sister!',
    href: '#',
    imageSrc: '/b-5.webp',
    day: { en: 'Fri', th: 'วันศุกร์' }
  },
  {
    id: 5,
    name: 'Hey, Little Duke Only Trust Your Sister!',
    href: '#',
    imageSrc: '/b-5.webp',
    day: { en: 'Fri', th: 'วันศุกร์' }
  },
  {
    id: 5,
    name: 'Hey, Little Duke Only Trust Your Sister!',
    href: '#',
    imageSrc: '/b-5.webp',
    day: { en: 'Fri', th: 'วันศุกร์' }
  },
  {
    id: 5,
    name: 'Hey, Little Duke Only Trust Your Sister!',
    href: '#',
    imageSrc: '/b-5.webp',
    day: { en: 'Fri', th: 'วันศุกร์' }
  },
  {
    id: 5,
    name: 'Hey, Little Duke Only Trust Your Sister!',
    href: '#',
    imageSrc: '/b-5.webp',
    day: { en: 'Fri', th: 'วันศุกร์' }
  },
  {
    id: 6,
    name: 'I Plan to Divorce My Villain Husband but We Have A Child',
    href: '#',
    imageSrc: '/b-1.jpeg',
    day: { en: 'Sat', th: 'วันเสาร์' }
  },
  {
    id: 6,
    name: 'I Plan to Divorce My Villain Husband but We Have A Child',
    href: '#',
    imageSrc: '/b-1.jpeg',
    day: { en: 'Sat', th: 'วันเสาร์' }
  },
  {
    id: 6,
    name: 'I Plan to Divorce My Villain Husband but We Have A Child',
    href: '#',
    imageSrc: '/b-1.jpeg',
    day: { en: 'Sat', th: 'วันเสาร์' }
  },
  {
    id: 6,
    name: 'I Plan to Divorce My Villain Husband but We Have A Child',
    href: '#',
    imageSrc: '/b-1.jpeg',
    day: { en: 'Sat', th: 'วันเสาร์' }
  },
  {
    id: 6,
    name: 'I Plan to Divorce My Villain Husband but We Have A Child',
    href: '#',
    imageSrc: '/b-1.jpeg',
    day: { en: 'Sat', th: 'วันเสาร์' }
  },
  {
    id: 6,
    name: 'I Plan to Divorce My Villain Husband but We Have A Child',
    href: '#',
    imageSrc: '/b-1.jpeg',
    day: { en: 'Sat', th: 'วันเสาร์' }
  },
  {
    id: 6,
    name: 'I Plan to Divorce My Villain Husband but We Have A Child',
    href: '#',
    imageSrc: '/b-1.jpeg',
    day: { en: 'Sat', th: 'วันเสาร์' }
  },
  {
    id: 6,
    name: 'I Plan to Divorce My Villain Husband but We Have A Child',
    href: '#',
    imageSrc: '/b-1.jpeg',
    day: { en: 'Sat', th: 'วันเสาร์' }
  },
  {
    id: 6,
    name: 'I Plan to Divorce My Villain Husband but We Have A Child',
    href: '#',
    imageSrc: '/b-1.jpeg',
    day: { en: 'Sat', th: 'วันเสาร์' }
  },
  {
    id: 6,
    name: 'I Plan to Divorce My Villain Husband but We Have A Child',
    href: '#',
    imageSrc: '/b-1.jpeg',
    day: { en: 'Sat', th: 'วันเสาร์' }
  },
  {
    id: 7,
    name: 'Can We Become a Family?',
    href: '#',
    imageSrc: '/b-2.webp',
    day: { en: 'Sun', th: 'วันอาทิตย์' }
  },
  {
    id: 7,
    name: 'Can We Become a Family?',
    href: '#',
    imageSrc: '/b-2.webp',
    day: { en: 'Sun', th: 'วันอาทิตย์' }
  },
  {
    id: 7,
    name: 'Can We Become a Family?',
    href: '#',
    imageSrc: '/b-2.webp',
    day: { en: 'Sun', th: 'วันอาทิตย์' }
  },
  {
    id: 7,
    name: 'Can We Become a Family?',
    href: '#',
    imageSrc: '/b-2.webp',
    day: { en: 'Sun', th: 'วันอาทิตย์' }
  },
  {
    id: 7,
    name: 'Can We Become a Family?',
    href: '#',
    imageSrc: '/b-2.webp',
    day: { en: 'Sun', th: 'วันอาทิตย์' }
  },
  {
    id: 7,
    name: 'Can We Become a Family?',
    href: '#',
    imageSrc: '/b-2.webp',
    day: { en: 'Sun', th: 'วันอาทิตย์' }
  },
  {
    id: 7,
    name: 'Can We Become a Family?',
    href: '#',
    imageSrc: '/b-2.webp',
    day: { en: 'Sun', th: 'วันอาทิตย์' }
  },
  {
    id: 7,
    name: 'Can We Become a Family?',
    href: '#',
    imageSrc: '/b-2.webp',
    day: { en: 'Sun', th: 'วันอาทิตย์' }
  },
  {
    id: 7,
    name: 'Can We Become a Family?',
    href: '#',
    imageSrc: '/b-2.webp',
    day: { en: 'Sun', th: 'วันอาทิตย์' }
  },
  {
    id: 7,
    name: 'Can We Become a Family?',
    href: '#',
    imageSrc: '/b-2.webp',
    day: { en: 'Sun', th: 'วันอาทิตย์' }
  }


]

function Table() {
  return (
    <div>

      <div className=" pt-[70px] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 md:px-10">


        {[{ en: 'Mon', th: 'วันจันทร์', indexd: 1 }, { en: 'Tue', th: 'วันอังคาร', indexd: 2 }, { en: 'Wed', th: 'วันพุธ', indexd: 3 }, { en: 'Thu', th: 'วันพฤหัสบดี', indexd: 4 }, { en: 'Fri', th: 'วันศุกร์', indexd: 5 }, { en: 'Sat', th: 'วันเสาร์', indexd: 6 }, { en: 'Sun', th: 'วันอาทิตย์', indexd: 0 }].map(day => (

          <div id={day.en} className="mx-auto  lg:pt-[60px] lg:scroll-mt-24 lg:pb-0 lg:max-w-6xl md:max-w-3xl ">
            <h2 className="font-bold text-[1.60rem] opacity-70">{day.th}</h2>

            <div className="mt-5 lg:grid lg:grid-cols-5 md:grid md:grid-cols-4 md:w-[750px] md:gap-y-2 md:gap-x-3 md:space-y-0 lg:gap-y-2 lg:gap-x-4 lg:space-y-0 lg:w-[1100px] content-start">
              {products.filter(dayproduct => dayproduct.day.en === day.en).map((callout) => (
                <div key={callout.name} className="relative">
                  <div className="min-h-80 aspect-w-1  aspect-h-1 w-full  m overflow-hidden  bg-gray-200 lg:aspect-none lg:h-[400px] lg:w-[220px]">
                    <img
                      src={callout.imageSrc}

                      className="h-full w-full object-cover object-center  lg:h-full lg:w-full md:h-70 md:w-70 sm:h-[18rem] sm:w-[18rem]"
                    />
                  </div>
                  <div className=" opacity-[0.91] bg-gradient-to-t from-black md:h-[400px] md:w-[220px] h-[300px] w-[180px] absolute flex  bottom-0 hover:opacity-100">
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