import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className="grid justify-center  h-80 -mt-10  background2">
            <div className="p-6">
              {/* <h1 className="font-bold text-[hsl(260,26%,24%)] text-[1.4rem] text-center">Compare Cars Side by Side</h1>
              <p className="text-[.9rem] text-gray-200 mt-3 items-center  ">Find and compare your favourite cars easily.</p>
              <button className="text-white rounded-sm mt-5 ml-19 bg-blue-700 w-40  h-9 ">Compare Now</button> */}
            </div>
 
          </div>
          <div className="p-5 bg-white shadow-2xl">
             <hr className="text-stone-300  shadow-2xl"/>
            <div className="mt-3 text-sm font-bold flex ml-15">
              <p className="mr-30">About Us</p>
              <p> Contact</p>
            </div>
            <hr className="text-stone-300 mt-2 shadow-2xl"/>
            <p className="mb-5 text-center mt-5 text-[.8rem]">© 2026 Car Arena.  All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer
