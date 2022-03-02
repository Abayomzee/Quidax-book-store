import React from "react";
import { useNavigate } from "react-router-dom";
import CaretArrow from "Components/Atoms/SvgIcons/CaretArrow";
import Typography from "Components/Atoms/Typography/Index";
import { ButtonStyle } from "./Style";

interface Props {
  className?: string;
  handleClick?: (val: boolean) => void;
}
const BackButton: React.FC<Props> = (props) => {
  const { className, handleClick } = props;
  const navigate = useNavigate();

  return (
    <ButtonStyle
      className={`btn-back ${className ? className : ""}`}
      {...props}
      onClick={() => {
        return handleClick ? handleClick(false) : navigate(-1);
      }}
    >
      <CaretArrow width="12" height="11.11" />
      <Typography as="span" text="Back" />
    </ButtonStyle>
  );
};

export default BackButton;
