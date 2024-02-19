"use client";
import Image from "next/image";
import swift from "../../public/images/Frame 2389.svg";
import investorImage1 from "../../public/images/investorImage1.svg";
import investorImage2 from "../../public/images/investorImage2.svg";
import investorImage3 from "../../public/images/investorImage3.svg";

import "../css/styles.css";
import Link from "next/link";
import { useState } from "react";

const tabs = [
  {
    id: 1,
    name: "AI",
    image: "/images/investorImage3.svg",
  },
  {
    id: 2,
    name: "Fintech",
    image: "/images/Frame 2389.svg",
  },
  {
    id: 3,
    name: "Energy",
    image: "/images/investorImage1.svg",
  },
  {
    id: 4,
    name: "Proptech",
    image: "/images/Frame 2389.svg",
  },
  {
    id: 5,
    name: "Ecommerce",
    image: "/images/investorImage2.svg",
  },
  {
    id: 6,
    name: "Blockchain",
    image: "/images/Frame 2389.svg",
  },
  {
    id: 7,
    name: "Agriculture",
    image: "/images/Frame 2389.svg",
  },
  {
    id: 8,
    name: "Manufacturing",
    image: "/images/Frame 2389.svg",
  },
  {
    id: 9,
    name: "Mining",
    image: "/images/Frame 2389.svg",
  },
  {
    id: 10,
    name: "Retail",
    image: "/images/Frame 2389.svg",
  },
];
const Banner2 = () => {
  const [activeTab, setActiveTab] = useState({
    id: 2,
    name: "Fintech",
    image: "/images/Frame 2389.svg",
  });

  const handleActiveTabs = (tab) => {
    // setActiveTab(null);

    setActiveTab(tab);
  };

  return (
    <>
      <div className="investorsHBG w-full bg-img pb-[50px] lg:pb-[0px] py-[0px] lg:py-[0px] px-[30px] inter text-[#000]">
        <div className=" justify-center gap-[40px] lg:gap-[140px] lg:mt-[130px] mt-[0px] flex lg:flex-row flex-col items-center">
          <div className="lg:w-[600px] w-full lg:gap-[32px] lg:mt-[0px] mt-[70px] items-center">
            <h3 className=" font-normal lg:text-[24.44px] leading-[35.57px] text-[#000]">
              Explore the financial revolution by backing innovative fintech
              solutions and shape the future of banking..
            </h3>
            <div className="investorsHBGFlexGap flex gap-[13.07px] max-width-[600px] items-center justify-center lg:justify-start lg:items-start text-start flex-wrap my-[20px] py-[10px]">
              {tabs &&
                tabs?.map((tab, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      handleActiveTabs(tab);
                    }}
                    className={`tabss flex p-[15.062px] flex-col justify-center items-center gap-[15.062px] rounded-[8.16px] ${
                      activeTab?.id === tab?.id
                        ? "border-gradients"
                        : "border-[1.817px] border-solid border-[#bbb]"
                    } `}
                  >
                    <p className="inter text-[18.07px] font-style font-normal leading-normal">
                      {tab?.name}
                    </p>
                  </div>
                ))}
            </div>
            <div className="flex items-center justify-center lg:justify-start">
              <div className="flex items-center  mt-[40px] investbtn rounded-[11.44px] border-[0.67px] border-black p-ban-pad gap-[24.37px] bg-gradient-to-r from-linear2 to-linear2 shadowed text-center ">
                <Link href="/contacts?type=business">
                  <button className="text-[15px] lg:text-[21.44px] ml-[5px] lg:ml-[40px] leading-[21.72px] font-medium text-[#fff]">
                    Join the waitlist
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {activeTab && (
            <div className="investorsHImageContainer lg:w-[550.33px]  lg:mb-[0px] w-[250px] lg:my-[10px] ">
              <Image width={100} height={34} src={activeTab?.image} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Banner2;
