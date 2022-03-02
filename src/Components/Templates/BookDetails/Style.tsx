import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FlexRow,
  FlexRowJcBetween,
  FlexColumn,
  FlexRowWrap,
} from "Styles/Abstract/Mixins";
import { responsive } from "Styles/Abstract/Breakpoints";

export const DetailsLayoutSection = styled(motion.section)``;

export const DetailsLayout = styled(motion.section)`
  ${FlexRow};
  ${responsive(
    "sm",
    `
      ${FlexColumn}
  `
  )}
`;

export const DetailsLayoutContent = styled(motion.section)``;

export const DetailsLayoutLeft = styled(motion.div)`
  padding-top: 2rem;
  padding-bottom: 2rem;
  top: 8.2rem;
  overflow-y: auto;
  position: sticky;
  height: calc(100vh - 8.2rem);
  flex-shrink: 0;
  flex-basis: 24.3rem;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  .btn-back {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .mobile-view {
    ${responsive(
      "sm",
      `
       display: none;
  `
    )}
  }

  ${responsive(
    "sm",
    `
        top: 0;
        overflow-y: visible;
        position: relative;
        height: auto;
  `
  )}
`;

export const DetailsLayoutRight = styled(motion.div)`
  flex-grow: 1;
  padding: 9.6rem 10rem;

  ${responsive(
    "sm",
    `
        padding: 5rem 0 15rem;
  `
  )}
`;

export const DetailsCategories = styled(motion.div)`
  ${FlexRowJcBetween};
  gap: 5rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  border-top: 1px solid var(--color-7);
  border-bottom: 1px solid var(--color-7);

  ${responsive(
    "sm",
    `
        flex-direction: column;
  `
  )}
`;

export const BookCategories = styled(motion.div)`
  ${FlexRowWrap};
  gap: 3rem;
  row-gap: 2rem;
`;
export const BookCategory = styled(motion.div)``;

export const BottomButton = styled(motion.div)`
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 2rem;
  display: none;
  ${responsive(
    "sm",
    `
         display: block;
  `
  )}
`;
