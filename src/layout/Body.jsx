import React from 'react'
import Card from '../Components/Card'

const Body = () => {
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
    <div className='m-4 '>
      {
        fruits.map((fruit)=>(
          <Card  fruit={fruit} key={fruit.id}/>
        ))
      }
    </div>
  )
}

export default Body