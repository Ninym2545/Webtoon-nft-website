import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

function LoginForm() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
      <div className="bg-gray-100 rounded-2xl rounded-tr-3xl rounded-br-3xl shadow-2xl flex  w-[850px]">
        <div className="text-black  w-3/5 p-5">
          <div className="text-left font-bold">
            <span className="text-red-500">NFT </span>Webtoon{" "}
          </div>
          <div className="py-10">
            <h2 className="text-3xl font-bold text-[#2D3131] mb-2">
              Sign in to Account
            </h2>
            <div className="border-2 w-10 border-[#2D3131] inline-block mb-2"></div>
            <div className="flex justify-center my-2">
              <Link
                href="#"
                className="border-2 border-gray-200 rounded-full p-2 mx-1"
              >
                <img src="/logo/MetaMask_Fox.svg.png" className="w-9 h-9" />
              </Link>
            </div>
            <p className="text-gray-400 my-3">or use your email account</p>
            <div className="flex flex-col items-center">
              <div className="bg-gray-200 w-64 p-2 flex items-center mb-3">
                <EnvelopeIcon className="h-6 w-6 text-gray-400 mr-2" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="bg-gray-200 outline-none text-sm flex-1 text-gray-900 border border-transparent rounded-lg  sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="bg-gray-200 w-64 p-2 flex items-center">
                <LockClosedIcon className="h-6 w-6 text-gray-400 mr-2" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="bg-gray-200 outline-none text-sm flex-1 text-gray-900 border border-transparent rounded-lg  sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                />
              </div>
              <div className="flex w-64 justify-between mt-3 mb-5">
                <label className="flex items-center text-xs">
                  <input type="checkbox" name="remember" className="mr-1" />
                  Remember me
                </label>
                <Link href="#">
                  <p className="text-xs">Forgot Password?</p>
                </Link>
              </div>
              <Link href="#">
                <p className="border-2 border-[#2D3131] rounded-full px-12 py-2 inline-block font-semibold hover:bg-[#2D3131] hover:text-white">
                  Sign In
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="font-bold w-2/5 bg-[#2D3131] rounded-tr-2xl rounded-br-2xl py-36 px-12 ">
          <h2 className="text-3xl font-bold mb-2">Hello, Friend</h2>
          <div className="border-2 w-10 border-white inline-block mb-2"></div>
          <p className="mb-10">
            Fill up personal information and start jouney with us.
          </p>
          <Link href="/register">
            <p className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-[#2D3131]">
              Sign Up
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
