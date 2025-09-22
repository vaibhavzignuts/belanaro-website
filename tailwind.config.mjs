/** @reference './src/app/globals.css; */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef7ff',
          100: '#d9edff',
          200: '#bce0ff',
          300: '#8eccff',
          400: '#59afff',
          500: '#3690ff',
          600: '#1a73ff',
          700: '#1a5eff',
          800: '#1c4ce0',
          900: '#1e42b2',
          950: '#172860',
        },
        secondary: {
          50: '#f4f9f7',
          100: '#daefe9',
          200: '#b4dfd4',
          300: '#84c7b8',
          400: '#54a898',
          500: '#34907d',
          600: '#257565',
          700: '#215e52',
          800: '#1e4a42',
          900: '#1b3d38',
          950: '#0d2321',
        },
        accent: {
          50: '#fff9eb',
          100: '#ffefc6',
          200: '#ffdc86',
          300: '#ffc446',
          400: '#ffae1b',
          500: '#ff9000',
          600: '#e66f00',
          700: '#bf4e00',
          800: '#9c3c02',
          900: '#803107',
          950: '#461600',
        },
      },
      fontFamily: {
        sans: ['Caveat', 'cursive'], // for body
        heading: ['Lobster', 'cursive'], // for heading
      },
      backgroundImage: {
        'hero-pattern': "url('/product-hero.png')",
        'factory-bg': "url('/product-hero.png')",
      },
    },
  },
  plugins: [],
};
