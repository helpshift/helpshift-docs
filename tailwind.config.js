const envIsProduction = process.env.VERCEL_ENV === "production";
const safeList = !envIsProduction
  ? [
      {
        // Allow all margin and padding styles in development/preview
        pattern: /(m[a-z]{0,1}-[0-9]+)|(p[a-z]{0,1}-[0-9])/,
      },
      "m-0",
      "p-0",
    ]
  : null;

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
  safelist: safeList,
};
