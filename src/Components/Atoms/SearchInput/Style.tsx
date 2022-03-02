import styled from "styled-components";
import { motion } from "framer-motion";

export const InputStyle = styled(motion.input)`
  padding: 1.023rem 1.8rem;
  padding-right: 1rem;
  background-color: var(--color-white);
  border: none;
  font-family: inherit;
  font-size: 1.4rem;
  color: var(--color-black);
  flex-grow: 1;

  &::placeholder {
    font-size: 1.4rem;
    color: var(--color-1);
  }
  &:focus {
    outline: none;
  }
`;
