import styled from "styled-components";
import { motion } from "framer-motion";
import { FlexColumn, FlexRowJcBetweenAiEnd } from "Styles/Abstract/Mixins";
import { responsive } from "Styles/Abstract/Breakpoints";

export const CartStyle = styled(motion.div)`
  height: 100vh;
  width: 48rem;
  position: fixed;
  background-color: var(--color-white);
  overflow-y: auto;
  right: 0;

  ${responsive(
    "xsm",
    `
    width: 100%;
  `
  )}
`;

export const CartItemsLayout = styled(motion.div)`
  ${FlexColumn};
  padding-inline: 2rem;
`;

export const CartSubtotal = styled(motion.div)`
  ${FlexRowJcBetweenAiEnd};
  padding-inline: 2rem;
`;

export const CartuttonHolder = styled(motion.div)`
  padding-inline: 2rem;
`;
