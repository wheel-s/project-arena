'use client'
import Image from "next/image";
import car5 from "../../images/gle.png"
import { FaCar, FaBookmark, FaTape, FaShower, FaCompass} from "react-icons/fa";
import { useValue } from "@/app/components/carcontext";
import useStore from "@/app/components/zustand";

import { useEffect, useState } from "react";

const Page = () => {

  const [datas, setDatas] = useState<any>({})
  const { value, setValue} =useValue()
  const name = useStore((state)=>state.name)
  const setName = useStore((state)=>state.setName)

  const getDetails  = async()=>{
    const response = await fetch(`http://127.0.0.1:8000/cars/model/${name}`)

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


  },[])






  return (
    <div className='bg-[hsl(220,40%,94%)] h-full'>
        <h1 className='hidden min-h-screen items-center justify-center'>Hello Bra</h1>

        <div className="flex p-9 ">
            <FaCar size={25} className=""/>
            <h1 className="ml-3 text-[1rem] font-extrabold text-blue-950 ">{!datas?'Toyota Camry':`${name}`}</h1>
          </div>
        <div className="bg-white">
          
          <div className="flex justify-center ">
            <Image src={car5} alt="" width={400} className=""/>
          </div>
          <div className="flex justify-between p-5 mt-5 text-xl font-serif ">
           <div className="text-blue-800">
            <div className="flex text-[.85rem]"> 
              <FaBookmark className="mt-1 mr-2"/>
              <p className="mb-3"> Add to favourites</p>
            </div>
            <div className="flex text-[.85rem] ml-1">
              <FaShower className=" mr-2 mt-1"/>
              <p className="">Add to compare</p>
            </div>
              
           </div>
           <div className="text-[.85rem]">
             <input type="text" className="outline-1 p-1.5 mr-  text-gray-800 px-4" placeholder="Add to compare"/>
             <button className="text-white bg-blue-900 p-2 font-monospace text-2xl ring-2 ring-gray-600">+</button>
            </div>
          </div>
        </div>

        <section>
           <h1 className="ml-2 p-5 text-[.95rem] text-center font-extrabold text-blue-950 ">EngFred Cars</h1>
           <div className="bg-white">

            <div className="flex justify-between p-4 text-[.85rem]">
              <p className="text">Engine</p>
              <p className="text-">{datas.engine_type}</p>
              <p>203 HP</p>
            </div>
            <hr className=" text-stone-400 "/>
              <div className="flex justify-between p-4 text-[.85rem]">
              <p>Horsepower</p>
              <p>{datas.horsepower} Hp @ 6,600</p>
              <p>193 Hp @ 6,600 rpm</p>
            </div>
            <hr className=" text-stone-400"/>
              <div className="flex justify-between p-4 text-[.85rem]">
              <p>Transmission</p>
              <p>{datas.transmmission}</p>
              <p>192 Lb-ft @ 1,700 rpm</p>
            </div>
            <hr className=" text-stone-400"/>
              <div className="flex justify-between p-4 text-[.85rem]">
              <p>Fuel type</p>
              <p>{datas.fuel_type}</p>
              <p>Gasoline</p>
            </div>
            <hr className=" text-stone-400"/>
              <div className="flex justify-between p-4 text-[.85rem]">
              <p className="">Drivetrain</p>
              <p>{datas.drivetrain}</p>
              <p>203 HP</p>
            </div>
            <hr className="text-stone-400"/>
            <div className="flex justify-between p-4 text-[.85rem]">
              <p>Top speed</p>
              <p>{datas.acceleration} mph</p>
              <p>161 cubit feet</p>
            </div>
            <hr className="text-stone-400 mb-5"/>
            <div className="flex justify-between p-4 text-[.85rem]">
              <p>Cargo_volume</p>
              <p>{datas.cargo_volume} </p>
              <p>161 cubit feet</p>
            </div>
            <hr className="text-stone-400 mb-5"/>

           </div>
        </section>

        <section className="mb-7 p-3">
          <div>
            <h1 className="text-[.96rem]">Reviews</h1>
          </div>
          <div>
            <p className="mt-5 bg-blue-500 rounded-full text-white text-xl w-10  py-1.5 text-center  h-10">J</p>
            <p className="p-1 mt-1.75 font-[monospace] text-[.8rem]">solid wheel base good proce range....... </p>
          </div>
        </section>

    </div>
  )
}

export default Page
