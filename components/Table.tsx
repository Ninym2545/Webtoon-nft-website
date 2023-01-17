import Link from 'next/link'
import React from 'react'
import { products } from '../db/WT_Description'



function Table() {
  return (
    <div>

      <div className=" pt-[70px] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 md:px-10">


        {[{ en: 'Mon', th: 'วันจันทร์', indexd: 1 }, { en: 'Tue', th: 'วันอังคาร', indexd: 2 }, { en: 'Wed', th: 'วันพุธ', indexd: 3 }, { en: 'Thu', th: 'วันพฤหัสบดี', indexd: 4 }, { en: 'Fri', th: 'วันศุกร์', indexd: 5 }, { en: 'Sat', th: 'วันเสาร์', indexd: 6 }, { en: 'Sun', th: 'วันอาทิตย์', indexd: 0 }].map(day => (

          <div id={day.en} className="mx-auto  lg:pt-[60px] lg:scroll-mt-24 lg:pb-0 lg:max-w-6xl md:max-w-3xl ">
            <h2 className="font-bold text-[1.60rem] opacity-70">{day.th}</h2>

            <div className="mt-5 lg:grid lg:grid-cols-5 gap-2 content-start w-full h-full">
              {products.filter(dayproduct => dayproduct.day.en === day.en).map((callout) => (
                <div className="relative ">
                <img src={callout.imageBg}
                  className="h-[400px] w-[250px] mb-1 z-10"
                />
                <div className="justify-end opacity-[0.45] absolute flex  bottom-1  z-30  hover:opacity-0 ">
                <Link href={callout.href}>
                <img src={callout.imageBgText}
                    className="h-[400px] w-[250px] "
                  />
                  </Link>
                </div>
                <div className="justify-end  absolute flex  bottom-0  ">
                  
                  <img src={callout.imageFg}
                    className="h-[400px] w-[250px] "
                  />
                </div>
                <div className="flex absolute bottom-0   ">
                      <Link href={callout.href}>
                          <img src={callout.imageLogo} className="h-[400px] w-[250px]" />
                      </Link>
                  </div>
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