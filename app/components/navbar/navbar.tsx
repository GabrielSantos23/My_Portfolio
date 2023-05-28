'use client';

import { ThemeContext } from '@/app/layout';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { usePathname } from 'next/navigation';
const navItems = [
  { text: 'Home', href: '/' },
  { text: 'About', href: '/about' },
  { text: 'Projects', href: '/projects' },
  { text: 'Resume', href: '/resume' },
  { text: 'Contact', href: '/contact' },
];

const Navbar = ({}) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const pathname = usePathname();
  return (
    <header className='flex py-5 item-center justify-between '>
      <div>~</div>
      <div className={`flex items-center  transition  gap-8 `}>
        {navItems.map((item) => (
          <Link
            className={`${
              theme === 'dark'
                ? 'hover:bg-darkTheme-span transition hover:text-darkTheme-text  '
                : 'hover:bg-lightTheme-span transition hover:text-lightTheme-text'
            } p-2 rounded-md   ${
              pathname === item.href
                ? `${
                    theme === 'light'
                      ? 'bg-lightTheme-span transition text-lightTheme-text'
                      : 'bg-darkTheme-span transition text-darkTheme-text '
                  }`
                : 'text-gray-500'
            } `}
            href={item.href}
            key={item.text}
          >
            {item.text}
          </Link>
        ))}
      </div>
      <div>
        <button className='' onClick={toggleTheme}>
          change
        </button>
      </div>
    </header>
  );
};

export default Navbar;
