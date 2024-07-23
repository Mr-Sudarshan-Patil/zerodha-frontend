import React from "react";
import './Stats.css'; 

function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-5">
        <div className="col-12 col-md-6 p-5 text-center text-md-start">
          <h1 className="fs-3 mb-4">Trust with confidence</h1>
          <h2 className="fs-5">Customer-first always</h2>
          <p className="mb-4 fs-6 text-muted">
            That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
            worth of equity investments.
          </p>
          <h2 className="fs-5">No spam or gimmicks</h2>
          <p className="mb-4 fs-6 text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h2 className="fs-5">The Zerodha universe</h2>
          <p className="mb-4 fs-6 text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h2 className="fs-5">Do better with money</h2>
          <p className="mb-4 fs-6 text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-12 col-md-6 p-5 text-center">
          <img src="media/images/ecosystem.png" alt="Ecosystem" className="img-fluid mb-4" />
          <div className="text-center">
            <a href="" className="d-block mb-2 fs-6">
              Explore our products{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="" className="d-block fs-6">
              Try Kite demo{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
