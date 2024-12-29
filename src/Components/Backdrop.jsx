import React from 'react'
import Cart from './Cart'

const Backdrop = () => {
  return (
    <div className='w-[100%] h-[100vh] bg-color fixed top-0 right-0 left-0 bottom-0 '>
      <Cart />
    </div>
  )
}

export default Backdrop