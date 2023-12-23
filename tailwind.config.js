module.exports = {
  content: [
    './public/index.{html,js}',
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'light': '#fffad5',
        'brightlight': '#ffd34e',
        'bluedark': '#105b63',
        'bright': '#db9e36',
        'reddark': '#bd4932',

      },

      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '850px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
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