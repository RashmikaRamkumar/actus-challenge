module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5B6E62', // Subtle primary color
        secondary: '#D6D7E5', // Light accent color
        accent: '#F1A7B3', // Soft accent color for hover effects
        dark: '#232B34', // Dark text for readability
        light: '#F9F9F9', // Light background color
      },
    },
  },
  plugins: [],
}
