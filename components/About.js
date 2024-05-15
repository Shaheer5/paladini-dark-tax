import React from "react";

const About = () => {
  return (
    <section className="lawFirm padding-top-96 padding-bottom-104">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-10 col-sm-12 show-on-scroll animation-top">
            <div className="lawFirmAbout padding-bottom-4 d-flex align-items-center ">
              <span className="me-1"></span>
              <p className="m-0 fontSize21 lineHeight140 fontWeight400 DMSans">
                About
              </p>
            </div>
            <div className="lawFirmHeading padding-bottom-36">
              <h2 className="fontSize40 lineHeight110 fontWeight700 DMSans m-0">
                Paladini Law Firm
              </h2>
            </div>
            <div className="lawFirmText">
              <p className="m-0 fontSize20 lineHeight130 fontWeight400 DMSans">
                As a NJ tax law firm, Paladini Law’s vision is to provide the
                highest quality tax advice in the most cost-effective and
                efficient manner for you, the client. Our goal is to provide the
                best customer experience possible by providing real-time updates
                on your case, secure communication portals so you can feel
                confident sending sensitive information, and providing
                straightforward, actionable legal advice instead of the typical
                indirect legal jargon prevalent in the legal field. We're
                looking forward to being your personal tax attorney
              </p>
            </div>
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12 ">
            <div className="row justify-content-end">
              <div className="col-lg-11 col-md-12">
                <div className="row  tabletAlignStart">
                  <div className="col-lg-8 col-md-8 col-sm-12 mobilePaddingBottom show-on-scroll animation-top">
                    <picture className="lazyload badgeImage">
                      <source
                        srcSet="media/Brad1_2x.webp"
                        media="(min-width: 992px)"
                      />
                      <source
                        srcSet="media/Brad1.webp"
                        media="(min-width: 450px)"
                      />
                      <img
                        alt="Brad Paladini"
                        height="363"
                        width="539"
                        className="lazy lazyload img-fluid"
                        src="media/Brad1.png"
                      />
                    </picture>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="row mobileAlignCenter">
                      <div className="col-lg-12 col-md-12 col-sm-6 col-6 show-on-scroll animation-top">
                        <picture className="lazyload badgeImage">
                          <source
                            srcSet="media/Brad2_2x.webp"
                            media="(min-width: 992px)"
                          />
                          <source
                            srcSet="media/Brad2.webp"
                            media="(min-width: 450px)"
                          />
                          <img
                            alt="Brad Paladini"
                            height="232"
                            width="242"
                            className="lazy lazyload img-fluid mobileWidth100"
                            src="media/Brad2.png"
                          />
                        </picture>
                      </div>
                      <div className="padding-top-16 col-lg-12 col-md-12 col-sm-6 col-6 mobileMargin show-on-scroll animation-top">
                        <picture className="lazyload badgeImage">
                          <source
                            srcSet="media/Brad3_2x.webp"
                            media="(min-width: 992px)"
                          />
                          <source
                            srcSet="media/Brad3.webp"
                            media="(min-width: 450px)"
                          />
                          <img
                            alt="Brad Paladini"
                            height="147"
                            width="211"
                            className="lazy lazyload img-fluid mobileWidth100 mobileMargin"
                            src="media/Brad3.png"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="media/lawfirmBg.svg"
        width="1445"
        height="653"
        className="lawFirmBG  lazy lazyload "
        alt="lawfirmBg"
      />
    </section>
  );
};

export default About;
