import React from 'react'

const Nav = () => {
  let showCart = () => {
    console.log('hello')
  }
  return (
    <nav className='flex justify-between p-[2rem]'>
       <h2 className='text-yellow-400 text-2xl font-bold'>Shoppy</h2>
       <button className='bg-yellow-400 p-2 rounded-md font-medium text-white' onClick={showCart}>
        Cart <span className='text-white'>(1)</span>
       </button>
    </nav>
  )
}

export default Nav