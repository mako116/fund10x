"use client"
import Image from 'next/image'
import React,{useState} from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import FUND from "../assests/FUND 10X_2 1.svg"
import  "../css/styles.css"
import Link from 'next/link'
const Navs = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <nav className="lg:hidden bg-[#fff] w-[full] h-[60px] ">
    <div className="flex items-center justify-between pt-[20px] malnr">
      <div className="text-white font-bold"> 
      <Image
      width={100}
      height={20}
      src={FUND}
      className='w-[80px] h-full'
      />
      </div>
      <div className="lg:hidden z-[2000px]">
        <button onClick={toggleMenu} className="text-royal-blue  focus:outline-none">
          <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <div className="hidden lg:flex space-x-4">
         
       </div>
    </div>

    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          exit={{ height: 0 }}
          transition={{ duration: 0.3 }} 
          className="lg:hidden bg-dark mt-[0px] shadow flex flex-col "
        >
       <div className='bg-whiting w-full h-full malnr py-[15px] flex flex-col text-right'>
         <Link href="/about" className=" text-base block text-blacks py-[10px] font-medium leading-[21.72px] cursor-pointer"><h5>About Fund 10X</h5></Link>
        <Link href="#" className="text-base block text-blacks font-medium leading-[21.72px] py-[10px] cursor-pointer">Get Funding</Link>
        <Link href="#" className="text-base block text-blacks font-medium leading-[21.72px] py-[10px] cursor-pointer">For Investors </Link>
        <Link href="#" className="text-base block text-blacks font-medium leading-[21.72px] py-[10px] cursor-pointer">Resources</Link>
        <Link href="/contacts" className='flex justify-end'>
   <div className="w-[73px] h-[35px] block rounded-[10px] border p-padd bg-gradient-to-r from-linear1 to-linear2 gap-[10px] shadowed text-center ">
   <button className=' mt-[5px] text-[10.95px] leading-[21.72px] font-medium text-[#fff]'>Sign up</button>
   </div>
   </Link>
   </div>
         </motion.div>
      )}
    </AnimatePresence>
   </nav>
     </>
  )
}

export default Navs
