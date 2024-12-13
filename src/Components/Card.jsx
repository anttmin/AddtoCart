import React, { useContext, useState } from 'react'
import { itemContent } from '../store/itemContent'

const Card = ({fruits}) => {
  const itemCtx = useContext(itemContent);

  const [currentAmount, setCurrentAmount] = useState(1);
  const currentAmountNumber = +currentAmount;

  const addToCartHandler = () => {
    console.log(currentAmountNumber)
  }

  return (
    <div className='p-[2rem] flex justify-between mt-5 mb-2 ml-2 mr-3 rounded-md border-[2px] border-yellow-200'>
      <div><p className='font-bold text-[18px]'>{fruits.name}</p>
      <p className='text-[13px]'>{fruits.description}</p>
      <p className='font-bold text-[14px] italic'>${fruits.price}</p></div>
      <div>
      <input type='number' className='border border-yellow-300 w-[50px] rounded-sm  focus:outline-none' onChange={(e)=>{
        setCurrentAmount(e.target.value)
      }} min={1} max={5} value={currentAmount}/><br/>
      <button type='button' className='bg-yellow-400 mt-2 p-[3px] rounded-md text-white' onClick={addToCartHandler}>+ADD</button></div>
    </div>
  )
}

export default Card