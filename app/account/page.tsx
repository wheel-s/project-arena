'use client'
import { FaEnvelope, FaGoogle, FaLock,} from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { useState } from "react"

interface props{
  setToken:any
  setshow:any
}

const Login = ({setToken, setshow}:props) => {

  const [user, setUser]= useState<Boolean>(false)
  const [username, setusername] = useState<string>('')
  const [email, setemail] = useState<string>('')
  const [password, setpassword] = useState<string>('')
  const [msg, setMsg] = useState<string>()
  const register = async()=>{

    if (!username || !password || !username){
      console.log('⚠️ Error Alert!!!!!')
      setMsg('ℹ️please provide username and or email and or password')
      setTimeout(() => {
        setMsg('')
      }, 10000);
      return
    }
    
    const register:string = JSON.stringify({username:username, email:email, password:password})
    console.log(register)

    const response  = await fetch(`http://127.0.0.1:8000/auth`, {
                                    method:'POST',
                                    headers:{'Content-Type':'application/json'},
                                    body:register
                                  })
                                  console.log("hello")
    if (!response.ok){
      console.log('something went wrong || api server unreachable')
      setMsg('please provide username and or email and or password')
      return 
    }
    const data = await response.json()
    console.log(data)
    setUser(false)
  }

  const login = async()=>{

    if(!email || !password){
      console.log("please provide email and or password")
      setMsg('ℹ️please provide email and or password')
      setTimeout(()=>{
        setMsg('')
      },10000)
      return 
    }

    const payload = {username:username, email:email, password:password}
      // console.log("hello")
      // const formBody = Object.entries(dats).map(([key, value]))=>encodeURIComponent(key)+"="+encodeURIComponent(value).join("&");
    const datas= new URLSearchParams();
    datas.append("username", email)
    datas.append("password", password)
    const boddys= JSON.stringify(datas)
      const response  = await fetch(`http://127.0.0.1:8000/auth/token`, {
                                      method:'POST',
                                      headers:{'Content-Type':'application/x-www-form-urlencoded'},
                                      body:datas.toString()
                                    })
      if (!response.ok){
        console.log('something went wrong || api server unreachable')
      }
      const data = await response.json()
      const {access_token, token_type} = data
      console.log(token_type)

      localStorage.setItem('userToken',  access_token)
  
      // setToken(true)
      // setshow(false)
  }




  return (
    <div className=" flex h-fit justify-center">
    <div className=" p-8  overflow-y-hidden">
    <div className=" flex min-h-screen items-center justify-center ">
      <div className={!user?"bg-white max-sm:bg-transparent shadow-3xl -mt-60 p-7 rounded-md flex justify-center":"bg-white max-sm:bg-transparent -mt-45 shadow-2xl  p-7 rounded-md flex justify-start"}>
        <div className=" text-center"> 
          <h1 className="font-bold -mt-3  text-lg">{!user ?"Sign In":"Sign Up"}</h1>
          <div className="flex  text-[.9rem] lg:text[1rem] rounded-md h-10 mt-5 cursor-pointer bg-[hsl(240,50%,90%)] rounded-tl-2xl rounded-tr-2xl">
            <h2 className={user?" px-6  h-9.0  rounded-tl-2xl rounded-tr-2xl w-37  p-2 ":"px-6  ring-[.2px] h-9.0  rounded-tl-2xl rounded-tr-2xl w-37 bg-white p-2 "} onClick={()=>{setUser(false)}}>Sign In</h2>
            <h3 className={user?"px-5  ring-[.2px]  rounded-tl-2xl h-9.8  rounded-tr-2xl w-37 bg-white  ml-9 p-2":"px-5   rounded-tl-2xl rounded-tr-2xl w-37 ml-9 p-2"} onClick={()=>setUser(true)}>Sign Up</h3>
          </div>
          <div className="mt-4 grid justify- ml-2 p-2">
            <FaEnvelope className="fixed  z-0 text-gray-500 ml-5 mt-2"/>
            <FaLock className="fixed z-0 text-gray-500 ml-5 mt-15"/>
             <input type="text" className={user ?"ring-1 ring-stone-400 rounded-md mb-5 p-1.5 px-11 ":"hidden"} value={username} onChange={(e)=>{setusername(e.target.value)
               console.log(username)}} placeholder="Username"/>
            <input type="text" className="ring-1 ring-stone-400 rounded-md p-1.5 px-11" placeholder="Email" value={email} onChange={(e)=>setemail(e.target.value)}/>
            <input type="text" className="ring-1 ring-stone-400 mt-5 rounded-md p-1.5 px-11" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
            <p className="mt-4 text-[.9rem] text-red-700">{msg}</p>
            <p className="text-[.79rem] text-end mt-2 text-blue-700 font-serif">Forgot Password?</p>
            <button className="ring-1 ring-stone-100 text-white rounded-md p-2 px-11 mt-3 bg-blue-700 cursor-pointer" onClick={user?register:login}>{user ?"Sign Up" :"Log In"}</button>
          </div>
          <div className="flex ml-6 mb-1">
             <hr className="text-stone-400 w-33 mt-3"/>
             <p className="mx-3">or</p>
             <hr className="text-stone-400 w-32 mt-3"/>
          </div>
          <div className="grid">
              <button className="ring-1 mb-1 py ring-stone-400  rounded-md p-2 px-11 mt-2">
                    <FaGoogle className="mt-2 linear-gradient("/>
                    <p className="-mt-5">Continue with Google</p>
              </button>
              <button className="ring-1  py bg-gray-800 text-white rounded-md p-2 px-11 mt-2">
                <FaXTwitter size={20} className="mt-1 p-0.5 text-black bg-white rounded-full"/>
                <p className="-mt-5 mb-1 -ml-6">Continue with  X</p>
              </button>
          </div>    
           <hr className="text-stone-400  mt-4.5"/>
           <p className="mt-2">Don't have an account? <span className="text-blue-600 cursor-pointer" onClick={()=>{user ?setUser(false):setUser(true)}}>{user?"Sign In": "Sign Up"}</span></p>


        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Login
