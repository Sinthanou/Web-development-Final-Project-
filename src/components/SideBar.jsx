import React, { useState } from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { FaRegTrashAlt } from "react-icons/fa";
import { useMyContext } from '../context/MyContext';
import { Link } from 'react-router-dom';

function SideBar() {
  const { sideBar, setSideBar, cart } = useMyContext()

  const [cartData, setCartData] = useState(cart)

  return (
    <>
      <div className="bg-[#00000072] w-full z-50 h-screen fixed flex justify-end">
        <div className="flex flex-col justify-between bg-white w-1/4 h-screen p-10">

          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button className='bg-[#FC7135] text-white px-6 py-2 rounded-md'>Your cart</button>
                <MdOutlineShoppingCart className='text-2xl' />
              </div>
              <RxCross1 onClick={() => setSideBar(!sideBar)} className='text-3xl cursor-pointer' />
            </div>
            <p>1 Item</p>
            <div className="flex flex-col gap-5 overflow-y-auto h-[550px]">
              {cartData.map((cart, index) => (
                <div key={index} className="flex items-center gap-5">
                  <img className='w-20 h-20 object-cover' src={cart.image} alt="" />
                  <div className="font-medium text-sm w-44">
                    <p>{cart.name}</p>
                    <p className='font-light text-xs text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, architecto.</p>
                    <p>3-4 Days</p>
                  </div>
                  <div className="font-bold flex flex-col items-center justify-between h-full border-r-2 border-black w-[100px]">
                    <p>{cart.price}</p>
                    <FaRegTrashAlt />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className='text-xl font-medium'>Order Summary </h2>
            <div className="*:flex *:items-center *:justify-between flex flex-col gap-2">
              <div className="">
                <p className='text-gray-400'>Subtotal (1 items):</p>
                <p>99$</p>
              </div>
              <div className="">
                <p className='text-gray-400'>Shipping Fee</p>
                <p>0.00$</p>
              </div>
              <div className="">
                <p className='text-xl font-medium'>Total</p>
                <p>99$</p>
              </div>
            </div>
            <Link to={"/payment-1"}>
              <button onClick={() => setSideBar(!sideBar)}  className='w-full py-2 bg-[#FC7135] text-white font-medium rounded-lg'>PROCESS TO CHECKOUT</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideBar
