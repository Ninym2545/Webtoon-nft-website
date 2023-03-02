import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import { products } from "../db/WT_Description";

function Table() {
  return (
    <div>
      <div className="relative  ">
        <div className="mx-auto lg:scroll-mt-24 pb-0 max-w-5xl items-center">
          <div className="bg-[#242424] opacity-80 h-12">
            <h2 className="text-center pt-3 text-lg opacity-100 font-semibold">จำนวนตอน</h2>
          </div>
        </div>
        <div className="mx-auto max-w-5xl">
          <div className="mt-[4px] grid grid-cols-6 gap-x-1 gap-y-[70px]">
            {products.map((product) => (
              <div key={product.name} className="relative">
                <div className="mx-auto ">
                  <Link href="/pageread">
                  <img src={product.imageBg} className="h-[120px] w-[170px] " />
                  </Link>
                </div>
                <Link href="#">
                  <h3 className="top-[130px] left-2 flex absolute inset-28 w-40 font-semibold text-base ">
                    {product.chapter}
                  </h3>
                  <h4 className="top-[155px] left-2 flex absolute inset-28 w-40  text-sm opacity-75">
                    {product.chapter}
                  </h4>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
