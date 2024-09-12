import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '425px',
        md: '768px',
        '3xl': '1920px',
        MiniGameBoscore: '1830px',
        '3xl-up': '1921px'
      },
      fontSize: {
        10: '10px',
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        22: '22px',
        24: '24px',
        26: '26px',
        28: '28px',
        30: '30px',
        32: '32px',
        34: '34px',
        36: '36px',
        38: '38px',
        40: '40px',
        44: '44px',
        48: '48px',
        64: '64px'
      },
      colors: {
        primary: {
          DEFAULT: '#0759c4',
          2: '#0759c4',
          3: '#074494',
          4: '#FCE5D9',
          5: '#e59900',
          6: '#f5dd23',
          8: '#000000',
          9: '#1E2831'
        },
        secondary: {
          DEFAULT: '#181a20',
          1: '#222',
          2: '#14161b',
          3: '#606A77',
          4: '#E3E7EC',
          5: '#EFF3F9',
          6: '#999999'
        },
        blue: {
          soft: '#4196ef',
          1: '#1FB3FF',
          3: '#1f7aff'
        },
        red: {
          1: '#FF1515'
        },
        yellow: {
          1: '#ffffbb'
        },
        orange: {
          DEFAULT: '#f90'
        },
        black: {
          DEFAULT: '#000000',
          1: '#111111',
          2: '#191919',
          3: '#101216',
          4: '#1E2428'
        },
        gray: {
          text: '#999',
          button: '#2a2a2a',
          1: '#191919',
          2: '#565656',
          3: '#222733',
          4: '#ededf5',
          5: '#707478',
          6: '#282b30'
        },
        green: {
          1: '#4ad76e'
        },
        error: {
          DEFAULT: '#f56c6c'
        },
        'mini-game-table': {
          1: '#fff',
          2: '#fff',
          3: '#3e4c6f',
          4: '#182037',
          5: '#0d1122',
          item: '#0d1122',
          'item-active': '#ffc700',
          rate: '#4b3422',
          border: '#3e4c6f'
        }
      },
      backgroundImage: {
        minigame: "url('/assets/images/mini_game/background.jpg')",
        linearRed: 'linear-gradient(to bottom, rgb(183 47 47) 1%, rgb(119 14 14) 100%)',
        linearBlack: 'linear-gradient(to bottom, rgba(50, 50, 50, 1) 1%, rgba(20, 20, 20, 1) 100%)',
        linearBlackHover: 'linear-gradient(to bottom, rgba(80, 80, 80, 1) 1%, rgba(20, 20, 20, 1) 100%)',
        linearPurple: 'linear-gradient(to bottom, rgb(92 92 175) 1%, rgb(48 48 99) 100%)',
        buttonLinear: 'linear-gradient(to bottom, rgba(80,80,80,1) 1%,rgba(33,33,33,1) 100%)'
      },
      fontFamily: {
        sans: ['attgd', 'sc-medium', 'Malgun Gothic', 'dotum', 'sans-serif'],
        custom: ['Malgun Gothic', 'dotun'],
        malgun: ['Malgun Gothic', 'sans-serif'],
        dotum: ['dotum', 'gulim', 'Arial', 'sans-serif']
      }
    }
  },
  container: {
    center: true,
    screens: {
      lg: '1024px',
      xl: '1336px'
    },
    padding: {
      DEFAULT: '16px'
    }
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.placeholder-normal::placeholder': {
          'font-style': 'normal'
        }
      })
    }
  ]
}

export default config
