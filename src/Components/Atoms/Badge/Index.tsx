import React from "react";
import { BadgeStyle } from "./Style";

interface Props {
  label?: string | number;
}
const Badge: React.FC<Props> = (props) => {
  const { label } = props;
  return <BadgeStyle {...props}>{label}</BadgeStyle>;
};

export default Badge;
