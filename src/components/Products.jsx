import React, { useState } from 'react'
import Logos from '../assets/image/Logos.png'
import Iphone16Blue from '../assets/image/New Products/Iphone-16-blue.png'
import Iphone16ProMax from '../assets/image/New Products/Iphone-16-pro-max-bleck.png'
import NikeAirForce1 from '../assets/image/New Products/Nike-air-force-1.png'
import DjiRS4Pro from '../assets/image/New Products/Dji-RS4-pro.png'
import camera1 from '../assets/image/Camera/IMG_5092.png'
import camera2 from '../assets/image/Camera/IMG_5094.png'
import camera3 from '../assets/image/Camera/IMG_5096.png'
import camera4 from '../assets/image/Camera/IMG_5097.png'
import computer1 from '../assets/image/Computer/IMG_5074.png'
import computer2 from '../assets/image/Computer/IMG_5075.png'
import computer3 from '../assets/image/Computer/IMG_5076.png'
import computer4 from '../assets/image/Computer/IMG_5077.png'
import fashionBeauty1 from '../assets/image/Fashion & beauty/IMG_5042.png'
import fashionBeauty2 from '../assets/image/Fashion & beauty/IMG_5046.png'
import fashionBeauty3 from '../assets/image/Fashion & beauty/IMG_5053.png'
import fashionBeauty4 from '../assets/image/Fashion & beauty/IMG_5055.png'
import healthPerCare1 from '../assets/image/Health & Personal care/IMG_4992.png'
import healthPerCare2 from '../assets/image/Health & Personal care/IMG_4994.png'
import healthPerCare3 from '../assets/image/Health & Personal care/IMG_4998.png'
import healthPerCare4 from '../assets/image/Health & Personal care/IMG_5009.png'
import industrial1 from '../assets/image/Industrial/IMG_5017.png'
import industrial2 from '../assets/image/Industrial/IMG_5019.png'
import industrial3 from '../assets/image/Industrial/IMG_5020.png'
import industrial4 from '../assets/image/Industrial/IMG_5021.png'
import phone1 from '../assets/image/Phone/IMG_5059.png'
import phone2 from '../assets/image/Phone/IMG_5060.png'
import phone3 from '../assets/image/Phone/IMG_5061.png'
import phone4 from '../assets/image/Phone/IMG_5062.png'
import { useMyContext } from '../context/MyContext'
import { useNavigate } from 'react-router-dom'

