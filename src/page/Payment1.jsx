import React from "react";
import { Link } from "react-router-dom";
import { useMyContext } from "../context/MyContext";

function Payment1() {
  const {cart} = useMyContext()

  return (
    <>
      <div>
        <div className="min-h-screen bg-gray-100 py-10 flex justify-center">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
           
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
              
              <div className="flex items-center justify-center">
              <div className="flex items-center pt-5 pb-5">
                <div className="bg-orange-500 text-white py-2 px-4 rounded-full">
                  Add to cart
                </div>
                <div className="w-14 h-1 bg-orange-500"></div>
              </div>

              <div className="flex items-center  pt-5 pb-5">
                <div className="bg-orange-500 text-white py-2 px-4 rounded-full">
                  Information
                </div>
                <div className="w-14 h-1 bg-gray-300"></div>
              </div>

              <div className="flex items-center">
                <div className="bg-gray-300 text-orange-500 px-4 py-2 rounded-full">
                  Payment
                </div>
              </div>
            </div>

              
              <h2 className="text-black text-2xl font-bold mb-6">
                Shipping & Payment Information
              </h2>

             
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">
                  Shipping address
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-sm bg-white"
                  placeholder="Name, phonenumber, address"
                />
              </div>

            
              <h5 className="text-lg text-black font-semibold mb-4">
                Payment method
              </h5>
              <div className="grid grid-cols-3 gap-2 ">
                <div>
                  <select className="w-60 p-3 border border-gray-300 rounded-md mb-4 bg-white">
                    <option value="mastercard">Mastercard</option>
                    <option value="visa">Visa</option>
                    <option value="paypal">PayPal</option>
                  </select>
                </div>
                <div className="flex items-center space-x-4 mb-6 mt-3 ms-20">
                  <img
                    className="w-10"
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                    alt="Mastercard"
                  />
                  <img
                    className="w-10"
                    src="https://www.pngall.com/wp-content/uploads/2017/05/Visa-Logo-High-Quality-PNG.png"
                    alt="Visa"
                  />
                  <img
                    className="w-10"
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                    alt="PayPal"
                  />
                </div>
              </div>

            
              <div className="grid grid-cols-2">
                <div>
                  <label className="block text-gray-700 mb-2">
                    Name on card
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md bg-white"
                    placeholder="Name on card"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div>
                  <label className="block text-gray-700 mb-2">
                    Card number
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md bg-white"
                    placeholder="xxxx-xxxx-xxxx-xxxx"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="grid grid-cols-6">
                  <div className="col-start-1 col-span-4">
                    <label className="block text-gray-700 mb-2">
                      Expiration date
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-md bg-white"
                      placeholder="mm/yy"
                    />
                  </div>

                  <div className="col-end-7 col-span-2 ps-1">
                    <label className="block text-gray-700 mb-2 ">
                      Security
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-md bg-white "
                      placeholder="CVV"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-[25%]">
                <Link to={"/payment-2"}>
                  <button className="bg-[#FC7135] px-4 py-3 rounded-lg text-white">Next</button>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm h-auto">
              <h3 className="text-lg text-black  mb-6">
                <b>Your order</b>
              </h3>
              <div className="flex flex-col gap-3 overflow-y-auto h-[300px]">
                {cart.map((order, index) => (               
                  <div key={index} className="flex justify-between mb-4 ">
                    <div className="flex">
                      <div>
                        <img
                          className="w-40"
                          src={order.image}
                          alt="Mastercard"
                        />
                      </div>
                      <div className="ps-5">
                        <h4 className="font-semibold text-black">{order.name}</h4>
                        <p className="text-gray-500 text-sm">
                          Lorem Ipsum is simply dummy text of the printing and
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
              <h4 className="text-black pb-1">Using Promo code?</h4>
              <div className="flex space-x-2 mb-4">
                <input
                  type="text"
                  className="w-full p-3 border bg-white border-gray-300 rounded-sm"
                  placeholder="Promo code"
                />
                <button className="bg-orange-500 text-white px-4 py-3 rounded-sm">
                  USE
                </button>
              </div>

              <p className="text-sm text-gray-500 mb-4">
                Please check your information before checkout.
              </p>

              <button className="w-full bg-orange-500 text-white py-3 rounded-sm">
                CHECK OUT
              </button>
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
}

export default  Payment1;
