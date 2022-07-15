/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html, js, ts, vue}", 
    "./src/**/*"
],
  theme: {
    extend: {
        textColor : {
          skin: {
            display: 'var(--color-text-display)',
            button: 'var(--color-text-button)',
            equal : 'var(--color-text-special)'
          }
        },
        backgroundColor: {
          skin : {
            'button-number' : 'var(--color-button-number)',
            'button-del' : 'var(--color-button-del)',
            'button-equal' : 'var(--color-button-equal)',
            'indisplay' : 'var(--color-indisplay)',
            'outdisplay' : 'var(--color-outdisplay)',
            'full' : 'var(--color-full)'
          }
        },
      fontFamily: {
        'league' : ["'League Spartan'", 'sans-serif']
      }
    },
  },
  plugins: [],
}
