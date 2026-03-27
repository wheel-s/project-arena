'use client'
import { useState } from "react"


const Page = () => {

      const [email, setemail] = useState<string>('')
      const login = ()=>{

      }
  return (
    <div className="glass  p-5 w-full flex justify-center">
     <div className='mt-30'>
    
        <section className='bg-white p-4 rounded-md  w-100'>
            <h1 className='text-[1rem]  text-black font-semibold text-center mt-2'>Password Change</h1>

        <div className=" justify-center  p-2 mt-5">
            <input type="text" className="ring-1  text-[.9rem] text-black ring-stone-400 rounded-md p-2 px-6 w-full text-blue" placeholder="Email" value={email} onChange={(e)=>setemail(e.target.value)}/>
        </div>
        <div className='flex mt-1 mb-4 justify-center'>
            <button className="ring-1 font-bold ring-stone-100 text-white rounded-md p-2 px-22 mt-3 bg-blue-700" onClick={login}>Submit</button>
        </div>
 
        <p className="text-center mb-3 font-[monospace]">{'pleases enter code sent to your email address'}</p>


        </section>






     </div>
    </div>
  )
}

export default Page
