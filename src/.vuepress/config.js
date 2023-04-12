const { description } = require("../../package");
const sidebar = require("./sidebar/index");

module.exports = {
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    "/": {
      lang: "en-US", // 将会被设置为 <html> 的 lang 属性
      title: "S.Power TEXTILE LIMITED",
      description:"S.Power TEXTILE LIMITED",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "S.Power 纺织有限公司",
      description:
        "S.Power 纺织有限公司",
    },
  },

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "S.Power TEXTILE LIMITED",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ["meta", { name: "theme-color", content: "black" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    // logo: logo,
    // coverHome: logo,
    backgroundImage: true,
    smoothScroll: true,
    lastUpdated: true,
    locales: {
      "/": {
        selectText: "Languages",
        label: "Tiếng Việt",
        ariaLabel: "Languages",
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh",
          },
        },
        algolia: {},
        nav: [
          {
            text: 'Docs',
            link: '/docs/erp/',
            ariaLabel: 'Language',
              items: [
                {
                  text: "ERP User Guide",
                  link: "/docs/erp/",
                },
                {
                  text: "PDA",
                  link: "/docs/pda/",
                },
              ]
          },
        ],
        sidebar,
      },
      '/zh/': {
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        label: '中文',
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        // 当前 locale 的 algolia docsearch 选项
        algolia: {},
        nav: [
          {
            text: 'Docs',
            link: '/docs/erp/',
            ariaLabel: 'Language',
              items: [
                {
                  text: "ERP 用户指南",
                  link: "/zh/docs/erp/",
                },
                {
                  text: "PDA",
                  link: "/zh/docs/pda/",
                },
              ]
          },
        ],
        sidebar,
      }
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    "@vuepress/back-to-top",
    "@vuepress/medium-zoom",
    "@vuepress/nprogress",
  ],
};
