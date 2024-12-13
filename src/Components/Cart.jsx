import React from 'react'
import ItemCard from './ItemCard'

const Cart = (props) => {
    let fruits = [
        {
            id: 1,
            price: 6.89,
            name: 'orange',
            description: 'fresh orange from thailand'
        },
        {
            id: 2,
            price: 6.12,
            name: 'banana',
            description: 'fresh banana from thailand'
        },
        {
            id: 3,
            price: 6.80,
            name: 'piapple',
            description: 'fresh piapple from thailand'
        },
        {
            id: 4,
            price: 6.20,
            name: 'cava',
            description: 'fresh cava from thailand'
        },
        {
            id: 5,
            price: 6.12,
            name: 'papaya',
            description: 'fresh papaya from thailand'
        },
    ]
    return (
        <>
            <div className='p-[2rem] '>
                <h2 className='font-bold'>Carts</h2>
                {
                    fruits.map((fruits) => (
                        <ItemCard fruits={fruits} key={fruits.id} />
                    ))
                }
                <p className='w-[100%] mt-3 text-center h-[1px] bg-black'></p>
                <div className='flex justify-between items-center'><p className='mt-2'>Total Price:</p>
                <p className='font-bold'>$ 300,000</p></div>
                <div className='flex justify-end'>    
                    <button className='border border-yellow-300 text-yellow-300 p-1  rounded-md bg-transparent mr-2 hover:bg-yellow-400 hover:text-white w-[60px]' onClick={props.hideCardHandler}>Close</button>
                    <button className='bg-yellow-300 text-white p-1  w-[60px] rounded-md hover:bg-yellow-400 '>Order</button>
                </div>
            </div>
        </>
    )
}

export default Cart