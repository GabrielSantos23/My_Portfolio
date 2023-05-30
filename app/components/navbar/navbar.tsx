import { useContext, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ThemeContext } from '../Styles/themeContext';
import Link from 'next/link';

const navItems = [
  { text: 'Home', href: '/' },
  { text: 'About', href: '/about' },
  { text: 'Projects', href: '/projects' },
  { text: 'Resume', href: '/resume' },
  { text: 'Contact', href: '/contact' },
];

const Navbar = ({}) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [show, setShow] = useState('translate-y-0');
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const [mobileMenu, setMobileMenu] = useState(false);

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }
  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow('-translate-y-[80px]');
      } else {
        setShow('shadow-sm');
      }
    } else {
      setShow('translate-y-0');
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);
  return (
    <header
      className={`lg:flex sticky duration-300 hidden py-5 item-center justify-between transition-transform  ${show} z-[100] `}
    >
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
