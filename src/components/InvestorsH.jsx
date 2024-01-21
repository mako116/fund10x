import React from 'react'
import Banner2 from './banner2'

const InvestorsH = () => {
  return (
    <>
      <div className=" w-full h-full bg-img lg:pb-[90px] pb-[30px]">
      <div className="flex justify-center  text-center items-center">
      <div className="flex justify-center text-center items-center gap-[78px] w-[634.47px] h-[85px]">
      <div className="flex items-center  mt-[40px] investbtn rounded-[11.44px] border-[0.67px] border-black p-ban-pad gap-[24.37px] bg-gradient-to-r from-linear1 to-linear2 shadowed text-center ">
    <button className='text-[15px] lg:text-[21.44px] ml-[5px] lg:ml-[40px] leading-[21.72px] font-medium text-[#fff]'>For Investors</button>
    </div>
    <div className="flex items-center  mt-[40px] investbtn rounded-[11.44px] border-[0.67px] border-black p-ban-pad gap-[24.37px] bg-whiting shadowed text-center ">
    <button className='text-[15px] lg:text-[21.44px] lg:ml-[40px] ml-[5px] leading-[21.72px] font-medium text-[#00]'>For Founders</button>
    </div>
      </div>
      </div>
      <Banner2/>
      </div>
    </>
  )
}

export default InvestorsH
