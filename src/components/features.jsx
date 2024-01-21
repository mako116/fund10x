import Image from 'next/image'
 import feature from "../../public/images/Vector 8.svg"
import Banner3 from './banner3'
import features from "../assests/Vector 8.png"

const Features = () => {
  return (
    <>
     <div className=" bg-[#f6f8ff]">
     <div className="flex justify-center pt-[80px]">
    
     <div className=' z-[-10000px] shadowed-box absolute mt-[5px] ml-[20px]'>
     <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 434 79" fill="none">
     <path d="M0 62.3137V17.0134C0 7.67107 7.66962 0.148921 17.0102 0.330287L416.688 8.09082C433.46 8.41649 439.319 30.5092 424.912 39.1039L361.987 76.6437C359.402 78.1858 356.448 79 353.438 79H16.6863C7.4707 79 0 71.5293 0 62.3137Z" fill="black"/>
     </svg>
     </div>
     <div className='shadowed-tree relative'>
     <svg className='z-[100000px]'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 436 82" fill="none">
  <path d="M2 63.3137V19.0092C2 9.6685 9.6671 2.14699 19.0061 2.32603L418.037 9.97594C434.861 10.2985 440.685 32.4968 426.186 41.0367L363.957 77.6913C361.39 79.2028 358.466 80 355.488 80H18.6863C9.4707 80 2 72.5293 2 63.3137Z" fill="url(#paint0_linear_461_2004)" stroke="black" stroke-width="2.78105"/>
  <defs>
    <linearGradient id="paint0_linear_461_2004" x1="177.097" y1="-40.6866" x2="322.037" y2="172.705" gradientUnits="userSpaceOnUse">
      <stop stop-color="#21792E"/>
      
      <stop offset="0.984473" stop-color="#0E349F"/>
    </linearGradient>
    
  </defs>
  <text x="50%" y="50%" alignment-baseline="middle" text-anchor="middle" fill="white" font-size="40">
  Features
  </text>
     </svg>

     </div>
     </div>
     <Banner3/>
     </div>
    </>
  )
}

export default Features
