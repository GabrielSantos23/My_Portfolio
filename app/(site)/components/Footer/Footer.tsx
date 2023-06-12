import React, { useState } from 'react';
import {
  AiFillBehanceCircle,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from 'react-icons/ai';
import { FiCode } from 'react-icons/fi';
import Link from 'next/link';

interface Item {
  id: string;
  name: string;
  perform: string;
  icon: JSX.Element;
  bgColor: string;
  hover: boolean;
}

const Footer = () => {
  const [items, setItems] = useState<Item[]>([
    {
      id: 'instagram',
      name: 'Instagram',
      perform: 'https://instagram.com/gabriel.santos.ss',
      icon: <AiOutlineInstagram />,
      bgColor: '#FE475B',
      hover: false,
    },
    {
      id: 'github',
      name: 'GitHub',
      perform: 'https://github.com/GabrielSantos23',
      icon: <AiFillGithub />,
      bgColor: '#808080',
      hover: false,
    },
    {
      id: 'behance',
      name: 'Behance',
      perform: 'https://www.behance.net/gabrielsilva398',
      icon: <AiFillBehanceCircle />,
      bgColor: '#0055FE',
      hover: false,
    },
    {
      id: 'sourceCode',
      name: 'Source Code',
      perform: 'https://www.github.com',
      icon: <FiCode />,
      bgColor: '#808080',
      hover: false,
    },
    {
      id: 'linkedin',
      name: 'Linkedin',
      perform: 'https://www.linkedin.com/in/gabriel-santos-ss/',
      icon: <AiFillLinkedin />,
      bgColor: '#0077B7',
      hover: false,
    },
  ]);

  const handleMouseEnter = (index: number) => {
    const updatedItems = [...items];
    updatedItems[index].hover = true;
    setItems(updatedItems);
  };

  const handleMouseLeave = (index: number) => {
    const updatedItems = [...items];
    updatedItems[index].hover = false;
    setItems(updatedItems);
  };

  return (
    <div className='flex items-center justify-center mt-0  z-[10]'>
      <div className='absolute bottom-5 w-full 2xl:flex hidden max-w-[700px] items-center justify-center'>
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`flex items-center w-full max-w-[1000px] transition-opacity duration-500 ease-linear ${
              item.hover ? 'opacity-100' : 'opacity-80'
            } hover:opacity-100`}
          >
            <Link href={item.perform} target='_blank'>
              <p
                className={`flex items-center text-sm ${
                  item.hover ? 'text-opacity-100' : 'text-opacity-50'
                }`}
                style={{
                  color: item.hover ? item.bgColor : 'rgb(107 114 128)',
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                {item.name} &nbsp;
                <span
                  className={`opacity-0 transition-opacity duration-500 ease-linear ${
                    item.hover ? 'opacity-100' : ''
                  }`}
                  style={{ color: item.bgColor }}
                >
                  {item.icon}
                </span>
              </p>
            </Link>
          </div>
        ))}
      </div>
      <div className='2xl:hidden flex absolute bottom-[-20px] h-20 items-center w-full justify-between px-3'>
        {items.map((item) => (
          <div key={item.id}>
            <Link href={item.perform} target='_blank'>
              <span style={{ color: item.bgColor }}>{item.icon}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
