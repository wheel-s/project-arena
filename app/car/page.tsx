'use client'
import Link from 'next/link'
import Image from "next/image";
import Menu from '../components/menu'
import car3 from "../images/honda.jpg"
import car5 from "../images/gle.png"
import Footer from "../components/footer";
import Button from '../ui/Button';
import get_car from './next' 
import { useEffect, useState } from 'react';
import { useValue } from "@/app/components/carcontext"
import useStore from '../components/zustand';
import { FaBookmark } from 'react-icons/fa';


const Page = () => {


    const {value, setValue} = useValue()

    const name = useStore((state)=>state.name)
    const setName = useStore((state)=>state.setName)

     
    let limit =9

    const down = ():void=>{
        limit -1
        console.log(limit)
    }
    const getDetails = (unique_name:string)=>{
        console.log(unique_name)
        setName(unique_name)
    }

    const [data, setData] = useState<any[]>()
    const [page, setpage]=useState<number>(1)
    const [selected , setselected] = useState<string>('')
   
    async function filter_by_brand(value:string){
         

        const response = await fetch(`http://127.0.0.1:8000/brands/cars?name=${value}&limit=${limit}&page=${page}`)
                
            if(!response.ok){
                console.log("whyyy!!!!!!!!")
                const data  = await response.json()
                console.log(data)
                setData([])
                    
            }else{
            const data  = await response.json()
            console.log(data)
            setData(data)

        }
    }




    useEffect(()=>{

        async function get_car(limit:number, page:number){

            const response = await fetch(`http://127.0.0.1:8000/cars?limit=${limit}&page=${page}`)
                
            if(!response.ok){
                    console.log("whyyy!!!!!!!!")
                    setData([])
                }
                const data  = await response.json()
                console.log(data)
                setData(data)
                
        }
    
  
        if(value){
            console.log()
            filter_by_brand(value)
        }else{
            get_car(limit, page)
        }

    },[page])
    // console.log(data)
 


  return (
    <div>
  
        <div>          
            <div className="grid justify-center p-10 background3">
                <div className="-mt-1 text-center grid justify-items-center">
                    <h1  className=" text-[1.8rem] text-[#1e2e4d]">Find Your Next Car</h1>
                    <p className="text-stone-600">Browse a wide collection of cars from 2018 and newer</p>
            
                </div>
                
            </div>
            <p className=' text-[.86rem]  ml-3 -mt-8 mb-4' >Home / Cars</p>

            <div className='p-5 -mt-1 bg-[hsl(240,10%,90%)] mb-6'>
                        <div className='mb-5 '>
                    <Link href={'/car/detail'}> <h1 className='-mb-8 text-[1.2rem]' >Filter</h1></Link>
                      <div className="flex ml-69 lg:ml-79">
                        <input type="text" placeholder="Search for cars..." className="shadow-xl outline-none bg-gray-50  py-2 p-2 min-w-[60%] mr-2 lg:min-w-[80%] rounded-sm text-[.8rem] text-gray-700"/>
                        <button className="bg-blue-700 px-4 rounded-sm  text-[.8rem] text-white">Search</button>
                      </div> 
            </div>
                    
                <section className='flex'>
                
                    <div className='bg-white w-90 mr-6 p-2 px-4 rounded-sm'>
                       <h1>Make</h1> 
                       <div className='mt-3 flex'>
                        <input type="checkbox"/>
                        <p className='ml-2'>All Makes</p>
                       </div>
                       <hr className='shadow-xl text-stone-400 mt-2'/>
                       <div className='mt-3 flex'>
                        <input type="checkbox" checked={selected ==='toyota'} value={'toyota'} onChange={
                            (e)=>{setselected(e.target.value)
                                filter_by_brand (e.target.value)                              
                            }}/>
                        <p className='ml-2'>Toyota</p>
                       </div>
                         <div className='mt-3 flex'>
                        <input type="checkbox" checked={selected ==='honda'} value={'honda'} 
                        onChange={(e)=>{
                            setselected(e.target.value)
                            filter_by_brand(e.target.value)
                        }}/>
                        <p className='ml-2'>Honoda</p>
                       </div>
                         <div className='mt-3 flex'>
                        <input type="checkbox" checked={selected ==='audi'} value={'audi'} 
                        onChange={(e)=>{
                            setselected(e.target.value)
                            filter_by_brand(e.target.value)
                        }}/>
                        
                        <p className='ml-2'>Audi</p>
                       </div>
                       <div className='mt-3 flex'>
                        <input type="checkbox" checked={selected ==='Tesla'} value={'Tesla'} 
                        onChange={(e)=>{
                            setselected(e.target.value)
                            filter_by_brand(e.target.value)
                        }}
                        />
                        <p className='ml-2'>Tesla</p>
                       </div>
                       <hr className='shadow-xl text-stone-400 mt-2'/>
                       <div className='mt-4' id='year'>
                            <h1>Year</h1>
                            <hr className='mt-2 text-stone-400'/>
                            <hr className='mt-2'/>
                            <div className='flex justify-between mt-3'>
                              <p>2022</p>
                              <p>2024</p>
                            </div>
                        </div>
                        <hr className='mt-3 text-stone-400' id="Body_Type"/>
                        <div className='mt-4'>
                            <h1 className='font-semibold'>Body Type</h1>
                            <div className='flex mt-3'>
                                <input type="checkbox"/>
                                <p className='ml-2'>Sedan</p>
                            </div>
                            <div className='flex mt-3'>
                                <input type="checkbox"/>
                                <p className='ml-2'>SUV</p>
                            </div>
                             <div className='flex mt-3'>
                                <input type="checkbox"/>
                                <p className='ml-2'>Truck</p>
                            </div>
                            <div className='flex mt-3'>
                                <input type="checkbox"/>
                                <p className='ml-2'>Coupe</p>
                            </div>
                            <hr className='mt-2 text-stone-400'/>
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
                            <hr className='mt-3 text-stone-400'/>
                            <div className="flex justify-center mt-5">
                                  <button className="bg-blue-700 font-semibold text-gray-100 text-[.9rem] p-2 tracking- px-16 rounded-md">Clear All</button>
                            </div>
                          
                        </div>
                    </div>
                 
                      
                    <div className='bg-white rounded-sm w-full p-5' >
                      
                      
                        <div className="grid grid-cols-3 gap-y-8 gap-x-2.5">
                          {data && data.map((item:any):any=>{
                            return(
                            <Link key={item.id} href="/car/detail" onClick={()=>getDetails(item.unique_name)}> 
                                <div  className="bg-gray-200 grid-item item-4 h-45 lg:w-70 w-50  rounded-sm p-2">
                                    <FaBookmark/>
                                    <Image src={car5} alt="latest cars" className='hidden' width={230}/>
                                    <p className="text-sm font-bold">{item.year} Audi {item.model}</p>
                                </div>
                            </Link>
                            )
                          })}

      
                        </div>
                
                     

                        <div className="mt-10 cursor-pointer mb-5 flex justify-center lg:text-[1rem]">
                            <p className="mr-3 text-[.9rem] mt-1" >Prev</p> 
                            <Button text='1' color='gray' onClick={down}  style='text-white cursor pointer ml-2 mt- py-1 px-2.5 shadow-2xl bg-blue-500 rounded-sm'/>
                            {/* <button className="text-white cursor-pointer ml-2 py-.5 px-2.5 shadow-2xl bg-blue-500 rounded-sm" onClick={()=>page=page}>1</button> */}
                            <button className="text-blue-900 cursor-pointer ml-2 py-.5 px-2.5 bg-gray-200 rounded-sm" onClick={()=>setpage(page+1)}>2</button>
                            <button className="text-blue-900 cursor-pointer ml-2 py-.5 px-2.5 bg-gray-200 rounded-sm">3</button>
                            <button className="text-blue-900 cursor-pointer ml-2 py-.5 px-2.5 bg-gray-200 rounded-sm">4</button>
                            <button className=" text-[.88rem] cursor-pointer ml-4 py-.8 px-3.5 shadow-2xl bg-gray-200 rounded-sm">Next</button>
                         </div>
                    </div>
                   

                </section>
            </div>
        </div>
        <Footer/>

    </div>
  )
}

export default Page
