"use client"
import React, { useEffect, useState } from 'react'
 import Checkbox from '../Checkbox';
 import axios from "axios";
 import { countries } from '../../countries';
import validator from 'validator';
import toast from 'react-hot-toast';



const MAinContactus = () => {
   const validEmail = (email) => {
    var emailReg = /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test(email);
  };


   const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [investmentStage, setInvestmentStage] = useState("");
  const [businessWebsite, setBusinessWebsite] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [allCountries] = useState(countries());
  const [country, setCountry] = useState("");
  const [emptyFields, setEmptyFields] = useState(true);
  const [emailError, setEmailError] = useState("");


  const resetFields = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setBusinessName("");
    setBusinessType("");
    setInvestmentStage("");
    setBusinessWebsite("");
    setJobTitle("");
    setCountry("");
    setEmailError("");
    setEmptyFields(true);
  };

  useEffect(() => {
    validateForms();
  }, [
    firstName,
    lastName,
    email,
    phone,
    businessName,
    businessType,
    investmentStage,
    businessWebsite,
    jobTitle,
    country,
    emailError,
    emptyFields,
  ]);

  const validateForms = () => {
    if (firstName === "") {
      setEmptyFields(true);
      return;
    }
    if (lastName === "") {
      setEmptyFields(true);
      return;
    }
    if (email === "") {
      setEmptyFields(true);
      return;
    }
    if (validator.isEmail(email) === false) {
      setEmailError('Invalid email address');
      setEmptyFields(true);
      return false;
    }

    setEmailError("");
    if (phone === "") {
      setEmptyFields(true);
      return;
    }
    if (businessName === "") {
      setEmptyFields(true);
      return;
    }
    if (businessType === "") {
      setEmptyFields(true);
      return;
    }
    if (investmentStage === "") {
      setEmptyFields(true);
      return;
    }
    if (jobTitle === "") {
      setEmptyFields(true);
      return;
    }
    if (businessWebsite === "") {
      setEmptyFields(true);
      return;
    }
    if (country === "") {
      setEmptyFields(true);
      return;
    }

    setEmptyFields(false);
  };

  const submitForm = async (e) => {
    e.preventDefault();

    let payload = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      businessName: businessName,
      businessType: businessType,
      businessWebsite: businessWebsite,
      jobTitle: jobTitle,
      investmentStage: investmentStage,
      country: country,
    };

    try {
      const response = await axios.post(
        `https://fund10x-app-kx5rv4za5a-uc.a.run.app/api/business`,
        payload
      );

      if (response?.data?.error === false) {
        toast.success("Investor added successfully");

        resetFields();
      } else {
        toast.error("Error occurred while adding investor");
      }
    } catch (error) {
       // Displaying the error message if available, or a generic error message if not
       const errorMessage = error?.response?.data?.message || "Something went wrong. Please try again later.";
       toast.error(errorMessage);
    }
  };
   


    return(
        <>
         <div className="w-full h-full">
         <div className="text-[#000] m-auto">
            <form className='formsMain_bussin ' onSubmit={submitForm}>

              <div className="formpadd bg-[#fff]"> 
                <div className='py-[15px] ml-[15px] lg:ml-[5px] text-[13px] lg:text-[22.2px] text-[13px] lg:text-[22.2px]'>Full Name</div>
                  <input type="text" 
                   value={firstName}
                    onChange={(e) =>
                     setFirstName(e.target.value.replace(/\s/g, "")) }
                   className='select'/>
             
                   
                    <div className='py-[15px]  ml-[25px] lg:ml-[5px] text-[13px] lg:text-[22.2px] text-[13px] lg:text-[22.2px] text-[13px] lg:text-[22.2px]'> Legal Business name</div>
                    <input type="text" 
                     value={lastName}
                     onChange={(e) => setLastName(e.target.value.replace(/\s/g, ""))}
                     className='select' />
                  
                  <div className='py-[15px]  ml-[25px] lg:ml-[5px] text-[13px] lg:text-[22.2px] text-[13px] lg:text-[22.2px]'> email</div>
                    <input type="email" 
                     value={email}
                     onChange={(e) => setEmail(e.target.value.replace(/\s/g, ""))}
                     className='select' />
                   {emailError && (
                <p className="inputError">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 20 20"
                    role="presentation"
                    focusable="false"
                    tabIndex={-1}
                    fill="red" >
                    <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 11c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4H9v-2h2v2z"></path>
                  </svg>
                  {emailError}
                </p>
                 )}

                   <div className='py-[15px] ml-[25px] lg:ml-[5px] text-[13px] lg:text-[22.2px] text-[13px] lg:text-[22.2px]'>Phone</div>
                 <input type="text" 
                  value={phone}
                  onChange={(e) =>
                    setPhone(
                      e.target.value ? String(parseInt(e.target.value, 10)) : ""
                    )
                  }
                  maxLength={10}
                  placeholder="8025777224"
                 className='select' />

                 
                 <div className='py-[15px] ml-[25px] lg:ml-[5px] text-[13px] lg:text-[22.2px] text-[13px] lg:text-[22.2px]'>Business name</div>
                 <input type="text" 
                 value={businessName}
                 onChange={(e) => setBusinessName(e.target.value)}
                 className='select' />

                <div className=''>
              <h1 className='py-[14px] lg:py-[9px] ml-[20px] lg:ml-[5px] text-[13px] lg:text-[22.2px] text-[13px] lg:text-[22.2px]'>Business Type</h1>
           <div className="selectContainer">
              <select
                className='select'
                 value={businessType}
                  onChange={(e) => {
                  if (e.target?.value === "") {
                  return;
                }

                setBusinessType(e.target.value);
              }}
              >
                <option value="">Select type</option>
                {/* <option value="">--</option> */}
                <option value="Fintech">Fintech</option>
              </select>
             </div>
        </div>

        <div className=''>
              <h1 className='py-[14px] lg:py-[9px] ml-[20px] lg:ml-[5px] text-[13px] lg:text-[22.2px] text-[13px] lg:text-[22.2px]'>Investment Stage</h1>
           <div className="selectContainer">
              <select
                className='select'
                value={investmentStage}
                onChange={(e) => {
                  if (e.target?.value === "") {
                    return;
                  }

                  setInvestmentStage(e.target.value);
                }}
              >
               <option value="">Select stage</option>
                <option value="seed">seed</option>
                <option value="startup">startup</option>
                <option value="growth">growth</option>
                <option value="established">established</option>
                <option value="expansion">expansion</option>
                <option value="maturity">maturity</option>
                <option value="exit">exit</option>
              </select>
             </div>
          </div>

          <div className='py-[15px] ml-[25px] lg:ml-[5px] text-[13px] lg:text-[22.2px] text-[13px] lg:text-[22.2px]'>Job Title</div>
               <input type="text" 
                 value={jobTitle}
                 onChange={(e) => setJobTitle(e.target.value)}
               className='select' />

          
            <div className='py-[15px] ml-[25px] lg:ml-[5px] text-[13px] lg:text-[22.2px] text-[13px] lg:text-[22.2px]'>Business Website</div>
               <input type="text" 
                  value={businessWebsite}
                  onChange={(e) =>
                    setBusinessWebsite(e.target.value.replace(/\s/g, ""))
                  }
                  placeholder="www.yourbusinesswebsite.com"
               className='select' />

              <div >
              <h1 className="py-[14px] lg:py-[9px] ml-[20px] lg:ml-[5px] text-[13px] lg:text-[22.2px] text-[13px] lg:text-[22.2px]" htmlFor="">Country</h1>
              <select
              className='select'
                value={country}
                onChange={(e) => {
                  if (e.target?.value === "") {
                    return;
                  }
                  setCountry(e.target.value);
                }}
              >
                <option value="" className='text-[13px] lg:text-[22.2px]'>Select country</option>
                {allCountries &&
                  allCountries?.map((country, index) => (
                    <option key={index} value={country?.name}>
                      {country?.name}
                    </option>
                  ))}
              </select>
            </div>
   
          <div className="checkbox ml-[25px] lg:ml-[5px] text-[13px] lg:text-[22.2px]">
         <Checkbox className="text-[13px] lg:text-[22.2px]"  />
         </div>
        
         </div>
         <div className="flex justify-center pt-[40px]">
         <button 
         disabled={emptyFields}
         type="submit"
         className="flex items-center cursor-pointer w-[233.21px] my-[40px] h-[71.41px] rounded-[11.44px] border-[0.67px] border-black p-ban-pad gap-[24.37px] bg-linear2 shadowed text-center ">
       <span className=' text-[21.44px] ml-[80px] leading-[21.72px] font-medium text-[#fff]'>Submit</span>
       </button>
         </div>
        </form>
       
        </div>
         </div>
         
        </>
    )

    
}

export default MAinContactus