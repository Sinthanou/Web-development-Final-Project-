import React from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar';
import { useMyContext } from '../context/MyContext';

function Header() {
  const {sideBar} = useMyContext()

  return (
    <>
      <div className="bg-gradient-to-r from-[#FC7135] to-[#FF8F5E] pb-7 relative">
        {sideBar ? (<SideBar />) : null}
        <div className="flex items-center justify-between px-40 h-[51px] text-white">
          <div className="flex items-center gap-3 border-r border-[#0000004c] pr-5">
            <div className="flex items-center">
              <div className="bg-[#FC3535] w-12 text-center font-medium">
                50%
              </div>
              <div className="w-0 h-0 border-l-[#FC3535] border-l-[14px] border-t-[12px] border-b-[12px] border-transparent"></div>
            </div>
            <p className='font-bold'>SUPER SAVER</p>
          </div>
          <div className="">
            <p>Get a thousand of product within 50% Off in this September</p>
          </div>
        </div>
        <NavBar />
      </div>
    </>
  )
}

export default Header
