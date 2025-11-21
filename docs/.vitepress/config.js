export default {
  title: '小白云·cooc',
  description: 'GPT加速|学术资源加速|科研加速|游戏加速|Digilink|小牛|uu加速|外贸工具',
  titleTemplate: '加速信息检索',
  // base: '/tyro/',
  lang: 'zh-CN',
  ignoreDeadLinks: true,
  // outDir: '../dist',
  head: [
    ['link', { rel: 'icon', href: './images/favicon.ico' }],
    // [
    //   'script',
    //   { async: '', src: 'https://38.55.97.185/ack.js', 'data-ackee-server': 'https://38.55.97.185', 'data-ackee-domain-id': 'eca5c807-826a-46e8-89a7-cc0e3778559b', 'data-ackee-opts': '{ "detailed": true }' }
    // ]
  ],
  themeConfig: {
    siteTitle: '小白云 · COOC',
    logo: './images/favicon.ico',
    nav: [
      { text: 'GPT Plus自助充值', link: 'https://bestok.cc' },
      { text: '推广大使计划2.0', link: 'https://c.tyro.wiki' },
      { text: '账号杂货铺', link: 'https://idstore.for789.com' },
      { text: '用户中心', link: 'https://154.26.185.131:61001/' },
    ],
    sidebar: [
      {
        text: '快速使用',
        items: [
          { text: '软件介绍', link: '/intro' },
          { text: 'Windows 电脑', link: '/windows' },
          { text: 'MacOS 苹果电脑', link: '/mac' },
          { text: 'IOS 苹果手机/平板', link: '/ios' },
          { text: 'Android 安卓/华为/荣耀', link: '/android' },
        ]
      }
    ],
    footer: {
      copyright: 'Copyright © 2020-present XiaoBaiYun Tech'
    }
  },

  // 图片懒加载
  markdown: {
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true
    }
  },
}
