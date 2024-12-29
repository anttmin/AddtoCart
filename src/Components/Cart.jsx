import React from 'react'
import ItemCard from './ItemCard'

const Cart = () => {
  let fruits = [
    {
      id : 1,
      name : 'Apple',
      price : 20.2,
      description : 'Best fruit in Myanmar'
    },
    {
      id : 2,
      name : 'Orange',
      price : 22.2,
      description : 'Best fruit in Myanmar'
    },
    {
      id : 3,
      name : 'Piapple',
      price : 10.2,
      description : 'Best fruit in Myanmar'
    },
    {
      id : 4,
      name : 'Greatefruit',
      price : 12.2,
      description : 'Best fruit in Myanmar'
    },
    {
      id : 5,
      name : 'Durin',
      price : 18.2,
      description : 'Best fruit in Myanmar'
    }
  ]
  return (
    <div className='flex justify-center items-center h-[100vh]'>
      <div className='bg-white p-[2rem] w-[450px] h-[400px] rounded-lg  overflow-scroll'>
      <h2 className='font-bold text-2xl'>Cart</h2>
     {
      fruits.map((fruit)=>(
        <ItemCard  fruits={fruit} key={fruit.id}/>
      ))
     }
     
     <div className='flex justify-between'><p>Total Price:</p>
      <p className='font-bold'>$3000000</p>
    </div>

    <div className='flex justify-end mt-3'>
      <button className='bg-yellow-300 p-1 rounded-md text-white mr-2 hover:bg-yellow-400'>Close</button>
      <button className='bg-yellow-300 p-1 rounded-md text-white  hover:bg-yellow-400'>Order</button>
    </div>
    </div>
    </div>
    
  )
}

export default Cart