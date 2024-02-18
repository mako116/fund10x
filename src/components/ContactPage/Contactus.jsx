"use client";
import React, { useEffect, useState } from "react";

import ForInvestors from "./MainSignUp";
import MainBusiness from "./MainBussiness";
import { useSearchParams } from "next/navigation";

const Contactus = () => {
  const [selectedHeader, setSelectedHeader] = useState("For_Investors");
  const [content, setContent] = useState("");
  const searchParams = useSearchParams();

  const type = searchParams.get("type");

  const handleHeaderClick = (header) => {
    setSelectedHeader(header);
    // Reset content when changing sections
    setContent("");
  };

  useEffect(() => {
    if (type === "investor") {
      setSelectedHeader("For_Investors");
    } else {
      setSelectedHeader("For_Businesses");
    }
  }, [type]);

  return (
    <div className="contactUs bg-img w-full">
      <div className="contactUsWrapper">
        <h1 className="" style={{ width: "100%", height: "auto", top: 0 }}>
          {selectedHeader === "For_Investors"
            ? "Join the tribe in getting connected to the right capital."
            : "Get a personalised deal flow that matches your funding requirement"}
        </h1>
        <div className="contactUsButton">
          <button
            onClick={() => handleHeaderClick("For_Investors")}
            className={`${
              selectedHeader === "For_Investors"
                ? " bg-gradient-to-r from-white to-white text-black  "
                : "bg-gradient-to-r from-linear1 to-linear2 font-semibold text-white"
            } siteButton  lg:w-[217.06px] lg:text-[22px] text-[13px] w-[115px] h-[45px] lg:h-[61.52px]  border-[#000] rounded-[11.44px] border-[0.86px] p-paddi gap-[5.69px]   shadowed text-center `}
          >
            For Investors
          </button>
          <button
            onClick={() => handleHeaderClick("For_Businesses")}
            className={`${
              selectedHeader === "For_Businesses"
                ? "  bg-gradient-to-r from-white to-white text-black"
                : " text-white bg-gradient-to-r from-linear1 to-linear2 font-semibold"
            } siteButton lg:w-[217.06px] lg:text-[22px] text-[13px] w-[115px] h-[45px] lg:h-[61.52px] rounded-[11.44px] border-[#000] border-[0.86px] p-paddi gap-[5.69px] shadowed text-center `}
          >
            For Businesses
          </button>
        </div>

        <div className="">
          <div className="">
            {selectedHeader === "For_Investors" ? (
              <ForInvestors />
            ) : (
              <MainBusiness />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
