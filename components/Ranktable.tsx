import Link from 'next/link'
import React, { FC } from 'react'
import { WT_Category } from '../db/WT_Category'
import { products } from '../db/WT_Description'
import { Banner } from '../db/WT_Rankbanner'


interface Props{
  typewt: String

}
const Table:FC<Props> = ({typewt}) => {
  return (
    <div>
      <div className="mx-auto  pt-[60px] lg:scroll-mt-24 pb-0 max-w-5xl ">
        <div className="mx-auto  lg:pt-[60px] lg:scroll-mt-24 lg:pb-0 lg:max-w-6xl md:max-w-3xl ">
          {/* h-500 */}
          {Banner.filter(bannerproduct => bannerproduct.type.en === typewt).map((type_wt) => (
            <div key={type_wt.id} className="relative mb-2">
              <img src={type_wt.imageBg}
                className="h-[500px] w-full object-cover object-center mb-1 z-10"
              />
              {/* h-500 w-400 */}
              <div className="  left-0 justify-end right-12  h-full w-full absolute flex  bottom-0 ">
                <img src={type_wt.imageFg}
                  className="h-full object-cover"
                />
              </div>
              {/* w-800 h3-300 */}
              <h3 className="mt-4  flex absolute  bottom-1 top-36 inset-x-7 ">
                <img src={type_wt.imageBgText}
                  className="w-fit h-[230px] object-fill object-center mb-1"
                />
              </h3>
            </div>
          ))}

          <div className=" mt-2 grid grid-cols-4 gap-y-[7px] gap-x-2">
            {/* h-400 w-250 */}
            {products.filter(typeproduct => typeproduct.typewt.en === typewt).map((type_wt) => (
              <div key={type_wt.id} className="relative mx-auto ">

                <img
                  src={type_wt.imageFg}
                  className="h-[400px] w-[250px]"
                />

                <div className=" h-[400px] w-[250px] absolute flex  bottom-0 ">
                </div>
                <div className="w-[250px] h-[400px] absolute flex  bottom-0 -z-20">
                  <img src={type_wt.imageBg} className="flex -z-10" />
                </div>
                <div className="w-[250px] h-[400px] absolute flex  bottom-0 -z-40">
                  <img src={type_wt.imageBgText} className="flex  bottom-0 -z-10" />
                </div>


                <div className="flex absolute bottom-0 z-50 ">
                  <Link href={type_wt.href}>
                    <img src={type_wt.imageLogo} className="h-[400px] w-[250px] " />
                  </Link>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table