import Link from 'next/link'
import React from 'react'
import { Bars3Icon, ChevronRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { products } from '../db/WT_Description'



function Table() {
  return (
    <div>
      <div className="mx-auto  pt-[60px] lg:scroll-mt-24 pb-0 max-w-5xl ">
        <div className="relative pt-[65px] ">
          <div>
            <h2 className="text-left  font-bold text-3xl opacity-70 ">กล่องของขวัญ</h2>
          </div>

          <div className="mt-5 grid grid-cols-4 gap-y-[67px] ">
            {products.map((product) => (
              <div key={product.name} className="relative ">
                <div className=" mx-auto ">
                  <img
                    src={product.imageFg}
                    className="h-[400px] w-[250px]"
                  />
                </div>
                <div className="  h-[400px] w-[250px] absolute flex  bottom-0 ">
                </div>
                <div className="w-[250px] h-[400px] absolute flex  bottom-0 -z-20">
                  <img src={product.imageBg} className="flex -z-10" />
                </div>
                <div className="w-[250px] h-[460px] absolute flex top-0 -z-40">
                  <img src={product.imageBgText} className="flex  -z-10" />
                </div>
                <Link href="#">
                  <h3 className=" flex absolute inset-x-28 inset-y-[420px]  w-40 font-semibold text-base">{product.chapter} <ChevronRightIcon className="h-5 w-5 pt-[1px] pl-1 " /> </h3>
                </Link>

                <div className="flex absolute bottom-0 top-1 z-30 ">
                  <Link href={product.href}>
                    <img src={product.imageLogo} className="h-[400px] w-[250px] " />
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