"use client";
import React, { useEffect, useState } from "react";
import Checkbox from "../Checkbox";
import axios from "axios";
import { countries } from "../../countries";
import toast from "react-hot-toast";
import PageLoading from "../loading/PageLoading";

export const validEmail = (email) => {
  var emailReg = /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailReg.test(email);
};

export const formateInvestmentNumbers = (str) => {
  let cleanedString = str
    .replace(/\$|,/g, "")
    .replace("$", "")
    .replace("-", "")
    .replace(",", "");
  // Split the string by space
  let resultArray = cleanedString.split(" ");

  // Convert string elements to numbers
  resultArray = resultArray
    ?.filter((num) => num !== "")
    .map((num) => parseInt(num, 10));

  return resultArray;
};

const ForInvestors = () => {
  const [isLoading, setIsLoading] = useState({
    status: false,
    message: "Please wait...",
  });
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [allCountries] = useState(countries());
  const [country, setCountry] = useState("");
  const [emptyFields, setEmptyFields] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [selectedCountryDetails, setSelectedCountryDetails] = useState(null);

  const [firmName, setFirmName] = useState("");
  const [investorType, setInvestorType] = useState("");
  const [minimumInvestment, setMinimumInvestment] = useState("");

  const [isChecked, setIsChecked] = useState(false);

  const investments = [
    "$0 - $20000",
    "$20000 - $50,000",
    "$50,000 - $100,000",
    "$100,000 - $250,000",
    "$250,000 - $500,000",
    "$250,000 - $500,000",
    "$1,000,000 - Above",
  ];

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const resetFields = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setFirmName("");
    setInvestorType("");
    setJobTitle("");
    setCountry("");
    setEmailError("");
    setEmptyFields(true);
    setMinimumInvestment("");
    setSelectedCountryDetails(null);
    setIsLoading({
      status: false,
      message: "",
    });
  };

  useEffect(() => {
    if (country) {
      let selectedCountry = allCountries?.find((item) => item?.name == country);

      // console.log("country", country);
      // console.log("selectedCountry", selectedCountry);
      if (selectedCountry) {
        setSelectedCountryDetails(selectedCountry);
      }
    }
  }, [country]);

  useEffect(() => {
    validateForms();
  }, [
    firstName,
    lastName,
    email,
    phone,
    firmName,
    investorType,
    minimumInvestment,
    jobTitle,
    country,
    emailError,
    emptyFields,
    isChecked,
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

    if (validEmail(email) === false) {
      setEmailError("Invalid email address");
      setEmptyFields(true);
      return false;
    }

    setEmailError("");
    if (phone === "") {
      setEmptyFields(true);
      return;
    }
    if (firmName === "") {
      setEmptyFields(true);
      return;
    }
    if (investorType === "") {
      setEmptyFields(true);
      return;
    }

    if (jobTitle === "") {
      setEmptyFields(true);
      return;
    }

    if (minimumInvestment === "") {
      setEmptyFields(true);
      return;
    }
    // if (minimumInvestmentTop === 0) {
    //   setEmptyFields(true);
    //   return;
    // }

    // if (minimumInvestmentBottom === 0) {
    //   setEmptyFields(true);
    //   return;
    // }
    if (country === "") {
      setEmptyFields(true);
      return;
    }

    if (isChecked === false) {
      setEmptyFields(true);
      return;
    }

    setEmptyFields(false);
  };

  const submitForm = async (e) => {
    e.preventDefault();

    setIsLoading({
      status: true,
      message: "Adding new Investor...",
    });

    let allInvestment = [];

    if (minimumInvestment === "$1,000,000 - Above") {
      allInvestment = [1000000, 5000000];
    } else {
      let formated = formateInvestmentNumbers(minimumInvestment);

      allInvestment = formated;
    }

    // console.log("allInvestment", allInvestment);

    let payload = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: selectedCountryDetails?.dialCode + phone,
      firmName: firmName,
      investorType: investorType,
      minimumInvestmentTop: allInvestment[0],
      minimumInvestmentBottom: allInvestment[1],
      jobTitle: jobTitle,
      country: country,
    };

    // console.log("payload", payload);

    try {
      const response = await axios.post(
        `https://fund10x-app-kx5rv4za5a-uc.a.run.app/api/investors`,
        payload
      );

      setIsLoading({
        status: false,
        message: "",
      });

      if (response?.data?.error === false) {
        toast.success("Investor added successfully");

        resetFields();
      } else {
        toast.error("Error occurred while adding investor");
      }
    } catch (error) {
      // Displaying the error message if available, or a generic error message if not
      setIsLoading({
        status: false,
        message: "",
      });

      const errorMessage =
        error?.response?.data?.message ||
        "Something went wrong. Please try again later.";
      toast.error(errorMessage);
    }
  };

  // const handleMinimumInvestment = (value) => {

  // }

  return (
    <>
      <div className="w-full">
        <PageLoading pageLoading={isLoading} />
        <div className="text-[#000] m-auto">
          <form className=" " onSubmit={submitForm}>
            <div className="formContainer">
              <div className="mt-4 w-full">
                <label>First Name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) =>
                    setFirstName(e.target.value.replace(/\s/g, ""))
                  }
                />
              </div>

              <div className="mt-4 w-full">
                <label>Last Name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) =>
                    setLastName(e.target.value.replace(/\s/g, ""))
                  }
                />
              </div>

              <div className="mt-4 w-full">
                <label>email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value.replace(/\s/g, ""))}
                />
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
                      fill="red"
                    >
                      <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 11c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4H9v-2h2v2z"></path>
                    </svg>
                    {emailError}
                  </p>
                )}
              </div>

              <div className="mt-4 w-full">
                <label>Country</label>
                <select
                  value={country}
                  onChange={(e) => {
                    if (e.target?.value === "") {
                      return;
                    }
                    setCountry(e.target.value);
                  }}
                >
                  <option value="" className="text-[13px] lg:text-[22.2px]">
                    Select country
                  </option>
                  {allCountries &&
                    allCountries?.map((country, index) => (
                      <option key={index} value={country?.name}>
                        {country?.name}
                      </option>
                    ))}
                </select>
              </div>

              {country && selectedCountryDetails && (
                <div className="mt-4 w-full">
                  <label>Phone</label>
                  <div className="apenndedInput">
                    <span>{selectedCountryDetails?.dialCode}</span>
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => {
                        let inputValue = event.target.value;
                        // Remove any non-numeric characters using a regular expression
                        let numericValue = inputValue.replace(/\D/g, "");

                        setPhone(numericValue);
                      }}
                      maxLength={10}
                      placeholder="8025777224"
                    />
                  </div>
                </div>
              )}

              <div className="mt-4 w-full">
                <label>Firm name</label>
                <input
                  type="text"
                  value={firmName}
                  onChange={(e) => setFirmName(e.target.value)}
                />
              </div>

              <div className="mt-4 w-full">
                <label>Investor Type</label>
                <div className="selectContainer">
                  <select
                    value={investorType}
                    onChange={(e) => {
                      if (e.target?.value === "") {
                        return;
                      }

                      setInvestorType(e.target.value);
                    }}
                  >
                    <option value="">Select type</option>
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
              <div className="mt-4 w-full">
                <label>Minimum Investment</label>
                <div className="selectContainer">
                  <select
                    value={minimumInvestment}
                    onChange={(e) => {
                      if (e.target?.value === "") {
                        return;
                      }

                      setMinimumInvestment(e.target.value);
                    }}
                  >
                    <option value="">Select investment</option>
                    {investments &&
                      investments?.map((item, index) => (
                        <option value={item}>{item}</option>
                      ))}
                  </select>
                </div>
              </div>

              {/* <div className="mt-4 w-full">
                <label>Minimum Investment Top</label>
                <input
                  value={minimumInvestmentTop}
                  onChange={(e) =>
                    setMinimumInvestmentTop(
                      Number(parseInt(e.target.value, 10))
                    )
                  }
                  type="text"
                  placeholder="0"
                />
              </div>

              <div className="mt-4 w-full">
                <label>Minimum Investment Bottom</label>
                <input
                  value={minimumInvestmentBottom}
                  onChange={(e) =>
                    setMinimumInvestmentBottom(
                      Number(parseInt(e.target.value, 10))
                    )
                  }
                  type="text"
                  placeholder="0"
                />
              </div> */}

              <div className="mt-4 w-full">
                <label>Job Title</label>
                <input
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  type="text"
                  placeholder="Job title"
                />
              </div>

              <div className="checkbox ml-[25px] lg:ml-[5px] text-[13px] lg:text-[22.2px]">
                <Checkbox
                  isChecked={isChecked}
                  toggleCheckbox={toggleCheckbox}
                  className="text-[13px] lg:text-[22.2px]"
                />
              </div>
            </div>
            <div className="flex justify-center pt-[40px]">
              <button
                disabled={emptyFields}
                type="submit"
                className="site_button flex items-center cursor-pointer w-[233.21px] my-[40px] h-[71.41px] rounded-[11.44px] border-[0.67px] border-black p-ban-pad gap-[24.37px] bg-linear2 shadowed text-center "
              >
                <span className=" text-[21.44px] ml-[80px] leading-[21.72px] font-medium text-[#fff]">
                  Submit
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForInvestors;
