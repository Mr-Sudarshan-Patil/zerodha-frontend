import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }} className="p-5 border-top">
      <div className="container  mt-5">
      <div className="row">
        <div className="col-3">
            <div className='row'>
              <img className="mb-3" style={{width:"60%"}} src="media/images/logo.svg" alt="logo" />
              <div>
                <p>	&#169; 2010 - 2024, Zerodha Broking Ltd.<br/>All rights reserved.</p>
              </div>
              <div className='mb-3 d-flex gap-4'>
                <a href=""><i className="fa-brands fa-x-twitter text-body-secondary fs-5"></i></a>
                <a href=""><i className="fa-brands fa-square-facebook text-body-secondary fs-5"></i></a>
                <a href=""><i className="fa-brands fa-instagram text-body-secondary fs-5"></i></a>
                <a href=""><i className="fa-brands fa-linkedin-in text-body-secondary fs-5"></i></a>
                </div>
                <hr />
                <div className='mb-3 d-flex gap-4'>
                <a href=""><i className="fa-brands fa-youtube text-body-secondary fs-5" ></i></a>
                <a href=""><i className="fa-brands fa-whatsapp text-body-secondary  fs-5"></i></a>
                <a href=""><i className="fa-brands fa-telegram text-body-secondary  fs-5"></i></a>
              </div>
            </div>
            
        </div>
        <div className="col-3 text-decoration-none">
          <h5 className='mb-3'>Company</h5>
          <div className='fs-7 fw-medium text-body-secondary lh-1'>
            <p>About</p>
            <p>Products</p>
            <p>Pricing</p>
            <p>Referral programme</p>
            <p>Careers</p>
            <p>Zerodha.tech</p>
            <p>Press & media </p>
            <p>Zerodha Cares (CSR)</p>
          </div>
        </div>
        <div className="col-3">
        <h5 className='mb-3'>Support</h5>
          <div className='fs-7 fw-medium text-body-secondary lh-1'>
            <p>Contact us</p>
            <p>Support portal</p>
            <p>Z-Connect blog</p>
            <p>List of charges</p>
            <p>Downloads & resources</p>
            <p>Videos</p>
            <p>Market overview</p>
            <p>How to file a complaint?</p>
            <p>Status of your complaints</p>
          </div>
        </div>
        <div className="col-3">

        <h5 className='mb-3'>Account</h5>
          <div className='fs-7 fw-medium text-body-secondary lh-1'>
            <p>Open an account</p>
            <p>Fund transfer</p>
          </div>
        </div>
      </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p className="fs-6">
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p className="fs-6">
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p className="fs-6">
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p className="fs-6">
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
        
        <div className="row mt-5 pt-4" >
          <div className=" text-center">
            <p>This Zerodha clone is developed by &#9829; Sudarshan Patil.</p>
          </div>
          <p className='text-center'>
            Connect on <a href="www.linkedin.com/in/mr-sudarshan"><i className="fa-brands fa-linkedin text-body-secondary fs-5"></i></a>&nbsp;&nbsp; <a href="https://www.instagram.com/_sudarshan.patil_/"><i className="fa-brands fa-instagram text-body-secondary fs-5"></i></a> 
          </p>
          <p className='text-center'>
           <a href="https://mr-sudarshan-patil.github.io/Sp-Dev/" className='text-body-secondary fs-5'>Portfolio</a>
          </p>  
        </div>
        </div>
    </footer>
  );
}

export default Footer;