/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Abril: ['"Abril Fatface"', 'cursive'],
      },
      colors: {
        lightTheme: {
          body: '#FFFDFC',
          card: '#F4F1EE',
          text: '#1f1e1e',
          toggleBorder: '#343A40',
          ButtonHover: '#FF8700',
          textDescription: '#4e4e4e',
          Selection: '#afafaf',
          buttonText: '#fff',
          button: '#000',
          span: '#f5dcbf ',
          nav: '#FF8700',
          scrollback: '#fff',
          textBig: '#F9F7F6',
          line: '#E0E0E0',
        },
        darkTheme: {
          body: '#020A13',
          card: '#01050a',
          text: '#E1E1E1',
          toggleBorder: '#343A40',
          ButtonHover: '#365f9a',
          zIndex: '999',
          span: '#0f1c2c',
          textDescription: '#b4b1b1',
          Selection: '#4d4d4d',
          buttonText: '#000',
          button: '#E1E1E1',
          nav: '#00ffff',
          scrollback: '#0D1116',
          textBig: '#080F18',
          line: '#0F1923',
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
