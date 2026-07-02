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

const PRODUCTION_URL = "https://developers.helpshift.com";
const envIsProduction =
  process.env.NODE_ENV === "production" ||
  process.env.VERCEL_ENV === "production";
const envIsPreview = process.env.VERCEL_ENV === "preview";

const getDeployUrl = () => {
  if (envIsProduction) {
    return process.env.SEO_URL || PRODUCTION_URL;
  }

  if (envIsPreview) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // Development - this has no impact even if it's wrong during development
  return "http://localhost:3100";
};

const deployUrl = getDeployUrl();

async function createConfig() {
  /** @type {import('@docusaurus/types').Config} */
  const config = {
    title: "Helpshift Developer Guide",
    url: deployUrl,
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.png",

    // Even if you don't use internationalization or i18n, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
      defaultLocale: "en",
      locales: ["en"],
    },
    trailingSlash: true,

    headTags: [
      {
        tagName: "meta",
        attributes: {
          name: "robots",
          content: envIsProduction ? "index,follow" : "noindex,nofollow",
        },
      },
      {
        tagName: "meta",
        attributes: {
          property: "og:image",
          content: `${deployUrl}/img/social/site-share-thumb.png`,
        },
      },
      {
        tagName: "meta",
        attributes: {
          property: "og:url",
          content: deployUrl,
        },
      },
      {
        tagName: "meta",
        attributes: {
          name: "twitter:site",
          content: "@HelpshiftEng",
        },
      },
      {
        tagName: "meta",
        attributes: {
          name: "twitter:domain",
          content: deployUrl,
        },
      },
      {
        tagName: "meta",
        attributes: {
          name: "twitter:image",
          content: `${deployUrl}/img/social/tw-share-thumb.png`,
        },
      },
      {
        tagName: "meta",
        attributes: {
          name: "twitter:image:width",
          content: "800",
        },
      },
      {
        tagName: "meta",
        attributes: {
          name: "twitter:image:height",
          content: "400",
        },
      },
    ],

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
          gtag:
            envIsProduction && process.env.GTM
              ? {
                  trackingID: process.env.GTM,
                  anonymizeIP: true,
                }
              : undefined,
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

    themeConfig: {
      ...navbar,

      docs: {
        sidebar: {
          hideable: true,
        },
      },

      footer: {
        style: "light",
        links: footerLinks,
        copyright: `Copyright © ${new Date().getFullYear()}, Helpshift Inc.`,
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["swift", "java", "csharp", "groovy", "kotlin"],
      },
    },
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

      [
        require.resolve("docusaurus-plugin-image-zoom"),
        {
          selector: ".markdown img",
          background: {
            light: "rgb(50, 50, 50)",
            dark: "rgb(50, 50, 50)",
          },
          config: {
            margin: 20,
          },
        },
      ],
    ],
    customFields: {
      hsPid: process.env.HS_PID,
      hsDomain: process.env.HS_DOMAIN,
      envIsProduction,
    },
  };

  return config;
}

module.exports = createConfig;
