import styled from "styled-components";
import { motion } from "framer-motion";
import { GridCenter } from "Styles/Abstract/Mixins";
import { FlexRow } from "Styles/Abstract/Mixins";

export const CartIncrementLayout = styled(motion.div)`
  background: var(--color-white);
  border: 1px solid var(--color-2);
  width: 8.9rem;
  ${FlexRow};

  & > * {
    width: 3rem;
    height: 3rem;
    ${GridCenter};
  }

  .cart-amount {
    border-left: 1px solid var(--color-2);
    border-right: 1px solid var(--color-2);
  }
`;
