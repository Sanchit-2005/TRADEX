import React from "react";

export default function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="/largestBroker.svg" alt="" />
        </div>
        <div className="col-6 p-5">
          <h1>Largest stock broker in India</h1>
          <p className="mb-5">
            2+ million Tradex clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row">
            <div className="col-6">
               <ul>
            <li><p>Futures and Options</p></li>
            <li><p>Stocks & IPOs</p></li>
            <li><p>Direct mutual funds</p></li>
          </ul>
            </div>
             <div className="col-6">
               <ul>
            <li><p>Direct mutual funds</p></li>
            <li><p>Currency derivatives</p></li>
            <li><p>Bonds and Government securities</p></li>
          </ul>
             </div>
          </div>
          <img src="/pressLogos.png" alt="" style={{width:"90%"}} />
         
        </div>
      </div>
    </div>
  );
}
