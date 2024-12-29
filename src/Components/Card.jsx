import React from 'react'

const Card = ({fruit}) => {
  return (
    <div className='border-[2px] border-yellow-300 mt-3 p-4 rounded-md'>
     <div className='flex justify-between mb-2 mt-2'>
      <p className='font-bold'>{fruit.name}</p>
      <input type='number' className='InputBox border border-yellow-400 rounded-sm focus:outline-yellow-400 pl-2' min={1} max={5}/>
      </div>
     <div className='flex justify-between'><p>{fruit.description}</p>
      <button className='bg-yellow-400 text-white rounded-md p-1'>Add+</button></div>
      <p className='font-bold'>${fruit.price}</p>
    </div>
  )
}

export default Card