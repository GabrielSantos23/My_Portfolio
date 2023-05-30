'use client';

import { createContext, useEffect } from 'react';
import KbarProvider from './components/Kbar/KbarProvider';
import { Layout } from './components/Layout/Layout';
import './globals.css';
import { Montserrat, Abril_Fatface } from 'next/font/google';
import { useState } from 'react';
import { ThemeContext } from './components/Styles/themeContext';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme !== null && storedTheme !== undefined) {
        setTheme(storedTheme);
      }
    }
  }, []);

  const updateTheme = (newTheme: string) => {
    setTheme(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
    }
  };

  return (
    <html lang='en'>
      <body
        className={`${montserrat.className}  ${
          theme === 'dark' ? 'bg-darkTheme-body' : 'bg-lightTheme-body'
        }  ${
          theme === 'dark' ? 'text-darkTheme-text' : 'text-lightTheme-text'
        } transition  `}
      >
        <ThemeContext.Provider value={{ theme, setTheme: updateTheme }}>
          <div>
            <KbarProvider>
              <Layout>{children}</Layout>
            </KbarProvider>
          </div>
        </ThemeContext.Provider>
      </body>
    </html>
  );
}
