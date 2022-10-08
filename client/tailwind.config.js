/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      "sm": '0.8rem',
      "base": '1rem',
      "xl": '1.25rem',
      '2xl': '1.563rem',
      "3xl": '1.953rem',
      "4xl": '2.441rem',
      "5xl": '3.052rem',
      "6xl": '5.052rem'
    },
    extend: {
      colors: {
        "dark-purple": "#171717",
        "light-white": "rgb(255, 255, 255)",
        "orange-red": "rgb(255, 94, 41)"
      },
      backgroundImage: {
        'doctor': "url('https://thumbs.dreamstime.com/b/medicine-doctor-touching-electronic-medical-record-tablet-dna-digital-healthcare-network-connection-hologram-modern-virtual-154742526.jpg')",
        'sign-up-dark': 'url("https://www.99images.com/download-image/953078/2560x1600")',
        'sign-up-light': 'url("https://wallpaperaccess.com/full/296966.jpg")'
      },
      boxShadow: {
        '10xl': '0 35px 60px -15px rgb(0, 0, 0)',
      }
    },
  },
  plugins: [],
}
