import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../Navbar';

const Mainpage = () => {
  const Navigate = useNavigate();
  return (
    <>
       <NavBar />
       <div>
        <button onClick={()=>Navigate('/content')}>
           Content Page
        </button>
       </div>
    </>
  )
}

export default Mainpage
