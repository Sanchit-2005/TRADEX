import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../../stats.css";
export default function Stats() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-6">
          <h1 className="mb-5">Trust with confidence</h1>
          <h2 className="mb-3">Customer-first always</h2>
          <p>
            That's why 1.3+ crore customers trust Tradex with ₹3.5+ lakh crores
            worth of equity investments.
          </p>
          <h2 className="mb-3">No spam or gimmicks</h2>
          <p>
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h2 className="mb-3">The Tradex universe</h2>
          <p>
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h2 className="mb-3">Do better with money</h2>
          <p>
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6">
          <img src="/ecosystem.png" alt="" style={{ width: "75%" }} />
          <div style={{ display: "flex",gap:"30px" }}>
            <a href="" style={{textDecoration:"none"}}>
              Explore <ArrowForwardIcon />
            </a>
            <a href="" style={{textDecoration:"none"}}>Try Kite <ArrowForwardIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
