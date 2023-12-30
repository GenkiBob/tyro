export default {
    title: 'Tyro Cloud',
    description: '魔法梯子科学上网.',
    base: '/tyro/',
    lang: 'zh-CN',
    themeConfig: {
        siteTitle: 'Tyro Cloud · 小白云',
        crisp: '0de87b57-f520-4955-99fd-f9557fc7adc6',
        nav: [
            { text: '', link: 'http://cloud.idid88.com/' },
            { text: '账号杂货铺', link: 'http://cloud.idid88.com/' },
            {
                text: 'Todesk 远程',
                items: [
                  { text: 'Todesk 官网下载', link: 'https://www.todesk.com/download.html' },
                  { text: 'Windows 免安装版', link: 'https://dl.todesk.com/windows/ToDesk_Lite.exe' },
                ]
              }
          ]
      },
      head: [
        [
            'script',
            {},
            `window.$crisp=[];window.CRISP_WEBSITE_ID="0de87b57-f520-4955-99fd-f9557fc7adc6";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`
          ]
      ]
  }
  