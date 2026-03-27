import { FaSearch } from "react-icons/fa"


const Modal = ({set}:any) => {
  return (
    <div className='glass2 fixed z-10 h-full  w-full' onClick={()=>set(false)}>
      
    <div className="  p-4 h-full  w-full flex justify-center">
    </div>

    </div>
  )
}

export default Modal
