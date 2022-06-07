// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TutoBox',
  tagline: 'Learn how to use TutoBox.',
  url: 'https://BOCOVO.github.io',
  baseUrl: '/tutobox-site/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'BOCOVO', // Usually your GitHub org/user name.
  projectName: 'tutobox-site', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  githubHost: 'github.com',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'TutoBox',
        logo: {
          alt: 'TutoBox logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Docs',
          },
          {
            href: 'https://github.com/BOCOVO/tutobox',
            label: 'GitHub',
            position: 'right',
          },
        ],

      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Exemple',
                to: '/docs/category/exemples',
              },
              {
                label: 'Concepts',
                to: '/docs/category/concepts',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/tutobox',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/tutobox',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/BOCOVO/tutobox',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TutoBox. Built by Juste BOCOVO.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  themes: [
    '@docusaurus/theme-live-codeblock'
  ],
  scripts: [
    {
      src:"https://unpkg.com/tutobox@0/dist/index.min.js",
      defer: true,
    }
  ],
  stylesheets:[
    "https://unpkg.com/tutobox@0/dist/index.min.css"
  ],
  plugins: [
    async function myPlugin() {
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
  ]
}; 

module.exports = config;
