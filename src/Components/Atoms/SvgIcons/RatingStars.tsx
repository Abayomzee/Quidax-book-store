import React from "react";

interface Props {
  width?: string;
  height?: string;
  className?: string;
}
const RatingStars: React.FC<Props> = ({ width, height, className }) => {
  return (
    <svg
      width={width || "100"}
      height={height || "16"}
      className={className ? className : ""}
      viewBox="0 0 100 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.38791 0.600098L10.9926 5.6613L16.7758 6.46939L12.5819 10.4035L13.5752 15.9751L8.38791 13.3594L3.20065 15.9751L4.19395 10.4035L0 6.46939L5.80532 5.6613L8.38791 0.600098Z"
        fill="#EBA430"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.3555 0.600098L30.9602 5.6613L36.7435 6.46939L32.5495 10.4035L33.5428 15.9751L28.3555 13.3594L23.1683 15.9751L24.1616 10.4035L19.9676 6.46939L25.773 5.6613L28.3555 0.600098Z"
        fill="#EBA430"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48.3232 0.600098L50.9278 5.6613L56.7111 6.46939L52.5171 10.4035L53.5104 15.9751L48.3232 13.3594L43.1359 15.9751L44.1292 10.4035L39.9353 6.46939L45.7406 5.6613L48.3232 0.600098Z"
        fill="#EBA430"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M68.2908 0.600098L70.8955 5.6613L76.6787 6.46939L72.4848 10.4035L73.4781 15.9751L68.2908 13.3594L63.1035 15.9751L64.0968 10.4035L59.9029 6.46939L65.7082 5.6613L68.2908 0.600098Z"
        fill="#EBA430"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M88.2584 0.600098L90.8631 5.6613L96.6464 6.46939L92.4524 10.4035L93.4457 15.9751L88.2584 13.3594L83.0712 15.9751L84.0645 10.4035L79.8705 6.46939L85.6759 5.6613L88.2584 0.600098Z"
        fill="#DDDDDD"
      />
    </svg>
  );
};

export default RatingStars;
