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
        "orange-red": "rgb(255, 94, 41)",
        "b-black": '#0f0f0f'
      },
      backgroundImage: {
        'doctor': "url('https://thumbs.dreamstime.com/b/medicine-doctor-touching-electronic-medical-record-tablet-dna-digital-healthcare-network-connection-hologram-modern-virtual-154742526.jpg')",
        'sign-up-dark': 'url("https://img.freepik.com/free-vector/clean-medical-background_53876-116875.jpg?w=2000")',
        'sign-up-light': 'url("https://img.freepik.com/free-vector/clean-medical-background_53876-116875.jpg?w=2000")'
      },
      boxShadow: {
        '10xl': '0 35px 60px -15px rgb(0, 0, 0)',
      }
    },
  },
  plugins: [],
}
