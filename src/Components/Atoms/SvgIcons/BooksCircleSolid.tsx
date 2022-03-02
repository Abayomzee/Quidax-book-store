import React from "react";

interface Props {
  width?: string;
  height?: string;
  className?: string;
  pathClassName?: string;
}
const BooksCircleSolid: React.FC<Props> = ({ width, height, className }) => {
  return (
    <svg
      width={width || "50"}
      height={height || "50"}
      className={className ? className : ""}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="25" cy="25" r="25" fill="black" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.1382 14C22.4933 14 22.0571 14.5621 22.0571 15.1149V32.8767C22.0571 33.4295 22.4933 34 23.1382 34H26.3815C27.0264 34 27.4625 33.4295 27.4625 32.8767V15.1149C27.4625 14.5621 27.0264 14 26.3815 14H23.1382ZM23.6787 15.6216H25.8409V17.7837H23.6787V15.6216ZM16.0811 16.1621C15.4962 16.1621 15 16.6583 15 17.2432V32.9189C15 33.5038 15.4962 33.9999 16.0811 33.9999H19.3243C19.9092 33.9999 20.4054 33.5038 20.4054 32.9189V17.2432C20.4054 16.6583 19.9092 16.1621 19.3243 16.1621H16.0811ZM16.6216 17.7838H18.7837V19.4054H16.6216V17.7838ZM23.6787 19.4054H25.8409V28.5946H23.6787V19.4054ZM16.6216 21.027H18.7837V29.1351H16.6216V21.027ZM23.6787 30.2162H25.8409V32.3783H23.6787V30.2162ZM16.6216 30.7567H18.7837V32.3783H16.6216V30.7567ZM32.1523 30.698L34.2849 30.3414L34.5523 31.9409L32.4197 32.2974L32.1523 30.698ZM32.9478 22.3444L34.0174 28.742L31.8848 29.0986L30.8152 22.7009L32.9478 22.3444ZM30.2805 19.5021L32.4131 19.1455L32.6805 20.7449L30.5479 21.1015L30.2805 19.5021ZM29.4798 17.9918C28.9325 18.0833 28.4876 18.6129 28.5876 19.2114L30.9122 33.1147C31.0122 33.7132 31.6067 34.0775 32.1539 33.986L35.3528 33.4512C35.9001 33.3597 36.3436 32.8218 36.2436 32.2233L33.919 18.32C33.819 17.7215 33.226 17.3655 32.6787 17.457L29.4798 17.9918Z"
        fill="white"
      />
    </svg>
  );
};

export default BooksCircleSolid;
