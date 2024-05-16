import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#008233',
        secondary: '#43B130',
        accent: '#E8B75C',
        backdrop: '#F3FCF7',
        shade: '#F8FBF5',
        placeholder: '#999999',
      },
    },
  },
  plugins: [daisyui],
};
