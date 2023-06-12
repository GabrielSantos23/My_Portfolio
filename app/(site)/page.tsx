'use client';

import { useContext } from 'react';
import HelmetComponent from '../components/Helmet';
import { abrilFatface } from '../components/Styles/Fonts';
import Body from './components/Body';
import { ThemeContext } from '../components/Styles/themeContext';
import Footer from './components/Footer/Footer';

export default function Home() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <div className='flex h-screen mt-[-80px] '>
        <Body />
        <HelmetComponent title='Home | Gabriel Santos' />
        <div className='fixed bottom-[240px] lg:left-[100px] transform -translate-x-1/2 rotate-90'>
          <p
            className={`  text-[15vw] leading-none mb-4 ${
              abrilFatface.className
            } ${
              theme === 'dark'
                ? 'text-darkTheme-textBig'
                : 'text-lightTheme-textBig'
            }`}
          >
            Hello.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
