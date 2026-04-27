'use client'
import Image from "next/image";
import car5 from "../../images/2018_audi_a3.avif"
import v2 from '../../images/2018_s4_interior.webp'
import en from '../../images/2018_S4_engine.webp'
import { FaCar, FaBookmark, FaTape, FaShower, FaCompass} from "react-icons/fa";
import { useValue } from "@/app/components/carcontext";
import useStore from "@/app/components/zustand";
import Footer from "@/app/components/footer";
import { useSingle } from "@/app/components/SingleCarContex";
import Link from "next/link";
import Env from "@/app/Env";

import { useEffect, useState } from "react";

const Page = () => {
  const url = Env()
  const [datas, setDatas] = useState<any>({})
  const { value, setValue} =useValue()
  const {car, setCar} = useSingle()
  const name = useStore((state)=>state.name)
  const setName = useStore((state)=>state.setName)

  const getDetails  = async()=>{
    const response = await fetch(`${url}/cars/spec/${name}`)

    if(!response.ok){
      console.log("why!!!!!!!!")
      setDatas({})
    }
    const das =  await response.json()

    console.log(das)
    setDatas(das)

  }

  useEffect(()=>{
    getDetails()
    console.log(name)
    console.log(value)
    console.log(car)

  },[])


  const initial = ('images' in car)?car.images?.[0] :car5
  const [cars, setCars] = useState(initial)
  const {images} =car as any



  return (
    <div className='bg-[hsl(220,40%,89%)] mt-0.5'>
        <h1 className='hidden min-h-screen items-center justify-center'>Hello Bra</h1>

        <div className="p-4  bg-white">
            
            <h1 className="text-[1rem] mt-3 font-extrabold text-blue-950 ">{!datas?'Toyota Camry':`Tesla Model 3`}</h1>
            <p className="mt-2 text-[.9rem] font-extralight">2.5L 4-Cylinder | 203 HP | Automatic | FWD  </p>
          </div>
        <div className="bg-white lg:flex">
          
           <div className="flex justify-center -mt-6 ">

            <Image src={cars || car5} alt="" width={300} height={300} className=" mt-4 lg:h-80 lg:w-160 xl:h-100 sm:w-200 sm:h-100  rounded-2xl w-full p-3"/>

          </div>
          <div className="flex  p-3 mt-5 text-xl font-serif ">
           <div className="text-blue-800">
            {/* <div className="flex text-[.85rem]"> 
              <FaBookmark className="mt-1 mr-2"/>
              <p className="mb-3"> Add to favourites</p>
            </div>
            <div className="flex text-[.85rem] ml-1">
              <FaShower className=" mr-2 mt-1"/>
              <p className="">Add to compare</p>
            </div> */}
              
           </div>

          <div className="grid justify-center">
            <div className="text-[.78rem] md:text-sm ">
             <Link href="/compare">
             <button className=" text-blue-800 ml-4  bg-white outline-1 cursor-pointer outline-stone-600 shadow-2xl rounded-md  h-8  w-38 max-sm:w-30"><span className="font-bold text-">+</span> Add to compare</button>
             </Link> 
             </div>
            <div className="grid grid-cols-3 gap-3  p-3 justify-center max-sm:mt-4 ">

              <Image src={images?.[0] || car5} alt="" width={90} height={90} className="max-sm: rounded-md sm:w-55 sm:h-30 h-18 max-sm:w-ful" onClick={()=>setCars(images?.[0] || car5)}/>
              <Image src={images?.[1] || v2} alt="" width={80} height={80} className="  rounded-md sm:w-50 h-18 sm:h-30 max-sm:w-ful" onClick={()=>setCars(images?.[1] || v2)}/>

              <Image src={en} alt="" width={80} height={80} className=" mb-4  rounded-md sm:w-50 h-18 sm:h-30 max-sm:w-ful" onClick={()=>setCars(en)}/>
            
            </div>
     
          </div>
        </div>


        </div>

        <section>
           <h1 className="ml-2 mt-6 text-[.95rem] text-center font-extrabold text-blue-950 ">Specifications</h1>
          <div className=" gri mr-8">
           <div className="bg-white p-5 w-full text-stone-650 border-1 border-stone-300 rounded-sm m-3">

            <div className="flex justify-between p-1.5 text-[.85rem]">
              <p className="text">Engine</p>
              <p className="text-">{datas.engine_type}</p>
              <p>2.4L</p>
            </div>
            <hr className=" text-stone-300 "/>
              <div className="flex justify-between p-1.5 text-[.85rem]">
              <p>Horsepower</p>
              <p>{datas.horsepower} Hp @ 6,600</p>

            </div>
            <hr className=" text-stone-300"/>
              <div className="flex justify-between p-1.5 text-[.85rem]">
              <p>Transmission</p>
              <p>{datas.transmmission || "192 Lb-ft @1,700 rpm"}</p>
      
            </div>
            <hr className=" text-stone-300"/>
              <div className="flex justify-between p-1.5 text-[.85rem]">
              <p>Fuel type</p>
              <p>{datas.fuel_type || "Gasoline"}</p>

            </div>
            <hr className=" text-stone-300"/>
              <div className="flex justify-between p-1.5 text-[.85rem]">
              <p className="">Drivetrain</p>
              <p>{datas.drivetrain ||"200 Hp"}</p>
             
            </div>
            <hr className="text-stone-300"/>
            <div className="flex justify-between p-1.5 text-[.85rem]">
              <p>Top speed</p>
              <p>{datas.acceleration} 40mph</p>
           
            </div>
            <hr className="text-stone-300 "/>
            <div className="flex justify-between p-1.5 text-[.85rem]">
              <p>Cargo_volume</p>
              <p>{datas.cargo_volume || "161 cubit feet"} </p>
  
            </div>
            <hr className="text-stone-300 mb-5"/>

           </div>
           </div>
        </section>

        <section className="p-3 bg-white mb-4">
          <h2 className=" font-semibold text-sm mb-4">Descriptions</h2>
          <p className="text-[.74rem] tracking-wide font-sans">
            The 2022 Toyota Carmry SE offers a perfect blend of sportiness and, it's powered by a 2.5L inline-4engine delivering 203 horse power, paired a
            8-Speed automatic transmission. the interior features a 9-inch touchscreen with Apple Car play and Android Auto, leatherette seats, adaptive 
            cruise control, lane departure warning and Blind Spot Monitoring. 
          </p>


          
        </section>

        <section className="mb-20 p-3">
          <div>
            <h1 className="text-[.96rem]">Reviews</h1>
          </div>
          <div>
            <p className="mt-5 bg-blue-500 rounded-full text-white text-xl w-10  py-1.5 text-center  h-10">J</p>
            <p className="p-1 mt-1.75 font-[monospace] text-[.8rem]">solid wheel base good proce range....... </p>
          </div>
        </section>
        
        <Footer/>

    </div>
  )
}

export default Page
