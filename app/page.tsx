'use client'

import Image from "next/image";
import Link from "next/link";
import car from "./images/2018_A3_2018.webp"
import car2 from "./images/2018_audi_a3.avif"
import car3 from "./images/honda.jpg"
import car5 from "./images/gle.png"
import totslogo from './images/toyots.png'
import tes from './images/tesla (1).png'
import aud from './images/Audi.jpeg'
import bmw from './images/BMW.jpeg'
import { FaXTwitter, FaLinkedinIn, FaReddit, FaYoutube, FaInstagram } from "react-icons/fa6";

import { useValue } from "./components/carcontext";



export default function Home() {
  const url1 = 'https://images.thecarconnection.com/lrg/2018-audi-tt-coupe-2-0-tfsi-angular-front-exterior-view_100619922_l.jpg'
  const {value, setValue} = useValue()
  
  return (
    <div className="items-center justify-center  font-sans " >
        <div className=" hidden mt-5 items-center justify-center">
          <h1>Hello Car_Arena</h1>
        </div>

        <div className="grid justify-center font-sans p-10 background">
          <div className="-mt-1">
            <h1  className="-mb-2  font-bold text-[2.2rem] text-[hsl(220,44%,21%)] max-sm:text-[1.5rem] max-sm:mt-5">Discover Your Next Car</h1>
            <p className="text-[.93rem] m-4 text-center text-stone-500">Search by make, model or year</p>
            {/* <div className="flex">
              <input type="text" placeholder="Search for cars..." className="shadow-xl outline-none bg-gray-50 px-[1.4rem] py-[.35rem] mr-2 rounded-sm text-[.8rem] text-gray-700"/>
              <button className="bg-blue-700 px-4 rounded-sm  text-[.8rem] text-white">Search</button>
            </div>  */}
          </div>
       
        
        </div>

        <div className="p-6 bg-white lg:p-10 shadow-2xl ">
          <h2 className="font-semibold md:text-[.9rem] -ml-1  text-[hsl(240,20%,30%)] ">Featured Cars</h2>
          <section className="mt-4 px-5 overflow-x-auto max-sm:pl-70 pl-13 scrol flex gap-10 max-sm:gap-4 lg:gap-10 justify-center">
            <div className=" ">       
              <div className=" shadow-2xl  lg:w-70 grid-item max-sm:w-50 max:smm:h-10 item-4 w-50 h-40 p-3 rounded-md">
                <Image src={car3} alt="featured cars"height={200} width={270} className="shadow-2xl hidden max-md:w-1200 max-sm:h-20 "/>
                <p className=" text-[.8rem] font-bold max-sm:text-[.7rem] text-black  "> 2023 BMW 3 Series </p>
              </div>
             </div>
            <div className="grid-item item-2 lg:w-70 shadow-2xl p-3 w-50 h-40 rounded-md"> 
               <Image src={car3} alt="featured cars" width={270} className=" hidden shadow-2xl max-md:w-1200 max-sm:h-20"/>
              <p className="m text-[.8rem] max-sm:text-[.7rem] font-bold text-black"> 2022 Toyota Camry </p>
            </div>
            <div className="grid-item item-4 shadow-2xl  p-3 w-50 h-40 rounded-md">
               <Image src={car2} alt="featured cars" width={220} height={200} className="h-20 hidden  md:h-40 shadow-2xl max-md:w-1200 "/>
              <p className="mt-2 text-[.8rem] max-sm:text-[.6rem]"> 2023 BMW 3 Series </p>
            </div>
            <div className="bg-white grid-item item-4 lg:flex hidden lg:w-70 w-50 h-40 shadow-2xl p-3 rounded-md ">
               <Image src={car} alt="featured cars" width={420} className="hidden shadow-2xl max-md:w-200 "/>
              <p className="mt-2  text-[.8rem] text-black max-sm:text-[.7rem]"> 2023 BMW 3 Series </p>
            </div>
             <div className="hidden grid-item item-2 xl:block w-50 h-40 lg:w-70 bg-white shadow-2xl p-3 rounded-md">
               <Image src={car2} alt="featured cars" width={220} className="h-40 hidden shadow-2xl"/>
              <p className="mt-2 text-[.8rem] "> 2023 BMW 3 Series </p>
            </div>          

          </section>
        </div>
         <div className="p-5 bg-[hsl(240,20%,90%)]">
            <h1 className="font-semibold text-[hsl(240,20%,30%)] tracking-wide md:text-[.9rem]">Browse by Brand</h1>
            <div className="mt-2 gap-10 overflow-x-auto max-sm:pl-4 pr-10 scrol md:gap-30 flex justify-center items-center bg-white shadow-2xl h-20 rounded-md">
              <Link href={'/car'} className="-mt-1" onClick={()=>setValue("toyota")}>
                <Image src={totslogo} width={58} alt="toyota logo"/>
                <p className="text-red-500 ml-2.5 font-bold mt-2">Toyota</p>   
              </Link>
              <Link href={'/car'} onClick={()=>setValue("bmw")}>
                <Image src={bmw} width={35} alt="bmw logo"/>
                <p className="ml-0.75 font-bold mt-1.5">Bmw</p>   
              </Link>
              <Link href={'/car'} className="-mt-1" onClick={()=>setValue("honezzee")}>
                <Image src={totslogo} width={58} alt="honda logo"/>
                <p className="ml-2 font-bold mt-1.75">Honda</p>   
              </Link>           
              <Link href={'/car'} className="-mt-2" onClick={()=>setValue('tesla')}>
                <Image src={tes} width={50} alt="tesla logo"/>
                <p className="ml-2.5 font-bold">Tesla</p>   
              </Link>
              <Link href={'/car'} className="-mt-2" onClick={()=>setValue("audi")}>
                <Image src={aud} width={58} alt="audi logo" />
                <p className="ml-3.5 font-bold mt-1">Audi</p>   
              </Link> 

            </div>
         </div>
         <div className="p-5 bg-white mb-15 shadow-2xl">
            <h1 className="font-bold text-[1rem]  tracking-wide mb-5 text-[hsl(240,20%,30%)]">Latest Cars</h1>
            <div className="flex justify-center">
            <div className="flex overflow-x-auto pl-13 scrol justify-start text-[.81rem] gap-8">
              <div className="bg-[hsl(240,20%,90%)] slide grid-item item-5 list w-60 h-40 rounded-md -ml-10 p-3">
                <Image src={car5} alt="latest cars" className="hidden " width={200}/>
                <p className="font-bold text-center mt-30 text-stone-100">2024 Honda CR. V</p>
              </div>
              <div className="bg-[hsl(240,20%,90%)] grid-item item-6 slide list w-60 h-40 rounded-md p-3">
                <Image src={car5} alt="latest cars"  className="hidden" width={200}/>
                <p className="mt-1 text-center  font-bold text-stone-700">2024 Honda CR. V</p>
              </div>              
              <div className="bg-gray-200 slide list w-60 h-40 rounded-md  p-2">
                <Image src={car5} alt="latest cars" width={200}/>
                <p className="text-sm">2024 Honda CR. V</p>
              </div>   
              <div className="bg-gray-200 slide list grid-item item-4 w-60 h-40 rounded-md p-2">
                <Image src={car5} alt="latest cars" className="hidden" width={200}/>
                <p className="text-sm font-bold">2024 Honda CR. V</p>
              </div>     
            </div>
            </div>
          </div>

          <div className="grid justify-center  h-80 -mt-10  background2">
            <div className="p-6">
              <h1 className="font-bold  text-[hsl(226,0%,19%)] text-[1.3rem] text-center">Compare Cars Side by Side</h1>
              <p className="text-[.75rem] text-gray-200 mt-3 items-center">Find and compare your favourite cars easily.</p>
              <Link href={'/car/compare'}><button className="text-white rounded-sm mt-5 ml-13 bg-blue-700 w-40  h-9 cursor-pointer">Compare Now</button></Link>
            </div>
 
          </div>
          <div className="p-5 bg-[hsl(240,20%,89%)]  shadow-2xl">
              
              <div className="mt-10 md:flex justify-around ">
                <div className="p-5">
                  <h1 className="text-[1.2rem] font-bold font-mono">Car◓Arena</h1>
                  <div className="mt-7 cursor-pointer flex gap-6">
                    <FaXTwitter size={25} className=" font-light bg-gray-300  rounded-full p-1"/>
                    <FaYoutube size={27} className="-mt- bg-gray-300  rounded-full p-1"/>
                    <FaLinkedinIn size={27} className="-mt- font-light bg-gray-300  rounded-full p-1"/>
                    <FaReddit size={27} className="-mt- font-light bg-gray-300  rounded-full p-1"/>
                    <FaInstagram size={27} className="-mt- font-light bg-gray-300  rounded-full p-1"/>
                  </div>
                </div>

                <div className="grid gap-9 md:-mt-8">
                
                  <div className="flex justify-between lg:gap-39 md:gap-30">
          
                    <div className="px-5">
                      <h1 className="font-[monospace] text-[1rem] mt-8 font-bold mb-3">Platform</h1>
                      <ul>
                        <li>The Engine Room</li>
                        <li>API Documentation</li>
                        <li>Editorial Standards</li>
                        <li></li>
                      </ul>
                    </div>

                    <div className="">
                    <h1 className="font-[monospace] text-[.99rem] mt-8 font-bold mb-4">Data  & Intelligence</h1>
                    <ul className="text-start max-w-40 px-1">
                      <li>Performance Specs: Engine, torque </li>
                      <li>Reliability Index</li>
                      <li>health care</li>
                      <li>All Databases</li>
                    </ul>
                    </div>

             
                </div>

                
                <div className="flex -mt-15 justify-between">
              
                  <div className="px-5 mt-5">
                    <h1 className="font-[monospace] text-[1rem]  font-bold mb-2">Company</h1>
                    <ul>
                      <li>Our Intelligence team</li>
                      <li>Our Methodology</li>
                      <li>News Room</li>
                      {/* <li>Reviews</li> */}
                 
                    </ul>
                  </div>

                  <div className="px-9 mt-5 mb-2 ">
                   <h1 className="font-[monospace] text-[1rem] mt-8 font-bold mb-2">Compare</h1>
                  <ul className="text-start max-w-40 mb-2 px-1">
                      <li>Head-to-head</li>
                      <li>Market Alternatives</li>
                      <li>The Arena Score</li>
                      <li>Trim Level Audit</li>
                  </ul>
                  </div>

                </div>

                 <div className="flex -mt-17 justify-between">
              
                  <div className="p-5 -mt-14">
                    <h1 className="font-[monospace] text-[1rem] mt-8 font-bold mb-3">Connect</h1>
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

                  <div className="px-9 mt-3">
                   <h1 className="font-[monospace] text-[1rem] mt-8 font-bold mb-3">Resources</h1>
                  <ul className="text-start max-w-40 mb-2 px-1">
                    <li>Technical Glossary</li>
                    <li>Community Forums</li>
                    <li>Platform Status</li>
                    <li></li>
                  </ul>
                  </div>

                </div>

              </div>
        
        
            </div>

              

            
            <p className="m text-center mt-20 text-[.8rem] text-[hsl(240,20%,40%)]">© 2026 Car Arena.  All rights reserved</p>
          </div>
    </div>
  );
}
