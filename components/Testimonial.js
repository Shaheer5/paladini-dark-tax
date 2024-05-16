import React from "react";

const Testimonial = () => {
  return (
    <section className="Testimonials padding-bottom-104 padding-top-40">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="text-center TestimonialsHeading">
              <h2 className="fontSize40 lineHeight110 fontWeight700 DMSans  m-0">
                Listen and Read Real Testimonials
              </h2>
              <p className="m-0 fontSize21 lineHeight140 fontWeight400 DMSans padding-top-4">
                Let’s see how our clients have responded with our tax help
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center  align-start">
          <div className="col-lg-6 col-md-10 col-sm-12 padding-top-56">
            <div>
              <div className="testimonialVideo show-on-scroll animation-top">
                <div
                  className="carousel slide"
                  data-bs-ride="carousel"
                  data-bs-interval="false"
                  id="vedioSlider"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div
                        className="video-container d-flex justify-content-center align-items-center"
                        id="youtube-video-1"
                      >
                        <div className="text-center">
                          <img
                            src="media/PlayBtn.svg"
                            width="99"
                            height="99"
                            className="lazy lazyload"
                            alt="Youtuve icon"
                          />
                          <br />
                          <span className="text-white fontSize15 DMSans lineHeight140 fontWeight400 text-center mt-2">
                            Video loading...
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div
                        className="video-container d-flex justify-content-center align-items-center"
                        id="youtube-video-2"
                      >
                        <div className="text-center">
                          <img
                            src="media/PlayBtn.svg"
                            width="99"
                            height="99"
                            className="lazy lazyload"
                            alt="Youtuve icon"
                          />
                          <br />
                          <span className="text-white fontSize15 DMSans lineHeight140 fontWeight400 text-center mt-2">
                            Video loading...
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="padding-top-20 MobileCenter">
                  <a
                    className="m-0 fontSize19 DMSans lineHeight125 fontWeight600 videoText"
                    data-bs-target="#vedioSlider"
                    data-bs-slide="next"
                    id="nextBtn"
                  >
                    Watch <span id="NPbtnText">Next</span> Video
                    <svg
                      className="arrowIcon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 7L18 12M18 12L13 17M18 12L6 12"
                        stroke="#16364C"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-10 col-sm-12 padding-top-56">
            <div className="TestimonialsCard show-on-scroll animation-top">
              <div
                className="carousel slide"
                data-bs-ride="carousel"
                id="TestimonialsSlider"
                data-bs-interval="false"
              >
                <div className="carousel-indicators">
                  <button
                    aria-label="Slide 1"
                    type="button"
                    className="active"
                    data-bs-target="#TestimonialsSlider"
                    data-bs-slide-to="0"
                  ></button>
                  <button
                    aria-label="Slide 2"
                    type="button"
                    data-bs-target="#TestimonialsSlider"
                    data-bs-slide-to="1"
                  ></button>
                  <button
                    aria-label="Slide 3"
                    type="button"
                    data-bs-target="#TestimonialsSlider"
                    data-bs-slide-to="2"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className=" TestimonialsCard-text">
                      <p className="m-0 fontSize19 lineHeight130 fontWeight400 DMSans minHeight">
                        I was very fortunate to have Brad Paladini represent me
                        in a complex tax matter. He left a very positive
                        impression from our very first interactions, as he was
                        significantly more responsive and remarkably more
                        knowledgeable than any other lawyer I spoke with in my
                        search. His responsiveness persisted throughout the time
                        we worked together: he always returned my calls and
                        emails in a swift and thorough manner. Brad is very
                        well-versed in tax law and showcased incredible
                        attention to detail in every one of our interactions and
                        conversations. Most importantly, I had a far better
                        outcome than I ever could have hoped and highly
                        recommend his services.
                      </p>
                      <div className="TestimonialsCard-footer padding-top-24 d-flex align-items-center">
                        <p className="m-0 fontSize20 lineHeight130 fontWeight700 DMSans">
                          - M.Y
                        </p>
                        <img
                          src="media/TestimonialsStar.svg"
                          width="100"
                          height="18"
                          alt="5 starts"
                          className="ms-2"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className=" TestimonialsCard-text">
                      <p className="m-0 fontSize19 lineHeight130 fontWeight400 DMSans minHeight">
                        Brad was fantastic. He provided me with a sound common
                        sense response and follow-on approach to solve my tax
                        issues with the IRS. He understood my situation and
                        drafted timely filings to the IRS which resolved all
                        outstanding matters.
                      </p>
                      <div className="TestimonialsCard-footer padding-top-24 d-flex align-items-center">
                        <p className="m-0 fontSize20 lineHeight130 fontWeight700 DMSans">
                          - Timothy Desmond
                        </p>
                        <img
                          src="media/TestimonialsStar.svg"
                          width="100"
                          height="18"
                          alt="5 starts"
                          className="ms-2"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className=" TestimonialsCard-text">
                      <p className="m-0 fontSize19 lineHeight130 fontWeight400 DMSans minHeight">
                        Brad was absolute professional the entire time we
                        engaged the services of his firm. He clearly outlined
                        all the options, quickly provided all the documents we
                        needed for our case and made us feel better about a
                        difficult situation. It's exactly the type of attitude
                        and service you would want when you engage an expert.
                      </p>
                      <div className="TestimonialsCard-footer padding-top-24 d-flex align-items-center">
                        <p className="m-0 fontSize20 lineHeight130 fontWeight700 DMSans">
                          - Nicole Bubear
                        </p>
                        <img
                          src="media/TestimonialsStar.svg"
                          width="100"
                          height="18"
                          alt="5 starts"
                          className="ms-2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <svg
                className="TestimonialsCardBG"
                width="126"
                height="116"
                viewBox="0 0 126 116"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.1"
                  d="M31.0602 0L42.2357 8.28574C39.2003 12.1524 36.0271 17.6762 32.7158 24.8571C29.4045 32.0381 26.7831 39.9095 24.8516 48.4714C22.92 57.0333 22.3681 65.5952 23.1959 74.1572C25.1275 73.3286 26.9211 72.7762 28.5767 72.5C30.2324 71.9476 31.888 71.6714 33.5436 71.6714C39.0624 71.6714 43.6154 73.6048 47.2026 77.4714C50.7897 81.3381 52.5833 86.1714 52.5833 91.9714C52.5833 99.7048 50.3758 105.643 45.9608 109.786C41.5458 113.929 36.165 116 29.8184 116C20.4365 116 13.1242 112.41 7.88136 105.229C2.91447 97.7714 0.43103 88.7952 0.43103 78.3C0.43103 71.1191 1.67275 62.6952 4.15619 53.0286C6.91558 43.0857 10.5028 33.281 14.9178 23.6143C19.6087 13.9476 24.9895 6.07619 31.0602 0ZM103.908 0L115.083 8.28574C112.048 12.1524 108.875 17.6762 105.563 24.8571C102.252 32.0381 99.6308 39.9095 97.6992 48.4714C95.7677 57.0333 95.2158 65.5952 96.0436 74.1572C97.9752 73.3286 99.7688 72.7762 101.424 72.5C103.08 71.9476 104.736 71.6714 106.391 71.6714C111.91 71.6714 116.463 73.6048 120.05 77.4714C123.637 81.3381 125.431 86.1714 125.431 91.9714C125.431 99.7048 123.224 105.643 118.809 109.786C114.394 113.929 109.013 116 102.666 116C93.2842 116 85.9719 112.41 80.729 105.229C75.7622 97.7714 73.2787 88.7952 73.2787 78.3C73.2787 71.1191 74.5204 62.6952 77.0039 53.0286C79.7633 43.0857 83.3505 33.281 87.7655 23.6143C92.4564 13.9476 97.8372 6.07619 103.908 0Z"
                  fill="#1C2E2E"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <img
        src="media/TestimonialsBg.svg"
        width="1440"
        height="687"
        className="TestimonialsBG lazy lazyload "
        alt="testimonial bg"
      />
    </section>
  );
};

export default Testimonial;
