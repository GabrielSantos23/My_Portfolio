'use client';

import React, { useContext, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../components/Styles/themeContext';
import { abrilFatface } from '../components/Styles/Fonts';
import HelmetComponent from '../components/Helmet';

export default function Contact() {
  const form = useRef<any>();
  const [done, setDone] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const InputTheme = `bg-transparent border  ${
    theme === 'dark' ? 'border-darkTheme-span' : 'border-lightTheme-span'
  } max-w-[600px] rounded-lg mb-4 p-5 z-10 focus:outline-none `;

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_dn1wyyp',
        'template_6nm5t2v',
        form.current,
        'sDrWJuIYYZirBcR_F'
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('message sent');
          e.target.reset();
          setDone(true);
          toast.success('👍 Email Sussfull Send!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
        },
        (error) => {
          console.log(error.text);
          setDone(false);
          toast.error('❌ A error ocorred!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ delay: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='flex gap-28 lg:items-center w-full  flex-col'
    >
      <HelmetComponent title='Contact | Gabriel Santos' />
      <div className='lg:w-2/4'>
        <div className='mt-24 font-bold w-2/4 text-5xl'>Contact.</div>
        <div className='mt-5  '>
          Lets talk or shoot me an email directly on
          <span className='font-extrabold hover:underline transition'>
            {' '}
            gabriel.gs605@gmail.com
          </span>
        </div>
        <div className='mt-4'>
          <form
            onSubmit={sendEmail}
            autoComplete='true'
            className='flex flex-col gap-3 '
            ref={form}
          >
            <input
              type='text'
              className={InputTheme}
              placeholder='Name'
              name='user_name'
              required
            />
            <input
              type='text'
              className={InputTheme}
              placeholder='Email'
              name='user_email'
              required
            />

            <textarea
              required
              name='message'
              placeholder='Message'
              id=''
              cols={30}
              rows={10}
              className={`max-w-[600px] border z-10 bg-transparent pl-[20px] pt-[10px] 
             rounded-lg resize-none ${
               theme === 'dark'
                 ? 'border-darkTheme-span'
                 : 'border-lightTheme-span'
             } focus:outline-none`}
            ></textarea>
            <button
              className={`rounded-sm h-12 w-40  mt-12 max-w-[160] border-none cursor-pointer text-base  ${
                theme === 'dark'
                  ? 'bg-darkTheme-button text-darkTheme-buttonText '
                  : 'bg-lightTheme-button text-lightTheme-buttonText'
              } `}
              type='submit'
              value='Send'
            >
              Send Message
            </button>
          </form>
        </div>
        <Link
          className={`z-10 bg-transparent mt-5 flex gap-2 items-center   mb-14  `}
          href={'/'}
        >
          <div>Go back to home screen </div>
          <div>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </Link>
        <ToastContainer
          position='top-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='light'
        />
      </div>
      <div className='fixed bottom-0 left-0 z-[-1] '>
        <p
          className={`  text-[15vw] leading-none mb-4 ${
            abrilFatface.className
          } ${
            theme === 'dark'
              ? 'text-darkTheme-textBig'
              : 'text-lightTheme-textBig'
          }`}
        >
          Contact.
        </p>
      </div>
    </motion.div>
  );
}
