// "use client";

//  import React, { useEffect, useState } from "react";
//  import { countries } from "@/globals/countries/countries";
//  import axios from "axios";

// export const validEmail = (email: string) => {
//   var emailReg = /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/;
//   return emailReg.test(email);
// };

// const AddBusinessForm = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [businessName, setBusinessName] = useState("");
//   const [businessType, setBusinessType] = useState("");
//   const [investmentStage, setInvestmentStage] = useState("");
//   const [businessWebsite, setBusinessWebsite] = useState("");
//   const [jobTitle, setJobTitle] = useState("");
//   const [allCountries] = useState(countries());
//   const [country, setCountry] = useState("");
//   const [emptyFields, setEmptyFields] = useState(true);
//   const [emailError, setEmailError] = useState("");

//   const resetFields = () => {
//     setFirstName("");
//     setLastName("");
//     setEmail("");
//     setPhone("");
//     setBusinessName("");
//     setBusinessType("");
//     setInvestmentStage("");
//     setBusinessWebsite("");
//     setJobTitle("");
//     setCountry("");
//     setEmailError("");
//     setEmptyFields(true);
//   };

//   useEffect(() => {
//     validateForms();
//   }, [
//     firstName,
//     lastName,
//     email,
//     phone,
//     businessName,
//     businessType,
//     investmentStage,
//     businessWebsite,
//     jobTitle,
//     country,
//     emailError,
//     emptyFields,
//   ]);

//   const validateForms = () => {
//     if (firstName === "") {
//       setEmptyFields(true);
//       return;
//     }
//     if (lastName === "") {
//       setEmptyFields(true);
//       return;
//     }
//     if (email === "") {
//       setEmptyFields(true);
//       return;
//     }
//     if (validEmail(email) === false) {
//       setEmailError("Invalid email address");
//       setEmptyFields(true);
//       return false;
//     }

//     setEmailError("");
//     if (phone === "") {
//       setEmptyFields(true);
//       return;
//     }
//     if (businessName === "") {
//       setEmptyFields(true);
//       return;
//     }
//     if (businessType === "") {
//       setEmptyFields(true);
//       return;
//     }
//     if (investmentStage === "") {
//       setEmptyFields(true);
//       return;
//     }
//     if (jobTitle === "") {
//       setEmptyFields(true);
//       return;
//     }
//     if (businessWebsite === "") {
//       setEmptyFields(true);
//       return;
//     }
//     if (country === "") {
//       setEmptyFields(true);
//       return;
//     }

//     setEmptyFields(false);
//   };

//   const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     dispatch(
//       setPageLoading({
//         status: true,
//         message: "Adding new business...",
//       })
//     );

//     let payload = {
//       firstName: firstName,
//       lastName: lastName,
//       email: email,
//       phone: phone,
//       businessName: businessName,
//       businessType: businessType,
//       businessWebsite: businessWebsite,
//       jobTitle: jobTitle,
//       investmentStage: investmentStage,
//       country: country,
//     };

//     try {
//       const response = await axios.post(
//         `https://fund10x-app-kx5rv4za5a-uc.a.run.app/api/business`,
//         payload
//       );

//       if (response?.data?.error === false) {
//         dispatch(
//           setAlertPopUp({
//             status: true,
//             type: "success",
//             title: "Business Added",
//             desc: "Your business have been added successfully!",
//             payload: null,
//           })
//         );

//         resetFields();
//       } else {
//         dispatch(
//           setAlertPopUp({
//             status: true,
//             type: "error",
//             title: "Business Not Added",
//             desc: "Error occurred while adding Your business",
//             payload: null,
//           })
//         );
//       }
//     } catch (error: any) {
//       dispatch(
//         setAlertPopUp({
//           status: true,
//           type: "error",
//           title: "Error",
//           desc:
//             error?.response?.data?.errors[0] ||
//             "Something's wrong, please try again",
//           payload: null,
//         })
//       );
//     }

//     dispatch(
//       setPageLoading({
//         status: false,
//         message: "",
//       })
//     );
//   };

