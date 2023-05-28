'use client';

import React, { ReactNode, useState, createContext, useContext } from 'react';
import Kbar from '../Kbar/Kbar';
import Navbar from '../navbar/navbar';
import { ThemeContext } from '@/app/layout';

// Crie o contexto

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className='lg:px-10 px-5'>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div>
          <Kbar />
          <Navbar />
          {children}
        </div>
      </ThemeContext.Provider>
    </div>
  );
};
