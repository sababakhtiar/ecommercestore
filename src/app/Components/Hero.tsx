
import React from 'react'
import Image from 'next/image'
import HeroImg from '../../../public/images/hero.jpg'

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-black opacity-2">
    <div className="hero-content flex-col lg:flex-row">
      <Image alt='image' width={450}  height={350} src={HeroImg} className="max-w-sm rounded-lg shadow-2xl" />
     
      <div>
        <h1 className="text-5xl font-bold text-white">Buy Laptops</h1>
        <p className="py-6 text-yellow-500">"Discover the latest laptops with unbeatable performance and sleek designs. Shop now and elevate your computing experience at unbeatable prices!".</p>
        <button className="btn bg-yellow-500 text-white hover:bg-yellow-300 hover:text-black">Get Started</button>
      
      </div>
    </div>
  </div>
  )
}

export default Hero