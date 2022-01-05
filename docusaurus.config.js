// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PrimeData Docs',
  tagline: 'Dinosaurs are cool',
  url: 'https://primedata.ai/',
  baseUrl: '/docs/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'primedata-ai',
  projectName: 'docs',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // editUrl: 'https://github.com/primedata-ai/docs/tree/main/docs',
        },
        blog: false,
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
        title: 'PrimeData Docs',
        logo: {
          alt: 'PrimeData Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'ingesting-events',
            position: 'left',
            label: 'Guides',
          },
          {
            href: 'https://github.com/primedata-ai/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Explore',
            items: [
              {
                label: 'Prime Home Page',
                href: 'https://primedata.ai',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/PrimeDataAI',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'About Us',
                to: 'https://primedata.ai/about/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/primedata-ai',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PrimeData, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
