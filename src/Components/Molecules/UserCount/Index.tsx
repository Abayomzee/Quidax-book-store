import React from "react";
import { UserCountStyle } from "./Style";
import UserGroup from "Components/Atoms/SvgIcons/UserGroup";
import Typography from "Components/Atoms/Typography/Index";

interface Props {
  count: string | number;
  className?: string;
  color?: string;
}
const UserCount: React.FC<Props> = (props) => {
  const { count, color } = props;
  return (
    <UserCountStyle {...props}>
      <UserGroup
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
    </UserCountStyle>
  );
};

export default UserCount;
