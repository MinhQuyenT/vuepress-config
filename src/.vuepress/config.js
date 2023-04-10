const { description } = require('../../package')
const sidebar = require('./sidebar/index')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'S.Power TEXTILE LIMITED',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "(Dệt May)",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    smoothScroll: true,
    lastUpdated: true,
    nav: [
      {
        text: 'ERP User Guide',
        link: '/docs/erp/',
      },
      {
        text: 'PDA',
        link: '/docs/pda/',
      },
      // {
      //   text: 'Learn',
      //   link: '/learn/',
      //   ariaLabel: 'Learn Menu',
      //   // items: [
      //   //   { text: 'Software Development', link: '/learn/software-development/' },
      //   //   { text: 'DevOps', link: '/learn/devops/' },
      //   //   { text: 'Cloud Computing', link: '/learn/cloud-computing/' },
      //   //   { text: 'Build Product', link: '/learn/build-product/' },
      //   //   { text: 'Concept', items: [
      //   //     { text: 'Software Development Principle', link: '/learn/concept/principle/'},
      //   //     { text: 'Software Architecture', link: '/learn/concept/architecture/'},
      //   //     { text: 'Tech Leadership', link: '/learn/concept/leadership/'},
      //   //   ]},
      //   // ]
      // },
      
    ],
    sidebar
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
    '@vuepress/nprogress'
  ]
}
