import React from "react";

interface Props {
  width?: string;
  height?: string;
  className?: string;
  pathClassName?: string;
}
const Minus: React.FC<Props> = ({ width, height, className, pathClassName }) => {
  return (
    <svg
      width={width || "6"}
      height={height || "2"}
      className={className ? className : ""}
      viewBox="0 0 6 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={pathClassName}
        d="M5.91668 1.41375V0.583008H0.0833435V1.41375L5.91668 1.41375Z"
        fill="black"
      />
    </svg>
  );
};

export default Minus;
