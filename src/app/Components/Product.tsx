import React from 'react'
import Image from 'next/image'
import laptop4 from "../../../public/images/laptop4.png"
import laptop5 from "../../../public/images/laptop5 (2).jpg"
import laptop6 from "../../../public/images/laptop6.jpg"
const Products = () => {
  return (
    <div className='  bg-black '>
   
    <div className='p-10 flex justify-between '>
      <div className="card w-96  bg-black text-white shadow-xl image-full">
  <figure><Image src={laptop4}  alt='image' width={450}  height={350}/></figure>
  <div className="card-body">
    <h2 className="card-title">Surface Laptop 4</h2>
    <p>Elegant design perfect for productivity and entertainment.</p>
    <div className="card-actions justify-end">
    <button className="btn bg-yellow-500 text-white hover:bg-yellow-300 hover:text-black">Buy Now</button>
      
    </div>
  </div>
  
</div>
<div className=" card w-96 bg-black text-white shadow-xl image-full">
  <figure><Image src={laptop5} alt="Shoes" width={450}  height={350} /></figure>
  <div className="card-body">
    <h2 className="card-title">ThinkPad X1 Carbon</h2>
    <p>Durable business laptop with a superior keyboard.</p>
    <div className="card-actions justify-end">
    <button className="btn bg-yellow-500 text-white hover:bg-yellow-300 hover:text-black">Buy Now</button>
      
    </div>
  </div>
</div>
<div className=" card w-96 bg-black text-white shadow-xl image-full">
  <figure><Image src={laptop6} alt="Shoes" width={450}  height={350} /></figure>
  <div className="card-body">
    <h2 className="card-title">Asus Zephyrus G14</h2>
    <p>Compact gaming powerhouse for performance on the go.</p>
    <div className="card-actions justify-end">
    <button className="btn bg-yellow-500 text-white hover:bg-yellow-300 hover:text-black">Buy Now</button>
      
    </div>
  </div>
</div>




    </div>
    </div>
  )
}

export default Products