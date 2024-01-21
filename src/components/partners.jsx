import React from 'react'
import googles from "../../public/images/Frame 2404.svg"
import apple from "../../public/images/Frame 2405.svg"
import apples from "../../public/images/Frame 2406.svg"
import micro from "../../public/images/Frame 2403.svg"
import Image from 'next/image'
const Partners = () => {
  return (
    <>
    <div className="w-full lg:w-[575px] h-full lg:h-[94.96px] mt-[10px] gap-[15.69px]">
    <h2 className='w-[125px h-[25px] font-medium text-[20.37px] leading-[24.65px] text-[#ffffff]'>Our Partners</h2>
    <div className="flex lg:w-[575px] lg:h-[54.27px] w-[200px] gap-[8.93px] my-[10px]">
    <Image width={100} height={30} src={apple} className='imagesd'/>
    <Image width={100} height={30} src={micro} className='imagesd'/>
    <Image width={100} height={30} src={apples} className='imagesd'/>
    <Image width={100} height={30} src={googles} className='imagesd'/>
     </div>
    </div> 
    </>
  )
}

export default Partners
