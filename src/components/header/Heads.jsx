"use client"
// components/Navbar.js
import { useState } from 'react';
import Link from 'next/link';
import { Transition } from '@headlessui/react';
import { MdClose } from 'react-icons/md';
import FUND from "../../assests/FUND 10X_2 1.svg"
import  "../../css/styles.css"
import Image from 'next/image'

const Heads = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-linear2">
      <div className=" mx-auto py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-xl"></div>

        {/* Navbar toggler for mobile */}
        <button
          className="block md:hidden text-white focus:outline-none ml-[10px]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <MdClose
            onClick={() => setMenuOpen(false)}
            className="text-[#fff] text-2xl cursor-pointer "
          />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Navbar links */}
        <div className="w-full malnrs flex items-center">
        <div className="hidden md:flex malnr items-center justify-between space-x-4  bg-[#fff] w-full mt-[10px] rounded-[30px] h-[80px] lg:h-[105px]">
        <div className="logo">
         <Link href="/"> 
          <Image
           width={100}
           height={20}
           src={FUND}
          className='logos'/></Link>
         </div>
        <ul className="urlLinks">
        <Link href="/about" className="text-[13px] lg:text-[17.95px] block text-blacks  py-[10px] lg:pb-[0px] pb-[30px] font-normal leading-[21.72px] cursor-pointer">
          <li className="text-black ">About Fund 10X
          </li>
          </Link>
           <Link href="#" className="text-[10px] lg:text-[17.95px] block text-blacks font-normal leading-[21.72px] py-[10px] lg:pb-[0px] pb-[30px] cursor-pointer">
          <li className="text-black">Get Funding</li>
          </Link>
          <Link href="#" className="text-[13px] lg:text-[17.95px] block text-blacks font-normal leading-[21.72px] py-[10px] lg:pb-[0px] pb-[30px] cursor-pointer"> 
          <li className="text-black">For Investors</li>
          </Link>
           <Link href="#" className="text-[13px] lg:text-[17.95px] block text-blacks font-normal leading-[21.72px] py-[10px] lg:pb-[0px] pb-[30px] cursor-pointer">
           <li className="text-black">Resources</li>
          </Link>
          </ul>
         <Link href="/contacts" className='flex justify-end'>
          <button className="SignUpBtn bg-gradient-to-r from-linear1 to-linear2  shadowed ">
          <span className=' text-[15px]  lg:text-[17.95px] leading-[21.72px] font-medium text-[#fff]'>Sign up</span>
          </button>
          </Link>
        </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <Transition
        show={isOpen}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="md:hidden bg-black opacity-[70%] fixed inset-0 z-50" onClick={() => setIsOpen(false)}></div>
      </Transition>

      {/* Mobile Navbar Content */}
      <Transition
        show={isOpen}
        enter="transition-transform duration-300 ease-in-out"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition-transform duration-300 ease-in-out"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
      >
        <div className="md:hidden fixed inset-y-0 right-0 z-50 bg-white w-3/4 p-4">
        <ul className="flex flex-col gap-[0px]">
              <Link href="/about" className=" text-[17px] block text-blacks  font-medium leading-[21.72px] cursor-pointer">
              <li className="text-black ">About Fund 10X
             </li>
              </Link>
              <Link href="#" className="text-[17px] block text-blacks font-medium leading-[21.72px] cursor-pointer">
               <li className="text-black">Get Funding</li>
              </Link>   
              <Link href="#" className=" text-[17px] block text-blacks font-medium leading-[21.72px] cursor-pointer"> 
              <li className="text-black">For Investors</li>
              </Link>
              <Link href="#" className=" text-[17px] block text-blacks font-medium leading-[21.72px] cursor-pointer">
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
    </header>
  );
};

export default Heads;
