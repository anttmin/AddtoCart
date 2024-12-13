import React, { useContext } from 'react'
import { itemContent } from '../store/itemContent'

const Nav = (props) => {
  const {items} = useContext(itemContent)
  let totalCart = items.reduce((currentVal,item)=>{
      return currentVal + item.amount;
  },0);
  return (
    <div className='flex justify-between'>
      <h2 className='text-yellow-400 font-bold text-[2xl]'>SHOPPY</h2>
      <button className='p-2 rounded-md w-[100px] bg-yellow-400 text-white' onClick={props.showCardHandler}>Cart({totalCart})</button>
    </div>
  )
}

export default Nav