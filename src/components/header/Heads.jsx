"use client"
import Image from 'next/image'
// import React from 'react'
import FUND from "../../assests/FUND 10X_2 1.svg"
import  "../../css/styles.css"
import Link from 'next/link'
import mobileLogo from "../../assests/FUNDlogo.jpg"
import React, { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import { Transition } from '@headlessui/react';

const Heads = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-royal-blue w-full lg:h-[200px]">
      <nav className="container mx-auto flex items-center py-[20px]">
      

        {/* Desktop Navigation */}
        <div className="hidden md:flex px-[13px] lg:px-[50px] items-center justify-between space-x-4  bg-[#fff] w-full mt-[38px] rounded-[30px] h-[80px] lg:h-[104px]">
        <div className="logo">
         <Link href="/">
          <Image
           width={100}
           height={20}
           src={FUND}
          className='logos'/></Link>
         </div>
        <ul className="flex gap-[20px] space-x-4 items-center text-center">
        <Link href="/about" className="text-[13px] lg:text-[20px] block text-blacks  py-[10px] lg:pb-[0px] pb-[30px] font-medium leading-[21.72px] cursor-pointer">
          <li className="text-black ">About Fund 10X
          </li>
          </Link>
           <Link href="#" className="text-[10px] lg:text-[20px] block text-blacks font-medium leading-[21.72px] py-[10px] lg:pb-[0px] pb-[30px] cursor-pointer">
          <li className="text-black">Get Funding</li>
          </Link>
          <Link href="#" className="text-[13px] lg:text-[20px] block text-blacks font-medium leading-[21.72px] py-[10px] lg:pb-[0px] pb-[30px] cursor-pointer"> 
          <li className="text-black">For Investors</li>
          </Link>
           <Link href="#" className="text-[13px] lg:text-[20px] block text-blacks font-medium leading-[21.72px] py-[10px] lg:pb-[0px] pb-[30px] cursor-pointer">
           <li className="text-black">Resources</li>
          </Link>
          </ul>
         <Link href="/contacts" className='flex justify-end'>
          <div className="lg:w-[133px] w-[70px] h-full  items-center block rounded-[10px] border p-padd bg-gradient-to-r from-linear1 to-linear2 gap-[10px] shadowed text-center ">
          <span className=' mt-[5px] p-[6px] lg:p-[20px] text-[15px] lg:text-[20.95px] flex text-center items-center leading-[21.72px] font-medium text-[#fff]'>Sign up</span>
          </div>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className='flex  md:hidden'>
          
        <div className=" ">
          {menuOpen ? (
            <MdClose
              onClick={() => setMenuOpen(false)}
              className="text-white text-2xl cursor-pointer"
            />
          ) : (
            <MdMenu
              onClick={() => setMenuOpen(true)}
              className="text-white text-2xl cursor-pointer"
            />
          )}

          {/* Mobile Menu with Transition */}
          <Transition
            show={menuOpen}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            className="bg-grayed"
          >
            <div className="absolute top-0 right-0 w-[70%] bg-gray-200  p-4 rounded-b-[5px] shadow-md">
              <ul className="flex flex-col space-y-2">
              <Link href="/" className=" text-[15px] block text-blacks  font-medium leading-[21.72px] cursor-pointer">
              <li className="text-black ">Home
             </li>
              </Link>
              <Link href="/about" className=" text-[15px] block text-blacks  font-medium leading-[21.72px] cursor-pointer">
              <li className="text-black ">About Fund 10X
             </li>
              </Link>
              <Link href="#" className="text-[15px] block text-blacks font-medium leading-[21.72px] cursor-pointer">
               <li className="text-black">Get Funding</li>
              </Link>   
              <Link href="#" className=" text-[15px] block text-blacks font-medium leading-[21.72px] cursor-pointer"> 
              <li className="text-black">For Investors</li>
              </Link>
              <Link href="#" className=" text-[15px] block text-blacks font-medium leading-[21.72px] cursor-pointer">
               <li className="text-black">Resources</li>
              </Link>
               </ul>
              <Link href="/contacts" className='flex justify-end'>
              <div className="lg:w-[133px] w-[70px] h-full  items-center block rounded-[10px] border p-padd bg-gradient-to-r from-linear1 to-linear2 gap-[10px] shadowed text-center ">
              <span className=' mt-[5px] p-[6px] lg:p-[20px] text-[15px] lg:text-[20.95px] flex text-center items-center leading-[21.72px] font-medium text-[#fff]'>Sign up</span>
             </div>
             </Link>
            </div>
          </Transition>
        </div>
       <div className='bg-black w-full h-full'>

       </div>
        </div>
       
      </nav>
    </header>
  );
};

export default Heads;

