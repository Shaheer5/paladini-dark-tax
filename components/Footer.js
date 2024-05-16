import React from "react";

const Footer = () => {
  return (
    <footer className="padding-top-96 padding-bottom-64">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-4 col-sm-12">
            <div className="MobileCenter">
              <picture className="badgeImage img-fluid">
                <source
                  srcSet="/media/PaladiniLaw@2x.webp"
                  media="(min-width: 767px)"
                />
                <source
                  srcSet="/media/PaladiniLaw.png"
                  media="(min-width: 300px)"
                />
                <img
                  alt="Logo"
                  height="100"
                  width="276"
                  className="img-fluid"
                  src="/media/PaladiniLaw.png"
                />
              </picture>
            </div>
            <div className="padding-top-40">
              <a href="tel:2015845605">
                <div className="footerCallBtn d-flex align-items-center">
                  <div>
                    <img
                      src="/media/iconPhone.svg"
                      width="25"
                      height="25"
                      alt="phone Icon"
                    />
                  </div>
                  <div className="footercallText ms-3">
                    <span className="fontSize23 DMSans fontWeight700 lineHeight125">
                      201-584-5605
                    </span>
                    <p className="fontSize15 DMSans fontWeight400 lineHeight130 m-0">
                      Call for Free Consultation
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-7 col-md-8 col-sm-12">
            <div className="row justify-content-between">
              <div className="col-lg-5 col-md-6 col-sm-12 MobileCenter">
                <div className="padding-bottom-12">
                  <p className="m-0 fontSize21 DMSans fontWeight400 lineHeight140 footerHeading">
                    Bergen County Office
                  </p>
                </div>
                <div className="padding-bottom-48 MobileCenter">
                  <p className="m-0 fontSize16 DMSans fontWeight400 lineHeight130 footerlightText">
                    80 W Century Rd., Suite B7 Paramus, NJ 07652
                  </p>
                  <p className="m-0 fontSize16 DMSans fontWeight400 lineHeight130 footerlightText">
                    (by appointment only)
                  </p>
                  <p className="m-0 fontSize16 DMSans fontWeight400 lineHeight130 footerlightText">
                    Phone: <a href="tel:8664798415">866-479-8415</a>
                  </p>
                  <p className="m-0 fontSize16 DMSans fontWeight400 lineHeight130 footerlightText">
                    Get Google Directions
                  </p>
                </div>
                <div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.2470560894126!2d-74.0775034!3d40.932252299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2fb020c153835%3A0xabae693cd9f88ed4!2s80%20W%20Century%20Rd%2C%20Paramus%2C%20NJ%2007652%2C%20USA!5e0!3m2!1sen!2s!4v1715064085834!5m2!1sen!2s"
                    width="300"
                    height="174"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Bergen County Office Location"
                  ></iframe>
                </div>
              </div>
              <div className="col-lg-5 col-md-6 col-sm-12 mobileTop30">
                <div className="padding-bottom-12 MobileCenter">
                  <p className="m-0 fontSize21 DMSans fontWeight400 lineHeight140 footerHeading">
                    Morristown Office
                  </p>
                </div>
                <div className="padding-bottom-48 MobileCenter">
                  <p className="m-0 fontSize16 DMSans fontWeight400 lineHeight130 footerlightText">
                    163 Madison Ave #220-38 Morristown, NJ 07960
                  </p>
                  <p className="m-0 fontSize16 DMSans fontWeight400 lineHeight130 footerlightText">
                    (by appointment only)
                  </p>
                  <p className="m-0 fontSize16 DMSans fontWeight400 lineHeight130 footerlightText">
                    Phone: <a href="tel:8623058939">862-305-8939</a>
                  </p>
                  <p className="m-0 fontSize16 DMSans fontWeight400 lineHeight130 footerlightText">
                    Get Google Directions
                  </p>
                </div>
                <div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3020.8132586462557!2d-74.4607048!3d40.7881194!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a7252bcc6771%3A0xfcbb15b2534c5a61!2sPaladini%20Law%2C%20A%20Tax%20Law%20Firm!5e0!3m2!1sen!2s!4v1715064263647!5m2!1sen!2s"
                    width="300"
                    height="174"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Morristown Office Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
