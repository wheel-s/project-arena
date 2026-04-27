'use client'
import Link from 'next/link'
import Image from "next/image";
import Menu from '../components/menu'
import car3 from "../images/honda.jpg"
import car5 from "../images/gle.png"
import carr from '../images/2018_audi_s4.jpg'
import Footer from "../components/footer";
import Button from '../ui/Button';
import get_car from './next' 
import { useEffect, useState } from 'react';
import { useValue } from "@/app/components/carcontext"
import useStore from '../components/zustand';
import { FaBookmark } from 'react-icons/fa';
import Env from '../Env';
import { useSingle } from '../components/SingleCarContex';


const Page = () => {

    const url = Env()
    const {value, setValue} = useValue()
    const {car, setCar} = useSingle()
    const name = useStore((state)=>state.name)
    const setName = useStore((state)=>state.setName)

     
    let limit =9


    const getDetails = (unique_name:string)=>{
        console.log(unique_name)
        setName(unique_name)
    }

    const [data, setData] = useState<any[]>()
    const [count, setCount] = useState<number>(2)
    const [page, setpage]=useState<number>(1)
    const [selected , setselected] = useState<string>('')
   
    async function filter_by_brand(value:string){
         

        const response = await fetch(`${url}/brands/cars?name=${value}&limit=${limit}&page=${page}`)
                
            if(!response.ok){
                console.log("whyyy!!!!!!!!")
                const data  = await response.json()
                console.log(data)
                setData([])
                    
            }else{
            const data  = await response.json()
            console.log(data)
            setData(data.data)
   

        }
    }



    useEffect(()=>{

        async function get_car(limit:number, page:number){

            const response = await fetch(`${url}/cars?limit=${limit}&page=${page}`)
                
            if(!response.ok){
                    console.log("whyyy!!!!!!!!")
                    setData([])
                }
                const data  = await response.json()

                console.log(data)

                setCount(data.count) 
                setData(data.data)
                console.log(data.data[0].unique_name.split('_')[0])
                setBrand(data.data[0].unique_name.split('_')[0])

                
        }
        
   

       
  
        if(value){
            console.log(value)
            filter_by_brand(value)
            {value && setBrand(value)}
        }else{
            get_car(limit, page)
        }

    },[page])
    // console.log(data)
 
const [search, setSearch] = useState<string>()
    const browse = async(browse:string)=>{
        console.log('browse')
        console.log(browse)

        if(!browse || browse ==''){
            console.log("why!!!")
              setSearch('')
            return "whyy!!!!"
          
            
        }
        const response = await fetch(`${url}/brands/cars?name=${browse}`)
        const data = await response.json()
        setData(data)
        console.log(data)
        setSearch('')
    }

    const totalPage = Math.ceil(count/limit)
    const [num, setNum] = useState(1)
    const [brand, setBrand] = useState<string>('')
    const [model, setModel] = useState<string>()
    const [year, setYear] = useState<string>()   
  

    const nerw = [1, 2, 3]
 

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
                        <div className="flex  max:md:justify-center md:ml-69 lg:ml-79">

                            <input type="text" placeholder="Search for cars..." className="shadow-xl outline-none bg-gray-50 max-md:w-full  py-2 p-2 min-w-[60%] mr-2 lg:min-w-[80%] rounded-sm text-[.8rem] text-gray-700"/>
                            <button className="bg-blue-700 px-4 rounded-sm  text-[.8rem] text-white">Search</button>
                        </div> 
                     </div>
                    
                 <div>
                    <div className='bg-[hsl(230,24%,97%)] md:hidden text-stone-900 font-sans text-sm tracking-wide shadow-2xl ring-[.2px] ring-cyan-900 flex justify-around rounded-sm p-4 mb-5'>

             
                     <select name="Brands" id="Brands">
                        <option value="main">Brands</option>
                        <option value="Toyota">Toyota</option>
                        <option value="Honda">Honda</option>
                        <option value="Tesla">Tesla</option>
                     </select>
                     <select name="Model" id="model">
                        <option value="main">Model</option>
                     </select>
                     <select name="Year" id="year">
                        <option value="Year">Year</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                     </select>

                    </div>    
                </div>


                <section className='flex '>
            
                    <div className='bg-white max-md:hidden w-90 mr-6 p-2 px-4 rounded-sm'>
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
                        <p className='ml-2'>Honda</p>
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
                                  <button className="bg-blue-700 font-semibold text-gray-100 text-[.9rem] p-2 tracking- px-8 lg:px-11 rounded-md">Clear All</button>
                            </div>
                          
                        </div>
                    </div>
    
                      
                    <div className='bg-whit  justify-center rounded-sm w-full -5' >
                      
                      
                        <div className="grid justify-center mobile  gap-y-8 gap-x-5.5">
                          {data && data.map((item:any):any=>{
                            return(
                            <Link key={item.id} href="/car/detail" onClick={()=>getDetails(item.unique_name)} > 
                                <div  className="bg-gray-200 size grid-item item-4  h-35 max-sm:h-27  max-lg:h-30 max-lg:w- max-sm:w-40 lg:w-70 w-45  rounded-sm p-2">
                                    <FaBookmark className='text-[hsl(240,24%,80%)]'/>
                                    <Image src={car5} alt="latest cars" className='hidden' width={230}/>
                                    <p className="text-sm down text mt-24 md:mt-26 max-sm:mt-24 text-[.75rem] font-bold">{item.unique_name}</p>


                                </div>
                            </Link>
                            )
                          })}

      
                        
                     </div>
                     

                        <div className="mt-18 cursor-pointer mb-15 flex justify-center lg:text-[1rem]">
                            <button className="mr-3 text-[.9rem] mt-1 cursor-pointer" onClick={()=>setpage(page-1)} disabled={page===1}>Prev</button> 
                            {
                                nerw &&
                            nerw.map((item)=>{
                                return(
                                    
                                      <button key={item} className="text-blue-900 cursor-pointer ml-2 py-.5 px-2.5 bg-gray-200 rounded-sm" onClick={()=>setpage(item)} disabled={page ===item || totalPage < item}>{item}</button>
                                )
                            })

                            }
                            {/* <Button text='1' color='gray' onClick={()=>setpage(1)}  style='text-white cursor pointer ml-2 mt- py-1 px-2.5 shadow-2xl bg-blue-500 rounded-sm' disabled={page ===1 || totalPage<1}/> */}
                            {/* <button className="text-white cursor-pointer ml-2 py-.5 px-2.5 shadow-2xl bg-blue-500 rounded-sm" onClick={()=>page=page}>1</button> */}
                            {/* <button className="text-blue-900 cursor-pointer ml-2 py-.5 px-2.5 bg-gray-200 rounded-sm" onClick={()=>setpage(2)} disabled={page ===2 || totalPage<2}>2</button>
                            <button className="text-blue-900 cursor-pointer ml-2 py-.5 px-2.5 bg-gray-200 rounded-sm"onClick={()=>setpage(3)} disabled={page===3 || totalPage<3}>3</button>
                            <button className="text-blue-900 cursor-pointer ml-2 py-.5 px-2.5 bg-gray-200 rounded-sm"onClick={()=>setpage(4)} disabled={page===4 || totalPage<4}>4</button> */}
                            <button className=" text-[.88rem] cursor-pointer ml-4 py-.8 px-3.5 shadow-2xl bg-gray-200 rounded-sm" onClick={()=>setpage(page+1)} disabled={page<5}>Next</button>
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
