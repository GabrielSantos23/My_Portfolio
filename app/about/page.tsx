'use client';

import React, { useContext } from 'react';
import Head from 'next/head';
import { ThemeContext } from '../components/Styles/themeContext';
import { abrilFatface } from '../components/Styles/Fonts';
interface ThemeProps {
  body: string;
  line: string;
}

const About = () => {
  const list = [
    {
      title: 'Graphic Desinger.',
      event:
        'I started working and studying with graphic design in 2021 and I continue to this day, I am graduating in the area and I intend to learn more over time.',
    },
    {
      title: 'ADS',
      event:
        'I just started studying software engineering this year because I preferred to get experience before entering the field, making landing pages and complete website',
    },
    {
      title: 'React Native: Desenvolva APPs Nativas para Android e iOS ',
      event:
        'I also started in the mobile area this year, making from simple apps to more complex apps.',
    },
    {
      title: 'Desenvolvimento Android Completo - Crie 18 Apps',
      event: 'I create apps in the mobile area with Kotlin',
    },
    {
      title: 'Curso de React.Js e Next.Js (Intermediário e Avançado)',
      event:
        'advanced development course in react and next js, with projects in practice      ',
    },
  ];
  const list2 = [
    {
      title: 'Software Engineer',
      event:
        "I'm studying ADS (systems analysis and development) at Unisanta College. I have acquired skills in software development, object-oriented programming, database and data analysis systems. I am a proactive, creative person with excellent teamwork skills. I seek constantly improve my knowledge through courses and certifications in the area of information Technology.",
    },
    {
      title: 'Graphic Designer',
      event:
        'Although I am not the typical designer, I do possess excellent visual abilities, and this makes me an excellent presenter, allowing me to successfully communicate design ideas to stakeholders and design teams. With my strong conceptualization ability, I am able to visualize and create beautiful works. Lastly, you can find me mostly tweaking stylesheets and creating fluid user experiences.',
    },
  ];
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <>
      <div className='mx-auto max-w-4xl px-5 lg:h-screen mt-32 justify-center  flex flex-col relative z-10'>
        <Head>
          <title>About | Gabriel Santos</title>
        </Head>
        <div className=' '>
          <h1 className='text-5xl font-bold mb-10 '>About Me.</h1>
        </div>
        <div className='mb-14'>
          {list2.map((item, index) => (
            <div key={index} className='relative pb-8'>
              {index !== list.length - 1 && (
                <div
                  className={`absolute top-2 left-[8px] -ml-px h-full w-[0.1px] bg-gray-200 ${
                    theme === 'dark'
                      ? 'bg-darkTheme-line'
                      : 'bg-lightTheme-line'
                  }`}
                />
              )}
              <div className='relative flex space-x-3'>
                <div>
                  <span
                    className={`w-4 h-4 rounded-[50%]
                        flex items-center justify-center ring-1 border 
                      ${
                        theme === 'dark'
                          ? 'bg-darkTheme-body border-darkTheme-text '
                          : 'bg-lightTheme-body border-lightTheme-text'
                      }
                      
                      
                      `}
                  ></span>
                </div>
                <div className='min-w-0 pt-[-10px] flex-grow  flex justify-between space-x-4'>
                  <div className='pt-[-10px]'>
                    <p className='text-lg font-bold mt-[-5px] '>{item.title}</p>
                    <p
                      className={`text-sm font-medium leading-7 ${
                        theme === 'dark'
                          ? 'text-darkTheme-textDescription'
                          : 'text-lightTheme-textDescription'
                      }`}
                    >
                      {item.event}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='mb-10 font-bold text-lg'>My Road.</div>
        <div className='mb-48'>
          {list.map((item, index) => (
            <div key={index} className='relative pb-8'>
              {index !== list.length - 1 && (
                <div
                  className={`absolute top-2 left-[8px] -ml-px h-full w-[0.1px] bg-gray-200 ${
                    theme === 'dark'
                      ? 'bg-darkTheme-line'
                      : 'bg-lightTheme-line'
                  }`}
                />
              )}
              <div className='relative flex space-x-3'>
                <div>
                  <span
                    className={`w-4 h-4 rounded-[50%]
                        flex items-center justify-center ring-1 border 
                      ${
                        theme === 'dark'
                          ? 'bg-darkTheme-body border-darkTheme-text '
                          : 'bg-lightTheme-body border-lightTheme-text'
                      }
                      
                      
                      `}
                  ></span>
                </div>
                <div className='min-w-0 flex-grow pt-[-10px] flex justify-between space-x-4'>
                  <div className='pt-[-10px]'>
                    <p className='text-lg font-bold mt-[-5px] '>{item.title}</p>
                    <p
                      className={`text-sm font-medium leading-7 ${
                        theme === 'dark'
                          ? 'text-darkTheme-textDescription'
                          : 'text-lightTheme-textDescription'
                      }`}
                    >
                      {item.event}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p
          className={`${
            abrilFatface.className
          } fixed 2xl:bottom-0 bottom-20 left-[-20px] 2xl:left-[-60px] select-none ${
            theme === 'dark'
              ? 'text-darkTheme-textBig'
              : 'text-lightTheme-textBig'
          }`}
          style={{
            fontSize: '15vw',
            zIndex: -1,
          }}
        >
          About Me.
        </p>
      </div>
    </>
  );
};

export default About;
