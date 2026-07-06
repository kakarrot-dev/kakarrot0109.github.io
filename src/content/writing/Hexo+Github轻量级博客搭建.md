---
title: "No. 1: 我的第一个博客——Hexo + GitHub 搭建记录"
description: "2013 年，我从 WordPress 投向 Hexo。一个连 CSS 都不会写的人，用命令行搭出了自己的第一个博客。"
publishedAt: 2013-12-31
tags:
  - "Hexo"
  - "个人博客"
  - "GitHub Pages"
  - "技术笔记"
featured: false
draft: false
---

2013 年，我还是个不懂前端、不会后端、只会用 WordPress 发文章的人。

WordPress 太重了。后台臃肿、插件一堆、主题选择困难症。我就想找个地方，安安静静写写东西。

后来发现了 Hexo。一个台湾开发者做的静态博客框架——用 Markdown 写文章、命令行生成页面、部署到 GitHub Pages 上。免费，轻量，完全控制。

于是有了这个博客的起点。

## 1️⃣ 从零搭建

过程其实不复杂，但对当时的我来说每一步都是新世界。

**在 GitHub 上建仓库。** 名字必须是 `username.github.io`。GitHub Pages 会自动把仓库内容当作网站发布。

**安装 Hexo。** 那时候用的是 `npm install -g hexo-cli`，一个命令搞定。然后用 `hexo init` 初始化项目目录。

```shell
hexo init WebSite
cd WebSite
npm install
hexo g    # 生成静态页面
hexo s    # 本地预览
```

`localhost:4000` 出现的那一刻，有种"我自己的站在跑了"的满足感。

**部署到 GitHub。** 装个 `hexo-deployer-git`，配置一下用户名和邮箱，一条命令就能把静态文件推上去。

## 2️⃣ 域名绑定

那时候阿里云买个域名一年几十块。DNS 配置两条记录：

| 记录类型 | 主机记录 | 记录值 |
|---------|---------|--------|
| CNAME | WWW | kakarrot0109.github.io |
| CNAME | @ | kakarrot0109.github.io |

再在 `source/` 目录放个 CNAME 文件，写上 `kakarrot.com`。等 DNS 生效，浏览器一刷——自己的域名指向了自己的站。

## 3️⃣ 后来才知道的事

当时做这些纯粹是因为"好玩"。回头看，这次搭建经历无意间让我开始了几个好习惯：

- **写 Markdown 写成了习惯。** 后来工作里写文档、写 PRD，自动就用 Markdown。
- **版本控制**。因为 Hexo 依赖 GitHub，我开始认真用 git，学会了提交、分支、回滚。
- **命令行不再可怕。** 从"双击图标打开软件"变成了"敲命令干活"。

这些在今天看来是最基础的东西，2013 年的我根本不知道它们会那么重要。

---

十年后，这个 Hexo 博客长成了现在的 Astro 站。**好的开始不一定需要多完美。它只需要让你愿意继续。**