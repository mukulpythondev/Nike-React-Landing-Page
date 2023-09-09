import React from 'react'
import { useState } from 'react';
import brandlogo from '../images/brand_logo.png'
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  
  return (
      <nav className='flex items-center md:justify-between justify-between px-4   md:h-14 md:px-10 '>
         <button onClick={toggleMenu} className={`md:hidden absolute left-4 top-4 text-white text-2xl focus:outline-none ${isMenuOpen ? 'block' : 'hidden'}`}>
<i className="ri-close-line text-black"></i>
</button>
            <img src={brandlogo} className='h-8 mt-3' alt="" />
         <div className={`md:flex ${isMenuOpen ? 'flex-col items-start' : 'hidden'} mt-2 md:mt-0 ml-3`}>
         <ul className='md:flex md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6 cursor-pointer  '>
                <li>MENU</li>
                <li>LOCATION</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
                
            </ul>
         </div>
                    
                     <button onClick={toggleMenu} className={`md:hidden text-white text-2xl focus:outline-none ${isMenuOpen ? 'hidden' : 'block'}`}>
     <i className="ri-menu-5-line md:hidden text-black"></i>
        </button>
            <button className='bg-red-600 text-white hover:scale-95 px-2 py-1 cursor-pointer '>Login</button>
     
      </nav>
  )
}

export default Navbar