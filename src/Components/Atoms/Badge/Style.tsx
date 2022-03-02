import styled from "styled-components";
import { GridCenter } from "Styles/Abstract/Mixins";
import { motion } from "framer-motion";

export const BadgeStyle = styled(motion.span)`
  ${GridCenter};
  background-color: var(--color-5);
  border-radius: 50%;
  /* padding: 0.8rem; */
  width: 2rem;
  height: 2rem;
  /* display: inline-block; */
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1.2rem;
  color: var(--color-white);
`;
