---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Starfish Player"
  text: "星鱼音乐播放器"
  tagline: based on Navidrome & Subsonic Api
  image:
    src: ./public/starfish.svg
  actions:
    - theme: brand
      text: 更新日志
      link: /releases
    - theme: alt
      text: 下载
      link: /download

features:
  - icon: 
      src: ./public/navidrome.png
      width: 100px
    title: Navidrome
    details: 基于Navidrome音乐服务（兼容subsonic api）
  - icon:
      src: ./public/subsonic.png
      width: 128px
    title: Subsonic
    details: 基于Subsonic音乐服务
---