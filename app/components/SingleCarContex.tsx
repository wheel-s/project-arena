'use client'
import { createContext, useState, useContext } from "react";



type CarDetails={
  images?:string[],
  model?:string,
  unique_name:string,
  id?:string
}


type car = {
  car:CarDetails | {}
  setCar:(v:CarDetails)=>void
}

const SingleContext = createContext<car>({
    car:{},
    setCar:()=>{}

})


export function SingleProvider({children}:{children:React.ReactNode}){
      const [car, setCar] = useState<CarDetails |{}>({})

      return(
        <SingleContext.Provider value={{car, setCar}}>
            {children}
        </SingleContext.Provider>  
      )
 
}


export function useSingle(){
  return useContext(SingleContext)
}



