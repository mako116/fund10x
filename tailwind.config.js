/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'royal-blue': '#0E349F',
        "blacks": '#2C2C2C',
        "linear1": '#21792E',
        "linear2": '#0E349F',
        "ladies-white": "#EAF0FF",
        "whiting": "#e5e7fd",
        "grayed": "#585858" 
      },
      padding:{
        'padd': '18px, 29px, 18px, 29px',
        'paddi': '18.16px, 31.29px, 18.16px, 31.29px',
        "ban-pad": '19.01px, 32.76px, 19.01px, 32.76px',
        "padding27": '27.649px 15.527px 26.454px 16.725px',
        "padding41": "41.813px 40.618px 112.473px 40.618px",
        "padding113": "113.818px 65.264px 114px 94px",
        "pad-12": "12.961px 16.967px 12.961px 16.966px",
        "pad-24": "24.966px 0px 24.148px 29.866px",
        "padd79" : "79px 284.383px 340.704px 36px"
      },
    
      gridTemplateColumns: {
        "grid-temp4": "grid-template-columns: repeat(4,1fr)",
        "grid-temp3": "grid-template-columns: repeat(3,1fr)",
        "grid-temp2": "grid-template-columns: repeat(2,1fr)",
      },
      backgroundColor:{
        "lightb": "#F0F4FF",
        "linear-gradient": "(149deg, #21792E 18.01%, #0E349F 91.58%)"
      },
    },
  },
  plugins: [],
}
