import React, { useContext } from 'react';

import { motion } from 'framer-motion';
import { HiOutlineArrowSmLeft } from 'react-icons/hi';
import imageUrlBuilder from '@sanity/image-url';
import { client } from '@/sanity/sanity-utils';
import { BiLinkExternal, BiWorld } from 'react-icons/bi';
import Link from 'next/link';
import { Project } from '@/app/projects/components/body';
import { ThemeContext } from '../Styles/themeContext';
import { PortableText } from '@portabletext/react';

type ImageModalProps = {
  post: Project;
  onClose: () => void;
};

const ImageModal = ({ post, onClose }: ImageModalProps) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      onClick={onClose}
      className='fixed top-0 right-0 bottom-0 w-full h-full bg-black/70 z-[99999]'
    >
      <motion.div
        className={`${
          theme === 'dark' ? 'bg-darkTheme-body' : 'bg-lightTheme-body '
        } p-5 max-w-[90%] overflow-y-auto fixed h-full right-0 lg:w-[570px] w-full 
        scrollbar-thin ${
          theme === 'dark'
            ? 'scrollbar-thumb-darkTheme-span scrollbar-track-darkTheme-scrollback'
            : 'scrollbar-thumb-lightTheme-span  scrollbar-track-lightTheme-scrollback'
        }
        `}
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex justify-between w-full  items-center'>
          <HiOutlineArrowSmLeft
            onClick={onClose}
            className='border-2 rounded-full p-[2px] text-3xl  cursor-pointer'
          />
          <button onClick={onClose} className='hover:underline cursor-pointer'>
            Back to Projects.
          </button>
        </div>
        <hr
          className={`${
            theme === 'dark' ? 'bg-darkTheme-span' : 'bg-lightTheme-span'
          }  border-none w-full h-[1px] mt-5 mb-5 `}
        />
        <div>
          <h1 className='text-4xl font-bold mb-5'>{post.title}</h1>
          <p
            className={`text-md ${
              theme === 'dark'
                ? 'text-darkTheme-textDescription'
                : 'text-lightTheme-textDescription'
            } mb-5  `}
          >
            {post.subtitle}
          </p>
          <img className='rounded-lg ' src={post.imageUrl} alt='' />
        </div>
        <div className='mt-5 '>
          <h2 className='mb-5 text-2xl font-bold'>About</h2>
          <div
            className={`text-md ${
              theme === 'dark'
                ? 'text-darkTheme-textDescription'
                : 'text-lightTheme-textDescription'
            } mb-5  `}
          >
            <PortableText value={post.about} />
          </div>
        </div>
        <div className='mt-5 '>
          <h2 className='mb-5 text-2xl font-bold'>Technologies</h2>
          <div className='flex gap-2'>
            {post.technologies.map((tech: string) => (
              <p
                className={`p-1 ${
                  theme === 'dark' ? 'bg-darkTheme-span' : 'bg-lightTheme-span'
                }  rounded-lg text-sm`}
                key={tech}
              >
                {tech}
              </p>
            ))}
          </div>
        </div>

        <div className='mt-5 '>
          <h2 className='mb-5 text-2xl font-bold flex items-center gap-1'>
            Website <BiWorld />
          </h2>
          <Link href={post?.website} target='_blank'>
            <p
              className={`text-md mb-5 
            ${
              theme === 'dark'
                ? 'text-darkTheme-textDescription'
                : 'text-lightTheme-textDescription'
            }

            hover:underline  `}
            >
              {post?.website}
            </p>
          </Link>
          {post?.open && (
            <div
              className={` bottom-0 flex items-center justify-center  w-full left-0 h-16      ${
                theme === 'dark'
                  ? 'text-darkTheme-textDescription bg-darkTheme-span'
                  : 'text-lightTheme-textDescription bg-darkTheme-span'
              }`}
            >
              <Link
                href={post?.open}
                target='_blank'
                className='flex font-semibold  gap-1 w-full h-full items-center justify-center'
              >
                Open Project <BiLinkExternal />
              </Link>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ImageModal;
