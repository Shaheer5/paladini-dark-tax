import React from "react";

const Founder = () => {
  return (
    <section className="bradPaladini padding-top-96 padding-bottom-96">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6 col-sm-12 show-on-scroll animation-top">
            <div className="d-flex justify-content-center">
              <div className="JoeVideo">
                <video width="240" height="420" id="bradVideo">
                  <source src="media/bardpaladini.m4v" type="video/mp4" />
                  <track
                    src="captions_en.vtt"
                    kind="captions"
                    srcLang="en"
                    label="english_captions"
                  />
                  <track
                    src="captions_es.vtt"
                    kind="captions"
                    srcLang="es"
                    label="spanish_captions"
                  />
                </video>
                <button id="videoButton">
                  <img
                    src="media/youtubeIcon.svg"
                    id="PlayButton"
                    width="75"
                    height="50"
                    alt="video button"
                  />
                </button>
              </div>
            </div>
            <div className="padding-top-48">
              <div className="joeDaminesName text-center ">
                <h3 className="m-0 fontSize23 fontWeight700 lineHeight125 DMSans">
                  Brad Paladini
                </h3>
                <div className="padding-top-4">
                  <p className="m-0 fontSize16 fontWeight400 lineHeight130 DMSans">
                    Attorney & Founder
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center padding-top-32">
              <a
                href="#"
                className="fontSize19 fontWeight500 lineHeight125 DMSans contactbradBtn d-inline-block"
              >
                <svg
                  className="me-2"
                  width="25"
                  height="26"
                  viewBox="0 0 25 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.4201 15.857L14.4156 18.4038C11.3114 16.5492 8.7244 13.9196 6.8998 10.7643L9.40541 8.72679C9.69888 8.48777 9.90629 8.15675 9.99527 7.78536C10.0843 7.41397 10.0498 7.02308 9.89731 6.67367L7.61408 1.44557C7.45026 1.07063 7.16078 0.767002 6.79723 0.588815C6.43368 0.410629 6.01969 0.369464 5.62906 0.472656L1.28088 1.61848C0.874795 1.72598 0.521673 1.98129 0.288555 2.33596C0.0554366 2.69062 -0.0414482 3.11995 0.0162935 3.54243C0.779397 9.06541 3.29071 14.1857 7.17058 18.1293C11.0505 22.0728 16.0879 24.6253 21.5215 25.4007C21.9367 25.4589 22.3584 25.3603 22.7069 25.1236C23.0553 24.8869 23.3063 24.5285 23.4122 24.1163L24.5395 19.6965C24.6405 19.2999 24.5999 18.8797 24.4249 18.5106C24.2498 18.1415 23.9516 17.8475 23.5834 17.6809L18.441 15.359C18.0974 15.2038 17.713 15.1685 17.3477 15.2585C16.9823 15.3486 16.6565 15.559 16.4211 15.857H16.4201Z"
                    fill="#F5F9F8"
                  />
                </svg>
                Contact Paladini
              </a>
            </div>
          </div>
          <div className="col-lg-7 col-md-6 col-sm-12 mobilePadding36 show-on-scroll animation-top">
            <div className="d-flex bradAbout align-items-center mobile-jutidyCenter">
              <span className="me-1"></span>
              <p className="m-0 fontSize21 fontWeight400 lineHeight140 DMSans">
                Tax Attorney & Founder
              </p>
            </div>
            <div className="bradHeading padding-bottom-36 MobileCenter">
              <h2 className="fontSize40 fontWeight700 lineHeight110 DMSans">
                Brad Paladini
              </h2>
            </div>
            <div className="bradText MobileCenter">
              <p className="fontSize19 fontWeight400 lineHeight130 DMSans">
                Having a tax issue is stressful. As a NJ tax lawyer, I've seen
                firsthand how difficult it can be. Whether it be an audit,
                collections, or trying to comply with complex codes and
                regulations, tax law is an overwhelming area to tackle alone.
                And as someone with a family who relies on you, or a business
                with employees who count on you, or both, there are many more
                important ways to spend your time than worrying about taxes.
              </p>
              <p className="fontSize19 fontWeight400 lineHeight130 DMSans">
                I focus on resolving issues with the IRS and state taxing
                agencies quickly, efficiently, and with extraordinary results.
                As a tax lawyer with over 11 years of experience, I’ve probably
                handled a situation like yours before, and I understand each
                solution is as unique as the individual.
              </p>
              <p className="fontSize19 fontWeight400 lineHeight130 DMSans">
                I’ve helped taxpayers save their homes, businesses, and
                possessions by finding that unique solution. If having a tax
                problem is new to you, it’s not new to me. And if tax problems
                have been reoccurring for years, now is the time to put the past
                behind you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
