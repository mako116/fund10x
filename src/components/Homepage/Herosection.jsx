import React from 'react'
import SlideShow from '../SlideShow'
import Image from 'next/image'
import Partners from '../partners'

const Herosection = () => {
  return (
    <main className="bg-linear2  heroScreen py-[0px] lg:py-[50px]">
     <div className="flex justify-between malnr gap-[0px]">
     <div className="h-full lg:h-[419.04px] mt-[50px] lg:mt-[177px] gap-[8.67px] w-full lg:w-[586.88px]">
     <div className="lg:block flex justify-center ">
     <h2 className='widthin capitalize font-bold lg:text-[79.75px] text-[42px] leading-[60px] lg:leading-[96.52px] text-ladies-white'>
     get funded, <span className='font-normal lg:text-[79.75px] text-[42px] leading-[10px] lg:leading-[96.52px]'>find</span>  founders
     </h2>
     </div>
     <p className=' mt-[16.89px] font-normal text-[25.82px] leading-[37.96px] text-ladies-white lg:text-start text-center'>Fund10x, a funding platform that enables you to grow your business, with the right  capital, in the right manner</p>
     <div className="flex lg:justify-start justify-center gap-[30px] lg:gap-[58px] lg:w-[586.88px] w-full h-full lg:h-[419.04px] mt-[20px]">
     <div className="homebtn rounded-[11.38px] border-[0.86px] p-paddi gap-[5.69px] bg-gradient-to-r from-linear1 to-linear2 shadowed text-center ">
     <button className=' mt-[15px] text-[15px] lg:text-[17.95px] leading-[21.72px] font-medium text-[#fff]'>For Investors</button>
     </div>
     <div className="homebtn rounded-[11.44px] border-[0.86px] p-paddi gap-[5.69px] bg-gradient-to-r from-linear2 to-linear2 shadowed text-center ">
     <button className=' mt-[15px] text-[14px] lg:text-[17.95px] leading-[21.72px] font-medium text-[#fff]'>For Businesses</button>
     </div>
      </div>
     </div>
     <div className="h-full mt-[107px] lg:w-[580.29px] w-[50%] lght">
     <SlideShow/>
     </div>
    
     </div> 
     <div className=" mx-[55px] mtops pb-[20px]">
    <Partners/>
    </div>
     </main>

  )
}

export default Herosection
