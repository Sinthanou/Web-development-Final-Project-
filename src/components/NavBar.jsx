import React from 'react'
import { FiSearch } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useMyContext } from '../context/MyContext';
import icon from '../assets/image/Icon.png'
import { Link } from 'react-router-dom';


function NavBar() {
    const {sideBar, setSideBar, cart} = useMyContext()

  return (
    <>
            
        <div className="bg-white px-40 pt-5">


            <div className="flex items-center justify-between">
                <div className="">
                    <Link to={"/home"}>
                        <img src={icon} alt="" width={"150px"} className=' cursor-pointer'/>
                    </Link>
                </div>
                <div className="border border-black rounded-3xl w-[785px] p-1">
                    <div className="flex items-center justify-between">
                        <div className="">
                            <select name="" id="" className=' rounded-xl text-gray-400 px-3'>
                                <option value="">Products</option>
                            </select>
                            <input className='border-l-2 border-gray-300 ml-3 pl-2' type="text" placeholder='What are you looking for?'/>
                        </div>
                        <button className='bg-[#FC7135] rounded-2xl px-7 py-1 text-white flex items-center gap-2'>
                            <FiSearch className='text-xl'/>
                            <p>Search</p>
                        </button>
                    </div>
                </div>
                <div className="flex items-center gap-10">
                    <div className="flex items-center gap-3">
                        <TfiWorld className='text-2xl'/>
                        <p>English-USD</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaRegUser className='text-xl'/>
                        <p>Sing in</p>
                    </div>
                    <button onClick={() => setSideBar(!sideBar)} className='bg-[#FC7135] text-white text-2xl rounded-2xl px-6 py-1 relative'>
                        <div className="w-5 h-5 rounded-full text-sm bg-[#FF2F2F] absolute -right-2 -top-2">{cart.length}</div>
                        <MdOutlineShoppingCart/>
                    </button>
                </div>
            </div>


            <div className="flex justify-between items-center py-5 pt-5">
                <div className="flex gap-5">
                    <p>All categories</p>
                    <p>Feature selection</p>
                    <p>Trade Assurance</p>
                </div>
                <div className="flex gap-5">
                    <p>Help Center</p>
                    <p>Get the App</p>
                    <p>Become a supplier</p>
                </div>
            </div>


        </div>
    </>
  )
}

export default NavBar
