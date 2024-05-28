'use client'

import Link from 'next/link'
import React from 'react'
import { useAuth } from "@clerk/nextjs";
import { SignInButton, UserButton } from '@clerk/nextjs'
const Navbar = () => {
  const { isSignedIn } = useAuth()
  return (
    <div>
     <div className="navbar bg-[#000000] text-yellow-500">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-neutral lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/about-us'}>About</Link></li>

      <li><Link href={'/laptop-us'}>Laptops</Link></li>
      <li><Link href={'/contact-us'}>Contact Us</Link></li>
       
      </ul>
    </div>
    <Link href='/' className="btn btn-ghost text-xl">DevStore</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link href={'/'}>Home</Link></li>
      <li><Link href={'/about-us'}>About</Link></li>

      <li><Link href={'/laptop-us'}>Laptops</Link></li>
      <li><Link href={'/contact-us'}>Contact Us</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
 
    {!isSignedIn && (
                  <SignInButton mode="modal">
                    <button className="btn btn-outline btn-warning">
                      Sign In

                    </button>

                  </SignInButton>
                )}

                <UserButton afterSignOutUrl="/" />
  </div>
</div>
    </div>
  )
}

export default Navbar