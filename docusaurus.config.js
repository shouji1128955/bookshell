// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const code_themes = {
  light: require('prism-react-renderer/themes/github'),
  dark: require('prism-react-renderer/themes/vsDark'),
};

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LiteShell',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // ...

  presets: [
    [
      // 'classic',
	  '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
		      showLastUpdateAuthor: true, 
          showLastUpdateTime: true,
        },   
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'LiteShell',
        logo: {
          alt: 'LiteShell',
          src: 'img/logo.svg',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          {
            label: 'Sre',
            position: 'left',
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'SreOper',   //这个名称最好是英文
                    to: '/docs/Sre/1-日常运维',
                    label: '日常运维',
                },
                {
                  type: 'docSidebar',
                  sidebarId: 'SreMiddleSoft',   //这个名称最好是英文
                  to: '/docs/Sre/2-中间件',
                  label: '中间件',
              },                             
            ]
        }, 


        {
          label: 'Kubernetes',
          position: 'left',
          items: [
              {
                  type: 'docSidebar',
                  sidebarId: 'Kubernetes',   //这个名称最好是英文
                  to: '/docs/Kubernetes',
                  label: 'Kubernetes',
              },                               
          ]
      },  


      {
        label: 'Prometheus',
        position: 'left',
        items: [
            {
                type: 'docSidebar',
                sidebarId: 'PrometheusGrafana',   //这个名称最好是英文
                to: '/docs/Prometheus/grafana',
                label: 'grafana',
            },
            {
                type: 'docSidebar',
                sidebarId: 'PrometheusServer',
                to: '/docs/Prometheus/prometheus',
                label: 'Prometheus',
            },
            {
                type: 'docSidebar',
                sidebarId: 'PrometheusAlert',
                to: '/docs/Prometheus/alertManager',
                label: 'AlertManager',
          },                               
        ]
    },
    
    {
      label: 'DevOps',
      position: 'left',
      items: [
          {
              type: 'docSidebar',
              sidebarId: 'DevOpsJenkins',   //这个名称最好是英文
              to: '/docs/DevOps/1-jenkins',
              label: 'jenkins',
          },
          {
            type: 'docSidebar',
            sidebarId: 'DevOpsGitOps',   //这个名称最好是英文
            to: '/docs/DevOps/2-gitOps',
            label: 'gitOps',
          },
          {
            type: 'docSidebar',
            sidebarId: 'DevOpsElk',   //这个名称最好是英文
            to: '/docs/DevOps/3-ELK',
            label: 'ELK',
          },  
          {
            type: 'docSidebar',
            sidebarId: 'DevOpsSkywalking',   //这个名称最好是英文
            to: '/docs/DevOps/4-skywalking',
            label: 'skywalking',
          },                                          
      ]
  },                           
          {
            label: 'Golang',
            position: 'left',
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'GoalngJichu',   //这个名称最好是英文
                    to: '/docs/Golang/golang基础',
                    label: 'golang基础',
                },
                {
                  type: 'docSidebar',
                  sidebarId: 'GoalngJinjie',   //这个名称最好是英文
                  to: '/docs/Golang/golang进阶',
                  label: 'golang进阶',
              },
                {
                type: 'docSidebar',
                sidebarId: 'GoalngOper',   //这个名称最好是英文
                to: '/docs/Golang/golang运维',
                label: 'golang运维',
              },                              
            ]
        },          
          {to: '/blog',
           label: 'Blog',
          position: 'left'
          },
          {
            href: 'https://github.com/facebook/docusaurus',
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
                label: 'Tutorial',
                to: '/docs/kubernetes/affinity',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'kubernetes',
                href: 'https://kubernetes.io/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'mindoc',
                //to: '/blog',
                href: 'https://mindoc.zlqit.com'
              },
              {
                label: 'GitHub',
                href: 'https://github.com/shouji1128955',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Blog Project - LiteShell`,
      },

      prism: {
        theme: code_themes.light,
        darkTheme: code_themes.dark,
        additionalLanguages: [
          'dart',
          'ruby',
          'groovy',
          'kotlin',
          'java',
          'swift',
          'objectivec',
          
        ],
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: { start: 'highlight-start', end: 'highlight-end' },
          },
          {
            className: 'code-block-error-line',
            line: 'highlight-next-line-error',
          },
        ],
      },
    }),
};

module.exports = config;