//   return (
//     <div className="fasta-form-div">
//       <form onSubmit={submitForm}>
//         <div className="row mt-5">
//           <div className="col-md-6 mt-1 mr-auto">
//             <div className="form-group">
//               <label htmlFor="">First name</label>
//               <input
//                 value={firstName}
//                 onChange={(e) =>
//                   setFirstName(e.target.value.replace(/\s/g, ""))
//                 }
//                 type="text"
//                 placeholder="First name"
//               />
//             </div>
//           </div>
//           <div className="col-md-6 mt-1 mr-auto">
//             <div className="form-group">
//               <label htmlFor="">Last name</label>
//               <input
//                 value={lastName}
//                 onChange={(e) => setLastName(e.target.value.replace(/\s/g, ""))}
//                 type="text"
//                 placeholder="Last name"
//               />
//             </div>
//           </div>
//           <div className="col-md-6 mt-1 mr-auto">
//             <div className="form-group">
//               <label htmlFor="">Email</label>
//               <input
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value.replace(/\s/g, ""))}
//                 type="text"
//                 placeholder="Last name"
//               />
//               {emailError && (
//                 <p className="inputError">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="10"
//                     height="10"
//                     viewBox="0 0 20 20"
//                     role="presentation"
//                     focusable="false"
//                     tabIndex={-1}
//                     fill="red"
//                   >
//                     <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 11c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4H9v-2h2v2z"></path>
//                   </svg>
//                   {emailError}
//                 </p>
//               )}
//             </div>
//           </div>
//           <div className="col-md-6 mt-1 mr-auto">
//             <div className="form-group">
//               <label htmlFor="">Phone</label>
//               <input
//                 value={phone}
//                 onChange={(e) =>
//                   setPhone(
//                     e.target.value ? String(parseInt(e.target.value, 10)) : ""
//                   )
//                 }
//                 maxLength={10}
//                 placeholder="8025777224"
//                 type="text"
//               />
//             </div>
//           </div>
//           <div className="col-md-6 mt-1 mr-auto">
//             <div className="form-group">
//               <label htmlFor="">Business name</label>
//               <input
//                 value={businessName}
//                 onChange={(e) => setBusinessName(e.target.value)}
//                 type="text"
//                 placeholder="Business name"
//               />
//             </div>
//           </div>
//           <div className="col-md-6 mt-1 mr-auto">
//             <div className="form-group">
//               <label htmlFor="">Business Type</label>
//               <select
//                 value={businessType}
//                 onChange={(e) => {
//                   if (e.target?.value === "") {
//                     return;
//                   }

//                   setBusinessType(e.target.value);
//                 }}
//               >
//                 <option value="">Select type</option>
//                 <option value="Fintech">Fintech</option>
//               </select>
//             </div>
//           </div>
//           <div className="col-md-6 mt-1 mr-auto">
//             <div className="form-group">
//               <label htmlFor="">Investment Stage</label>
//               <select
//                 value={investmentStage}
//                 onChange={(e) => {
//                   if (e.target?.value === "") {
//                     return;
//                   }

//                   setInvestmentStage(e.target.value);
//                 }}
//               >
//                 <option value="">Select stage</option>
//                 <option value="seed">seed</option>
//                 <option value="startup">startup</option>
//                 <option value="growth">growth</option>
//                 <option value="established">established</option>
//                 <option value="expansion">expansion</option>
//                 <option value="maturity">maturity</option>
//                 <option value="exit">exit</option>
//               </select>
//             </div>
//           </div>

//           <div className="col-md-6 mt-1 mr-auto">
//             <div className="form-group">
//               <label htmlFor="">Job Title</label>
//               <input
//                 value={jobTitle}
//                 onChange={(e) => setJobTitle(e.target.value)}
//                 type="text"
//                 placeholder="Job title"
//               />
//             </div>
//           </div>
//           <div className="col-md-6 mt-1 mr-auto">
//             <div className="form-group">
//               <label htmlFor="">Business website</label>
//               <input
//                 value={businessWebsite}
//                 onChange={(e) =>
//                   setBusinessWebsite(e.target.value.replace(/\s/g, ""))
//                 }
//                 type="text"
//                 placeholder="www.yourbusinesswebsite.com"
//               />
//             </div>
//           </div>
//           <div className="col-md-6 mt-1 mr-auto">
//             <div className="form-group">
//               <label htmlFor="">Country</label>
//               <select
//                 value={country}
//                 onChange={(e) => {
//                   if (e.target?.value === "") {
//                     return;
//                   }
//                   setCountry(e.target.value);
//                 }}
//               >
//                 <option value="">Select country</option>
//                 {allCountries &&
//                   allCountries?.map((country, index) => (
//                     <option key={index} value={country?.name}>
//                       {country?.name}
//                     </option>
//                   ))}
//               </select>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-md-6 mt-2">
//             <div className="form-group">
//               <button
//                 disabled={emptyFields}
//                 type="submit"
//                 className="site_button"
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddBusinessForm;
