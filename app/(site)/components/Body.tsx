'use client';

import React, { useContext } from 'react';
import './HomeStyle.css';
import Link from 'next/link';
import { useKBar } from 'kbar';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { ThemeContext } from '@/app/components/Styles/themeContext';
import { abrilFatface } from '@/app/components/Styles/Fonts';

const Body = () => {
  const { query } = useKBar();
  const { theme, setTheme } = useContext(ThemeContext);

  const LinkTheme = `${
    theme === 'dark'
      ? ' hover:bg-darkTheme-ButtonHover transition-all'
      : ' hover:bg-lightTheme-ButtonHover transition-all'
  } ${
    theme === 'dark' ? 'bg-darkTheme-line ' : 'bg-lightTheme-line '
  }' p-1.5 rounded-md`;

  return (
    <div className='flex h-full  w-full justify-center items-center relative z-10'>
      <div className='ml-5 mr-5 w-full h-full  flex flex-col items-center justify-center'>
        <div className='max-w-[1000px]'>
          <h1
            data-text="I'm Gabriel Santos"
            className='intro__text  lg:text-6xl md:text-5xl sm:4xl text-3xl'
          >
            I&#39;m Gabriel Santos
          </h1>
          <p className='mb-4 text-sm leading-8'>
            FullStack Developer & Web Designer who loves everything &#39;bout
            the web, practicing React, and everything bout the internet in
            search of flow.
          </p>
          <p className='mb-4 text-sm leading-8'>
            Working with my hands to make magic happen on the internet. View my{' '}
            <Link className={LinkTheme} href='/projects'>
              <span>Projects</span>
            </Link>
            ,{' '}
            <Link className={LinkTheme} href='/about'>
              <span>About</span>
            </Link>
            ,{' '}
            <Link className={LinkTheme} href='/resume'>
              <span>Resume</span>
            </Link>
            ,{' '}
            <Link className={LinkTheme} href='/contact'>
              <span>Contact Me</span>
            </Link>
            , or send me an email at{' '}
            <Link className={LinkTheme} href='mailto:gabriel.gs605@gmail.com'>
              <span>gabriel.gs605@gmail.com</span>.
            </Link>
          </p>
          <div className='w-full'>
            <button
              className='button flex items-center text-sm'
              onClick={query.toggle}
            >
              Press <span className={LinkTheme}>ctrl K</span> to see more info{' '}
              <IoIosArrowRoundForward fontSize={30} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
