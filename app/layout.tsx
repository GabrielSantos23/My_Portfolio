'use client';

import { createContext } from 'react';
import KbarProvider from './components/Kbar/KbarProvider';
import { Layout } from './components/Layout/Layout';
import './globals.css';
import { Montserrat } from 'next/font/google';
import { useState } from 'react';

const montserrat = Montserrat({ subsets: ['latin'] });

export const ThemeContext = createContext<any>(null);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    if (typeof window !== 'undefined') {
      if (theme === 'dark') {
        window.localStorage.setItem('theme', 'light');
        setTheme('light');
      } else {
        window.localStorage.setItem('theme', 'dark');
        setTheme('dark');
      }
    }
  };

  return (
    <html lang='en'>
      <body className={montserrat.className}>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <div
            className={`
              ${
                theme === 'dark' ? 'bg-darkTheme-body' : 'bg-lightTheme-body'
              } h-screen ${
              theme === 'dark' ? 'text-darkTheme-text' : 'text-lightTheme-text'
            } transition `}
          >
            <KbarProvider>
              <Layout>{children}</Layout>
            </KbarProvider>
          </div>
        </ThemeContext.Provider>
      </body>
    </html>
  );
}
