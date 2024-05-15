import React from "react";

const Navbar = ({ header }) => {
  return (
    <section className={header}>
      <div className="container topbar">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center mobileGap align-items-center">
              <div>
                <a href="/">
                  <picture className="badgeImage img-fluid">
                    <source
                      srcSet="media/PaladiniLaw@2x.webp"
                      media="(min-width: 767px)"
                    />
                    <source
                      srcSet="media/PaladiniMini.png"
                      media="(min-width: 300px)"
                    />
                    <img
                      alt="Logo"
                      height="100"
                      width="276"
                      className="siteLogo"
                      src="media/PaladiniLaw.png"
                    />
                  </picture>
                </a>
              </div>
              <div>
                <a href="tel:2015845605">
                  <div className="headerCallBtn d-flex align-items-center">
                    <div>
                      <img
                        src="media/iconPhone.svg"
                        width="25"
                        height="25"
                        alt="phone Icon"
                      />
                    </div>
                    <div className="headerCalltext">
                      <span>201-584-5605</span>
                      <p>Call for Free Consultation</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
