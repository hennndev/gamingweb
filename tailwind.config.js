module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'app': '#090910',
        'header-sticky': 'rgba(0,0,0,0.6)',
        'header': 'rgb(33, 33, 33, 0.9)',
        'overlay': 'rgba(0,0,0,0.8)'
       }),
       backgroundImage: {
        'banner': "url('./images/dota2.jpg')",
        'linear' : "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 10%, rgba(0,0,0,0.6) 90%, rgba(0,0,0,1) 100% )"         
       },
       height: {
         'banner': '500px'
       },
       gridTemplateColumns: {
         'cards': 'repeat(auto-fill, minmax(250px, 1fr))'
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
