'use client'

import Image from "next/image";
import Link from "next/link";
import car from "./images/2018_A3_2018.webp"
import car2 from "./images/2018_audi_a3.avif"
import car3 from "./images/honda.jpg"
import car5 from "./images/gle.png"
import totslogo from './images/toyots.png'
import aud from './images/Audi.jpeg'
import bmw from './images/BMW.jpeg'
import Footer from "./components/footer";
import { useValue } from "./components/carcontext";
import { SiTesla, SiToyota, SiHonda, SiBmw, SiAudi} from "react-icons/si";


export default function Home() {
  const url1 = 'https://images.thecarconnection.com/lrg/2018-audi-tt-coupe-2-0-tfsi-angular-front-exterior-view_100619922_l.jpg'
  const {value, setValue} = useValue()
  
  return (
    <div className="items-center justify-center font-sans " >
        <div className=" hidden mt-5 items-center justify-center">
          <h1>Hello Car_Arena</h1>
        </div>

        <div className="grid md:flex  justify-center md:justify-around font-sans p-10 background">
          <div className="mt-5">
            <h1  className="-mb-2  font-bold text-[2.2rem] font-serif [-webkit-text-stroke:.7px_white] text-transparent max-sm:text-[1.5rem] max-sm:mt-5">Discover Your Next Car</h1>
            <p className="text-[.93rem] m-4 text-center font-serif text-stone-500">Search by make, model or year</p>
  
            {/* <div className="flex">
              <input type="text" placeholder="Search for cars..." className="shadow-xl outline-none bg-gray-50 px-[1.4rem] py-[.35rem] mr-2 rounded-sm text-[.8rem] text-gray-700"/>
              <button className="bg-blue-700 px-4 rounded-sm  text-[.8rem] text-white">Search</button>
            </div>  */}
          </div>
                 <div className=" hidden ">
              <Image src={car} alt="hero" width={200} className=""/>
            </div>
 
        </div>

 
        <div className="p-6  bg-white lg:p-10 shadow-xl ">
          <h2 className="font-semibold text-[1rem] max-sm:text-[.9rem] -ml-1 mb-8  tracking-wide ">Featured Cars</h2>
              
            <div className="flex xl:justify-center scrol overflow-x-auto overflow-y-hidden mb-4">
            <div className="flex  text-[.81rem] gap-8 xl:gap-20">
              <div className="bg-[hsl(240,20%,90%)] slide grid-item item-4 list w-60 h-40 rounded-md  p-3">

                <Image src={car5} alt="latest cars" className="hidden " width={200}/>
                <p className="font-bold text-center mt-30 text-stone-100">2024 Honda CR. V</p>
              </div>
              <div className="bg-[hsl(240,20%,90%)] grid-item item-2 slide list w-60 h-40 rounded-md p-3">
                <Image src={car5} alt="latest cars"  className="hidden" width={200}/>
                <p className="-mt-1.5 text-start  font-bold text-stone-900">2024 Honda CR. V</p>
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

         <div className="p-5 font-sans">
            <h2 className="font-semibold text-[hsl(240,20%,30%)] tracking-wide text-[.9rem]">Browse by Brand</h2>
            <div className=" gap-15 scrol overflow-x-auto  rounded-md">
              <div className="mt-8 mb-4 gap-15 lg:gap-30 md:gap-20 max-sm:gap-10 md:justify-center flex min-w-0">
                <Link href={'/car'} className="bg-slate-200 py-3.5 px-8" onClick={()=>setValue('Tesla')}>
                  <SiTesla size={25}/>
                  {/* <p className="mt-1 font-bold">Tesla</p>    */}
                </Link>
                <Link href={'/car'} className="bg-slate-200 py-2.5 px-7" onClick={()=>setValue("Toyota")}>
                  <SiToyota size={35}/>
                  {/* <p className="font-bold mt-.5 -ml-.5">Toyota</p>    */}
                </Link>
                <Link href={'/car'} className="bg-slate-200 py-1 px-6.5" onClick={()=>setValue("Audi")}>
                  <SiAudi size={50} className=""/>
                  {/* <p className="ml-3.5 font-bold mt-1">Audi</p>    */}
                </Link> 
                <Link href={'/car'} className="bg-slate-200 py-2.5 px-8" onClick={()=>setValue("Honda")}>
                  <SiHonda size={30}/>
                  {/* <p className="-ml-1 font-bold mt-1">Honda</p>    */}
                </Link>   
                <Link href={'/car'} onClick={()=>setValue("bmw")} className="-mt-1 bg-slate-200 py-3.5 px-8">
                  <SiBmw size={34}/>
                  {/* <p className="ml-0.75 font-bold mt-1">Bmw</p>    */}
                </Link>


              </div>
            </div>
         </div>
         <div className="p-5 bg-white mb-15 shadow-2xl">

            <h2 className="font-semibold text-[1rem] max-sm:text-[.9rem] -ml-1 mb-8  text-[hsl(240,20%,30%)]  tracking-wide">Latest Cars</h2>
            <div className="flex scrol mb-2 overflow-x-auto overflow-y-hidden  xl:justify-center">
            <div className="flex  justify-center text-[.81rem] gap-8 lg:gap-20">
              <div className="bg-[hsl(240,20%,90%)] slide grid-item item-5 list w-60 h-40 rounded-md p-3">

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


  

          <Footer/>

    </div>
  );
}
