import React from "react";
import { RatingsStyle } from "./Style";
import Typography from "Components/Atoms/Typography/Index";
import RatingStars from "Components/Atoms/SvgIcons/RatingStars";

interface Props {
  rate?: string | number;
  className?: string;
  textColor?: string;
}
const Ratings: React.FC<Props> = (props) => {
  const { rate, textColor } = props;
  return (
    <RatingsStyle {...props}>
      <Typography
        as="p"
        className={`rate-number paragraph-5 ${
          textColor === "white" ? "color-white" : ""
        } `}
        text={`Rating: ${rate}`}
      />
      <RatingStars />
    </RatingsStyle>
  );
};

export default Ratings;
