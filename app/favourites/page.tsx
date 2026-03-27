'use client'
import Image from "next/image"
import car5 from '../images/gle.png'
import { FaBookmark,FaArrowLeft } from "react-icons/fa"
import Footer from "../components/footer"
import Link from "next/link"
import { useState, useEffect } from "react"



const Page = () => {

  const [favourites, setFavourites] = useState<any[]>()

  useEffect(()=>{
    const getFav = async()=>{
      const response = await fetch('http://127.0.0.1:8000/favourites')
      if(!response.ok){
        const data = await response.json()
        console.log(data)
      }
      const data = await response.json()
      console.log(data)
      setFavourites(data)
    }

    getFav()

  },[])





  return (

    <div className="mb-10 bg-[hsl(240,10%,99%)] ">



            <div className="grid justify-center p-10 background3">
                <div className="-mt-1 text-center grid justify-items-center">
                    <h1  className=" text-[1.8rem] text-[#1e2e4d]">Your Favourite cars</h1>
                    <p className="text-stone-600">Browse a wide collection of cars from 2018 and newer</p>
            
                </div>
                
            </div>
            <p className=' text-[.86rem]  ml-3 -mt-8 mb-8' >Home / Cars</p>



    

{/* 
      <div className= 'p-5 mb-10'>
        <h1 className="text-[1.1rem] text-violet-800 font-semibold">Your favourites</h1>
      </div> 
*/}

            <div className='p-5 -mt-1 bg-[hsl(240,10%,90%)] mb-13'>
                  <div className='mb-5 '>
                    <Link href={'/car/detail'}> <h1 className='-mb-8 text-[1.2rem]' >Filter</h1></Link>
                    <div className="flex ml-69 lg:ml-79">
                        <input type="text" placeholder="Search for cars..." className="shadow-xl outline-none bg-gray-50  py-2 p-2 min-w-[60%] mr-2 lg:min-w-[80%] rounded-sm text-[.8rem] text-gray-700"/>
                        <button className="bg-blue-700 px-4 rounded-sm  text-[.8rem] text-white">Search</button>
                    </div> 
              </div>
            </div>

      <section className="flex justify-center">
      <div className="grid justify-center gap-x-5 lg:grid-cols-3 lg:80 md:gap-x-20 gap-y-6 grid-cols-2">
        <div className="bg-gray-400 rounded-sm mb-3 p-4">
          <div className="flex justify-end">
               <FaBookmark size={15} className="text-white cursor-pointer"/>
          </div>
     
            <Image src={car5} alt="latest cars" width={240}/>
            <div className="flex justify-between">
              <p className="text-[.68rem] font-bold mb-1 mt-1.5">2024 Honda Accord Sport</p>
              <p className="mt-1.5 font-bold">price: $56,400</p>
         </div>
           <div className="flex justify-end mt-2">
            <button className="text-[.rem] bg-white  px-4.75 py-1.75 font-semibold rounded">
              <div className="flex justify-between">
              <p className="mr-2">Compare</p>
             
              </div> 
              </button>
              <div className=" bg-blue-80 rounded-sm flex justify-center">
                  <FaArrowLeft className="rotate-180 mt-2.5 ml-2 text-md mp=-2 text-white"/>
            </div>

              </div>
               

        </div>
        <div className="bg-gray-400 mb-3 p-6  rounded-sm">
          <div className="flex justify-end">
               <FaBookmark size={15} className="text-blue-600 cursor-pointer"/>
          </div>
            <Image src={car5} alt="latest cars" width={240}/>
            <div className="flex justify-between">
              <p className="text-[.68rem] font-bold mb-1 mt-1.5">2024 Honda Accord Sport</p>
              <p className="mt-1.5 font-bold">price: $56,400</p>
           </div>
           <div className="flex justify-end mt-2"><button className="text-[.8rem] bg-amber-700 text-white px-3.75 py-1.75 font-semibold rounded-md">Compare</button></div>


        </div>
        <div className="bg-gray-400 mb-3 p-6  rounded-sm">
          <div className="flex justify-end">
               <FaBookmark size={15} className="text-white cursor-pointer " />
          </div>
            <Image src={car5} alt="latest cars" width={240}/>
          <div className="flex justify-between">
              <p className="text-[.68rem] font-bold mb-1 mt-1.5">2024 Honda Accord Sport</p>
              <p className="mt-1.5 font-bold">price: $56,400</p>
          </div>
           <div className="flex justify-end mt-2"><button className="text-[.8rem] bg-amber-700 text-white px-3.75 py-1.75 font-semibold rounded-md">Compare</button></div>


        </div>
          <div className="bg-gray-400 mb-3 p-6 rounded-sm">
            <div className="flex justify-end">
               <FaBookmark size={15} className="text-blue-600 cursor-pointer"/>
            </div>
            <Image src={car5} alt="latest cars" width={240}/>
            <div className="flex justify-between">
              <p className="text-[.68rem] font-bold mb-1 mt-1.5">2024 Honda Accord Sport</p>
              <p className="mt-1.5 font-bold">price: $56,400</p>
            </div>
            <div className="flex justify-end mt-2">
              <button className="text-[.8rem] bg-white px-3.75 py-1.75 font-semibold rounded-md">Compare</button>
                <div className=" bg-blue-80 rounded-sm flex justify-center">
                  <FaArrowLeft className="rotate-180 mt-2.5 ml-2 text-md mp=-2 text-white"/>
                </div>  
            </div>
      

        </div>

        </div>
      </section>

      <section className="bg-[hsl(240,10%,90%)] mb-18 mt-8">

        <div className="p-10 gap-2 flex">
          <p className=" text-[1.05rem] text-white font-bold  bg-blue-800 rounded-full h-9 w-9 p-1.75 px-[12px] ">3</p>
          <h1 className=" text-[1.05rem] mt-1">Cars You Might Like</h1>
        </div>



        <div className="grid mt-5">
        <div className="flex gap-20 lg:30 -mt-15 justify-between px-15">

        <div className="bg-gray-20 p-2">
            <Image src={car5} alt="latest cars" width={230}/>
            <p className="text-[.7rem] font-bold mb-1">2024 Honda Accord Sport</p>
            <p className="mb-8">1.5L Turbo Inline-4, 192 2.33 MPG</p>
        </div> 
      
      
        <div className="bg-gray-20 p-2">
            <Image src={car5} alt="latest cars" width={230}/>
            <p className="text-sm font-bold mb-1">2024 Honda Accord Sport</p>
            <p className="mb-8">1.5L Turbo Inline-4, 192 2.33 MPG</p>
        </div> 
        
        <div className="bg-gray-20 p-2">
            <Image src={car5} alt="latest cars" width={230}/>
            <p className="text-sm font-bold mb-1">2024 Honda Accord Sport</p>
            <p className="mb-8">1.5L Turbo Inline-4, 192 2.33 MPG</p>
        </div> 

        </div>
        </div>

      </section>

      <Footer></Footer>
    </div>
  )
}

export default Page
