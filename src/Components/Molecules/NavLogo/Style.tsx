import styled from "styled-components";
import { motion } from "framer-motion";
import { FlexRowAiCenter } from "Styles/Abstract/Mixins";
import { responsive } from "Styles/Abstract/Breakpoints";

export const NavLogoStyle = styled(motion.div)`
  ${FlexRowAiCenter};
  gap: 1.25rem;
`;

export const NavLogoSlog = styled(motion.div)`
  .logo-heading {
    /* Responsiveness */
    ${responsive(
      "sm",
      `
          font-size: 1.4rem;
          line-height: 1.6rem;
      `
    )}
  }
  .logo-sub-heading {
    /* Responsiveness */
    ${responsive(
      "sm",
      `
          display: none;
      `
    )}
  }
`;
