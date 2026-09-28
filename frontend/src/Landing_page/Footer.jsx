import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";

export default function Footer() {
  return (
    <>
      {/* Full width footer background */}
      <div className="mt-5" style={{ backgroundColor: "#D3D3D3" }}>
        {/* Centered content */}
        <div className="container">
          <div className="row pt-5" style={{display:"flex",justifyContent:"flex-start",gap:"30px"}}>
            {/* Logo */}
            <div className="col">
              <img src="/logo.png" alt="Logo" style={{ width: "70%" }} />

              <p className="mt-3">
                &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights
                reserved.
              </p>
              <div style={{display:"flex", gap:"15px"}}>
                <a href="">
                  <TwitterIcon />
                </a>
                <a href="">
                  <FacebookIcon />
                </a>
                <a href="">
                  <InstagramIcon />
                </a>
                <a href="">
                  <TelegramIcon />
                </a>
              </div>
            </div>

            {/* Company */}
            <div className="col">
              <p>Company</p>

              <a style={{ textDecoration: "none", color: "grey" }} href="">
                About
              </a>
              <br />

              <a style={{ textDecoration: "none", color: "grey" }} href="">
                Products
              </a>
              <br />

              <a style={{ textDecoration: "none", color: "grey" }} href="">
                Pricing
              </a>
              <br />

              <a style={{ textDecoration: "none", color: "grey" }} href="">
                Referral programme
              </a>
              <br />

              <a style={{ textDecoration: "none", color: "grey" }} href="">
                Careers
              </a>
              <br />

              <a style={{ textDecoration: "none", color: "grey" }} href="">
                Zerodha.tech
              </a>
              <br />

              <a style={{ textDecoration: "none", color: "grey" }} href="">
                Press & media
              </a>
              <br />

              <a style={{ textDecoration: "none", color: "grey" }} href="">
                Zerodha cares (CSR)
              </a>
              <br />
            </div>

            {/* Support */}
            <div className="col">
              <p>Support</p>

              <a style={{ textDecoration: "none", color: "grey" }} href="">
                Contact
              </a>
              <br />

              <a style={{ textDecoration: "none", color: "grey" }} href="">
                Support portal
              </a>
              <br />

              <a style={{ textDecoration: "none", color: "grey" }} href="">
                Z-Connect blog
              </a>
              <br />

              <a style={{ textDecoration: "none", color: "grey" }} href="">
                List of charges
              </a>
              <br />

              <a style={{ textDecoration: "none", color: "grey" }} href="">
                Downloads & resources
              </a>
              <br />
            </div>

            {/* Account */}
            <div className="col">
              <p>Account</p>

              <a style={{ textDecoration: "none", color: "grey" }} href="">
                Open an account
              </a>
              <br />

              <a style={{ textDecoration: "none", color: "grey" }} href="">
                Fund transfer
              </a>
              <br />

              <a style={{ textDecoration: "none", color: "grey" }} href="">
                60 day challenge
              </a>
              <br />
            </div>
          </div>

          {/* Disclaimer */}
          <div className="row mt-5 pb-5">
            <div className="col">
              <p>
                Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration
                no.: INZ000031633 CDSL: Depository services through Zerodha
                Securities Pvt. Ltd. – SEBI Registration no.: IN-DP-10 Trading
                through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI
                Registration no.: INZ000038238 Registered Address: Zerodha
                Broking Ltd., #153/154, 4th Cross, Dollars C School, JP Nagar
                4th Phase, Bengaluru - 560078, Karnataka, India. For any
                complaints pertaining to securities broking please write to
                complaints@zerodha.com, for DP related complaints please write
                to dp@zerodha.com. Please ensure you carefully read the Risk
                Disclosure Document as prescribed by SEBI | ICF
              </p>

              <p>
                Procedure to file a complaint on SEBI SCORES: Register on SCORES
                portal. Mandatory details for filing complaints on SCORES: Name,
                PAN, Address, Mobile Number, Communication, Speedy redressal of
                the grievances.
              </p>

              <p>
                Investments in securities market are subject to market risks;
                read all the related documents carefully before investing.
              </p>

              <p>
                Prevent unauthorised transactions in your account. Update your
                mobile numbers/email IDs with your stock brokers. Receive
                information of your transactions directly from exchanges on your
                mobile/email at the end of the day. Issued in the interest of
                investors. KYC is one time exercise while dealing in securities
                markets – once KYC is done through a SEBI registered
                intermediary, you do not need to undergo the same process again
                with another intermediary.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
