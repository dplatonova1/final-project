import React from "react";

import "./error-indicator.css";
import icon from "./icons/pokemon-error.png";

const ErrorIndicator = () => {
  return (
    <div>
      <img src={icon} alt="error icon" className="error-indicator" />
      <span className="boom">BOOM! </span>
      <span>something has gone terribly wrong</span>
    </div>
  );
};

export default ErrorIndicator;
