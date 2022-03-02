import React from "react";

interface Props {
  width?: string;
  height?: string;
  className?: string;
  pathClassName?: string;
}
const Times: React.FC<Props> = ({
  width,
  height,
  className,
  pathClassName,
}) => {
  return (
    <svg
      width={width || "14"}
      height={height || "14"}
      className={className ? className : ""}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={pathClassName}
        d="M7.00002 5.59021L1.40981 0L0 1.40981L5.59021 7.00002L4.9581e-05 12.5902L1.40986 14L7.00002 8.40984L12.5901 14L14 12.5901L8.40984 7.00002L14 1.40986L12.5902 5.00928e-05L7.00002 5.59021Z"
        fill="black"
      />
    </svg>
  );
};

export default Times;
