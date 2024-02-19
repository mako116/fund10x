"use client";
import React, { useEffect, useState } from "react";
import PageLoading from "../loading/PageLoading";

const Locations = () => {
  const [isLoading, setIsLoading] = useState({
    status: false,
    message: "Please wait...",
  });
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [messageBox, setMessageBox] = useState("");

  const [emptyFields, setEmptyFields] = useState(true);
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    validateForms();
  }, [firstName, lastName, email, messageBox, emailError, emptyFields]);

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

    if (messageBox === "") {
      setEmptyFields(true);
      return;
    }

    setEmptyFields(false);
  };

  const submitForm = async (e) => {};

  return (
    <>
      <div className=" bg-img">
        <div className="w-full h-full py-[50px] malnred">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62333399.522118926!2d30.2754865!3d-17.5299937!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9573378b945575%3A0x172ecdb86ca74c71!2sSandton%2C%202196%2C%3+Denis+street%2C+MorningSide%2C+2196+Johannesburg%2C+South+Africa!5e0!3m2!1sen!2sng!4v1708112911397!5m2!1sen!2sng"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="w-[100%]"
          ></iframe>
        </div>

        <div className="contactUs bg-img w-full" style={{ paddingTop: 10 }}>
          <div className="contactUsWrapper">
            <h1 className="" style={{ width: "100%", height: "auto", top: 0 }}>
              Send us a message
            </h1>

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
                        onChange={(e) =>
                          setEmail(e.target.value.replace(/\s/g, ""))
                        }
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
                      <label>Message</label>
                      <textarea
                        cols="30"
                        rows="10"
                        value={messageBox}
                        onChange={(e) => setMessageBox(e.target.value)}
                      ></textarea>
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
          </div>
        </div>
        {/* <h3 className="text-[20px] py-[20px] text-center ">Address: 68 Mont Serrat 3 Denis street, MorningSide, 2196 Johannesburg, South Africa</h3> */}
      </div>
    </>
  );
};

export default Locations;
