import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, logored, menu, close } from '../assets'



const Navbar = () => {
  const { active, setActive } = useState("")
  return (
    <nav 
      className={`${styles.paddingX} w-full flex items-center py-5 top-0 z-20 bg-primary`}
      > 
        <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
          <Link to='/' className='flex items-center gap-2' onClick={()=> {
            setActive("")
            window.scrollTo(0, 0)
            }}
          >
            <img src={logored} alt="logo-color" className='w-9 h-9 object-contain' />
            <p>Shkelzen Dunisha <span>|Javascript Mastery</span></p>
          </Link>
        </div>
      </nav>
  )
}

export default Navbar