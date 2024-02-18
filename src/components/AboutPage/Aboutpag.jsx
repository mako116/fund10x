import React from "react";
import Image from "next/image";
import happy from "../../../public/images/happymix.svg";
import Link from "next/link";
const Abouts = () => {
  return (
    <div className="abouts">
      <div className="bg-linear2 w-full h-full z-[-2000px]">
        <div className="flex justify-center pt-[30px] lg:pt-[80px] hides">
          <div className=" z-[-100px] shadowed-box absolute mt-[5px] ml-[20px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 434 79"
              fill="none"
            >
              <path
                d="M0 62.3137V17.0134C0 7.67107 7.66962 0.148921 17.0102 0.330287L416.688 8.09082C433.46 8.41649 439.319 30.5092 424.912 39.1039L361.987 76.6437C359.402 78.1858 356.448 79 353.438 79H16.6863C7.4707 79 0 71.5293 0 62.3137Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="shadowed-tree  z-[-900px]">
            <svg
              className="z-[100000px] relative"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 436 82"
              fill="none"
            >
              <path
                d="M2 63.3137V19.0092C2 9.6685 9.6671 2.14699 19.0061 2.32603L418.037 9.97594C434.861 10.2985 440.685 32.4968 426.186 41.0367L363.957 77.6913C361.39 79.2028 358.466 80 355.488 80H18.6863C9.4707 80 2 72.5293 2 63.3137Z"
                fill="url(#paint0_linear_461_2004)"
                stroke="black"
                stroke-width="2.78105"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_461_2004"
                  x1="177.097"
                  y1="-40.6866"
                  x2="322.037"
                  y2="172.705"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#21792E" />

                  <stop offset="0.984473" stop-color="#0E349F" />
                </linearGradient>
              </defs>
              <text
                x="50%"
                y="50%"
                alignment-baseline="middle"
                text-anchor="middle"
                fill="white"
                font-size="40"
              >
                About
              </text>
            </svg>
          </div>
        </div>
        <div className="aboutsImage flex justify-center w-full h-full py-[80px]">
          <div className="">
            <Image
              width={100}
              height={30}
              src={happy}
              className="lg:w-[886px] w-[400px] h-[300px] lg:h-[590.74px] rounded-[10px] "
            />
          </div>
        </div>
        <div className=" text-[#ffffff] px-[40px] lg:px-[182px]">
          <h2 className="font-normal leading-[37.89px] mb-[50px] tracking-[1%] text-[24.13px]">
            <span className="font-bold leading-[132.1px] tracking-[1%] text-[84.13px] ">
              At
            </span>
            <b>Fund10X</b>, we are driven by a singular mission - to bridge the
            gap between Small and Medium Enterprises (SMEs) with innovative
            ideas and the investors who are seeking viable business
            opportunities. We understand the challenges faced by SMEs in
            securing the necessary funding to turn their entrepreneurial dreams
            into reality. Simultaneously, we recognize that investors are on the
            lookout for promising ventures with the potential for growth and
            success.
          </h2>
          <p className="font-normal leading-[37.89px] mb-[50px] tracking-[1%] text-[24.13px]">
            <span className=" underline font-bold">
              Fund10X is not just a platform;
            </span>{" "}
            it's a dynamic ecosystem where business aspirations meet financial
            resources. We are committed to creating an environment where SMEs
            and investors can connect, collaborate, and thrive. Here's what sets
            us apart:
          </p>
          <p className="font-normal leading-[37.89px] mb-[50px] tracking-[1%] text-[24.13px]">
            <span className=" underline font-bold">
              Connecting Visionaries with Capital:
            </span>{" "}
            We serve as the conduit that brings together visionaries - the SMEs
            with groundbreaking ideas - and the capital they need to bring those
            ideas to fruition.
          </p>
          <p className="font-normal leading-[37.89px] mb-[50px] tracking-[1%] text-[24.13px]">
            <span className=" underline font-bold">
              Empowering Entrepreneurs:
            </span>{" "}
            For SMEs, Fund10X is the stage where they can showcase their
            innovation, share investment opportunities, and attract the right
            investors. It's a platform where creativity is recognized and
            rewarded.
          </p>
          <p className="font-normal leading-[37.89px] mb-[50px] tracking-[1%] text-[24.13px]">
            <span className=" underline font-normal">
              Facilitating Informed Investment:
            </span>{" "}
            Investors gain access to a curated pool of SMEs seeking investment.
            They can browse through detailed SME profiles, discover ventures
            that align with their interests, and connect with the next big thing
            in the business world.
          </p>
          <p className="font-normal leading-[37.89px] ]mb-[50px] tracking-[1%] text-[24.13px]">
            <span className=" underline font-bold">
              Fund10X is more than a website;
            </span>{" "}
            it's a dynamic marketplace for ideas, resources, and opportunities.
            We are passionate about fostering collaboration, supporting
            innovation, and ultimately driving economic growth through the
            success of our SMEs and the satisfaction of our investors. Join us
            on this exciting journey, and let's unlock the potential for
            success, together.{" "}
          </p>
          <p className="font-normal leading-[37.89px] mb-[50px] tracking-[1%] text-[24.13px]">
            <span className=" underline font-bold">Our Mission ;</span> At
            Fund10X, our mission is to bridge the gap between SMEs with
            innovative ideas and investors seeking viable business
            opportunities. We aim to create a thriving ecosystem where
            businesses and investors can connect, collaborate, and grow
            together.
          </p>
        </div>
        <div className="flex justify-center p-[50px]">
          <div className="flex items-center w-[233.21px] mt-[40px] h-[71.41px] rounded-[11.44px] border-[0.67px] border-white p-ban-pad gap-[24.37px] bg-gradient-to-r from-linear2 to-linear2 shadowhite text-center ">
            <Link href="/contacts?type=business">
              <button className=" text-[21.44px] ml-[40px] leading-[21.72px] font-medium text-[#fff]">
                Join the waitlist
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abouts;
