import Image from 'next/image'
import logo from "../../../public/images/FUND 10X_1 2.svg"
import linked from "../../../public/images/Vector (3).svg"
import vext from "../../../public/images/Vector (4).svg"
import tit from "../../../public/images/xl.svg"
import fb from "../../../public/images/Vector (5).svg"
const Footer = () => {
  return ( 
    <>
      <div className="w-full h-full malnr bg-black">
      <div className="pt-[100px] C_grid lg:gap-[60px]">
      <div className="flex flex-col">
      <div className="lg:w-[140px] w-full">
      <Image width={100} height={30} src={logo} className="lg:w-[190px] w-[50px]" />
      </div>
      <h3 className="lg:w-[413px] w-full lg:h-[88px] h-full pt-[19px] font-medium lg:text-[30.15px] text-[18px] leading-[36.49px] text-[#fff]">Matching viable businesses with the right investors</h3>
      <p className="lg:w-[413px] w-full h-full lg:h-[70px] lg:pt-[68px] pt-[30px] lg:text-[17.15px] text-[14px] font-normal leading-[20.76px] text-grayed">Address: 68 Mont Serrat 
      3 Denis street, MorningSide, 2196
      Johannesburg, South Africa</p>
      </div>
      <div className="flex flex-col lg:w-[119px] w-full h-full lg:h-[168.85px] gap-[10px]">
      <h2 className="text-[#fff] mb-[40px] w-[114px] h-[30px] font-medium lg:text-[24.95px] text-[18px] leading-[30.2px]">Company</h2>
      <span className="text-grayed font-medium lg:text-[22.15px] text-[14px] leading-[26.8px]">About Us</span>
      <span className="text-grayed font-medium lg:text-[22.15px] text-[14px] leading-[26.8px]">Contact Us</span>
      <span className="text-grayed font-medium lg:text-[22.15px] text-[14px] leading-[26.8px]">FAQ</span>
      </div>
      <div className="flex flex-col gap-[10px]">
      <h2 className="text-[#fff] mb-[40px] w-full lg:w-[114px] h-full lg:h-[30px] font-medium text-[24.95px] leading-[30.2px]">Legal</h2>
      <span className="text-grayed font-medium lg:text-[22.15px] text-[14px] leading-[26.8px]">Terms</span>
      <span className="text-grayed font-medium lg:text-[22.15px] text-[14px] leading-[26.8px]">Privacy</span>
       </div>
      <div className="flex flex-col gap-[10px]">
      <h2 className="text-[#fff] mb-[40px] w-full h-full lg:w-[114px] lg:h-[30px] font-medium lg:text-[24.95px] text-[18px] leading-[30.2px]">Resources</h2>
      <span className="text-grayed font-medium lg:text-[22.15px] text-[14px] leading-[26.8px]">Blog</span>
      <span className="text-grayed font-medium lg:text-[22.15px] text-[14px] leading-[26.8px]">Press</span>
      <span className="text-grayed font-medium lg:text-[22.15px] text-[14px] leading-[26.8px]">Career</span>
      </div>
     
     
      </div>
      <span className=" bg-transparent lg:flex justify-start lg:w-[372px] w-full lg:text-[17.15px] text-[14px] font-normal leading-[20.76px] text-grayed h-[94px] pt-[86px]">Copyright © 2023 Fund10X .All rights reserved.</span>
      <div className="pt-[50px] flex justify-center items-center ">
      <div className="flex justify-center items-center gap-[20px]">
      <Image width={100} height={30} src={fb} className='w-[26.5px] h-[46.5px]'/>
      <Image width={100} height={30} src={vext} className='w-[16.5px] h-[46.5px]'/>
      <Image width={100} height={30} src={tit} className='w-[26.5px] h-[46.5px]'/>
      <Image width={100} height={30} src={linked} className='w-[26.5px] h-[46.5px]'/>
      </div>
      </div>
      
      </div>
    </>
  )
}

export default Footer
