/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
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
