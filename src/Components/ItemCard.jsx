import React from 'react'

const ItemCard = ({fruits}) => {
  return (
    <div className='border border-yellow-400 mt-2 mb-2 p-4 rounded-md'>
       <div className='flex justify-between'>
       <p className='font-bold'>{fruits.name}</p>
       <p className='font-semibold'>{fruits.price}</p>
       </div>
       <div className='flex justify-between'><p>{fruits.description}</p>
       <input type='number' className='InputBox border border-yellow-400 rounded-sm focus:outline-yellow-400 pl-2' min={1} max={5}/></div>
    </div>
  )
}

export default ItemCard