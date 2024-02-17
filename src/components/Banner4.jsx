import Image from 'next/image'
 import successes from "../../public/images/Frame 2409.svg"
import Link from 'next/link'
const Banner4 = () => {
  return (
    <>
     <div className="w-full h-full bg-linear2">
     <div className="pt-[98px] malnr">
      <Link href="/bussiness">
      <Image width={100} height={50} src={successes} className="w-full h-full"/>
      </Link>
     </div>
     </div> 
    </>
  )
}

export default Banner4
