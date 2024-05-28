
import React from 'react'
import Image from 'next/image'
import about from "../../../public/images/about.png"

const page = () => {
  return (
    <div>
     <div className="hero min-h-screen bg-black opacity-2">
  <div className="hero-content flex-col lg:flex-row-reverse">
  <Image alt='image' width={800}  height={700} src={about} className="max-w-sm rounded-lg shadow-2xl" />
     
    <div className='p-14'>
      <h1 className="text-5xl text-white font-bold">About Us</h1>
      <p className="py-12 text-justify text-yellow-500">Welcome to our DevStore! We are dedicated to providing our customers with a diverse selection of high-quality laptops that cater to all needs and budgets. Whether you're a student, a professional, or a gaming enthusiast, our curated collection features the latest models from top brands, ensuring you have access to the best technology available. Our mission is to make your shopping experience seamless and enjoyable with detailed product descriptions, competitive pricing, and exceptional customer service. At Buy Laptop Store Online, your satisfaction is our priority, and we strive to be your trusted partner in finding the perfect laptop to meet your demands. Thank you for choosing us for your technology needs!</p>
      <button className="btn bg-yellow-500 text-white hover:bg-yellow-300 hover:text-black">Learn More</button>
      
    </div>
  </div>
</div>
    </div>
  )
}

export default page