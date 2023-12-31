import React from "react";
import "./LoadingPage.scss";

const LoadingPage = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="spinner-inner"></div>
      </div>
    </div>
  );
};

export default LoadingPage;
