'use client'
import { createContext, useContext, useState } from "react"


type name = {
  value:string
  setValue:(v:string)=>void
}

const CarContext = createContext<name>({
  value:'hello',
  setValue:()=>{}
})
export function CarProvider ({children}:{children:React.ReactNode}){
  const [value, setValue] = useState("")


  return (
    <CarContext.Provider value={{value, setValue}}>
      {children}
    </CarContext.Provider>
  )
}


export function useValue(){
  return useContext(CarContext)
}



