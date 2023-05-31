import React, { useState, useEffect, useContext } from 'react';
import { Sling as Hamburger } from 'hamburger-react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { ThemeContext } from '../Styles/themeContext';

import Link from 'next/link';
import { ThemeToggle } from '../ThemeToggle';

const MenuMobile = ({}) => {
  const [isOpen, setOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const theme = localStorage.getItem('theme');
      setTheme(theme || 'light');
    }
  }, []);
  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    document.body.style.overflowY = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);
  return (
    <div className='flex lg:hidden'>
      <div className='z-[999999] absolute top-0 right-0'>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          exit={{}}
          className={`${
            theme === 'dark' ? 'bg-darkTheme-card' : 'bg-lightTheme-card'
          } absolute top-0 right-0 z-[99999] items-center justify-center w-full h-full  `}
        >
          <div className='mt-5 ml-10'>
            <ThemeToggle toggleTheme={toggleTheme} />
          </div>
          <div className=' h-full flex items-center flex-col justify-center gap-10 text-xl'>
            <Link onClick={() => setOpen(false)} href={'/'}>
              Home
            </Link>
            <Link onClick={() => setOpen(false)} href={'/about'}>
              About
            </Link>
            <Link onClick={() => setOpen(false)} href={'/projects'}>
              Projects
            </Link>
            <Link onClick={() => setOpen(false)} href={'/contact'}>
              Contact
            </Link>
            <Link onClick={() => setOpen(false)} href={'/resume'}>
              Resume
            </Link>
          </div>
        </motion.div>
      ) : (
        ''
      )}
    </div>
  );
};

export default MenuMobile;
