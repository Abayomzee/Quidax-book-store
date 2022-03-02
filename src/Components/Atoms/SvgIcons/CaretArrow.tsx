import React from "react";

interface Props {
  width?: string;
  height?: string;
  className?: string;
  pathClassName?: string;
}
const CaretArrow: React.FC<Props> = ({
  width,
  height,
  className,
  pathClassName,
}) => {
  return (
    <svg
      width={width || "16"}
      height={height || "15"}
      className={className ? className : ""}
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={pathClassName}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 8.28185V6.5338H3.37343L8.67118 1.23606L7.43512 0L0.901316 6.5338L0 7.40783L0.901316 8.28185L7.43512 14.8157L8.67118 13.5796L3.37343 8.28185H16Z"
        fill="black"
      />
    </svg>
  );
};

export default CaretArrow;
