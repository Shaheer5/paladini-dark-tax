import React from 'react'

const Copyright = () => {
  return (
    <div className="copyRight padding-top-32 padding-bottom-40">
   		<div className="container">
   			<div className="row">
   				<div className=" col-lg-6 col-md-6 col-sm-12 MobileCenter">
   					<p className="m-0 fontSize15 DMSans fontWeight400 lineHeight130 copyrightText">
   						© 2024  Paladin Law, PLLC. All Rights Reserved
   					</p>
   				</div>
   				<div className=" col-lg-6 col-md-6 col-sm-12 PrivacyPolicy">
   					<a href="/privacy-policy" className="m-0 fontSize15 DMSans fontWeight400 lineHeight130 footerLink">
   						Privacy Policy
   					</a>
   				</div>
   			</div>
   		</div>
   	</div>
  )
}

export default Copyright