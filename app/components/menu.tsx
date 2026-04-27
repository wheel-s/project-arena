'use client'
import {FaCar, FaSearch, FaUser, FaBars,FaChevronDown} from'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import Link from 'next/link'
import { useState, useEffect } from 'react'
// import Login from '../account/Login'
import SearchModal from './Modal'
import car from '../images/2018_S4_engine.webp'
import logo from '../images/image_6fa752a0.png'
import Image from 'next/image'
import Env from '../Env'




const Menu = ({click}:any) => {
  
  const url = Env()
  const [account, setaccount] = useState<boolean>(false)
  const [product, setProduct] = useState<boolean>(false)
  const [users, setusers] = useState<boolean>(false)
  const [name, setname] = useState<string>('main')
  const [menu, setMenu] = useState<boolean>(false)
  const [search, setSearch] = useState<boolean>(false)
  let val = false
  
  const getuser =async()=>{
    console.log('HEY')
      const getusers = localStorage.getItem('userToken')
      console.log(getusers)
      const response = await fetch(`${url}/users/me`,{
                              headers:{'authorization':`bearer ${getusers}`}
                              })
        const data = await response.json()
        const {username, id} = data
        localStorage.setItem('username', username)
        const usernamed = localStorage.getItem('username')
        if(usernamed) setname(usernamed)
       console.log(data)
       console.log(name)
       val = true
  }
    // const getusers = localStorage.getItem('userToken')
    //   console.log(getuser)
  useEffect(()=>{
      // const getusera= localStorage.getItem('userToken')
      // console.log(getuser)
 
      if(users){
        getuser()
 
      }
      setusers(false)
  },[users])


  function openMenu(){
    menu ? setMenu(false): setMenu(true)
  }
  function openSearch(){
    setMenu(false)
    setSearch(true)
  }
  function openProduct(){
    product ? setProduct(false) : setProduct(true)
  }





const [names, setnames] =useState<any>()
const [pic, setpic] =useState<any>()
const [zmail, setzmail]= useState<any>()
useEffect(()=>{
  const query = new URLSearchParams(window.location.search)
  const name = query.get('name')
  setnames(name)
  const zmail= query.get('email')
  setzmail(zmail)
  const pic = query.get('picture')
  console.log(pic)
  setpic(pic)
  console.log(name)
  console.log(zmail)

},[])





  return (
    <div>
         {search && <SearchModal set={setSearch}/> }


      {search && <div className='fixed w-full mt-10 z-10'>
            <div className="flex ">
                <FaSearch size={18} className='fixed mt-2.5 ml-10 md:ml-17 lg:ml-35 text-white'/>
            </div>
            <div className="w-full px-6 md:px-10 lg:px-30">

                <input type="text"  className=' w-full h-10 tracking-wider text-white text-start px-13 text-[.94rem] outline-white outline-1 rounded-sm' placeholder='Search for ◓Arena'/>

            </div>
        </div>
       }
        <div className="flex justify-between px-5 ring-2 ring-stone-600  bg-white shadow-2xl py-5 lg:px-10">
          <section className='flex gap-10 on' onClick={()=>setMenu(false)}>
            <div className=""> 
             <Link href={'/'} className='flex  '>   

             <FaCar size={30} className=" mr-1 text-gray-500 hidden"/>
             <Image src={logo} alt='autofoocus' width={35} className='-mt-1 rounded-l-full mr-2 rounded-r-full'/>
             <h1 className="font-bold text-[1.15rem] font-serif ">AutoFocus</h1> 

             </Link>  
            </div> 
          <section className="flex gap-7 max-xl:hidden text-[.9rem] cursor-pointer">

            <div className='font-bold bg-cyan-700 rounded-full text-gray-100 px-5 py-2 -mt-1 flex'>
              <p>◓Arena for AI</p>
            </div>

            <div className='font-bold  mt-1 flex'>
              <p>Products</p>
              <FaChevronDown size={12} className='mt-1.5 m-1'/>
            </div>
            <div className='font-bold  mt-1  flex'>
              <p>Resources</p>
              <FaChevronDown size={12} className='mt-1.5 m-1'/>
            </div>
            <div className='font-bold  mt-1  flex'>
              <p>Docs</p>
              {/* <FaChevronDown className='mt-1 m-1'/> */}
            </div>
            <div className='font-bold  mt-1 xl flex'>
              <p>Pricing</p>
              {/* <FaChevronDown className='mt-1 m-1'/> */}
            </div>
          </section>



          </section>

          <div className="flex text-[.96rem] font-semibold  font-sans mt-1 gap-8 mr-8 max-xl:hidden">
             <p className="ml- cursor-pointer mt-1"><FaSearch onClick={openSearch}/></p>
            <Link href={'/account'}><p>Login</p></Link>
            <Link href={'/meeting'}><p>Book a meeting </p></Link>
            <Link href={'/picing'}><p className='bg-cyan-900 px-7 p-3rem] -mt-1 py-1.5 text-white rounded-md cursor-pointer italic tracking-wider ring-1 ring-cyan-400 '>  Try ◓Arena</p></Link>
                      {
            
            <div className="-mt-1  text-white text-start p text-sm grid gap-2 font-bold">
              {/* <p >{names}</p> */}
              <Image src={pic?pic.trim():car} width={200} height={200} alt='profile' className="bg-blue-500 rounded-full w-8 h-8"/>
            </div>}
            {/* <p onClick={()=>{account ?setaccount(false):setaccount(true)}} className='rounded-full cursor-pointer bg-green-800 text-white -mt-2 w-8 h-8 text-center py-1.5'>{name ==''?<FaUser className='ml-[8.67px]  mt-0.5 cursor-pointer' /> :`${name.charAt(0).toUpperCase()}`}</p> */}
          </div>

          

        <div className='mt-1 flex gap-2 cursor-pointer xl:hidden'>
          <FaSearch size={15} className='mt-0.75 mr-3' onClick={openSearch}/>
            {menu ? <FaX size={18} className='scale-x-143 mt-.5 font-light' onClick={openMenu}/> :<FaBars size={18} className='scale-x-187 mt-,5' onClick={openMenu}/>}
          {
            
            <div className="-mt-2  text-white text-start p text-sm grid gap-2 font-bold">
              {/* <p >{names}</p> */}
             {pic&& <Image src={pic?pic.trim():car} width={200} height={200} alt='profile' className="bg-stone-700 rounded-full w-8 h-8"/>}
            </div>}
       
        </div>
         
        </div>

      { menu && <div>
          <section className="xl:hidden z-10 fixed w-full grid gap-y-5.5 tracking-wide text-[1rem] p-5 bg-[hsl(260,12%,89%)] shadow-2xl">
            <div>
              <div  className='flex justify-between'>
                <p className='font- tracking-[1.4px] text-[.9rem] mt-2'>Products</p>
                <p className='text-[1.6rem] cursor-pointer -mt-2' onClick={openProduct}>{product ? "—" :"+"}</p>
              </div>
              <div className={product?"mt-6 text-[.75rem]": "mt-6 hidden"}>
                <p className="tracking-[1.8px]">main app</p>

              </div>
            </div>
            <hr className='text-stone-500 text-[.1px]'/>
            <div className='flex font-sans tracking-wider justify-between'>
              <p className='text-[.9rem] mt-2'>Resources</p>
              <p className='text-[1.6rem] cursor-pointer -mt-2'>+</p>
            </div>
            <hr className='text-stone-500 text-[.1px]'/>
            <div className='font-sans tracking-wide'>
              <p className='text-[.9rem] mt-2'>Docs</p>  
            </div>
            <hr className='text-stone-500 text-[.1px]'/>
            <div className='font-sans tracking-wider'>
              <p className='text-[.9rem] mt-2'>Pricing</p>
            </div>

            <div>
              <button className='bg-cyan-900 italic w-full cursor-pointer rounded-md h-10  font-bold font-[monospace] text-gray-300'>Try ◓Arena</button>
            </div>
          <div>
             <Link href={'/account'} onClick={openMenu}> <button className='bg-gray-500 italic cursor-pointer w-full rounded-md h-10 tracking-wider ring-[.5px] text-gray-300 ring-stone-600'>Login</button> </Link>
            </div>
          </section>          
        </div>
      } 
      
   
      {/* {account &&<Login setToken={setusers} setshow={setaccount}/>} */}
    </div>
  )
}

export default Menu
