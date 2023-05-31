'use client';

import React, { useState, useEffect, useContext } from 'react';
import Curriculo from '../Curriculo.png';

import Link from 'next/link';

import Image from 'next/image';
import { abrilFatface } from '../components/Styles/Fonts';
import { ThemeContext } from '../components/Styles/themeContext';
import HelmetComponent from '../components/Helmet';

const Resume = () => {
  const [click, setClick] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  const handleDragStart = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  const handleOverlayClick = () => {
    setClick(false);
  };

  const handleImageClick = (event: any) => {
    event.stopPropagation();
    setClick(true);
  };

  useEffect(() => {
    document.body.style.overflowY = click ? 'hidden' : 'auto';
  }, [click]);

  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = Curriculo.src;
    link.download = 'Curriculo.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const drive =
    'https://drive.google.com/file/d/1tl1-erRx9Fs4fpTSOCtI1MBQfPMDQBh0/view?usp=sharing';
  return (
    <div className='relative z-10  w-full'>
      <HelmetComponent title='Resume | Gabriel Santos' />
      <div className={` flex flex-col  h-screen items-center mt-32 p-5 `}>
        <div className='max-w-5xl w-full'>
          <h1 className='text-5xl font-bold mb-10'>Resume.</h1>
          <p>
            Reach out to me via my{' '}
            <Link className='hover:underline font-bold' href={'/contact'}>
              contact page
            </Link>{' '}
            .{' '}
            <Link
              className='hover:underline font-bold'
              target='_blank'
              href={drive}
            >
              view
            </Link>{' '}
            or{' '}
            <a
              onClick={downloadImage}
              className='cursor-pointer hover:underline font-bold'
            >
              download
            </a>{' '}
            the resume
          </p>
          <Image
            onDragStart={handleDragStart}
            className='2xl:w-[60%] mt-10 rounded-md cursor-pointer'
            src={Curriculo}
            alt='Curriculo'
            onClick={handleImageClick}
          />
          <div className='hover:underline mb-20 mt-5'>
            <Link href={'/contact'}>Are you convinced to contact me now ?</Link>
          </div>
        </div>
      </div>
      <div className='fixed bottom-[330px] 2xl:left-[100px] z-[-1] transform -translate-x-1/2 rotate-90'>
        <p
          className={`  text-[13vw] leading-none mb-4 ${
            abrilFatface.className
          } ${
            theme === 'dark'
              ? 'text-darkTheme-textBig'
              : 'text-lightTheme-textBig'
          }`}
        >
          Resume.
        </p>
      </div>
      {click ? (
        <div
          className='fixed top-0 left-0 bg-black/75  w-screen  z-[1000000000] p-5 h-screen items-center justify-center '
          onClick={handleOverlayClick}
        >
          <div className='flex  flex-col items-center justify-center h-full'>
            <Image
              src={Curriculo}
              className='2xl:max-w-[35%] md:max-w-xl sm:max-w-lg'
              alt=''
            />
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Resume;
