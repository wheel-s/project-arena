import React from 'react'
import { FaXTwitter, FaLinkedinIn, FaReddit, FaYoutube, FaInstagram } from "react-icons/fa6";
import Link from 'next/link';
const Footer = () => {
  return (
    <div>
      
          <div className="grid justify-center  h-80 -mt-14  background2">
            <div className="p-6">
              <h1 className="font-bold  text-[hsl(226,0%,19%)] text-[1.3rem] text-center">Compare Cars Side by Side</h1>
              <p className="text-[.75rem] text-gray-200 mt-3 items-center">Find and compare your favourite cars easily.</p>
              <Link href={'/compare'}><button className="text-white rounded-sm mt-5 ml-13 bg-blue-700 w-40  h-9 cursor-pointer">Compare Now</button></Link>
            </div>
 
          </div>
          <div className="p-5 bg-[hsl(240,20%,93%)]  shadow-2xl">
              
              <div className="mt-10 md:flex justify-around ">
                <div className="">
                  <h1 className="text-[1.1rem] font-bold tracking-wider ml-1 font-serif">AutoFocus</h1>
                  <div className="mt-7 cursor-pointer flex gap-3">
                    <FaXTwitter size={22} className=" font-light text-black bg-gray-100  rounded-full p-1"/>
                    <FaYoutube size={24} className="-mt- bg-gray-100 text-red-600 rounded-full p-1"/>
                    <FaInstagram size={24} className="-mt- font-light  bg-gray-100 text-pink-70 rounded-full p-1"/>
                    <FaLinkedinIn size={24} className="-mt- text-cyan-90 font-light bg-gray-100  rounded-full p-1"/>
                    <FaReddit size={24} className="-mt- font-light bg-gray-100 text-amber-800 rounded-full p-1"/>

                  </div>
                </div>

                <div className="grid gap-9 md:-mt-8">
                
                  <div className="flex justify-between lg:gap-39 md:gap-30">
          
                    <div className="">
                      <h1 className="font-sans tracking-wide text-[.8rem] mt-8 font-bold mb-3">Platform</h1>
                      <ul>
                        <li>The Engine Room</li>
                        <li>API Documentation</li>
                        <li>Editorial Standards</li>
                        <li></li>
                      </ul>
                    </div>

                    <div className="px-1">
                    <h1 className="tracking-wide text-[.8rem] -mr-2  mt-8 font-semibold text-end mb-4">Data  & Intelligence</h1>
                    <ul className="text-start max-w-40 px-1">
                      <li>Performance Specs</li>
                      <li>Reliability Index</li>
                      <li>health care</li>
                      <li>All Databases</li>
                    </ul>
                    </div>

             
                </div>

                
                <div className="flex -mt-15 justify-between">
              
                  <div className=" mt-5">
                    <h1 className="tracking-wide text-[.8rem]  font-bold mb-2">Company</h1>
                    <ul>
                      <li>Our Intelligence team</li>
                      <li>Our Methodology</li>
                      <li>News Room</li>
                      {/* <li>Reviews</li> */}
                 
                    </ul>
                  </div>

                  <div className="px-3.5 mt-5 mb-2 ">
                   <h1 className="tracking-wide text-[.8rem] ml-1 mt-8 font-bold mb-2">Compare</h1>
                  <ul className="text-start max-w-40 mb-2 px-1.5">
                      <li>Head-to-head</li>
                      <li>Market Alternatives</li>
                      <li>The Arena Score</li>
                      <li>Trim Level Audit</li>
                  </ul>
                  </div>

                </div>

                 <div className="flex -mt-17 justify-between">
              
                  <div className="-mt-14">
                    <h1 className="tracking-wide text-[.8rem] mt-8 font-bold mb-3">Connect</h1>
                    <ul>
                      <li>The Pit Stop</li>
                      <li>Research Inquires</li>
                      <li>Media kit</li>
                      <li>Manufacturer Outreach</li>
                      <li>Industry Solutions</li>
                      <li>Brand Solutions</li>
                      {/* <li>Corporate Inquiry</li>                      */}
                      <li></li>
                    </ul>
                  </div>

                  <div className="px-4.5 mt-3">
                   <h1 className="tracking-wide text-[.8rem] mt-8 font-bold mb-3">Resources</h1>
                  <ul className="text-start max-w-40 mb-2 px-0.5">
                    <li>Technical Glossary</li>
                    <li>Community Forums</li>
                    <li>Platform Status</li>
                    <li></li>
                  </ul>
                  </div>

                </div>

              </div>
        
        
            </div>

              

            
            <p className="m text-center mt-20 text-[.8rem] text-[hsl(240,0%,60%)]">© 2026 Car Arena.  All rights reserved</p>
          </div>
    </div>
  )
}

export default Footer
