import React, { useContext } from 'react'
import { itemContent } from '../store/itemContent'

const ItemCard = ({ fruit }) => {
    const {addItem,removeItem} = useContext(itemContent)
    const addAmountHandler = () => {
        addItem({...fruit,amount:1})

    }

    const removeAmountHandler = () => {
        removeItem(fruit.id)
    }

    return (
        <div className=' p-[1rem] flex justify-between mt-5 mb-2 ml-2 mr-3 rounded-md border-[2px] border-yellow-200 w-[400px]'>
            <div>
                <p className='font-bold text-[18px]'>{fruit.name}</p>
                <p className='text-[13px]'>{fruit.description}</p>
                <p className='font-bold text-[14px] italic'>${fruit.price}</p>
            </div>
            <div>
                <p className='bg-yellow-400 text-white w-[50px] text-center rounded'>{fruit.amount}x</p>
                <button className='bg-yellow-400 mt-2 w-[25px] rounded-sm text-white' onClick={addAmountHandler}>+</button>
                <button className='bg-yellow-400 ml-1 mt-2 w-[25px] rounded-sm text-white' onClick={removeAmountHandler}>-</button>
            </div>
        </div>
    )
}

export default ItemCard