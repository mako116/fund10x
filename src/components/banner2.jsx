import Image from 'next/image'
import swift from "../../public/images/Frame 2389.svg"

 import "../css/styles.css"
  const Banner2 = () => {
  return (
    <>
      <div className="w-full h-full bg-img py-[30px] px-[30px] inter">
      <div className=" justify-center gap-[40px] lg:gap-[140px] lg:mt-[160px] mt-[0px] flex lg:flex-row flex-col items-center">     
      <div className="lg:w-[600px] w-full h-[160px] lg:h-[366.73px] lg:gap-[32px] lg:mt-[0px] mt-[70px] items-center">
      <h3 className=' font-normal lg:text-[24.44px] leading-[35.57px]'>Explore the financial revolution by backing innovative fintech solutions and shape the future of banking..</h3>
      <div className="flex gap-[13.07px] max-width-[600px] items-center justify-center lg:justify-start lg:items-start text-start flex-wrap my-[20px] py-[10px]">
      <div className='flex p-[15.062px] flex-col justify-center items-center gap-[15.062px] rounded-[8.16px] border-[0.817px] border-solid border-[#bbb]'>
       <p className='inter text-[18.07px] font-style font-normal leading-normal text-[#404040]'> AI</p>
      </div>
      <div className='flex p-[15.062px] flex-col justify-center items-center gap-[15.062px] rounded-lg border-gradients'>
        <p className='inter text-[18.07px] font-style font-normal leading-normal'>Fintech</p>
      </div>
      <div className='flex p-[15.062px] flex-col justify-center items-center gap-[15.062px] rounded-[8.16px] border-[0.817px] border-solid border-[#bbb]'>
        <p className='inter text-[18.07px] font-style font-normal leading-normal'>Energy</p>
      </div>
      <div className='flex p-[15.062px] flex-col justify-center items-center gap-[15.062px] rounded-[8.16px] border-[0.817px] border-solid border-[#bbb]'>
        <p className='inter text-[18.07px] font-style font-normal leading-normal'>Proptech</p>
      </div>
      <div className='flex p-[15.062px] flex-col justify-center items-center gap-[15.062px] rounded-[8.16px] border-[0.817px] border-solid border-[#bbb]'>
        <p className='inter text-[18.07px] font-style font-normal leading-normal'>Ecommerce</p>
      </div>
      <div className='flex p-[15.062px] flex-col justify-center items-center gap-[15.062px] rounded-[8.16px] border-[0.817px] border-solid border-[#bbb]'>
        <p className='inter text-[18.07px] font-style font-normal leading-normal'>Blockchain</p>
      </div>
      <div className='flex p-[15.062px] flex-col justify-center items-center gap-[15.062px] rounded-[8.16px] border-[0.817px] border-solid border-[#bbb]'>
        <p className='inter text-[18.07px] font-style font-normal leading-normal'>Agriculture </p>
      </div>
      <div className='flex p-[15.062px] flex-col justify-center items-center gap-[15.062px] rounded-[8.16px] border-[0.817px] border-solid border-[#bbb]'>
        <p className='inter text-[18.07px] font-style font-normal leading-normal'>Manufacturing</p>
      </div>
      <div className='flex p-[15.062px] flex-col justify-center items-center gap-[15.062px] rounded-[8.16px] border-[0.817px] border-solid border-[#bbb]'>
        <p className='inter text-[18.07px] font-style font-normal leading-normal'>Mining </p>
      </div>
      <div className='flex p-[15.062px] flex-col justify-center items-center gap-[15.062px] rounded-[8.16px] border-[0.817px] border-solid border-[#bbb]'>
        <p className='inter text-[18.07px] font-style font-normal leading-normal'>Retail</p>
      </div>
      
      </div>
     <div className="flex items-center justify-center lg:justify-start">
     <div className="flex items-center  mt-[40px] investbtn rounded-[11.44px] border-[0.67px] border-black p-ban-pad gap-[24.37px] bg-gradient-to-r from-linear2 to-linear2 shadowed text-center ">
     <button className='text-[15px] lg:text-[21.44px] ml-[5px] lg:ml-[40px] leading-[21.72px] font-medium text-[#fff]'>Join the waitlist</button>
     </div>
     </div>
      </div>

       <div className="lg:w-[550.33px] lg:h-[593.47px] lg:mb-[0px] w-[250px] h-[200px] lg:my-[10px] my-[180px] ">
      <Image width={100} height={34} src={swift} className="w-[550.33px] h-[593.47px]"/>
      </div>
      </div>
      </div>
    </>
  )
}

export default Banner2
