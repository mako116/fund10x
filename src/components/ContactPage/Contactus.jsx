"use client"
import React, { useState } from 'react'
 import Footer from '../footer/footer'

const Contactus = () => {
    const [selectedHeader, setSelectedHeader] = useState('For_Investors');
     const [content, setContent] = useState('')  
     
     const handleHeaderClick = (header) => {
        setSelectedHeader(header);
        // Reset content when changing sections
        setContent('')
      };
     return (
    <>

     <div className="bg-img w-full h-full">
      <div className="p-[50px] flex justify-center  text-center">
     <span className='text-center w-[420px] h-[54px] text-[22.44px] leading-[27.16px]'>Join the tribe in getting connected to the right capital.</span>
     </div>      
     
     <div className="flex items-center justify-center gap-[0]">
     <div className="flex gap-[62px] items-center mt-[-20px] mx-[20px] ">
     <button
       onClick={() => handleHeaderClick('For_Investors')}
       className={`${
        selectedHeader === 'For_Investors' ? 'text-white bg-gradient-to-r from-linear1 to-linear2 font-semibold' : 'bg-gradient-to-r from-white to-white text-black'
       } lg:w-[217.06px] w-[130px] h-[45px] lg:h-[61.52px]  border-[#000] rounded-[11.44px] border-[0.86px] p-paddi gap-[5.69px] bg-gradient-to-r from-linear1 to-linear2 shadowed text-center `}>
       For Investors
     </button>
     <button
       onClick={() => handleHeaderClick('For_Businesses')}
       className={`${
        selectedHeader === 'For_Businesses' ? 'text-white bg-gradient-to-r from-linear1 to-linear2 font-semibold' : 'bg-gradient-to-r from-white to-white text-black'
       } lg:w-[217.06px] w-[130px] h-[45px] lg:h-[61.52px] rounded-[11.44px] border-[0.86px] p-paddi gap-[5.69px] shadowed text-center `}>
      For Businesses
     </button>
    </div>
    </div>
    <div className="flex justify-center pt-[70px]">
    {selectedHeader === 'For_Investors' && (
        <div className="text-[#000]">
        <form className='lg:w-[634px] w-[330px] lg:h-[843px]'>
        <div className="p-[15px] lg:p-[30px] border-[2px] border-[#000] rounded-[20px] bg-[#fff]"> 
        <label>Full Name</label>
         <input type="text" className='my-[10px] w-[290px] lg:w-[563px] h-[63px] rounded-[10px] bg-lightb text-[#000] outline-none p-[2px]'/>
         <label> Legal Business name</label>
         <input type="text" className='my-[10px] w-[290px] lg:w-[563px] h-[63px] rounded-[10px] bg-lightb text-[#000] outline-none p-[2px]' />
         <label>Job title</label>
         <input type="text" className='my-[10px] w-[290px] lg:w-[563px] h-[63px] rounded-[10px] bg-lightb text-[#000] outline-none p-[2px]' />
         <label>Website</label>
         <input type="text" className='my-[10px] w-[290px] lg:w-[563px] h-[63px] rounded-[10px] bg-lightb text-[#000] outline-none p-[2px]' />
         <label>Investment stage</label>
         <select id="cars" name="cars" className='my-[10px] w-[290px] lg:w-[563px] h-[63px] rounded-[10px] bg-lightb text-[#000] outline-none p-[2px]'>
         <option value="volvo">Volvo</option>
         <option value="saab">Saab</option>
         <option value="mercedes">Mercedes</option>
         <option value="audi">Audi</option>
       </select>         
       <div className="flex">
         <input type="checkbox" className=' bg-black text-[#fff]'/>
         <label>Accept terms of service </label>
         </div>
         </div>
         <div className="flex justify-center my-[40px]">
         <div className="flex items-center cursor-pointer w-[233.21px] my-[40px] h-[71.41px] rounded-[11.44px] border-[0.67px] border-black p-ban-pad gap-[24.37px] bg-linear2 shadowed text-center ">
       <button className=' text-[21.44px] ml-[80px] leading-[21.72px] font-medium text-[#fff]'>Submit</button>
       </div>
         </div>
        </form>
       
        </div>
      )}
      {selectedHeader === 'For_Businesses' && (
        <div className="text-[#000]">
        <form className='lg:w-[634px] w-[330px] lg:h-[843px]'>
        <div className="p-[15px] lg:p-[30px] border-[2px] border-[#000] rounded-[20px] bg-[#fff]"> 
        <label  className='py-[15px]'>Full Name</label>
         <input type="text"className='my-[10px] w-[290px] lg:w-[563px] h-[63px] rounded-[10px] bg-lightb text-[#000] outline-none'/>
         <label className='py-[15px]'> Legal Business name</label>
         <input type="text"className='my-[10px] w-[290px] lg:w-[563px] h-[63px] rounded-[10px] bg-lightb text-[#000] outline-none' />
         <label  className='py-[15px]'>Job title</label>
         <input type="text"className='my-[10px] w-[290px] lg:w-[563px] h-[63px] rounded-[10px] bg-lightb text-[#000] outline-none' />
         <label  className='py-[15px]'>Website</label>
         <input type="text"className='my-[10px] w-[290px] lg:w-[563px] h-[63px] rounded-[10px] bg-lightb text-[#000] outline-none' />
         <label  className='py-[15px]'>Investment stage</label>
         <select id="cars" name="cars"className='my-[10px] w-[290px] lg:w-[563px] h-[63px] rounded-[10px] bg-lightb text-[#000] outline-none'>
         <option value="volvo">Volvo</option>
         <option value="saab">Saab</option>
         <option value="mercedes">Mercedes</option>
         <option value="audi">Audi</option>
       </select>         
       <div className="flex py-[15px] ml-[20px] ">
         <input type="checkbox" className=' bg-black text-[#fff]'/>
         <label>Accept terms of service </label>
         </div>
         </div>
         <div className="flex justify-center">
         <div className="flex items-center cursor-pointer w-[233.21px] my-[40px] h-[64.02px] rounded-[11.44px] border-[0.67px] border-black p-ban-pad gap-[24.37px] bg-linear2 shadowed text-center ">
       <button className=' text-[21.44px] ml-[80px] leading-[21.72px] font-medium text-[#fff]'>Submit</button>
       </div>
         </div>
        </form>
       
        </div>
      )} 
    </div>
     </div> 
     <div className="">
     <Footer/>
     </div>
    </>
  )
}

export default Contactus
