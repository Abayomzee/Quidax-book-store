import React from "react";
import Typography from "Components/Atoms/Typography/Index";
import Hearth from "Components/Atoms/SvgIcons/Hearth";
import { HearthNumberStyle } from "./Style";

interface Props {
  count?: string | number;
  className?: string;
  color?: string;
}
const HearthNumber: React.FC<Props> = (props) => {
  const { count, color } = props;
  return (
    <HearthNumberStyle {...props}>
      <Hearth
        width="14.73"
        height="14"
        pathClassName={color === "white" ? "fill-white" : ""}
      />
      <Typography
        as="span"
        className={`count-number paragraph-5 ${
          color === "white" ? "color-white" : ""
        }`}
        text={count}
      />
    </HearthNumberStyle>
  );
};

export default HearthNumber;
