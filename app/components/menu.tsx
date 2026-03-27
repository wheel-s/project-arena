'use client'
import {FaCar, FaSearch, FaUser, FaBars, FaChevronDown} from'react-icons/fa'
import Link from 'next/link'
import { useState, useEffect } from 'react'
// import Login from '../account/Login'
import SearchModal from './Modal'







const Menu = ({click}:any) => {
  
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
      const response = await fetch('http://127.0.0.1:8000/users/me',{
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
  return (
    <div>
         {search && <SearchModal set={setSearch}/> }


      {search && <div className='fixed w-full mt-10 z-10'>
            <div className="flex ">
                <FaSearch size={18} className='fixed mt-2.5 ml-10 md:ml-17 lg:ml-35 text-white'/>
            </div>
            <div className="w-full px-6 md:px-10 lg:px-30">
                <input type="text"  className=' w-full h-10 font-[monospace] text-white text-start px-20 text-[1rem] outline-white outline-1 rounded-sm' placeholder='Search for ◓Arena'/>
            </div>
        </div>
       }
        <div className="flex justify-between px-8 ring-2 ring-gray-300  py-5 m bg-white lg:px-10">
          <section className='flex gap-10 '>
            <div className=""> 
             <Link href={'/'} className='flex  '>   
             <FaCar size={28} className=" mr-1 text-cyan-800"/>
             <h1 className="font-bold text-[1.2rem] font-stretch-125% text-gray-900 ">◓Arena</h1> 
             </Link>  
            </div> 
          <section className="flex gap-7 max-xl:hidden text-[.96rem] cursor-pointer">

            <div className='font-bold  bg-cyan-700 rounded-full text-gray-100 px-5 py-2 -mt-1 flex'>
              <p>◓Arena for AI</p>
            </div>

            <div className='font-bold  mt-1 flex'>
              <p>Products</p>
              <FaChevronDown className='mt-1 m-1'/>
            </div>
            <div className='font-bold  mt-1  flex'>
              <p>Resources</p>
              <FaChevronDown className='mt-1 m-1'/>
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
            {/* <p onClick={()=>{account ?setaccount(false):setaccount(true)}} className='rounded-full cursor-pointer bg-green-800 text-white -mt-2 w-8 h-8 text-center py-1.5'>{name ==''?<FaUser className='ml-[8.67px]  mt-0.5 cursor-pointer' /> :`${name.charAt(0).toUpperCase()}`}</p> */}
          </div>

          
        <div className='mt-1 flex gap-10 cursor-pointer xl:hidden'>
          <FaSearch size={19} className='' onClick={openSearch}/>
         {!search && <FaBars size={20} className='scale-x-150 font-light' onClick={openMenu}/>}
        </div>
         
        </div>

      { menu && <div>
          <section className="xl:hidden z-10 fixed w-full grid gap-y-5.5 font-[monospace] text-white text-[1rem] p-5 bg-gray-600">
            <div>
              <div  className='flex justify-between'>
                <p className='font-[monospace]'>Products</p>
                <p className='text-[1.6rem] cursor-pointer -mt-2' onClick={openProduct}>{product ? "—" :"+"}</p>
              </div>
              <div className={product?"mt-6": "mt-6 hidden"}>
                <p>My first sass  status " success and the name ot the extra ip anf request and also i havre this stuff i waamma do</p>
              </div>
            </div>
            <hr className='text-blue-200'/>
            <div className='flex justify-between'>
              <p>Resources</p>
              <p className='text-[1.6rem] cursor-pointer -mt-2'>+</p>
            </div>
            <hr className='text-blue-200'/>
            <div>
              <p>Docs</p>  
            </div>
            <hr className='text-blue-200'/>
            <div>
              <p>Pricing</p>
            </div>

            <div>
              <button className='bg-cyan-900 italic w-full cursor-pointer rounded-md h-10 ring-1 ring-cyan-400 font-bold font-[monospace] text-gray-300'>Try ◓Arena</button>
            </div>
          <div>
             <Link href={'/account'} onClick={openMenu}> <button className='bg-gray-500 italic cursor-pointer w-full rounded-md h-10 tracking-wider ring-1 ring-cyan-100'>Login</button> </Link>
            </div>
          </section>          
        </div>
      } 
      
   
      {/* {account &&<Login setToken={setusers} setshow={setaccount}/>} */}
    </div>
  )
}

export default Menu
