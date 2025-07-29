import React from "react";
import banner from '/Banner.jpg'

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row ">
        <div className="left w-full md:w-1/2 order-2 md:order-1 my-14    ">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold mt-12 md:mt-32">
              Hello, welcome here to learn something{" "}
              <span className="text-blue-900"> new everyday!!!</span>
            </h1>
            <p className=" font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              temporibus, eligendi odit asperiores, eos, fugit eius commodi
              debitis saepe eveniet hic repellendus a laboriosam? Voluptate
              natus nesciunt enim expedita dolorum!
            </p>
            <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="mail@site.com" required />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>
            <button className="btn  bg-blue-700 mb-12 ml-9 hover:bg-blue-900 hover:rounded-full transition-all duration-300">Get Started</button>
          </div>
        </div>
        <div className="w-full md:w-1/2  order-1 my-30">
           <img src={banner} alt="" />
        </div>
      </div>
    </>
  )
}

export default Banner;
