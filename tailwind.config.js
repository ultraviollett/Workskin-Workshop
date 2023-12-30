module.exports = {
  darkMode: 'class',
  content: [
    './public/index.{html,js}',
    './public/*.{html,js}',
  ],
  theme: {
    
    extend: {
      colors: {
        'light': '#fffad5',
        'brightlight': '#ffd34e',
        'bluedark': '#105b63',
        'darkdark': '#092629',
        'bright': '#db9e36',
        'reddark': '#bd4932',
        'orangedark' : '#9d380a',

      },

      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '850px',
        // => @media (min-width: 850px) { ... }
  
        'lg': '824px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
    }
  }
  // ...
}
}