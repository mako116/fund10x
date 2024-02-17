"use client"
import { useState, useEffect } from 'react';
 import { countries } from '../../countries';

import toast from 'react-hot-toast';
import axios from 'axios';
 import validator from 'validator';
import SelectOptions from '../SelectOPtion';
import Checkbox from '../Checkbox';
 
 const MainBusiness =() => {
  const [currentItem, setCurrentItem] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [firmName, setFirmName] = useState('');
  const [investorType, setInvestorType] = useState('');
  const [minimumInvestmentTop, setMinimumInvestmentTop] = useState(0);
  const [minimumInvestmentBottom, setMinimumInvestmentBottom] = useState(0);
  const [jobTitle, setJobTitle] = useState('');
  const [allCountries] = useState(countries());
  const [country, setCountry] = useState('');
  const [emptyFields, setEmptyFields] = useState(true);
  const [emailError, setEmailError] = useState('');


    useEffect(() => {
      if (currentItem) {
        setFirstName(currentItem.firstName);
        setLastName(currentItem.lastName);
        setEmail(currentItem.email);
        setPhone(currentItem.phone);
        setFirmName(currentItem.firmName);
        setInvestorType(currentItem.investorType);
        setMinimumInvestmentTop(currentItem.minimumInvestment[0]);
        setMinimumInvestmentBottom(currentItem.minimumInvestment[1]);
        setJobTitle(currentItem.jobTitle);
        setCountry(currentItem.country);
      }
    }, [currentItem]);
  
    const resetFields = () => {
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setFirmName('');
      setInvestorType('');
      setJobTitle('');
      setCountry('');
      setEmailError('');
      setEmptyFields(true);
      setMinimumInvestmentTop(0);
      setMinimumInvestmentBottom(0);
    };
    useEffect(() => {
      validateForms();
    }, [
      firstName,
      lastName,
      email,
      phone,
      firmName,
      investorType,
      minimumInvestmentTop,
      minimumInvestmentBottom,
      jobTitle,
      country,
      emailError,
      emptyFields,
    ]);
  
    const validateForms = () => {
      if (firstName === '') {
        setEmptyFields(true);
        return;
      }
      if (lastName === '') {
        setEmptyFields(true);
        return;
      }
      if (email === '') {
        setEmptyFields(true);
        return;
      }
      if (validator.isEmail(email) === false) {
        setEmailError('Invalid email address');
        setEmptyFields(true);
        return false;
      }
  
      setEmailError('');
      if (phone === '') {
        setEmptyFields(true);
        return;
      }
      if (firmName === '') {
        setEmptyFields(true);
        return;
      }
      if (investorType === '') {
        setEmptyFields(true);
        return;
      }
  
      if (jobTitle === '') {
        setEmptyFields(true);
        return;
      }
      if (minimumInvestmentTop === '') {
        setEmptyFields(true);
        return;
      }
  
      if (minimumInvestmentBottom === "") {
        setEmptyFields(true);
        return;
      }
      if (country === '') {
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
        firmName: firmName,
        investorType: investorType,
        minimumInvestmentTop: minimumInvestmentTop,
        minimumInvestmentBottom: minimumInvestmentBottom,
        jobTitle: jobTitle,
        country: country,
      };
    
      if (currentItem) {
        handleEdit(payload);
        return;
      }
    
      try {
        const response = await axios.post("https://fund10x-app-kx5rv4za5a-uc.a.run.app/api/investors", payload);
        console.log('response', response);
    
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
    <div className="">

    
    <div className="text-[#000] bg-img w-full h-full">
        <form className='formsMain_bussin' onSubmit={submitForm}>
        <div className="formsPad border-[2px] border-[#000] "> 
        <div  className='py-[15px] ml-[25px] lg:ml-[5px] text-[13px] lg:text-[22.2px]'>First Name</div>
         <input type="text"
         className='selects'
          value={firstName}
           onChange={(e) =>
             setFirstName(e.target.value.replace(/\s/g, "")) }/>

            <div  className='py-[15px] ml-[25px] lg:ml-[5px] text-[13px] lg:text-[22.2px]'>Last Name</div>
            <input type="text"
            className='selects'
              value={lastName}
             onChange={(e) =>
             setLastName(e.target.value.replace(/\s/g, "")) }/>

         <div className='py-[15px] ml-[25px] lg:ml-[5px] text-[13px] lg:text-[22.2px]'> Work email</div>
           <input 
           type="text"
            value={email}
             onChange={(e) => setEmail(e.target.value.replace(/\s/g, ""))}
           className='selects' />
    
         <div className='py-[15px] ml-[25px] lg:ml-[5px] text-[13px] lg:text-[22.2px]'> Phone Number</div>
         <input 
         type="tel"
         onChange={(e) =>
          setPhone(
            e.target.value ? String(parseInt(e.target.value, 10)) : ""
          )
        }
        maxLength={10}
        placeholder="8025777224"
         className='selects' />
    

         <div  className='py-[15px] ml-[25px] lg:ml-[5px] text-[13px] lg:text-[22.2px]'>Firm name</div>
         <input type="text"
         value={firmName}
         onChange={(e) => setFirmName(e.target.value)}
         className='selects' />
       
       <div className=''>
      <h1 className='py-[15px] ml-[25px] lg:ml-[5px] text-[13px] lg:text-[22.2px]'>Investor type</h1>
         <div className="selectContainer">
              <select
              className='selects'
                value={investorType}
                onChange={(e) => {
                  if (e.target?.value === "") {
                    return;
                  }
                  setInvestorType(e.target.value);
                }}
              >
                <option value=""></option>
                {/* <option value="">--</option> */}
                <option value="angel_investor">Angel Investor</option>
                <option value="pre_seed_investor">Pre-seed Investor</option>
                <option value="seed_investor">Seed Investor</option>
                <option value="series_investor">Series Investor</option>
                <option value="growth_investor">Growth Investor</option>
                <option value="private_equity">Private Equity</option>
                <option value="venture_capital">Venture Capital</option>
              </select>
             </div>
        </div> 
          <div className=''>
           <h1 className='py-[15px] ml-[25px] lg:ml-[5px] text-[13px] lg:text-[22.2px]'>Minimum investment</h1>
           <div className="selectContainer">
             <input
                value={minimumInvestmentTop}
                className='selects'
                onChange={(e) =>
                  setMinimumInvestmentTop(Number(parseInt(e.target.value, 10)))
                }
                type="text"
                placeholder="0"
              />
                </div>
            </div>
            <div className=''>
        <h1 className='py-[15px] ml-[25px] lg:ml-[5px] text-[13px] lg:text-[22.2px]'>minimumInvestmentBottom</h1>
        <div className="selectContainer">
            <input
            className='selects'
                value={minimumInvestmentBottom}
                onChange={(e) =>
                  setMinimumInvestmentBottom(
                    Number(parseInt(e.target.value, 10))
                  )
                }
                type="text"
                placeholder="0"
              />
              </div>
           </div>
            <div className="">
              <h1 htmlFor="" className='py-[15px] ml-[25px] lg:ml-[5px] text-[13px] lg:text-[22.2px]'>Job Title</h1>
              <input
                value={jobTitle}
                className='selects '
                onChange={(e) => setJobTitle(e.target.value)}
                type="text"
                placeholder="Job title"
              />
            </div>

             <div>
              <h1 className="py-[15px] ml-[25px] lg:ml-[5px] text-[13px] lg:text-[22.2px]" htmlFor="">Country</h1>
              <select
              className='selects '
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

        <div className="checkbox ml-[25px] lg:ml-[5px]">
         <Checkbox   />
         </div>
         
         </div>
         <div className="flex justify-center pt-[40px]">
         <button disabled={emptyFields} type='submit' className="flex items-center cursor-pointer w-[233.21px] my-[40px] h-[64.02px] rounded-[11.44px] border-[0.67px] border-black p-ban-pad gap-[24.37px] bg-linear2 shadowed text-center ">
       <span className=' text-[21.44px] ml-[80px] leading-[21.72px] font-medium text-[#fff]'>Submit</span>
       </button>
         </div>
        </form>
        
        </div>
        </div>
    </>
   )

}

export default MainBusiness