/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        // 'sm': '600px',
        // 'md': '728px',
        // 'lg': '984px',
        // 'xl': '1240px',
        // '2xl': '1496px'
      }
      },
      backgroundImage: {
        'call-image': "url('./assets/call.jpg')",
        'happy-image': "url('./assets/happy.jpg')",
        'basket-image': "url('./assets/basket.jpg')",
        'pay-image': "url('./assets/pay.jpg')",
        'phone-image': "url('./assets/phone.jpg')",
        'rate-image': "url('./assets/rate.jpg')",
        'tip-image': "url('./assets/tip.jpg')"
      },
      colors: {
        'sepia': '#E3B778',
        'fawn': '#C8A951',
        'punch': '#F25278',
        'blush-pink': '#FEC5E5',
        'watermelon': '#FE7F9C',
        'flamingo': '#FDA4BA',
        'rouge': '#F26B8A',
        'light-salmon': '#FDAB9F',
        'coral-pink': '#FE7D6A',
        'strawberry': '#FC4C4E',
        'rosewood': '#9E4244',
        'jungle-green': '#29AB87',
        'laurel-green': '#A9BA9D'

      }
    },
  plugins: [
    // eslint-disable-next-line no-undef
    require('@tailwindcss/container-queries'),
  ],
}

  