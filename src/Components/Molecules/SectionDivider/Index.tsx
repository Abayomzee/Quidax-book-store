import React from "react";
import { SectionDividerStyle } from "./Style";
import Typography from "Components/Atoms/Typography/Index";

interface Props {
  label: string;
  className?: string;
}
const SectionDivider: React.FC<Props> = (props) => {
  const { label } = props;
  return (
    <SectionDividerStyle {...props}>
      <Typography as="h5" className="heading-2" text={label} />
    </SectionDividerStyle>
  );
};

export default SectionDivider;
