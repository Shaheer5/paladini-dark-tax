"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";

const Hero = () => {
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
    <section className="header">
      <Navbar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-12 padding-top-72 padding-bottom-72 position-relative tabletPaddingTopBottom">
            <div className="row">
              <div className="col-lg-11 col-md-12">
                <div className="heroHeading position-relative">
                  <h1>Don’t Face IRS & State Tax Issues Alone</h1>
                </div>
                <svg
                  id="bannerArrow"
                  className="mobileHideArrow"
                  width="201"
                  height="174"
                  viewBox="0 0 201 174"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_3015_7485)">
                    <path d="M21.4598 60.9081C24.5491 74.5341 32.4149 87.0101 43.3409 95.6262C58.7994 107.804 79.5089 111.812 99.0347 109.837C118.567 107.86 137.148 100.396 154.712 91.5707C162.936 87.4416 171.164 82.8721 177.352 76.0368C177.886 75.4455 178.431 74.7572 178.388 73.9621C178.321 72.8008 177.071 72.1274 175.98 71.7291C169.997 69.5739 163.486 68.9292 157.201 69.875C164.404 70.2727 171.572 71.1629 178.661 72.5495C172.104 85.5509 164.698 98.1153 156.503 110.132" />
                  </g>
                  <defs>
                    <clipPath id="clip0_3015_7485">
                      <rect
                        width="169.528"
                        height="114.249"
                        fill="white"
                        transform="matrix(0.913582 -0.406655 0.401971 0.915653 0 68.9395)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="padding-top-36 sm-paddingTop16">
              <div className="row padding-bottom-12 heroList">
                <div className="col-lg-1 col-md-1 col-sm-2 col-2 text-center paddingL-0 hero-tick">
                  <img
                    src="media/icon-CheckSignle.svg"
                    width="24"
                    height="24"
                    alt="check icon"
                  />
                </div>
                <div className="col-lg-11 col-md-11 col-sm-10 col-10 p-0 marginLeft-5">
                  <p>
                    Tax Attorney With <span>11+ Years Experience</span>
                  </p>
                </div>
              </div>
              <div className="row padding-bottom-12 heroList">
                <div className="col-lg-1 col-md-1 col-sm-2 col-2 text-center paddingL-0 hero-tick">
                  <img
                    src="media/icon-CheckSignle.svg"
                    width="24"
                    height="24"
                    alt="check icon"
                  />
                </div>
                <div className="col-lg-11 col-md-11 col-sm-10 col-10 p-0 marginLeft-5">
                  <p>
                    Get IRS or State Case Evaluation{" "}
                    <span>With a Free Consultation</span>
                  </p>
                </div>
              </div>
              <div className="row heroList">
                <div className="col-lg-1 col-md-1 col-sm-2 col-2 text-center paddingL-0 hero-tick">
                  <img
                    src="media/icon-CheckSignle.svg"
                    width="24px"
                    height="24px"
                    alt="check icon"
                  />
                </div>
                <div className="col-lg-11 col-md-11 col-sm-10 col-10 p-0 marginLeft-5">
                  <p>
                    <span>No Commitment</span> or Obligation With Consultation
                  </p>
                </div>
              </div>
            </div>
            <div className="padding-top-32 HeroPhraText">
              <p>
                Tackle IRS or state tax challenges head-on. Our firm is
                committed to offering permanent resolutions to your tax
                dilemmas, covering both your personal and small business tax
                needs. Contact us now for a complimentary consultation.
              </p>
            </div>
            <div className="padding-top-8 shift-layout showOnLaptop">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6 col-6  h-100 padding-top-32">
                  <div className="heroBadge text-center">
                    <div className="text-center">
                      <img
                        src="media/LogoReviewTax 1.svg"
                        width="160"
                        height="29"
                        alt="ReviewTax "
                        className="d-block imageWidth m-auto"
                      />
                    </div>
                    <div className="padding-top-8 d-flex align-items-center justify-content-center">
                      <p className="mx-1 my-0">5.0</p>
                      <img
                        src="media/googleStar.svg"
                        width="100"
                        height="19"
                        className="start imageWidth"
                        alt="rating start"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-6  h-100 padding-top-32">
                  <div className="heroBadge text-center">
                    <div className="d-flex heroBadgeNormalText">
                      <img
                        src="media/Google.svg"
                        width="31"
                        height="31"
                        alt="Goggle Review "
                        className="d-block imageWidth m-auto"
                      />
                      <p className="my-0 mx-1 ">Based on 48+ Google Reviews</p>
                    </div>
                    <div className="padding-top-8 d-flex align-items-center justify-content-center">
                      <p className="my-0 mx-1 ">5.0</p>
                      <img
                        src="media/googleStar.svg"
                        width="100"
                        height="19"
                        className="start imageWidth"
                        alt="rating start"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12"></div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-6  h-100 padding-top-32">
                  <div className="heroBadge text-center">
                    <div className="text-center">
                      <img
                        src="media/avvologo.svg"
                        width="120"
                        height="34"
                        alt="avvo logo "
                        className="d-block imageWidth m-auto"
                      />
                    </div>
                    <div className="padding-top-8 d-flex align-items-center justify-content-center">
                      <p className="my-0 mx-1">5.0</p>
                      <img
                        src="media/googleStar.svg"
                        width="100"
                        height="19"
                        className="start imageWidth"
                        alt="rating start"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="padding-top-72 showOnLaptop">
              <div className="HeroExperienceBox">
                <span>11 Years</span>
                <p>of Experience</p>
              </div>
            </div>
            <picture>
              {/* Source for desktop */}
              <source
                media="(min-width: 768px)"
                srcSet="media/BradPicture@2x.webp"
                type="image/webp"
                fetchMode="image"
                fetchPriority="high"
              />
              {/* Fallback for desktop */}
              <img
                alt="BradPicture"
                className="BradPicture"
                src="media/BradPicture@2x.webp"
                width="850"
                height="966"
                fetchPriority="high"
              />
            </picture>
          </div>
          <div className="col-lg-5 col-md-8 col-sm-12 padding-top-72 SMpaddingTop-0">
            <div className="row justify-content-end">
              <div className="text-center mobileBradPicture">
                <picture>
                  {/* Source for mobile */}
                  <source
                    media="(max-width: 767px)"
                    srcSet="media/BradPicture.webp"
                    type="image/webp"
                    fetchMode="image"
                    fetchPriority="high"
                  />
                  {/* Fallback for mobile */}
                  <img
                    alt="BradPicture"
                    className="imageWidth"
                    src="media/BradPicture.webp"
                    width="425"
                    height="483"
                    fetchPriority="high"
                  />
                </picture>
              </div>
              <div className="col-lg-11 col-md-12 siftCol">
                <form id="formtax" action="" className="" method="POST">
                  <div className="herder-form">
                    <div className="text-center position-relative zindex1">
                      <h2>Request a Free Consultation</h2>
                      <svg
                        id="formCircle"
                        width="359"
                        height="30"
                        viewBox="0 0 359 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M313.485 4.17845C298.634 2.24643 279.962 1.53698 261.743 1.13577C194.765 -0.338214 125.785 1.797 64.361 6.7958C49.0193 8.04421 34.0241 9.4786 20.9154 11.3745C12.7537 12.554 5.0251 14.0176 2.93655 15.8584C0.64589 17.8731 5.7662 19.9842 13.7835 21.4582C21.8008 22.9322 32.3783 23.862 43.0135 24.6455C71.7142 26.7583 102.282 27.9826 133.071 28.6903C197.133 30.1609 264.986 29.293 321.57 23.7208C330.309 22.8598 338.836 21.8766 345.487 20.5438C352.128 19.2128 356.777 17.4908 356.623 15.7069C356.315 12.2613 339.346 9.70761 323.889 7.65161" />
                      </svg>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 padding-top-20 padding-bottom-20 pTop16">
                        <label htmlFor="fullname">Full Name</label>
                        <input
                          type="text"
                          name="fullname"
                          id="fullname"
                          required
                          className="form-control"
                        />
                      </div>
                      <div className="col-12 padding-bottom-20">
                        <label htmlFor="emailid">Email</label>
                        <input
                          type="email"
                          name="emailid"
                          id="emailid"
                          required
                          className="form-control"
                        />
                      </div>
                      <div className="col-12 padding-bottom-20">
                        <label htmlFor="phonemobile">Phone</label>
                        <input
                          type="tel"
                          name="phonemobile"
                          id="phonemobile"
                          required
                          className="form-control"
                          value={phone}
                          onInput={handleInput}
                        />
                      </div>
                      <div className="col-12 padding-bottom-20">
                        <label
                          htmlFor="taxamountowed"
                          className="fontSize16 DMSans fontWeight400 lineHeight130"
                        >
                          Tax Amount Owed
                        </label>
                        <select
                          name="taxamountowed"
                          autoComplete="off"
                          required
                          className="form-select"
                          aria-label="select tax amound owed"
                          id="taxamountowed"
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
                      <input
                        type="hidden"
                        name="lead_source"
                        id="lead_source"
                        value="BMR_JT"
                      />
                      <input type="hidden" name="leadurl" id="leadurl" />
                      <div className="col-12 padding-top-12">
                        <button type="submit">
                          Request Free Consultation
                          <svg
                            className="ms-2 arrowIcon"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13 7L18 12M18 12L13 17M18 12L6 12"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="text-center padding-bottom-12 padding-top-24">
                        <a href="tel:2015845605">
                          <span>CALL 201-584-5605</span>
                        </a>
                      </div>
                      <div className="text-center">
                        <p className="fontSize12 DMSans fontWeight400 lineHeight130 small-text">
                          By Clicking the “Get a Free Consultation' button, I
                          agree to allow Paladini Law to reach out to me via
                          email, phone, or text message, regardless of my
                          number's inclusion on the Do Not Call Registry.”
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="padding-top-8 padding-bottom-72 shift-layout showOnMobile">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-4 col-sm-6 col-6  h-100 padding-top-32">
                <div className="heroBadge text-center">
                  <div className="text-center">
                    <img
                      src="media/LogoReviewTax 1.svg"
                      width="160"
                      height="29"
                      alt="ReviewTax "
                      className="d-block imageWidth m-auto"
                    />
                  </div>
                  <div className="padding-top-8 d-flex align-items-center justify-content-center">
                    <p className="mx-1 my-0">5.0</p>
                    <img
                      src="media/googleStar.svg"
                      width="100"
                      height="19"
                      className="start imageWidth"
                      alt="rating start"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-6  h-100 padding-top-32">
                <div className="heroBadge text-center">
                  <div className="d-flex heroBadgeNormalText align-items-center">
                    <img
                      src="media/Google.svg"
                      width="31"
                      height="31"
                      alt="Goggle Review "
                      className="d-block imageWidth m-auto googleBadge"
                    />
                    <p className="my-0 mx-1 ">Based on 48+ Google Reviews</p>
                  </div>
                  <div className="padding-top-8 d-flex align-items-center justify-content-center">
                    <p className="my-0 mx-1 ">5.0</p>
                    <img
                      src="media/googleStar.svg"
                      width="100"
                      height="19"
                      className="start imageWidth"
                      alt="rating start"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-6  h-100 padding-top-32">
                <div className="heroBadge text-center">
                  <div className="text-center">
                    <img
                      src="media/avvologo.svg"
                      width="120"
                      height="34"
                      alt="avvo logo "
                      className="d-block imageWidth m-auto"
                    />
                  </div>
                  <div className="padding-top-8 d-flex align-items-center justify-content-center">
                    <p className="my-0 mx-1">5.0</p>
                    <img
                      src="media/googleStar.svg"
                      width="100"
                      height="19"
                      className="start imageWidth"
                      alt="rating start"
                    />
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

export default Hero;
