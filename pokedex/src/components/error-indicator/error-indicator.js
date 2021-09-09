import React from "react";

import "./error-indicator.css";
import icon from "./icons/pokemon-error.svg";

const ErrorIndicator = () => {
  return (
    <div className="flex w-full flex-col items-center mt-8">
      <img src={icon} alt="error icon" className="error-indicator" />
      <span className="boom">Oh no! </span>
      <span>Something has gone wrong!</span>
    </div>
  );
};

export default ErrorIndicator;
