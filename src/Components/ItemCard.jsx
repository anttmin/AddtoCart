import React from 'react'

const ItemCard = ({ fruits }) => {
    return (
        <div className=' p-[1rem] flex justify-between mt-5 mb-2 ml-2 mr-3 rounded-md border-[2px] border-yellow-200 w-[400px]'>
            <div>
                <p className='font-bold text-[18px]'>{fruits.name}</p>
                <p className='text-[13px]'>{fruits.description}</p>
                <p className='font-bold text-[14px] italic'>${fruits.price}</p>
            </div>
            <div>
                <p className='bg-yellow-400 text-white w-[50px] text-center rounded'>1x</p>
                <button className='bg-yellow-400 mt-2 w-[25px] rounded-sm text-white'>+</button>
                <button className='bg-yellow-400 ml-1 mt-2 w-[25px] rounded-sm text-white'>-</button>
            </div>
        </div>
    )
}

export default ItemCard