import React from 'react'
import './Header.css'
import 'antd/dist/antd.css'
import { Button } from 'antd'
import Logo from './estLogoC.png'

function Header() {
  return (
    <div className='MainHeaderDiv'>
      <div className='SubHeaderdiv'>
        <img src={Logo} alt='' className='LogoDiv' />
        <Button >Become An Agent</Button>
      </div>
    </div>
  )
}

export default Header
