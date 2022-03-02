import styled from "styled-components";
import { motion } from "framer-motion";
import { FlexRowAiCenter, FlexRowJcBetween } from "Styles/Abstract/Mixins";

export const CartItemStyle = styled(motion.div)`
  ${FlexRowAiCenter};
  gap: 1rem;
  padding-top: 1.7rem;
  padding-bottom: 1.7rem;
  border-bottom: 1px solid var(--color-7);
`;

export const CartItemRight = styled(motion.div)`
  flex-grow: 1;
`;

export const CartItemRightTop = styled(motion.div)`
  ${FlexRowJcBetween};
  gap: 1.5rem;
`;

export const CartItemRightBottom = styled(motion.div)`
  ${FlexRowJcBetween};
  gap: 1.5rem;
`;
