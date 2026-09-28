import React from "react";
import Button from "@mui/material/Button";

export default function Hero() {
  return (
    <div className="container mb-5">
      <div className="row text-center">
        <img src="/homeHero.png" alt="Hero" className="mb-5" />
        <h1 className="mt-5">Invest in anything</h1>
        <p>Online platform to invest </p>
        <Button
          className="mb-5"
          variant="contained"
          style={{
            width: "fit-content",
            margin: "0 auto",
            backgroundColor: "#03a9f4",
          }}
        >
          Sign up now
        </Button>
      </div>
    </div>
  );
}
