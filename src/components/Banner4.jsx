import Image from 'next/image'
 import successes from "../../public/images/Frame 2409.svg"
const Banner4 = () => {
  return (
    <>
     <div className="w-full h-full bg-linear2">
     <div className="pt-[98px] malnr">
     <Image width={100} height={50} src={successes} className="w-full h-full"/>
     </div>
     </div> 
    </>
  )
}

export default Banner4
