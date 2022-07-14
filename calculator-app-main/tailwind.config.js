/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html, js, ts, vue}", 
    "./src/**/*"
],
  theme: {
    extend: {
      colors: {
        // theme 1 
        //background
        'darklight-blue' : '#3a4764',
        'dark-blue' : '#232c43',
        'verydark-blue' : '#182034',
        //keys
        'light-blue' : '#637097',
        'shadow-dark' : '#404e72',
        'red' : '#d03f2f',
        'dark-red' : '#93261a',
        //text
        'grayish-blue' : '#444b5a',
        'white' : '#fff',
        //theme 2
        //background
        'light-gray' : '#e6e6e6',
        'grayish-red' : '#d1cccc',
        'very-lightgray' : '#ededed',
        //keys
        'dark-cyan' : '#377f86',
        'very-darkcyan': '#1b5f65',
        'orange' : '#ca5502',
        'dar-orange' : '#893901',
        'grayish-yellow': ' #e5e4e1',
        'grayish-orange': '#a69d91',
        //text
        'dark-grayish-yellow': '#35352c',
        // theme 3
        //background
        'very-dark-violet': '#160628',
        'darkblue-violet' : '#1d0934',
        // Keys
        'dark-violet' : '#58077d',
        'vivid-magenta' : '#bc15f4',
        'pure-cyan' : '#00e0d1',
        'soft-cyan' : '	#6cf9f2',
        'more-dark-violet' : '#341c4f',
        'dark-magenta' : '	#871c9c',
        //text
        'light-yellow': '#ffe53d',
        'dark-black': '#1b2428'
      },
      fontFamily: {
        'league' : ["'League Spartan'", 'sans-serif']
      }
    },
  },
  plugins: [],
}
