
import React from 'react'

const page = () => {
  return (
    <div>
<div className="hero min-h-screen  bg-black opacity-2">
  <div className="hero-content flex-col p-8 lg:flex-row-reverse">
    <div className="text-center p-20 lg:text-left">
      <h1 className="text-5xl font-bold text-white">Contact Us</h1>
      <p className="py-6 text-yellow-500 text-justify">We'd love to hear from you! At DevStore, customer satisfaction is our top priority, and we're here to assist you with any questions or concerns you may have. Whether you need help selecting the perfect laptop, have inquiries about your order, or require technical support, our dedicated team is ready to provide you with the support you need.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl  bg-gray-950">
      <form className="card-body">

      <div className="form-control ">
          <label className="label">
            <span className="label-text text-white">Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" required />
        </div>


        <div className="form-control">
          <label className="label">
          <span className="label-text text-white">Email</span>
            
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Message</span>

          </label>
          <textarea className="textarea textarea-bordered" placeholder="write message"></textarea>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-outline btn-warning">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default page