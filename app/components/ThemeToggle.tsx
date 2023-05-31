import { useContext, useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { ThemeContext } from '@/app/components/Styles/themeContext';

export function ThemeToggle({ toggleTheme }: any) {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleHover = () => {
    setIsHovering(!isHovering);
  };

  const handleClick = () => {
    toggleTheme();
    setIsClicked(true);
  };

  return (
    <>
      <button
        className={`flex items-center justify-center w-10 h-10 rounded-md transition-colors duration-300 ease-in-out focus:outline-none bg-${
          theme === 'light'
            ? 'gray-900  bg-lightTheme-span '
            : 'gray-100 bg-darkTheme-span'
        }`}
        onClick={handleClick}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        {theme === 'dark' ? (
          <SunIcon
            className={`w-6 h-6 text-white ${
              isHovering && !isClicked ? 'animate-bounce' : ''
            }`}
          />
        ) : (
          <MoonIcon
            className={`w-6 h-6 text-black ${
              isHovering && !isClicked ? 'animate-bounce' : ''
            }`}
          />
        )}
      </button>
    </>
  );
}
