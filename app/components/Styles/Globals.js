'use client';

import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';
export default createGlobalStyle`
*{
  
  * {
  scrollbar-width: none;
  scrollbar-color: #1f2329;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 7px;
}

*::-webkit-scrollbar-track {
  background: ${({ theme }) => theme.scrollback};
}

*::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme.textDescription};
  border-radius: 10px;
  border: -1px none #ffffff;
}

 
  *,
  *::after,
  *::before {
 
    box-sizing: border-box;
  }
  ::selection {
      background: ${({ theme }) => theme.Selection};
      color: ${({ theme }) => theme.text};
    }
  html, body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
    padding: 0;
    transition: all 0.25s linear;
    max-width: 100%;
   
  }
  li{
    list-style: none;
    color: ${({ theme }) => theme.text};
  }
}
`;
