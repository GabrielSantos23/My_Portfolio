'use client';

import React, { ReactNode, useState, createContext, useContext } from 'react';
import Kbar from '../Kbar/Kbar';
import Navbar from '../navbar/navbar';
import { ThemeContext } from '../Styles/themeContext';
import Footer from '@/app/(site)/components/Footer/Footer';
import MenuMobile from '../navbar/MenuMobile';

// Crie o contexto

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='lg:px-10  px-5  flex flex-col'>
      <Kbar />
      <Navbar />
      <MenuMobile />
      {children}
    </div>
  );
};
