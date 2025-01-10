import React from 'react'
import {assets} from '../assets/assets'
const NavBar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
        <img src={assets.logo} alt='Logo'></img>
    </div>
  )
}

export default NavBar