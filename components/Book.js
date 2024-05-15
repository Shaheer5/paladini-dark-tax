import React from "react";

const Book = () => {
  return (
    <section className="bookSection padding-top-40 ">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-6 col-sm-12 position-relative order-2 order-md-1 show-on-scroll animation-top">
            <div className="row justify-content-center">
              <div className="col-lg-9 col-md-12">
                <div className="padding-bottom-16 MobileCenter">
                  <h2 className="m-0 fontSize40 fontWeight700 lineHeight110 DMSans bookHeading">
                    Read Our Latest Book
                  </h2>
                </div>
                <div className="padding-bottom-24 MobileCenter">
                  <p className="m-0 fontSize19 fontWeight400 lineHeight130 DMSans bookText">
                    Get a copy of "
                    <span className="fontWeight700">
                      Surviving An IRS Tax Audit
                    </span>
                    " today to learn to think like an auditor and escape an
                    audit intact.
                  </p>
                </div>
                <div className="MobileCenter">
                  <button className="bookbtn fontSize19 fontWeight500 lineHeight125 DMSans">
                    Get a copy Now
                    <svg
                      className="ms-2 arrowIcon"
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.5 7.16431L18.5 12.1643M18.5 12.1643L13.5 17.1643M18.5 12.1643L6.5 12.1643"
                        stroke="#F5F9F8"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <svg
              className="bookArrow"
              id="bookArrow"
              width="172"
              height="100"
              viewBox="0 0 360 190"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.61161 50.8642C13.5797 35.699 29.1121 22.8733 43.2576 11.9464C46.5788 9.38096 49.3863 8.62832 53.0852 7.2781C59.2877 5.01397 64.9642 2.65479 71.7053 2.92246C88.3144 3.58195 101.402 11.8671 114.133 21.9345C130.961 35.2419 145.405 53.5533 155.962 72.4888C161.374 82.1968 166.239 92.1784 170.882 102.29C175.256 111.814 178.414 121.626 179.949 132.163C181.142 140.349 178.096 145.391 172.074 149.433C165.005 154.178 157.646 149.919 153.314 143.751C136.853 120.317 143.881 76.7015 170.549 63.7649C187.048 55.7616 204.376 61.5191 220.367 67.7377C246.254 77.8043 267.213 99.182 286.246 119.061C296.695 129.975 307.267 140.419 316.901 152.127C323.766 160.469 330.094 169.245 336.972 177.572C338.836 179.828 340.78 182.019 342.581 184.329C343.102 184.997 343.891 187.073 344.206 186.281C344.472 185.613 333.202 185.953 332.191 186.019C324.935 186.489 318.287 185.377 311.126 187.178C308.607 187.812 312.733 186.342 313.375 186.249C321.381 185.099 329.914 185.339 337.958 185.871C344.083 186.276 350.122 187.605 356.255 187.786C360.106 187.901 353.843 178.57 353.045 176.627C347.377 162.834 341.737 149.029 336.194 135.181C335.23 132.773 333.303 125.625 330.781 124.17"
                style={{ strokeDasharray: "773, 775", strokeDashoffset: "0" }}
              ></path>
            </svg>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12 mobilePadding36 order-1 order-md-2 show-on-scroll animation-top bookImageMobile">
            <picture className="lazyload ">
              <source srcSet="media/book_2x.webp" media="(min-width: 992px)" />
              <source srcSet="media/book.webp" media="(min-width: 450px)" />
              <img
                alt="book"
                height="569"
                width="421"
                className="lazy lazyload img-fluid"
                src="media/book.png"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
