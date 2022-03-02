import styled from "styled-components";
import { motion } from "framer-motion";

export const BookOverlayStyle = styled(motion.div)`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.607988) 0%,
    #000000 79.7%
  );
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  padding: 2.9rem 1.8rem;
  transition: 0.4s;
  /* display: none; */

  opacity: 0;
  visibility: hidden;
`;
