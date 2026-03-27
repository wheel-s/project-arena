'use client'
import React from 'react'


interface props{
    text:string,
    color: string,
    style:string
    onclick:()=>{}
}

const Button = ({text, color, style, onclick}:any) => {

  return (
    <div>
      <button className={`${style}`} onClick={onclick}>{text}</button>
    </div>
  )
}

export default Button
