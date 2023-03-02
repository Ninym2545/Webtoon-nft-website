import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

function LoginForm() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  ">
      <div className="bg-transparent flex  ">
        <div className="text-white  w-[600px]  p-5 justify-center ">
          <h1 className="text-2xl text-center mb-10">เติมแคช</h1>
          <div className="flex w-[600px] justify-between  mt-3 mb-5">
            <label className="flex items-center text-base opacity-80">
              แคชที่มี
            </label>
            <p className="text-base">360 แคช</p>
          </div>
          <div className="text-left font-semibold text-3xl mt-10">
            <span className="opacity-80">เติม</span>
            <span className="text-yellow-600">แคช </span>
          </div>
          <div className="border-[1px] w-[600px] border-white inline-block mt-5 opacity-50"></div>
          <div className="flex w-[600px] justify-between  my-9">
            <label className="flex items-center text-lg font-bold">
              <input
                type="radio"
                name="price"
                className="mr-4 w-[20px] h-[20px] text-yellow-600 bg-gray-100 border-gray-300 focus:ring-yellow-600 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              2,360 แคช
            </label>
            <p className="text-lg font-bold text-yellow-600">฿ 59</p>
          </div>
          <div className="flex w-[600px] justify-between  my-9">
            <label className="flex items-center text-lg font-bold">
              <input
                type="radio"
                name="price"
                className="mr-4 w-[20px] h-[20px] text-yellow-600 bg-gray-100 border-gray-300 focus:ring-yellow-600 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              4,760 แคช
            </label>
            <p className="text-lg font-bold text-yellow-600">฿ 119</p>
          </div>
          <div className="flex w-[600px] justify-between  my-9">
            <label className="flex items-center text-lg font-bold">
              <input
                type="radio"
                name="price"
                className="mr-4 w-[20px] h-[20px] text-yellow-600 bg-gray-100 border-gray-300 focus:ring-yellow-600 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              7,960 แคช
            </label>
            <p className="text-lg font-bold text-yellow-600">฿ 199</p>
          </div>
          <div className="flex w-[600px] justify-between  my-9">
            <label className="flex items-center text-lg font-bold">
              <input
                type="radio"
                name="price"
                className="mr-4 w-[20px] h-[20px] text-yellow-600 bg-gray-100 border-gray-300 focus:ring-yellow-600 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              13,160 แคช
            </label>
            <p className="text-lg font-bold text-yellow-600">฿ 329</p>
          </div>
          <div className="flex w-[600px] justify-between  my-9">
            <label className="flex items-center text-lg font-bold">
              <input
                type="radio"
                name="price"
                className="mr-4 w-[20px] h-[20px] text-yellow-600 bg-gray-100 border-gray-300 focus:ring-yellow-600 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              19,960 แคช
            </label>
            <p className="text-lg font-bold text-yellow-600">฿ 499</p>
          </div>
          <div className="flex w-[600px] justify-between  my-9">
            <label className="flex items-center text-lg font-bold">
              <input
                type="radio"
                name="price"
                className="mr-4 w-[20px] h-[20px] text-yellow-600 bg-gray-100 border-gray-300 focus:ring-yellow-600 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              40,000 แคช
            </label>
            <p className="text-lg font-bold text-yellow-600">฿ 1,000</p>
          </div>
          <div className="flex w-[600px] justify-between  my-9">
            <label className="flex items-center text-lg font-bold">
              <input
                type="radio"
                name="price"
                className="mr-4 w-[20px] h-[20px] text-yellow-600 bg-gray-100 border-gray-300 focus:ring-yellow-600 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              84,000 แคช
            </label>
            <p className="text-lg font-bold text-yellow-600">฿ 2,100</p>
          </div>

          <div className="border-[1px] w-[600px] border-white inline-block mb-9 opacity-50"></div>
          <div className="text-center">
          <Link href="#" >
            <p className="border-2 border-white rounded-full px-12 py-2 inline-block  w-[500px] text-center bg-white text-black font-bold">
              Next
            </p>
          </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
