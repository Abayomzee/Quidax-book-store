import React from "react";
import { SpinnerStyle } from "./Style";

interface Props {}
const Spinner: React.FC<Props> = (props) => {
  return (
    <SpinnerStyle>
      <i className="fas fa-spinner"></i>
    </SpinnerStyle>
  );
};

export default Spinner;
