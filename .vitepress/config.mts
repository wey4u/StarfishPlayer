import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "星鱼音乐播放器",
  description: "A Navidrome & Subsonic Music Stream Player!!",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '更新日志', link: '/releases' }
    ],

    sidebar: [
      {
        text: '星鱼',
        items: [
          { text: '更新日志', link: '/releases' },
          { text: '开发日常', link: '/daily' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
