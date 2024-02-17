"use client"
import React, { useState } from 'react'

import MAinContactus from './MainSignUp';
import MainBusiness from './MainBussiness';

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
          
     <h1 className='w-full h-[180px]'></h1>

     <div className="flex items-center justify-center gap-[0px]">
     <div className="flex gap-[30px] lg:gap-[62px] items-center mt-[-20px] mx-[20px] ">
     <button
       onClick={() => handleHeaderClick('For_Investors')}
       className={`${
        selectedHeader === 'For_Investors' ? ' bg-gradient-to-r from-white to-white text-black  ' : 'bg-gradient-to-r from-linear1 to-linear2 font-semibold text-white'
       } lg:w-[217.06px] lg:text-[22px] text-[13px] w-[115px] h-[45px] lg:h-[61.52px]  border-[#000] rounded-[11.44px] border-[0.86px] p-paddi gap-[5.69px]   shadowed text-center `}>
       For Investors
     </button>
     <button
       onClick={() => handleHeaderClick('For_Businesses')}
       className={`${
        selectedHeader === 'For_Businesses' ? '  bg-gradient-to-r from-white to-white text-black' : ' text-white bg-gradient-to-r from-linear1 to-linear2 font-semibold'
       } lg:w-[217.06px] lg:text-[22px] text-[13px] w-[115px] h-[45px] lg:h-[61.52px] rounded-[11.44px] border-[#000] border-[0.86px] p-paddi gap-[5.69px] shadowed text-center `}>
      For Businesses
     </button>
    </div>
    </div>
    <div className="Bussin_inves bg-img">
    {selectedHeader === 'For_Investors' && (
      <div className="">
            <h1 className='signupTxt'>Join the tribe in getting connected to the right capital.</h1>
            <div className="forms_show">
            <MAinContactus/>
            </div>
      </div>
      )}
      {selectedHeader === 'For_Businesses' && (
              <div className="">
              <h1 className='signupTxt'>Get a personalised deal flow that matches your funding requirement</h1>
             <div className="forms_show">
             <MainBusiness/>
             </div>
        </div>
      
      )} 
    </div>
     </div> 
     
    </>
  )
}

export default Contactus
