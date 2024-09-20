import React from 'react'
import { IoMdStar } from "react-icons/io"
import { BsChatRightText } from "react-icons/bs"
import { useMyContext } from '../context/MyContext'

function ProductDetail() {
    const { productDetail } = useMyContext()

    return (
        <>
            <div className="bg-gradient-to-t from-[#FCFCFC] to-[#F5F0F0] min-h-full h-auto pt-7 pl-40">
                <div className="flex gap-40">

                    <div className="flex flex-col gap-5 font-medium">
                        <div className="">
                            <div className="flex items-center">
                                <div className="bg-[#FC3535] w-10 text-center font-medium text-white text-sm">
                                    50%
                                </div>
                                <div className="w-0 h-0 border-l-[#FC3535] border-l-[12px] border-t-[10px] border-b-[10px] border-transparent"></div>
                                <p className='ml-3 text-xl'>{productDetail[0].name}</p>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            {Array(5).fill().map((_, index) => (
                                <IoMdStar key={index} className='text-[#FC7135] text-lg' />
                            ))}
                            <div className='flex items-center'>
                                <p>5.0</p>
                                <p className='underline'>(2 review)</p>
                                <p>.16 sold.</p>
                                <p className='underline'>#1Most popular in laos</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 bg-[#ff8e5e8a] p-1.5">
                            <div className="text-center bg-white text-xs rounded-sm p-0.5 shadow-sm shadow-gray-600">
                                <p>Laolao</p>
                                <p>shop</p>
                            </div>
                            <p className='underline'>Laolao shop. & Exp.Co.Ltd</p>
                            <img src="https://laostravel.com/images/2020/12/flag-of-laos-1975-to-present.jpg" alt="" className='w-[40px] rounded-md' />
                        </div>
                        <div className="mt-5 mb-14 flex items-center gap-10">
                            <div className="flex flex-col gap-5">
                                {Array(5).fill().map((_, index) => (
                                    <img key={index} src={productDetail[0].image} alt="" className='w-20 rounded-xl ' />
                                ))}
                            </div>
                            <div className="flex items-center justify-center w-[560px] bg-[#D9D9D9] rounded-lg">
                                <img src={productDetail[0].image} alt="" className='w-[488px]' />
                            </div>
                        </div>
                    </div>

                    <div className="shadow-lg shadow-gray-400 w-[550px]">
                        <div className="bg-[#ff8e5e8a] flex items-center gap-3">
                            <div className="flex items-center">
                                <div className="bg-[#FC3535] relative text-sm font-bold italic py-0.5 px-1 text-white ">
                                    <div className="w-3 h-3 bg-white rounded-full absolute top-[37%] -right-2"></div>
                                    <p>SUPER</p>
                                    <p>SEPTEMBER</p>
                                </div>
                                <div className="w-0 h-0 border-l-[#FC3535] border-l-[30px] border-t-[22px] border-b-[22px] border-transparent"></div>
                            </div>
                            <p className='font-bold flex gap-1'>FREE shipping <p className='text-gray-500 font-medium'>capped at US $20</p></p>
                        </div>
                        <div className="bg-white py-5 px-7">
                            <h2 className='font-bold text-2xl border-b-2 pb-3'>3-4 Days Shipping process</h2>
                            <div className="py-5 border-b-2">
                                <p className='text-gray-500 font-medium'>Price</p>
                                <p className='text-2xl font-medium'>{productDetail[0].price}</p>
                            </div>
                            <h1 className='font-bold text-2xl'>Variation</h1>
                            <div className="flex justify-between py-5">
                                <p>Total option: 5 Type, 4 Size</p>
                                <p className='font-medium underline'>Select now</p>
                            </div>
                            <p>1. Type(5):</p>
                            <div className="flex gap-4 pl-5 py-5">
                                {Array(5).fill().map((_, index) => (
                                    <img key={index} src={productDetail[0].image} alt="" className='w-14 rounded-xl ' />
                                ))}
                            </div>
                            <p>2. Size(4):</p>
                            <div className="flex pl-5 py-5 gap-5">
                                <div className="bg-gray-200 px-2 rounded-xl">26x17</div>
                                <div className="bg-gray-200 px-2 rounded-xl">29x29</div>
                                <div className="bg-gray-200 px-2 rounded-xl">31x15</div>
                                <div className="bg-gray-200 px-2 rounded-xl">36x30</div>
                            </div>
                            <div className="flex items-center gap-5">
                                <button className='py-3 px-16 rounded-3xl bg-[#FC7135] text-white'>Start order</button>
                                <button className='p-2 border border-black rounded-full text-xl'><BsChatRightText /></button>
                            </div>
                            <div className='flex items-center text-lg py-5 border-b-2'>
                                <p>Still deciding? Get sample first!</p>
                                <p className='underline'>Order sample</p>
                            </div>
                            <div className='flex items-center gap-1 mt-3'>
                                <p className='font-bold text-blue-900 italic'>Paypal</p>
                                <p> Buy now, pay later.</p>
                                <p className='underline'>Learn more</p>
                            </div>
                            <div className="flex items-center gap-2 py-3">
                                <p className='bg-[#FC7135] px-3 rounded-xl text-white'>afterpay</p>
                                <div className='flex items-center'>
                                    <p >Pay in 4 interest-free payments. </p>
                                    <p className='underline'>Learn much</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default ProductDetail;
