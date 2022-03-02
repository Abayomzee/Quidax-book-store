import React from "react";

interface Props {
  width?: string;
  height?: string;
  className?: string;
  pathClassName?: string;
}
const Hearth: React.FC<Props> = ({
  width,
  height,
  className,
  pathClassName,
}) => {
  return (
    <svg
      width={width || "15"}
      height={height || "13"}
      className={className ? className : ""}
      viewBox="0 0 15 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={pathClassName}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.36389 13L13.4542 7.28189C14.2727 6.48413 14.7333 5.39611 14.7333 4.26079C14.7333 3.12548 14.2727 2.03745 13.4542 1.23969C11.7692 -0.392423 9.07782 -0.415888 7.36389 1.1866C5.64698 -0.412863 2.95552 -0.384542 1.27355 1.25068C0.456574 2.0499 -0.00208431 3.13876 7.12124e-06 4.27407C0.00209855 5.40939 0.464766 6.49659 1.28468 7.29287L7.36389 13ZM2.31798 2.28518C2.92863 1.68507 3.77925 1.38605 4.63677 1.47005C5.49428 1.55405 6.26877 2.01226 6.74799 2.71912L7.36389 3.6346L7.97979 2.71912C8.0884 2.56256 8.2127 2.41718 8.35081 2.28518C9.47783 1.19368 11.2828 1.19368 12.4098 2.28518C12.9448 2.80594 13.2468 3.51599 13.2489 4.25759C13.251 4.99918 12.9529 5.71089 12.4209 6.23457L7.36389 10.9786L2.31798 6.24007C1.78278 5.71763 1.48162 5.00557 1.48162 4.26262C1.48162 3.51968 1.78278 2.80762 2.31798 2.28518Z"
        fill="black"
      />
    </svg>
  );
};

export default Hearth;
