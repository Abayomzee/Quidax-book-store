import TopNavBar from "Components/Organisms/TopNavBar/Index";
import React from "react";

interface Props {
  children?: any;
  onSearchChange?: (val: string) => void;
  searValue?: any;
}
const DefaultTemplate: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <>
      <TopNavBar {...props} />
      {children}
    </>
  );
};

export default DefaultTemplate;
