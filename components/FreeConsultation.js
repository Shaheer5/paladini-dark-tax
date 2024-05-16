"use client"

import React, { useState } from "react";

const FreeConsultation = () => {
  const [phone, setPhone] = useState("");

  const handleInput = (e) => {
    let input = e.target.value.replace(/\D/g, ""); // Remove all non-numeric characters

    // Apply the US phone number format
    if (input.length > 0) {
      input = input.replace(/^1/, ""); // Remove leading '1' if present
      if (input.length > 3) {
        input = `(${input.slice(0, 3)}) ${input.slice(3)}`;
      }
      if (input.length > 9) {
        input = `${input.slice(0, 9)}-${input.slice(9)}`;
      }
    }

    if (input.length > 10) {
      input = input.slice(0, 14);
    }

    setPhone(input);
  };
  return (
    <section className="FreeConsultation padding-top-64 padding-bottom-96">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11 col-md-12">
            <div className="row">
              <div className="col-lg-4 col-md-5 col-sm-12 show-on-scroll animation-top">
                <div className="row">
                  <div className="col-lg-10 col-md-12 show-on-scroll animation-top">
                    <div className="padding-bottom-32 MobileCenter">
                      <h2 className="m-0 fontSize40 fontWeight700 lineHeight110 DMSans FreeConsultation-Heading">
                        Get a Free Consultation & Quote
                      </h2>
                    </div>
                    <div className="MobileCenter">
                      <p className="m-0 fontSize19 fontWeight400 lineHeight130 DMSans FreeConsultation-subHeading">
                        We will not rent, share, or sell your information
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-end position-relative">
                  <svg
                    className="freeArrow"
                    id="freeArrow"
                    width="189"
                    height="187"
                    viewBox="0 0 189 187"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_3015_7028)">
                      <path d="M37.8402 31.5484C31.9361 44.2168 30.5356 58.928 33.9366 72.4821C38.7561 91.649 52.764 107.609 69.5011 118.113C86.2451 128.619 105.599 134.205 124.98 138.088C134.052 139.908 143.398 141.384 152.513 139.81C153.3 139.673 154.156 139.466 154.609 138.811C155.268 137.853 154.688 136.549 154.065 135.561C150.63 130.162 145.848 125.63 140.27 122.494C145.754 127.258 150.907 132.39 155.692 137.864C142.502 144.08 128.904 149.426 115.015 153.852" />
                    </g>
                    <defs>
                      <clipPath id="clip0_3015_7028">
                        <rect
                          width="155.65"
                          height="153.465"
                          fill="white"
                          transform="translate(37.1265) rotate(14)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="col-lg-8 col-md-7 col-sm-12">
                <div className="row justify-content-end">
                  <div className="col-lg-10 col-md-12">
                    <form className="FreeConsultation-Form">
                      <div className="row">
                        <div className="col-lg-6 col-md-12 padding-bottom-40 show-on-scroll animation-top ">
                          <label
                            className="fontSize19 DMSans fontWeight700 lineHeight120"
                            htmlFor="name"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            className="form-control"
                          />
                        </div>
                        <div className="col-lg-6 col-md-12 padding-bottom-40 show-on-scroll animation-top">
                          <label
                            className="fontSize19 DMSans fontWeight700 lineHeight120"
                            htmlFor="contactNumber"
                          >
                            Contact Number
                          </label>
                          <input
                            type="tel"
                            name="contactNumber"
                            id="contactNumber"
                            className="form-control"
                            required
                            value={phone}
                            onInput={handleInput}
                          />
                        </div>
                        <div className="col-lg-6 col-md-12 padding-bottom-40 show-on-scroll animation-top">
                          <label
                            className="fontSize19 DMSans fontWeight700 lineHeight120"
                            htmlFor="FreeConsultationEmail"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            name="FreeConsultationEmail"
                            id="FreeConsultationEmail"
                            required
                            className="form-control"
                          />
                        </div>
                        <div className="col-lg-6 col-md-12 padding-bottom-40 show-on-scroll animation-top">
                          <label
                            htmlFor="taxamountowedfooter"
                            className="fontSize19 DMSans fontWeight700 lineHeight120"
                          >
                            Tax Amount Owed
                          </label>
                          <select
                            name="taxamountowedfooter"
                            autoComplete="off"
                            required
                            className="form-select"
                            aria-label="select tax amound owed"
                            id="taxamountowedfooter"
                          >
                            <option value="">Select Tax Amount Owed</option>
                            <option value="$5,000 to $9,999">
                              $5,000 to $9,999
                            </option>
                            <option value="$10,000 to $24,999">
                              $10,000 to $24,999
                            </option>
                            <option value="$25,000 to $49,999">
                              $25,000 to $49,999
                            </option>
                            <option value="$50,000 to $99,999">
                              $50,000 to $100,000
                            </option>
                            <option value="$100,000+">$100,000+</option>
                          </select>
                        </div>
                        <div className="col-lg-12 col-md-12 padding-bottom-40 show-on-scroll animation-top">
                          <label
                            className="fontSize19 DMSans fontWeight700 lineHeight120"
                            htmlFor="taxIssues"
                          >
                            Describe your tax issues here
                          </label>
                          <input
                            type="text"
                            name="taxIssues"
                            id="taxIssues"
                            required
                            className="form-control"
                          />
                        </div>
                        <div className="col-12 padding-top-20 MobileCenter show-on-scroll animation-top">
                          <button
                            className="helpNowBtn fontSize19 DMSans fontWeight500 lineHeight125 w-100"
                            type="submit"
                          >
                            Get Help Now
                            <svg
                              className="HelpNowIcon"
                              width="25"
                              height="24"
                              viewBox="0 0 25 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.5 7L18.5 12M18.5 12L13.5 17M18.5 12L6.5 12"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 padding-top-24 ">
                          <p className="fontSize13 DMSans fontWeight500 lineHeight125 m-0 footerFormText">
                            By Clicking the “Get a Free Consultation' button, I
                            agree to allow Paladini Law to reach out to me via
                            email, phone, or text message, regardless of my
                            number's inclusion on the Do Not Call Registry.”
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeConsultation;
