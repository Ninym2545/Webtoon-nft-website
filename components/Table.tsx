import Link from 'next/link'
import React from 'react'
import { WT_Categoryweek } from '../db/WT_Categoryweek'
import { products } from '../db/WT_Description'



function Table() {
  return (
    <div>

      <div className=" pt-[60px] mx-auto max-w-full px-4  ">


        {WT_Categoryweek.map(day => (

          <div id={day.en} className=" mx-auto pt-[80px]  max-w-[80rem] ">
            <h2 className="font-bold text-[1.60rem] opacity-70 mb-8 mt-12">{day.th}</h2>

            <div className=" mx-auto my-auto mt-5 grid grid-cols-5 gap-1 content-start w-full h-full">
              {products.filter(dayproduct => dayproduct.day.en === day.en).map((callout) => (
                <div key={callout.id} className="relative ">
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