/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightblue: "#1867de",
        mainblue: "#2E42FF",
        darkblue: "#1a2691",
        test: "#fff2eb",
      },
    },
  },
  plugins: [],
};
