import styled from "styled-components";
import { motion } from "framer-motion";
import CryptoBitcoin from "../assets/CryptoBitcoin.png";
import Finma from "../assets/Finma.png";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #111;
`;

export const Box = styled(motion.div)`
  width: 25rem;
  height: 20rem;
  border-radius: 5px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  margin-top: 4rem;
  position: relative;
`;

export const H1 = styled(motion.h1)`
  color: #fff;
  margin-top: 2rem;
`;

export const CryptoImageBox = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${CryptoBitcoin});
  background-size: cover;
  transition: transform 0.3s;
`;

export const FinmaImageBox = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${Finma});
  background-size: cover;
  transition: transform 0.3s;
`;

export const TextBox = styled(motion.div)`
  color: #fff;
  padding: 1rem;
  background: #344;
  overflow: hidden;
  z-index: 2;
`;
