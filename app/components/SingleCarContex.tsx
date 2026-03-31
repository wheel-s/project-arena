'use client'
import { createContext, useState, useContext } from "react";



type car = {
  car:{}
  setCar:(v:{})=>void
}

const SingleContext = createContext<car>({
    car:{},
    setCar:()=>{}

})


export function SingleProvider({children}:{children:React.ReactNode}){
      const [car, setCar] = useState({})

      return(
        <SingleContext.Provider value={{car, setCar}}>
            {children}
        </SingleContext.Provider>  
      )
 
}


export function useSingle(){
  return useContext(SingleContext)
}



