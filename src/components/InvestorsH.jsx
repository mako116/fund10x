import React from 'react'
import Banner2 from './banner2'

import { useState } from "react";
import Link from 'next/link';

const { default: axios } = require("axios");
const { useNavigate } = require("react-router-dom");

const InvestorsH = () => {
  return (
    <>
      <div className=" w-full h-full bg-img lg:pb-[90px] pt-[0px] pt-[40px] pb-[30px] malnred">
      <div className="flex justify-center  text-center items-center">
      <div className="flex justify-center text-center items-center gap-[78px] w-[634.47px] h-[85px]">
      <div className="flex items-center  mt-[40px] investbtn rounded-[11.44px] border-[0.67px] border-black p-ban-pad gap-[24.37px] bg-gradient-to-r from-linear1 to-linear2 shadowed text-center ">
     <Link href="/investors">
     <button className='text-[15px] lg:text-[21.44px] ml-[5px] lg:ml-[40px] leading-[21.72px] font-medium text-[#fff]'>For Investors</button>
     </Link>
    </div>
    <div className="flex items-center  mt-[40px] investbtn rounded-[11.44px] border-[0.67px] border-black p-ban-pad gap-[24.37px] bg-whiting shadowed text-center ">
      <Link href="/bussiness">
      <button className='text-[15px] lg:text-[21.44px] lg:ml-[40px] ml-[5px] leading-[21.72px] font-medium text-[#000]'>For Founders</button>
      </Link>
    </div>
      </div>
      </div>
      <Banner2/>
      </div>
    </>
  )
}

export default InvestorsH
