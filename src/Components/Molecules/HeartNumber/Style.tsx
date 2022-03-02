import styled from "styled-components";
import { motion } from "framer-motion";
import { FlexColumnJcCenterAiCenter } from "Styles/Abstract/Mixins";

export const HearthNumberStyle = styled(motion.div)`
  ${FlexColumnJcCenterAiCenter};
  /* gap: 0.6rem; */

  .count-number {
    font-size: 1.2rem;
    line-height: 1.4rem;
  }
`;
