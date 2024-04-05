export default {
  title: '小白云·cooc',
  description: 'GPT加速|学术资源加速|科研加速|游戏加速|Digilink|小牛|uu加速|外贸工具',
  titleTemplate: '加速信息检索',
  // base: '/tyro/',
  lang: 'zh-CN',
  ignoreDeadLinks: true,
  // outDir: '../dist',
  themeConfig: {
    siteTitle: '小白云 · COOC',
    logo: './images/favicon.ico',
    nav: [
      {
        text: '软件下载',
        items: [
          { text: 'Windows 电脑', link: '/windows' },
          { text: 'MacOS 苹果电脑', link: '/mac' },
          { text: 'IOS 苹果手机/平板', link: '/ios' },
          { text: 'Android 安卓/华为/荣耀', link: '/android' },
          { text: '第三方通用软件', link: 'https://wiki.tyro.wiki' },
        ]
      },
      {
        text: 'Todesk 远程',
        items: [
          { text: 'Todesk 官网下载', link: 'https://www.todesk.com/download.html' },
          { text: 'Windows 免安装版', link: 'https://dl.todesk.com/windows/ToDesk_Lite.exe' },
        ]
      },
      { text: '账号杂货铺', link: 'https://cloud.idid88.com/' },
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
    ]
  },
  head: [
    ['link', { rel: 'icon', href: './images/favicon.ico' }],
  ],
  // 图片懒加载
  markdown: {
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true
    }
  }
}
