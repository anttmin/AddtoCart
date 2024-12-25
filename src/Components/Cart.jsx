import React from 'react'
import ItemCard from './ItemCard'
import { useContext } from 'react'
import { itemContent } from '../store/itemContent'

const Cart = (props) => {
    const { items, totalAmount } = useContext(itemContent)
    const totalPrice = `$ ${totalAmount.toFixed(2)}`
    return (

        <section className='p-[2rem]'>
            <h2 className='font-bold'>Carts</h2>
            {
                items.length > 0 ?
                    items.map((item,index) => (
                            <ItemCard key={index} fruit={item} />
                    )) : <span className='text-center block font-[1rem] italic'>Please Fill Valid Value!!</span>
                
            }
            <p className='w-[100%] mt-3 text-center h-[1px] bg-black'></p>
            <div className='flex justify-between items-center'><p className='mt-2'>Total Price:</p>
                <p className='font-bold'>{totalPrice}</p></div>
            <div className='flex justify-end'>
                <button className='border border-yellow-300 text-yellow-300 p-1  rounded-md bg-transparent mr-2 hover:bg-yellow-400 hover:text-white w-[60px]' onClick={props.hideCardHandler}>Close</button>
                {items.length < 1 ? null : <button type='button' className='bg-yellow-300 text-white p-1  w-[60px] rounded-md hover:bg-yellow-400 '>Order</button>}
            </div>
        </section>

    )
}

export default Cart