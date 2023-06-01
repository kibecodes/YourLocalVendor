/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        'widescreen': { 'raw': 'min-aspect-ratio: 3/2'},
        'tallscreen': { 'raw': 'min-aspect-ratio: 1/2'}
      },
      backgroundImage: {
        'call-image': "url('./assets/call.jpg')",
        'happy-image': "url('./assets/happy.jpg')",
        'basket-image': "url('./assets/basket.jpg')",
        'pay-image': "url('./assets/pay.jpg')",
        'phone-image': "url('./assets/phone.jpg')"
      },
      colors: {
        'sepia': '#E3B778',
        'fawn': '#C8A951'
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('@tailwindcss/container-queries'),
  ],
}

  