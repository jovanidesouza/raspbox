module.exports = {
  title: 'RaspBox',
  tagline: 'A Home Theater Personal Computer Powered by Raspberry Pi',
  url: 'https://jovanidesouza.github.io',
  baseUrl: '/raspbox/',
  favicon: 'img/favicon.ico',
  organizationName: 'jovanidesouza', // Usually your GitHub org/user name.
  projectName: 'raspbox', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'RaspBox',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'hardware',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'showcase/',
          activeBasePath: 'Showcase',
          label: 'Showcase',
          position: 'left',
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
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/jovanidesouza/raspbox',
            },
          ],
        },
      ],
      
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'hardware',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
