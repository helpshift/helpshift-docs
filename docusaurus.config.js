// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/nightOwlLight");
const darkCodeTheme = require("prism-react-renderer/themes/nightOwl");
const variables = require("./src/plugins/remark/variables");
const variablesData = require("./src/data/variables.json");
const navbar = require("./src/data/navbar.json");
const footerLinks = require("./src/data/footerLinks.json").links;
const fs = require("fs");

const getDocsDirectoriesForSearchPaths = (rootPath) =>
  fs
    .readdirSync(rootPath, { withFileTypes: true })
    .filter((dir) => dir.isDirectory())
    .map((dir) => dir.name);

async function createConfig() {
  /** @type {import('@docusaurus/types').Config} */
  const config = {
    title: "Helpshift Developer Guide",
    url: "https://developers.helpshift.com",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
      defaultLocale: "en",
      locales: ["en"],
    },
    trailingSlash: true,

    presets: [
      [
        "classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        {
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            routeBasePath: "/",
            remarkPlugins: [[variables, { data: variablesData }]],
            editUrl: "https://github.com/helpshift/helpshift-docs/edit/main",
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
          sitemap: {
            changefreq: "weekly",
            priority: 0.5,
            ignorePatterns: ["/tags/**"],
            filename: "sitemap.xml",
          },
        },
      ],
    ],
    themes: [
      [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        {
          hashed: true,
          indexBlog: false,
          docsRouteBasePath: ["/"],
          explicitSearchResultPath: true,
          removeDefaultStopWordFilter: false,
          searchContextByPaths: getDocsDirectoriesForSearchPaths("./docs"),
          hideSearchBarWithNoSearchContext: true,
        },
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        ...navbar,
        footer: {
          style: "light",
          links: footerLinks,
          copyright: `Copyright © ${new Date().getFullYear()} Helpshift Technologies Pvt. Ltd. All Rights Reserved.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
          additionalLanguages: ["swift", "java", "csharp", "groovy", "kotlin"],
        },
      }),
    plugins: [
      async function tailwindPlugin() {
        return {
          name: "docusaurus-tailwindcss",
          configurePostCss(postcssOptions) {
            // Appends TailwindCSS and AutoPrefixer.
            postcssOptions.plugins.push(require("tailwindcss"));
            postcssOptions.plugins.push(require("autoprefixer"));
            return postcssOptions;
          },
        };
      },
      require.resolve("./src/plugins/webChat.js"),
    ],
  };

  return config;
}

module.exports = createConfig;
