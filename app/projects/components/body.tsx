'use client';

import { getDesigns, getProject } from '@/sanity/sanity-utils';
import React, { useContext, useEffect, useState } from 'react';
import { PortableTextBlock } from 'sanity';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ThemeContext } from '../../components/Styles/themeContext';
import Projects from './Projects';
import { abrilFatface } from '@/app/components/Styles/Fonts';

export type Project = {
  _id: string;
  _createdAt: Date;
  title: string;
  subtitle: string;
  technologies: Array<string>;
  slug: string;
  imageUrl: string;
  website: string;
  about: PortableTextBlock[];
  open: string;
};

const Body = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  const [designs, setDesigns] = useState<Project[]>([]);

  const TabPanelStyle =
    'lg:pl-10 p-5 flex flex-wrap gap-5 rounded-md items-start lg:justify-center';
  const { theme, setTheme } = useContext(ThemeContext);

  const TabStyle = `text-sm sm:text-md tracking-[1px] pt-[10px] pb-[10px] font-medium text-sm  transition   outline-none cursor-pointer p-2  rounded-md  
    ${
      theme === 'light'
        ? 'hover:bg-lightTheme-span transition '
        : 'hover:bg-darkTheme-span transition  '
    } 
    `;
  const tabSelect = `${
    theme === 'light'
      ? 'bg-lightTheme-span transition text-lightTheme-text'
      : 'bg-darkTheme-span transition text-darkTheme-text '
  }   `;

  useEffect(() => {
    const fetchData = async () => {
      const projectsData = await getProject();
      setProjects(projectsData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const projectsData = await getDesigns();
      setDesigns(projectsData);
    };

    fetchData();
  }, []);

  return (
    <div className='flex lg:justify-center w-full'>
      <div className='lg:w-3/4 mt-28'>
        <div className='font-bold flex lg:justify-center   text-4xl lg:w-2/4'>
          <p>Projects.</p>
        </div>
        <div className='flex w-full '>
          <Tabs className='flex flex-col mt-10 w-full     justify-center'>
            <TabList className='flex justify-center lg:gap-5 gap-2 w-[90vw] lg:w-full'>
              <Tab selectedClassName={tabSelect} className={TabStyle}>
                Projects
              </Tab>
              <Tab className={TabStyle} selectedClassName={tabSelect}>
                Designs
              </Tab>
            </TabList>
            <TabPanel className={TabPanelStyle}>
              {projects.map((project: Project) => (
                <Projects project={project} key={project._id} />
              ))}
            </TabPanel>
            <TabPanel className={TabPanelStyle}>
              {designs.map((project: Project) => (
                <Projects project={project} key={project._id} />
              ))}
            </TabPanel>
          </Tabs>
        </div>
      </div>
      <div className='fixed bottom-0 z-[-1] right-0 '>
        <p
          className={`  text-[15vw] leading-none mb-4 ${
            abrilFatface.className
          } ${
            theme === 'dark'
              ? 'text-darkTheme-textBig'
              : 'text-lightTheme-textBig'
          }`}
        >
          Projects.
        </p>
      </div>
    </div>
  );
};

export default Body;
