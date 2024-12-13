import React from 'react'
import Cart from './Cart'

const Backdrop = (props) => {
  return (
    <>
      {
        props.showCard ? <div className='bg-color absolute top-0 left-0 bottom-0 right-0 w-[100%]' onClick={props.hideCardHandler}>
          <div className='p-2 w-[500px] h-[350px]  overflow-auto  rounded-md absolute top-[20%] left-[30%] bg-slate-100 mb-2'>
            <Cart hideCardHandler={props.hideCardHandler}/>
          </div>
        </div> : null
      }
    </>
  )
}

export default Backdrop

