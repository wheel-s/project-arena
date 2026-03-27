'use client'
import Image from "next/image";
import car5 from "../images/gle.png"
import Footer from "../components/footer";
import { useState } from "react";


const Page = () => {

    const [car1, setCar1] = useState<string>()
    const [ car2, setCar2] = useState<string>()
    const [car1Data, setCar1Data] =useState<any[]>()
    const [car2Data, setCar2Data] = useState<any[]>()

    const getCar1 = async()=>{

        const response = await fetch(`http://127.0.0.1:8000/cars/${car1}`)
        if(!response.ok){
            const data = response.json()
            console.log(data)
        }
        const data = await response.json()
        console.log(data)
        setCar1Data(data)
        
    }

    const getCar2 = async()=>{

        const response = await fetch(`http://127.0.0.1:8000/cars/${car2}`)
        if(!response.ok){
            const data = response.json()
            console.log(data)
        }
        const data = await response.json()
        console.log(data)
        setCar2Data(data)
        
    }

    

    
    


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
      
      <section className="bg-[hsl(220,40%,89%)] -mt-1 p-5">
        <div className="flex ml-39 lg:ml-40">
            <input type="text" placeholder="Search for cars..." className="shadow-xl outline-none bg-gray-50  py-2 p-2 min-w-[60%] mr-2 lg:min-w-[80%] rounded-sm text-[.8rem] text-gray-700"/>
            <button className="bg-blue-700 px-4 rounded-sm  text-[.8rem] text-white">Search</button>
        </div>
        </section> 

        <section className="bg-[hsl(220,40%,89%)] mb-5 p-5 flex">

    
        <p className="mb-5 bg-white w-full hidden -mt-2 p-2 py-3 ">Filter</p>
        <main className="hidden">
            

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

        <div className='bg-white w-full p-2 mt-10'>
            
            <div className="mb-8 -mt-14 -ml-2 flex justify-between bg-white w-[101.2%] p-3">
               <p className="ring-[.2px] w-60 px-7"> 2022 Toyota Camry 2022 SE</p>
               <p>vs</p>
               <p className="ring-[.2px] w-60 px-4 ">2023 Honda Accur Sord Sport</p>
            </div>
            
            <div className="flex justify-around  ml-3  gap-x-2.5">
                <div className="bg-gray-20 P-2" >
                    <Image src={car5} alt="latest cars" width={230}/>
                    <p className="text-sm font-bold mb-1">2022 Toyota Camry SE</p>
                    <p>2.5L 4-cyl, 203 HP, 26.39 MPG</p>
                </div>
                <div className="bg-gray-20 p-2">
                    <Image src={car5} alt="latest cars" width={230}/>
                    <p className="text-sm font-bold mb-1">2024 Honda Accord Sport</p>
                    <p>1.5L Turbo Inline-4, 192 2.33 MPG</p>
                </div>
            </div>

            <div className="flex justify-around mt-1 bg-[hsl(220,40%,89%)] p-2">
                <p className="text-blue-900 font-serif">Engine</p>
                <p>Transmission</p>
                <p>Fuel Economy</p>
            </div>
            
            <section>
                <div className="flex justify-around p-3">
                    <p>Engine  2.5L Inline-4</p>
                    <p>8- Speed Automatic</p>
                    <p>28 MPG City / 399 Hwy</p>
                </div>
                <hr className="text-stone-300"/>
                <div className="flex justify-around p-3">
                    <p>HorsePower  203 Hp  @ 6,600</p>
                    <p>CVT</p>
                    <p>30 MPG City / 33  MPG</p>
                </div>
                 <hr className="text-stone-300"/>
                <div className="flex justify-around p-3">
                    <p>HorsePower  203 Hp  @ 6,600</p>
                    <p>CVT</p>
                    <p>30 MPG City / 33  MPG</p>
                </div>
            </section>

            <div className="flex justify-around mt-1 bg-[hsl(220,40%,89%)] p-2">
                <p className="font-bold text-blue-900 font-serif">Performance</p>

            </div>
                        <section>
                <div className="flex justify-around p-3">
                    <p>Engine  2.5L Inline-4</p>
                    <p>8- Speed Automatic</p>
                    <p>28 MPG City / 399 Hwy</p>
                </div>
                <hr className="text-stone-300"/>
                <div className="flex justify-around p-3">
                    <p>HorsePower  203 Hp  @ 6,600</p>
                    <p>CVT</p>
                    <p>30 MPG City / 33  MPG</p>
                </div>
                 <hr className="text-stone-300"/>
                <div className="flex justify-around p-3">
                    <p>HorsePower  203 Hp  @ 6,600</p>
                    <p>CVT</p>
                    <p>30 MPG City / 33  MPG</p>
                </div>
            </section>
            <div className="flex justify-around mt-1 bg-[hsl(220,40%,89%)] p-2">
                <p className="font-bold text-blue-900 font-serif">Features</p>

            </div>
                        <section>
                <div className="flex justify-around p-3">
                    <p>Engine  2.5L Inline-4</p>
                    <p>8- Speed Automatic</p>
                    <p>28 MPG City / 399 Hwy</p>
                </div>
                <hr className="text-stone-300"/>
                <div className="flex justify-around p-3">
                    <p>HorsePower  203 Hp  @ 6,600</p>
                    <p>CVT</p>
                    <p>30 MPG City / 33  MPG</p>
                </div>
                 <hr className="text-stone-300"/>
                <div className="flex justify-around p-3">
                    <p>HorsePower  203 Hp  @ 6,600</p>
                    <p>CVT</p>
                    <p>30 MPG City / 33  MPG</p>
                </div>
            </section>
        </div>
        

      </section>
      <Footer />
    </div>
  )
}

export default Page
