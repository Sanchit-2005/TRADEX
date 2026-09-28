import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Pricing() {
  return (
    <div className="container mt-5">
      <div className="row mb-3">
        <div className="col-4">
          <h2>Unbeatable pricing</h2>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See pricing &nbsp; <ArrowForwardIcon />
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6 text-center">
          <div className="row border">
            <div className="col border">
              <h1 className="mb-3 mt-3">₹0</h1>
              <p className="mb-4 mt-3">
                Free equity delivery and direct mutual funds{" "}
              </p>
            </div>
            <div className="col border">
              <h1 className="mb-3 mt-3">₹20</h1>
              <p className="mb-4 mt-3">Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
