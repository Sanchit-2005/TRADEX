import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Education() {
  return (
    <div className="container mt-5 mb-3">
      <div className="row">
        <div className="col-6">
          <img src="../../../education.svg" alt="" />
        </div>
        <div
          className="col-6 p-3"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <h2 className="mb-3 mt-5">Free and open market education</h2>
          <p className="mb-3 mt-5">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <a href="" style={{ textDecoration: "none" }}>
            {" "}
            Varsity <ArrowForwardIcon />
          </a>
          <p className="mb-5 mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            {" "}
            Trading Q&A <ArrowForwardIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
