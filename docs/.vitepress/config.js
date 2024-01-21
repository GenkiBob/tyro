export default {
  title: 'Tyro Cloud',
  description: 'TyroCloud 是全球IP服务商,全球范围内拥有超过800万个IP,提供企业级海外 HTTP/HTTPS/SOCKS5 代理服务、速度快、稳定高效',
  titleTemplate: '小白云',
  // base: '/tyro/',
  lang: 'zh-CN',
  ignoreDeadLinks: true,
  // outDir: '../dist',
  themeConfig: {
    siteTitle: 'Tyro Cloud · 小白云',
    nav: [
      {
        text: '软件下载',
        items: [
          { text: 'Mac 苹果电脑', link: '/mac' },
          { text: 'Windows 电脑', link: 'https://assets.tyro.wiki/c/tyro.exe' },
          { text: 'IOS 苹果手机（平板）', link: '/ios' },
          { text: '安卓｜鸿蒙 手机（平板）', link: 'https://assets.tyro.wiki/c/tyro.apk' },
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
    ]
  },
  head: [
    ['link', { rel: 'icon', href: '/icon.png' }],
  ],
}
