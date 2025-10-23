import React from 'react'
import { useNavigate } from 'react-router-dom'

const Mainpage = () => {
  const Navigate = useNavigate();
  return (
    <>
       <div >
          Personal Blog
       </div>
       <div>
        <button onClick={()=>Navigate('/content')}>
           Content Page
        </button>
       </div>
    </>
  )
}

export default Mainpage
