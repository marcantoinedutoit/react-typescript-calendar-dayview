module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/features/**/*.{js,ts,jsx,tsx}',
    './src/utils/**/*.{js,ts,jsx,tsx}',
    './src/store/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'sans': ['Montserrat', 'Poppins'],
    },
    extend: {
      colors: {
        'primary-custom': 'rgb(12 10 29 / 96%);',
        'secondary-custom': '#e55d47',
      },
      maxWidth:{
        '1/5': '20%',
        '1/2': '50%'
      },
      keyframes: {
        bounceImgVertical: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-25px)' },
        },
        bounceImgVertical2: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateX(-25px)' },
          '100%': { transform: 'translateY(+25px)' },
        },
        bounceImgHorizontal: {
          '0%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(-25px)' },
          '100%': { transform: 'translateX(0px)' },
        },
        cardAnimation: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        bounceImgVertical: 'bounceImgVertical 4s ease 0s infinite alternate none running',
        bounceImgVertical2: 'bounceImgVertical2 5s ease 0s infinite alternate none running',
        bounceImgHorizontal: 'bounceImgHorizontal 5s ease-in-out 0s infinite normal none running',
        cardAnimation: 'cardAnimation'
      },
    },
  },
  plugins: [],
}