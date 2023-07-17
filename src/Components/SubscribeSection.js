import React from "react";

const SubscribeSection = () => {
  return (
    <div id="Subscribe" className="text-center">
      <h1>Subscribe to the Newsletter</h1>
      <p className="fs text-secondary fs-3">
        Enter your email below to get our daily offers and news
      </p>
      <div className="d-flex gap-3 align-items-center justify-content-center">
        <input
          type="email"
          className="border px-3 py-2 rounded-4"
          placeholder="Enter your email."
        />
        <button className="btn order-btn text-light px-4 rounded-5">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default SubscribeSection;
