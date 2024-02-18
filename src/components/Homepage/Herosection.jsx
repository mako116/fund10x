import React from "react";
import SlideShow from "../SlideShow";
import Image from "next/image";
import Partners from "../partners";
import Link from "next/link";
// import {image} from "../../assests/"
const Herosection = () => {
  return (
    <main className="bg-linear2  heroScreen py-[0px] lg:py-[50px]">
      <div className=" homeShapes ">
        <div className="homescreenWidth">
          <div className="lg:block flex justify-center ">
            <h2 className="widthin capitalize homeHeader text-ladies-white">
              Get Capital, <span className="homeHeads2">find</span> founders
            </h2>
          </div>
          <p className=" text-ladies-white homeparagraph">
            Fund10x, a funding platform that enables you to grow your business,
            with the right capital, in the right manner
          </p>
          <div className="homescreenFlex flex lg:justify-start justify-center gap-[30px] lg:gap-[58.59px] lg:w-[506.39px] w-full h-full lg:h-[68.59px] mt-[20px]">
            <div className="  ">
              <Link href="/contacts?type=investor">
                <button className="shadowed siteButton homebuttons mt-[15px] text-[15px] lg:text-[17.95px] p-paddi leading-[21.72px] font-medium text-[#fff]">
                  <span className="smallhomebtn">For Investors</span>
                </button>
              </Link>
            </div>
            <div className=" ">
              <Link href="/contacts?type=business">
                <button className=" mt-[15px] shadowed siteButton homebuttons2 text-[14px] lg:text-[17.95px] leading-[21.72px] font-medium text-[#fff]">
                  <span className="smallhomebtn"> For Businesses</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="homescreenShow lght ">
          <SlideShow />
        </div>
      </div>
      <div className="malnred ">
        <Partners />
      </div>
    </main>
  );
};

export default Herosection;
