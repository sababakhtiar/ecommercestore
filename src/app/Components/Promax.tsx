import React from 'react'
import Image from 'next/image'
import laptop1 from "../../../public/images/laptop1.png"
import laptop2 from "../../../public/images/laptop2.png"
import laptop3 from "../../../public/images/laptop3.png"
const Promax = () => {
  return (
    <div className='  bg-black '>
   <h1 className='text-center text-white text-3xl font-serif'>Our Famous Products For Developers</h1>
    
    <div className='p-10 flex justify-between '>
    
      <div className="card w-96 bg-black text-white shadow-xl image-full">
  <figure><Image src={laptop1} alt="Shoes" width={450}  height={350} /></figure>
  <div className="card-body">
    <h2 className="card-title">MacBook Air M2</h2>
    <p>Sleek and powerful with exceptional battery life.</p>
    <div className="card-actions justify-end">
    <button className="btn bg-yellow-500 text-white hover:bg-yellow-300 hover:text-black">Buy Now</button>
      
    </div>
  </div>
  
</div>
<div className=" card w-96 bg-black text-white shadow-xl image-full">
  <figure><Image src={laptop2} alt="Shoes" width={450}  height={350} /></figure>
  <div className="card-body">
    <h2 className="card-title">Dell XPS 13</h2>
    <p>Compact design with a stunning display and high performance.</p>
    <div className="card-actions justify-end">
    <button className="btn bg-yellow-500 text-white hover:bg-yellow-300 hover:text-black">Buy Now</button>
      
    </div>
  </div>
</div>
<div className=" card w-96 bg-black text-white shadow-xl image-full">
  <figure><Image src={laptop3} alt="Shoes" width={450}  height={350} /></figure>
  <div className="card-body">
    <h2 className="card-title">HP Spectre x360</h2>
    <p>Stylish convertible laptop with long-lasting battery.</p>
    <div className="card-actions justify-end">
    <button className="btn bg-yellow-500 text-white hover:bg-yellow-300 hover:text-black">Buy Now</button>
      
    </div>
  </div>
</div>




    </div>
    </div>
  )
}

export default Promax