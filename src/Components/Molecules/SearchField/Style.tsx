import styled from "styled-components";
import { motion } from "framer-motion";
import { FlexRow } from "Styles/Abstract/Mixins";

export const SearchFieldStyle = styled(motion.div)`
  ${FlexRow};
  flex-basis: 54rem;
  background-color: var(--color-white);
  border: 1px solid var(--color-2);

  .seacrhInput {
    flex-grow: 1;
  }

  .searchBtn {
    padding-inline: 1.5rem;
    background-color: var(--color-3);
    border-left: 1px solid var(--color-2);
  }
`;
