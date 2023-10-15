/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'neutral-50': '#F9F9F9',
        'neutral-1000': '#000',
        'neutral-200': '#E4E4E4',
        'neutral-500': '#737373',
        'neutral-700': '#404040',
        'neutral-400': '#A2A2A2',
        'neutral-600': '#525252',
        'twitter—blue': '#1D9BF0',
        'twitter—blue-hover': '#1871CA',
        'twitter—blue-disabled': '#1E5D87',

        'stroke': '#546A7A',
        'searchbar-fill': '#212327'
      },
      boxShadow: {
        'button': '0px 8px 16px 0px rgba(0, 0, 0, 0.25)'
      },
      backdropBlur: {
        'button': '23.668209075927734px',
      },
      borderRadius: {
        'create': '4.0625rem',
        'post': '624.9375rem',
        'follow': '1.875rem',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}


// colors: {
//   "neutral—400": "
//     * a2a2Q
// "neutral—5Ø": "
//     * f9f9f9
// "neutral—IØØØ": "#øøø
// rgba(255, 255, 255,
// "neutral—95Ø": "#ØaØaØa
// "neutral—900 . "
// #171717",
// " neut rat—8ØØ" :
// "*262626" ,
// "neutravøø••: "
// "neutral-600": "*525252" ,
// "neutral—500": "
// "neutral—300": "
// .% d3d3d3
// "neutral—200": "
// $e4e4e<
// "neutral—100": "
// "red—error": "
// #8b141a•
//   "green—success": "
// "card—fill": "
// #16181c" ,
// "searchbar—fitt . "
// #212327",
// 0.12)
//   "twitter—blue": "
//     % 1d9bfß
// }