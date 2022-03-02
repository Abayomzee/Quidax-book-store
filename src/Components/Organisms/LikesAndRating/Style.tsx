import styled from "styled-components";
import { motion } from "framer-motion";
import { FlexRow, FlexRowAiStart } from "Styles/Abstract/Mixins";

// Local Variables
const defaultSpace: string = "1.2rem";

export const LikesAndRatingStyle = styled(motion.div)`
  ${FlexRow};  
`;

export const Left = styled(motion.div)`
  ${FlexRowAiStart};
  align-items: flex-start;
  gap: ${defaultSpace};
  padding-right: ${defaultSpace};
`;

export const Right = styled(motion.div)`
  padding-left: ${defaultSpace};
  border-left: 1px solid var(--color-7);
`;
