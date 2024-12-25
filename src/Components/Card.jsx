import React, { useContext, useState } from 'react'
import { itemContent } from '../store/itemContent'

const Card = ({fruit}) => {
  const {id,name,price,description} = fruit

  const {addItem} = useContext(itemContent);


  const [currentAmount, setCurrentAmount] = useState(1);
  const currentAmountNumber = +currentAmount;

let addToCartHandler = () => {
if(currentAmountNumber<1||currentAmountNumber>5){
   alert('please fill valid value')
   return;
}
addItem({
  id,
  name,
  price,
  amount:currentAmountNumber
})
}
  
  return (
    <div className='p-[2rem] flex justify-between mt-5 mb-2 ml-2 mr-3 rounded-md border-[2px] border-yellow-200'>
      <div><p className='font-bold text-[18px]'>{name}</p>
      <p className='text-[13px]'>{description}</p>
      <p className='font-bold text-[14px] italic'>${price}</p></div>
      <div>
       <input type='number' className='w-10 outline-none border p-1'  value={currentAmount} onChange={(e)=>{
        setCurrentAmount(e.target.value)

      }}/>
      <br/>
      <button type='submit' className='bg-yellow-400 mt-2 p-[3px] rounded-md text-white' onClick={addToCartHandler}>+ADD</button></div>
    </div>
  )
}

export default Card

//onClick mar we need only key for 'addToCartHandler' addToCartHandler function
//addItem is one method so we can add like this '({})' 