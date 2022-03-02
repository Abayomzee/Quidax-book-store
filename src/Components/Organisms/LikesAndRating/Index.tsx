import React from "react";
import HearthNumber from "Components/Molecules/HeartNumber/Index";
import Ratings from "Components/Molecules/Rating/Index";
import UserCount from "Components/Molecules/UserCount/Index";
import { LikesAndRatingStyle, Left, Right } from "./Style";

interface Props {
  className?: string;
  color?: string;
  likes?: number;
  rating?: number;
}
const LikesAndRating: React.FC<Props> = (props) => {
  const { color, likes, rating } = props;
  return (
    <LikesAndRatingStyle {...props}>
      <Left>
        <UserCount count={31} color={color} />
        <HearthNumber count={likes} color={color} />
      </Left>
      <Right>
        <Ratings rate={rating} textColor={color} />
      </Right>
    </LikesAndRatingStyle>
  );
};

export default LikesAndRating;
