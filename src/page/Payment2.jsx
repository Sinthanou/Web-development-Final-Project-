import React from 'react'
import { useMyContext } from '../context/MyContext'

function Payment2() {
  const {cart} = useMyContext()

  return (
    <div>

        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center justify-center">
              <div className="flex items-center pt-5 pb-5">
                <div className="bg-orange-500 text-white py-2 px-4 rounded-full">
                  Add to cart
                </div>
                <div className="w-14 h-1 bg-orange-500"></div>
              </div>

              <div className="flex items-center">
                <div className="bg-orange-500 text-white py-2 px-4 rounded-full">
                  Information
                </div>
                <div className="w-14 h-1 bg-orange-500"></div>
              </div>

              <div className="flex items-center">
                <div className="bg-orange-500 text-white py-2 px-4 rounded-full">
                  Payment
                </div>
              </div>
            </div>

            <div className="mb-6 mt-6 text-center ">
              <h1 className="text-lg text-black">
                <b>Your order has sent to supplier</b>
              </h1>
              <p className="text-sm text-gray-500">
                You can check your order status at profile
              </p>
            </div>

            <div className="mb-6">
              <h2 className=" font-mediu text-black">
                <b>Shipping address</b>
              </h2>
              <p className="mt-2">Alisa Lattana +8562055225522</p>
              <p>
                Sent to HAL Logistic (Laos, Vientiane capital, thongsangnang
                village)
              </p>
              <a href="#" className="text-blue-500 underline">
                Edit
              </a>
            </div>

            <div className="border-t border-b py-4">
              <h2 className="text-gray-600 font-medium mb-2">Your order</h2>
              <div className="flex flex-col gap-3 h-[200px] overflow-y-auto">
                  {cart.map((order, index) => (
                    <div key={index} className="flex justify-between mb-4 ">
                      <div className="flex">
                        <div>
                          <img
                            className="w-20"
                            src={order.image}
                            alt="Mastercard"
                          />
                        </div>
                        <div className="ps-5">
                          <h4 className="font-semibold text-black">{order.name}</h4>
                          <p className="text-gray-500 text-sm">
                            Lorem Ipsum is simply dummy <br></br>text of the printing
                            and<br></br>
                            typesetting industry.
                          </p>
                        </div>
                      </div>

                      <span className="font-bold mt-16">{order.price}</span>
                    </div>
                  ))}   
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Quantity: 1 Items</span>
                  <span>$99</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping Fee:</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount:</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Price without tax:</span>
                  <span>$89.1</span>
                </div>
                <div className="flex justify-between">
                  <span>VAT included:</span>
                  <span>$99</span>
                </div>
              </div>

              <hr className="pt-4"></hr>
              <div className="flex justify-between font-semibold text-lg mb-6">
                <span className="text-black">Total:</span>
                <span className="text-black">$99</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Payment2