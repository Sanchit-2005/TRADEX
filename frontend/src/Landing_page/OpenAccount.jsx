import React from "react";
import Button from "@mui/material/Button";

export default function OpenAccount() {
  return (
    <div className="container mb-5">
      <div className="row text-center">
        <img src="/homeHero.png" alt="Hero" className="mb-5" />

        <h1 className="mt-5">Open a Tradex account</h1>

        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>

        <Button
          className="mb-5"
          variant="contained"
          style={{
            width: "fit-content",
            margin: "0 auto",backgroundColor:"blue"
          }}
        >
          Sign up now
        </Button>
      </div>
    </div>
  );
}
