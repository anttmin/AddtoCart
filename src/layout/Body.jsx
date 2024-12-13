import React from 'react'
import Card from '../Components/Card.jsx'

const Body = (props) => {
  let fruits = [
    {
      id :1,
      price: 6.89,
      name : 'orange',
      description : 'fresh orange from thailand'
    },
    {
      id :2,
      price: 6.12,
      name : 'banana',
      description : 'fresh banana from thailand'
    },
    {
      id :3,
      price: 6.80,
      name : 'piapple',
      description : 'fresh piapple from thailand'
    },
    {
      id :4,
      price: 6.20,
      name : 'cava',
      description : 'fresh cava from thailand'
    },
    {
      id :5,
      price: 6.12,
      name : 'papaya',
      description : 'fresh papaya from thailand'
    },
  ]
  
  return (
    
    <div>

        {
          fruits.map((fruits)=>(
            <Card fruits={fruits} key={fruits.id}/>
          ))
        }
    </div>
  )
}

export default Body