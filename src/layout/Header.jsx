import React from 'react'
import Nav from '../Components/Nav'
import Summary from '../Components/Summary'

const Header = (props) => {
  return (
    <div className='p-[2rem]'>
        <Nav showCardHandler={props.showCardHandler}/>
        <Summary />
    </div>
  )
}

export default Header