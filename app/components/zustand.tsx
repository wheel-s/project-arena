'use client'
import {create} from 'zustand'


interface naamestate{
    name:string,
    setName:(newName:string)=>void
}


const useStore  = create<naamestate>((set)=>({
    name:'hello',

    setName:(newName)=>set({name:newName})



}))

export default useStore