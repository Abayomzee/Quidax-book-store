import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FlexRowJcBetweenAiCenter,
  FlexRowAiCenter,
} from "Styles/Abstract/Mixins";
import { responsive } from "Styles/Abstract/Breakpoints";

export const TopNav = styled(motion.nav)`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  background-color: var(--color-white);
  border: 1px solid var(--color-7);
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.05);
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 10;

  &.place-on-top {
    z-index: 12;
  }
`;

export const TopNavBarStyle = styled(motion.div)`
  ${FlexRowJcBetweenAiCenter};
  gap: 2rem;

  .top-nav-search-field {
    /* Responsiveness */
    ${responsive(
      "sm",
      `
          display: none;
      `
    )}
  }
`;

export const TopNavBarRight = styled(motion.div)`
  ${FlexRowAiCenter};
  gap: 2rem;

  .trigger-search-field {
    display: none;

    /* Responsiveness */
    ${responsive(
      "sm",
      `
          display: block;
      `
    )}
  }
`;

export const MobileSearchNavStyle = styled(motion.nav)`
  ${FlexRowJcBetweenAiCenter};
  gap: 2rem;

  /* .btn- */
`;
export const CartNavStyle = styled(motion.nav)`
  ${FlexRowJcBetweenAiCenter};
  gap: 2rem;
  padding-inline: 2rem;

  .right {
    ${FlexRowAiCenter};
    gap: 1rem;
  }
`;
