import React from "react";

interface Props {
  width?: string;
  height?: string;
  className?: string;
  pathClassName?: string;
}
const Plus: React.FC<Props> = ({ width, height, className, pathClassName }) => {
  return (
    <svg
      width={width || "7"}
      height={height || "6"}
      className={className ? className : ""}
      viewBox="0 0 7 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={pathClassName}
        d="M3.29398 2.54371H0.833252L0.833252 3.37445H3.29398L3.29398 5.91634L4.12472 5.91634L4.12472 3.37445H6.66659V2.54371H4.12472L4.12472 0.0830078L3.29398 0.083008L3.29398 2.54371Z"
        fill="black"
      />
    </svg>
  );
};

export default Plus;