function Products() {
  const { setProductDetail, cart, setCart } = useMyContext()
  const [categories, setCategories] = useState([
    {
      name: "All products",
      select: false,
      type: "AllProducts"
    },
    {
      name: "New added",
      select: false,
      type: "newProduct"
    },
    {
      name: "Home decoration",
      select: false
    },
    {
      name: "Health & Personal care",
      select: false,
      type: "healthPerCare"
    },
    {
      name: "Industrial",
      select: false,
      type: "industrial"
    },
    {
      name: "Fashion & Beauty",
      select: false,
      type: "Fas & Beau"
    },
    {
      name: "Phone",
      select: false,
      type: "phone"
    },
    {
      name: "Computer",
      select: false,
      type: "computer"
    },
    {
      name: "Camera Tool",
      select: false,
      type: "camera"
    },
  ])
  const [allProducts, setAllProducts] = useState([
    // New Products
    {
      id: 1,
      image: Iphone16Blue,
      name: "Apple Iphone 16",
      price: "$799",
      type: "newProduct"
    },
    {
      id: 2,
      image: Iphone16ProMax,
      name: "Apple Iphone 16 Pro max",
      price: "$1.199",
      type: "newProduct"
    },
    {
      id: 3,
      image: NikeAirForce1,
      name: "Nike Air Force 1",
      price: "$99",
      type: "newProduct"
    },
    {
      id: 4,
      image: DjiRS4Pro,
      name: "Dji RS4 Pro",
      price: "$869",
      type: "newProduct"
    },
    // Camera
    {
      id: 5,
      image: camera1,
      name: "Camera",
      price: "$599",
      type: "camera"
    },
    {
      id: 6,
      image: camera2,
      name: "Camera",
      price: "$599",
      type: "camera"
    },
    {
      id: 7,
      image: camera3,
      name: "Camera",
      price: "$599",
      type: "camera"
    },
    {
      id: 8,
      image: camera4,
      name: "Camera",
      price: "$599",
      type: "camera"
    },
    // Computer
    {
      id: 9,
      image: computer1,
      name: "Computer",
      price: "$1999",
      type: "computer"
    },
    {
      id: 10,
      image: computer2,
      name: "Computer",
      price: "$1999",
      type: "computer"
    },
    {
      id: 11,
      image: computer3,
      name: "Computer",
      price: "$1999",
      type: "computer"
    },
    {
      id: 12,
      image: computer4,
      name: "Computer",
      price: "$1999",
      type: "computer"
    },
    // Fashion & beauty
    {
      id: 13,
      image: fashionBeauty1,
      name: "Fashion & Beauty",
      price: "$99",
      type: "Fas & Beau"
    },
    {
      id: 14,
      image: fashionBeauty2,
      name: "Fashion & Beauty",
      price: "$99",
      type: "Fas & Beau"
    },
    {
      id: 15,
      image: fashionBeauty3,
      name: "Fashion & Beauty",
      price: "$99",
      type: "Fas & Beau"
    },
    {
      id: 16,
      image: fashionBeauty4,
      name: "Fashion & Beauty",
      price: "$99",
      type: "Fas & Beau"
    },
    // Health & Personal care
    {
      id: 17,
      image: healthPerCare1,
      name: "Health & Personal Care",
      price: "$59",
      type: "healthPerCare"
    },
    {
      id: 18,
      image: healthPerCare2,
      name: "Health & Personal Care",
      price: "$59",
      type: "healthPerCare"
    },
    {
      id: 19,
      image: healthPerCare3,
      name: "Health & Personal Care",
      price: "$59",
      type: "healthPerCare"
    },
    {
      id: 20,
      image: healthPerCare4,
      name: "Health & Personal Care",
      price: "$59",
      type: "healthPerCare"
    },
    // Industrial
    {
      id: 21,
      image: industrial1,
      name: "Industrial",
      price: "$299",
      type: "industrial"
    },
    {
      id: 22,
      image: industrial2,
      name: "Industrial",
      price: "$299",
      type: "industrial"
    },
    {
      id: 23,
      image: industrial3,
      name: "Industrial",
      price: "$299",
      type: "industrial"
    },
    {
      id: 24,
      image: industrial4,
      name: "Industrial",
      price: "$299",
      type: "industrial"
    },
    // Phone
    {
      id: 25,
      image: phone1,
      name: "Phone",
      price: "$1899",
      type: "phone"
    },
    {
      id: 26,
      image: phone2,
      name: "Phone",
      price: "$1899",
      type: "phone"
    },
    {
      id: 27,
      image: phone3,
      name: "Phone",
      price: "$1899",
      type: "phone"
    },
    {
      id: 28,
      image: phone4,
      name: "Phone",
      price: "$1899",
      type: "phone"
    },
  ])
  const [displayProducts, setDisplayProducts] = useState(allProducts)
  const [productHeader,setProductHeader] = useState("All products")
  const repeatedProducts = Array(2).fill(displayProducts).flat()
  const navigate = useNavigate()

  const handleSelect = (index_) => {
    const selected = categories.map((category, index) =>
      index_ === index ? { ...category, select: true } : { ...category, select: false }
    )
    setCategories(selected)
  }

  const fillterProducts = (type) => {
    if (type === "AllProducts") {
      setDisplayProducts(allProducts)
    } else {
      const productsFitter = allProducts.filter((product) => {
        return product.type === type
      })
      setDisplayProducts(productsFitter)
    }
  }

  const sendProductDetail = (id_) => {
    const productDetail = allProducts.filter((product) => {
      return id_ === product.id
    })

    setProductDetail(productDetail)
    navigate("/product-detail")
  }

  const addToCart = (id_) => {
    const orderProduct = allProducts.find((product) => {
      return id_ === product.id
    })
    setCart([...cart, orderProduct])
  }

  return (
    <>
      <div className="bg-gradient-to-t from-[#FCFCFC] to-[#F5F0F0] min-h-full h-auto pt-10 pl-40">
        <div className="flex items-start gap-10">


          <div className="bg-white px-5 py-2 w-[300px]">
            <h1 className='text-lg font-bold text-center border-b border-black pb-1'>Categories</h1>
            <div className="flex flex-col gap-2 py-5">
              {categories.map((category, index) => (
                <p key={index} onClick={() => {
                  handleSelect(index)
                  fillterProducts(category.type)
                  setProductHeader(category.name)
                }} className={`${category.select ? "bg-[#F5F0F0]" : "bg-none"} p-2 cursor-pointer transition-colors`}>{category.name}</p>
              ))}
            </div>
          </div>


          <div className="">
            <div className="bg-white py-3 px-12 shadow-md flex justify-center">
              <div className="">
                <div className="">
                  <img src={Logos} alt="Logos" width={"950px"} />
                </div>
              </div>
            </div>
            <h1 className='text-5xl font-bold py-5 w-full'>{productHeader}</h1>
            <div className="grid grid-cols-4 gap-5 h-[1180px] overflow-y-auto scrollbar-hide">
              {repeatedProducts.map((product, index) => (
                <div key={index} className="bg-white rounded-md p-5 w-[250px] shadow-md">
                  <div className="w-full h-[256px] pb-5 overflow-hidden flex justify-center">
                    <img onClick={() => sendProductDetail(product.id)} src={product.image} alt="" className='h-full w-full cursor-pointer' />
                  </div>
                  <h2 className='text-lg mb-5'>{product.name}</h2>
                  <div className="flex items-center justify-between gap-3">
                    <div className="">
                      <p className='text-green-500'>In Stock</p>
                      <p className='bg-red-500 text-white text-sm px-3'>New</p>
                    </div>
                    <button onClick={() => addToCart(product.id)} className='bg-[#FC7135] w-10 h-10 rounded-lg text-white font-medium active:scale-90 transition-all'>+</button>
                  </div>
                  <p className='text-xl font-bold'>{product.price}</p>
                  <p className='text-sm mb-5'>Free Shopping</p>
                  <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ab. Nulla maiores eum distinctio mollitia aliquid magni quasi libero qui porro, tempore in, minima corrupti debitis earum! Officiis, eum delectus?</p>
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default Products
