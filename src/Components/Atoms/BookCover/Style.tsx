import styled, { css } from "styled-components";
import { motion } from "framer-motion";

interface BookHolderStyleProps {
  size: "lg" | "md" | "sm";
  effectonhover?: boolean;
}
export const BookCoverStyle = styled(motion.div)`
  transition: 0.4s;
  position: relative;
  cursor: pointer;

  width: ${({ size }: BookHolderStyleProps) => {
    return size === "lg" ? "22rem" : size === "md" ? "11rem" : "6rem";
  }};
  height: ${({ size }: BookHolderStyleProps) => {
    return size === "lg" ? "33rem" : size === "md" ? "18.3rem" : "9rem";
  }};

  .overlay {
    transition: 0.4s;
  }

  &.has-shadow {
    box-shadow: 0 1.2rem 1rem rgb(0, 0, 0, 0.2);
  }

  &:hover {
    .overlay {
      opacity: 1;
      visibility: visible;
    }
    ${({ effectonhover }) =>
      effectonhover
        ? css`
            box-shadow: 0 1rem 6rem rgb(0, 0, 0, 7%);
          `
        : css``}
  }
  /* Book cover image */
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
