import React, { useState } from 'react'
import Contentwrapper from './style'

const Content = () => {

    const [mover,setMover] = useState([]);

    const handleDone =()=> {

        console.log("Ui Cicked",)
        setMover(['amn',2]);
       

    }
    console.log("state updated---->",mover)
  return (
    <>
    <Contentwrapper>
        <div className='tot_content'>

            <div class="d-grid gap-2 col-6 mx-auto mt-5">
                    <button class="btn btn-primary" type="button"  onClick={handleDone}> Enter to the New landing page</button>
            </div>

        </div>
    </Contentwrapper>     
    </>
  )
}

export default Content
