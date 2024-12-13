import React, { useState } from 'react'
import Header from './Header'
import Body from './Body'
import Backdrop from '../Components/Backdrop'

const Main = () => {
  let [showCard,setShowcard] = useState(false)

  let showCardHandler = () =>{
      setShowcard(true)
  }

  let hideCardHandler = () =>{
    setShowcard(false)
  }

  return (
    <div className='overflow-x-hidden'>
        <Header showCardHandler={showCardHandler}/>
        <Body hideCardHandler={hideCardHandler}/>
        <Backdrop showCard={showCard} hideCardHandler={hideCardHandler}/>
    </div>
  )
}

export default Main