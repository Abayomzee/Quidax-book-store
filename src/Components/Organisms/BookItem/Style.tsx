import styled from "styled-components";
import { motion } from "framer-motion";
import { FlexColumn, FlexRowAiCenter, FlexRow } from "Styles/Abstract/Mixins";

export const BookItemStyle = styled(motion.div)`
  ${FlexRowAiCenter};
  gap: 1rem;
  transition: 0.4s;
  cursor: pointer;

  .btn-add-to-stock {
    ${FlexRowAiCenter};
    justify-content: flex-start;
    gap: 1rem;
    font-weight: bold;
    font-size: 1.2rem;
    color: var(--color-black);
  }

  &:hover {
    box-shadow: 0px 3rem 6rem rgba(0, 0, 0, 0.15);
  }
  &:active {
    box-shadow: 0px 1rem 2rem rgba(0, 0, 0, 0.15);
  }
`;

export const BookItemDetails = styled(motion.div)`
  ${FlexColumn};
  /* gap: 1rem; */
`;

export const PriceAndStock = styled(motion.div)`
  ${FlexRow};
  gap: 1.3rem;
`;
