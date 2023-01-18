module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./docs/**/*.{md,mdx}",
    "./sidebars.js",
    "./src/**/*.json",
  ],
  theme: {
    extend: {
      backgroundImage: () => ({
        "logo-white": "url('/img/helpshift-logo.png')",
        "logo-dark": "url('/img/helpshift-logo-dark.png')",
      }),
    },
  },
  darkMode: ["class", '[data-theme="dark"]'],
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
