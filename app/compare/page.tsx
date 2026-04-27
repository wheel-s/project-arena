'use client'
import Image from "next/image";
import car5 from "../images/gle.png"
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import { info } from "console";
import { useSingle } from "../components/SingleCarContex";
import Env from "../Env";

const Page = () => {

    const url = Env()
    const [modal,setModal] = useState<boolean>(false)
    const [car1, setCar1] = useState<string>('')
    const [ car2, setCar2] = useState<string>('')
    const [car1Data, setCar1Data] =useState<any>({})
    const [car2Data, setCar2Data] = useState<any>({})
    const {car, setCar} = useSingle()

    // const getCar1 = async()=>{

    //     if(car1 ==''){
    //         console.log('nahh mann')
    //         return 'nahhh man '
    //     }

    //     const response = await fetch(`http://127.0.0.1:8000/cars/spec/${car1}`)
    //     if(!response.ok){
    //         const data = response.json()
    //         console.log(data)
    //     }
    //     const data = await response.json()
    //     console.log(data)
    //     setCar1Data(data)
        
    // }

    //     const getCar2 = async()=>{

    //     if(car2 ==''){
    //         console.log('nahh mann')
    //         return 'nahhh man '
    //     }
    //     const response = await fetch(`http://127.0.0.1:8000/cars/spec/${car2}`)
    //     if(!response.ok){
    //         const data = response.json()
    //         console.log(data)
    //     }
    //     const data = await response.json()
    //     console.log(data)
    //     setCar2Data(data)
        
    // }

    const [browse, setbrowse] = useState<any[]>()
    const [int, setint] = useState<number>(1)
    const browser = async(car:any)=>{
        console.log(car)
        const response = await fetch(`${url}/cars/search/${car}`)
        if(!response.ok){
            const data = response.json()
            console.log(data)
        }
        const data = await response.json()
        console.log(data)
        setbrowse(data)
        
    }

   const  get_sepcs = async(car:any)=>{
        if(car ==''){
            console.log('nahh mann')
            return 'nahhh man '
        }
       

        const response = await fetch(`${url}/cars/spec/${car}`)
        if(!response.ok){
            const data = response.json()
            console.log(data)

        }
        const data = await response.json()
    
        console.log(data)
        if(int ==1){
            console.log("hey")
            setCar1Data(data)
            console.log(car1Data)
        }
        if(int==2){
            console.log('hello')
            setCar2Data(data)
            console.log(car2Data)
        } 
        setCar1('')
        setCar2('')
        
      
           
    }
  
    

    const [info1, setinfo1] = useState<any>({})
    const [info2, setinfo2] = useState<any>({})

    const setInfo = (item:any)=>{
        if(int == 1){
            setinfo1(item)
            console.log(item)

        }
        if(int == 2){
            setinfo2(item)
        }
    }

    useEffect(()=>{
        setint(1)
        if(('model' in car)){
         
            setinfo1(car)
            get_sepcs(car.model)
         
        }

    },[])


    
    


  return (
    <div>

      <section>
        <div className="grid justify-center p-10 background3">
            <div className="-mt-1 text-center grid justify-items-center">
            <h1  className=" text-[1.8rem] text-[#1e2e4d]">Compare Cars Side by Side</h1>
            <p className="text-stone-600">Compare 2022 Toyota Camry SE vs Honda Accord Sport</p>
            </div>    
        </div>
        <p className=' text-[.86rem]  ml-3 -mt-8 mb-4'>Home / Cars</p>

      </section>
      
      <section className="bg-[hsl(220,40%,89%)] hidden -mt-1 p-5">
        <div className="flex  ">
            <input type="text" placeholder="Search for cars..." className="shadow-xl max-xl:w-full outline-none bg-gray-50  py-2 p-2 min-w-[60%] mr-2 lg:min-w-[80%] rounded-sm text-[.8rem] text-gray-700"/>
            <button className="bg-blue-700 px-4 rounded-sm  text-[.8rem] text-white" 
            >
                Search</button>
        </div>
        </section> 

        <section className="bg-[hsl(220,40%,89%)] mb-5 p-2 sm:p-8 flex">

    
        <p className="mb-5 bg-white w-full hidden -mt-2 p-2 py-3 ">Filter</p>
        <main className="max-xl:hidden">
            

            <h1 className=" ml-1 w-40">Make</h1> 
            <div className='bg-white mt-1 w-45 mr-6 p-2 px-4 rounded-sm'>
                
                <div className='mt-3 flex'>
                    <input type="checkbox"/>
                    <p className='ml-2'>All Makes</p>
                </div>

                <hr className='shadow-xl text-stone-400 mt-2'/>

                <div className='mt-3 flex'>
                    <input type="checkbox"/>
                    <p className='ml-2'>Toyota</p>
                </div>

                <div className='mt-3 flex'>
                    <input type="checkbox"/>
                    <p className='ml-2'>Honoda</p>
                </div>

                <div className='mt-3 flex'>
                    <input type="checkbox"/>
                    <p className='ml-2'>Audi</p>
                </div>

                <div className='mt-3 flex'>
                    <input type="checkbox"/>
                    <p className='ml-2'>Tesla</p>
                </div>
                <hr className='shadow-xl text-stone-400 mt-2'/>
                <div className='mt-4' id='year'>
                    <h1>Engine</h1>
                    <hr className='mt-2 text-stone-400'/>
                    <hr className='mt-2'/>
                    <div className='flex mt-3'>
                      <input type="checkbox"/>
                        <p className='ml-2'>2.5L4d.</p>   
                    </div>
                    <div className='flex mt-3'>
                        <input type="checkbox"/>
                        <p className='ml-2'>2.5L4d.</p>   
                    </div>

                </div>
                <hr className='mt-3 text-stone-400' id="Body_Type"/>
                <div className='mt-4'>
                    <h1 className='font-semibold'>Transmission</h1>
                    <div className='flex mt-3'>
                        <input type="checkbox"/>
                        <p className='ml-2'>CVT</p>
                    </div>
                </div>
                <hr  className="mt-4 text-stone-400"/>
                <div id="Fuel_Type">
                    <h1 className="font-semibold mt-3">Fuel Type</h1>
                    <div className='flex mt-3'>
                        <input type="checkbox"/>
                        <p className='ml-2'>Gasoline</p>
                    </div>
                    <div className='flex mt-3'>
                        <input type="checkbox"/>
                        <p className='ml-2'>Hybrid</p>
                    </div>
                    <div className='flex mt-3'>
                        <input type="checkbox"/>
                        <p className='ml-2'>Electric</p>
                    </div>
                </div>
    
            </div>
             <button className="p-2 mt-4 bg-gray-200">Start Over</button>
             <div className="bg-white rounded-md h-33 w-45 mt-3">
                
             </div>
        </main>

        <div className=' w-full  mt-10'>
            
            <div className="bg-blue- max-sm:p-5 max-sm:-mt-12  max-md:gri max-md:justify-center -mt-14 -ml-2 flex justify-between  w-[101.2%] ">
               <input className="ring-[.1px] shadow-2xl bg-[hsl(220,40%,99%)] rounded-sm outline-none ring-stone-900 font-bold text-gray-600 text-[.85rem] px-6  w-full  py-1" placeholder="toyota camry" 
                  onClick={()=>{
                    setModal(true)
                    setint(1)
                }} value={car1} 
                  onChange={(e)=>{
                    setCar1(e.target.value)
                    browser(e.target.value)
                }}
                />
               <p className="mx-2 text-[.9rem] max-md:my-2 mt-2">vs</p>
               <input className="ring-[.1px] shadow-2xl bg-[hsl(220,40%,99%)] rounded-sm outline-none ring-stone-700 font-semibold text-[.85rem] text-stone-600 w-full px-6 py-1 sm:py-2" placeholder="audi S4" 
                    onClick={()=>{
                        setint(2)
                        setModal(true)
                    }} 
                    value={car2} 
                    onChange={(e)=>{
                        setCar2(e.target.value)
                        browser(e.target.value)
                    }}
                />
            </div>
            {/* <div className="bg-white h-60 w-40 fixed">

            </div> */}
            {
            modal &&
            <div className="flex justify-center ">
                <div className="bg-white overflow-auto scrol md:h-70 lg:h-80 h-60 mt-4 md:w-100 lg:w-140 xl:w-160 shadow-2xl ring-1 ring-stone-400 w-60 rounded-md fixed" onClick={()=>setModal(false)}> 
                    
                {browse ?
                    browse.map((item)=>{
                        return(
                            <div key={item.id} className="mt-6 px-3 mb-3 flex gap-3 cursor-pointer" 
                            onClick={()=>{
                                // console.log(item)
                                setInfo(item)
                                
                                setModal(false)
                                get_sepcs(item.model)

                                
                            }}>
                            <Image src={item.images?.[0]||car5}width={70} height={70} alt="select modal" className="bg-gray-200 rounded-lg p-1"/> 
                            <p className="mt-5 font-bold text-sm">{item.unique_name}</p>  
                            </div>
                        )
                    }):
                    <>
                    <div className=" px-3 mt-6 flex gap-3 cursor-pointer" onClick={()=>setModal(false)}>
                     <Image src={car5}width={70} alt="select modal" className="bg-gray-200 rounded-lg p-1"/> 
                     <p className="mt-5 font-bold text-sm">Camry_2022</p>   
                    </div>
                    <div className=" px-3 mt-4 flex gap-3 cursor-pointer" onClick={()=>setModal(false)}>
                     <Image src={car5}width={70} alt="select modal" className="bg-gray-200 rounded-lg p-1"/> 
                     <p className="mt-5 font-bold text-sm">Camry_2022</p>   
                    </div>
                    </>
                    


                }

                              
   

                </div>
            </div>
            }
            <button className="bg-blue-800 sm:mt-4 tracking-wide px-4 rounded-sm py-2 w-full text-[.8rem] text-white" 
                // getCar1()
                // getCar2()
           >Search</button>


        <div className='bg-white w-full  mt-8 mb-8'>
            <div className="flex justify-around  p-1  gap-x-2.5">
                <div className="bg-gray-20 p-2 " >
                    <Image src={info1.images?.[0] || car5} alt="latest cars" width={190} height={190} className="rounded-md sm:mt-2 md:w-60 lg:w-80 lg:h-45"/>
                    <p className="mt-2 max-sm:ml-2 font-bold text-[.8rem] max-sm:text-[.75rem] mb-0.5">{ info1.unique_name || '2022 Toyota Camry'} </p>
                    <p className="max-sm:ml-2 max-sm:text-[.7rem]">$ {car1Data.price_range}</p>
                </div>

                <div className="bg-gray-20 p-2 " >
                    <Image src={info2.images?.[0] || car5} alt="latest cars" width={190} height={190} className="rounded-md sm:mt-2 md:w-60 lg:w-80 lg:h-45"/>
                    <p className="mt-2 max-sm:ml-2 font-bold text-[.8rem] max-sm:text-[.75rem] mb-0.5">{ info2.unique_name || '2022 Toyota Camry'} </p>
                    <p className="max-sm:ml-2 max-sm:text-[.7rem]">$ {car2Data.price_range}</p>
                </div>
            </div>

            <div className="flex  mt-1 bg-[hsl(220,40%,89%)] p-2">
             <p className="font-bold text-[.92rem] font-serif mt-4 text-red-600">Engine</p>
                
            </div>
            
            <section className=" justify-around">
                <p className="mt-3 ml-3 font-bold text-red- font-serif ">Engine_type</p>
                <div className=" flex justify-between w-full p-3">
                    <p>{car1Data.engine_type || "Engine 2.5L inline4"} </p>
                      <p>{car2Data.engine_type ||"HorsePower  203 Hp  @ "}</p>
                 
                    {/* <p>28 MPG City / 399 </p> */}
                  
                
                </div>
                <div className="">
                    <hr className="w- text-stone-300 ml"/>
                </div>
         
                <p className="mt-3 ml-3 font-bold text-red- font-serif ">Cylinders & displacement</p>
                
                <div className="w-full flex justify-between p-3">
                     <p className="">{ car1Data.engine_displacement_cylinders ||"8- Speed Automatic"}</p>
                    <p  className="">{car2Data.engine_displacement_cylinders || "CVT"}</p>
                    {/* <p className="">30 MPG City / 33  MPG</p> */}
                     
                </div>
                
            </section>

            <div className="flex   bg-[#d8dfee] p-2">
                <p className="font-bold text-[.92rem] font-serif mt-4 text-red-600">Performance</p>

            </div>
                <section>
                    <p className="mt-3 ml-3 font-bold text-red- font-serif ">Transmission</p>
                <div className="flex justify-between p-3">
                    <p>{car1Data.transmmission || "automatic"}</p>
                    <p>{car2Data.transmmission || "28 MPG City / 399 Hwy"}</p>
                </div>
                <hr className="text-stone-300"/>
                <p className="mt-3 ml-3 font-bold text-red- font-serif ">Torque</p>
                <div className="flex justify-between p-3">
                    <p>{car1Data.torgue}</p>
                    <p>{car2Data.torgue}</p>
                  
                </div>
                <hr className="text-stone-300 -mt-2"/>
                <p className="mt-3 ml-3 font-semibold text-red- font-serif ">acceleration_0_60_mph</p>
                <div className="flex justify-between p-3">
                    <p>{`${car1Data.acceleration}s` || '5s'}</p>
                    <p>{`${car2Data.acceleration}s` || '2.7s'}</p>
                   
                </div>
                 <hr className="text-stone-300"/>
                  <p className="mt-3 ml-3 font-bold text-red- font-serif ">Drive Train</p>
                <div className="flex justify-between p-3">
                    <p>{car1Data.drivetrain}</p>
                    <p>{car2Data.drivetrain}</p>
                  
                </div>
                <hr className="text-stone-300"/>
                <p className="mt-3 ml-3 font-bold text-red- font-serif ">Horsepower</p>
                <div className="flex justify-between p-3">
                    <p>{car1Data.horsepower || 400}</p>
                    <p>{car2Data.horsepower|| 500}</p>
                  
                </div>
            </section>
            <div className="flex  mt-1 bg-[hsl(220,40%,89%)] p-2">
                <p className="font-bold text-[.92rem] font-serif mt-4 text-red-600">Body</p>
            </div>
            <section>
                  <p className="mt-3 ml-3 font-semibold text-red- font-serif ">Seats</p>
                <div className="flex justify-between p-3">
                    <p>{car1Data.seats || 2}</p>
                    <p>{car2Data.seats || 4}</p>
                 
                </div>
                <hr className="text-stone-300 -mt-2"/>
                <p className="mt-3 ml-3 font-semibold text-red- font-serif ">Doors</p>
                <div className="flex justify-between p-3">
                    <p>{car1Data.doors || 4}</p>
                    <p>{car2Data.doors || 2}</p>
                   
                </div>
                <hr className="text-stone-300 -mt-2"/>
                <p className="mt-3 ml-3 font-semibold text-red- font-serif ">Cargo_volume</p>
                <div className="flex justify-between p-3">
                    <p>{car1Data.cargo_volume ||10}</p>
                    <p>{car2Data.cargo_volume || 12.2}</p>
                   
                </div>
                 <hr className="text-stone-300 -mt-2"/>
                <p className="mt-3 ml-3 font-semibold text-red- font-serif ">Height</p>
                <div className="flex justify-between p-3">
                    <p>{ car1Data.HWL ? car1Data.HWL.split(',')[0]:20}</p>
                    <p>{ car2Data.HWL ? car1Data.HWL.split(',')[0]:40}</p>
                </div>

                <hr className="text-stone-300 -mt-2"/>
                <p className="mt-3 ml-3 font-semibold text-red- font-serif ">Weight</p>
                <div className="flex justify-between p-3">
                    <p>{ car1Data.HWL ? car1Data.HWL.split(',')[1]:60}</p>
                    <p>{ car2Data.HWL ? car1Data.HWL.split(',')[1]:70}</p>
                </div>
                                 <hr className="text-stone-300 -mt-2"/>
                <p className="mt-3 ml-3 font-semibold text-red- font-serif ">Wheel-base</p>
                <div className="flex justify-between p-3">
                    <p>{ car1Data.wheel_base || 80}</p>
                    <p>{ car2Data.wheel_base || 110}</p>
                </div>
            </section>

            <div className="flex  mt-1 bg-[hsl(220,40%,89%)] p-2">
             <p className="font-bold text-[.92rem] font-serif mt-4 text-red-600">Fuel_Economy</p>
                
            </div>
            
            <section className=" justify-around">
                <p className="mt-3 ml-3 font-bold text-red- font-serif ">Fuel_type</p>
                <div className=" flex justify-between w-full p-3">
                    <p>{car1Data.fuel_type || "Ev"} </p>
                      <p>{car2Data.fuel_type ||"Ev"}</p>
                 
                    {/* <p>28 MPG City / 399 </p> */}
                  
                
                </div>
                <div className="">
                    <hr className="w- text-stone-300 ml"/>
                </div>
         
                <p className="mt-3 ml-3 font-bold text-red- font-serif ">mpg</p>
                
                <div className="w-full flex justify-between p-3">
                     <p className="">{ car1Data.mpg_tanksize ? car1Data.mpg_tanksize.split(',')[0]:14}</p>
                     <p  className="">{ car2Data.mpg_tanksize ? car2Data.mpg_tanksize.split(',')[0]:27}</p>
                    {/* <p className="">30 MPG City / 33  MPG</p> */}
                     
                </div>

                <hr className="w- text-stone-300 ml"/>       
                <p className="mt-3 ml-3 font-bold text-red- font-serif ">tank_size</p>
                <div className="w-full flex justify-between p-3">
                    <p className="">{ car1Data.mpg_tanksize ? car1Data.mpg_tanksize.split(',')[1]:13.5}</p>
                    <p  className="">{ car2Data.mpg_tanksize ? car2Data.mpg_tanksize.split(',')[1]:15}</p>
                    {/* <p className="">30 MPG City / 33  MPG</p> */}
                     
                </div>
                
                
            </section>
        </div>
         </div>

      </section>
      <Footer />
    </div>
  )
}

export default Page
