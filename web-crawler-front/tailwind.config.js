module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       'orangesoda' : '#F06449',
       'isabelline' : '#EDE6E3',
       'blackolive' : '#36382E',
       'vividskyblue' : '#5BC3EB'
      }
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
  }
}