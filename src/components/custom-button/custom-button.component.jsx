import React from "react";
import "./custom-button.style.scss";

const customButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherprops
}) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""}${
        isGoogleSignIn ? "google-sign-in" : ""
      } custom-button`}
      {...otherprops}
    >
      {children}
    </button>
  );
};

export default customButton;
