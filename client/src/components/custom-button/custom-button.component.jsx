import React from "react";

import { CustomButtonContainer } from "./custom-button.style";

const customButton = (props) => {
  return (
    <CustomButtonContainer {...props}>{props.children}</CustomButtonContainer>
  );
};

export default customButton;
