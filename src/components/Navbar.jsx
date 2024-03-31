import React, {useState} from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Navbar = () => {

  const navLinks = ['Home', 'Market', 'Explore', 'Exhibition', 'Artists and Collectors'
  ]

  const [nav, setNav] = useState(false)

  const toggleNav= () => {
    setNav((prev) => {
      return !prev
    })
  }

  return (
    <nav className='p-4 bg-slate-900 text-white'>    
      <div className='container mx-auto max-w-screen-xl relative'>
        {/*flex container*/}
        <div className='flex justify-between items-center text-white'>
          {/* logo */}
          <a href="/" className='text-2xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-red-400 to-orange-600'>
            <span>NFT </span>Market.
          </a>

          {/* Menu Items */}
          <div className='hidden lg:flex space-x-6 items-center'>
            {
            navLinks.map((navItem, index) => (
              <a key={index} className='hover:text-indigo-600 duration-200 ease-in-out'> {navItem}</a>
               
            ))
            }

            <button className='px-5  rounded-md font-medium border-indigo-600 py-2 bg-indigo-600 hover:bg-indigo-700 hover:border-indigo-700'>Connect Wallet</button>
          </div>


            {/* Hamburger menu for smaller devices */}
            <div className='lg:hidden ' onClick={toggleNav}>
              <nav>
                {
                  nav ? <IoClose  size={28} className='text-white'/> : <RxHamburgerMenu size={25} />
                }
              </nav>
            </div>

              {/* Mobile Menu */}
              {
              nav && <div className='absolute top-14 bg-gradient-to-r from-rose-400 via-fuchsia-400 to-indigo-500 w-full px-28 py-8 rounded-lg'>
                 <div className=' space-x-6 flex flex-col items-center'>
                    {
                    navLinks.map((navItem, index) => (
                        <a key={index} className='hover:text-indigo-600 duration-200 ease-in-out'>{navItem}</a>
                        
                      ))
                    }

                    <button className='px-5  rounded-md font-medium border-indigo-600 py-2 bg-indigo-600 hover:bg-indigo-700 hover:border-indigo-700'>Connect Wallet</button>
                  </div>
              </div>
              }


           
        </div>
      </div>
    </nav>


  

  )
}

export default Navbar
