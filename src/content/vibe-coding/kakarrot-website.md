---
title: "kakarrot.com — AI 产品经理品牌网站"
description: "从老 Hexo 博客迁移到 Astro 的品牌站点：Content Collections 管理文章/项目/实验，Shell 容器布局，酸绿色强调，纯静态零 JS 构建"
publishedAt: 2026-07-06
topics:
  - "Astro"
  - "Tailwind"
  - "个人品牌"
  - "静态站"
featured: true
draft: false
---

## 关于这个网站

个人网站 / 技术博客 — AI 产品经理的思考、写作与作品展示。

这是我从老旧的 Hexo 博客迁移到 Astro 的完全重写版。为什么迁移？因为我需要一个更能代表自己的品牌站点，而不是套用主题的通用博客。

设计上追求一种介于"电子杂志"和"访谈记录"之间的质感：暖白底色、酸绿强调、粗边框容器，用 Space Grotesk 和 Space Mono 搭建字体层次。

## 设计决策

- **Astro 5** — 静态站的首选，Content Collections 让 Markdown 内容管理有了 schema 约束
- **Tailwind CSS 4** — 配合自研全局样式，不用 UI 库
- **纯静态无 JS 运行时** — 不依赖 React/Vue，页面加载就是最终状态
- **GitHub Pages + Actions** — push 即部署

## 技术架构

Astro Content Collections 管理三类内容（Writing / Projects / Vibe Coding），构建产物输出到 `docs/` 用于 GitHub Pages。站点本身纯静态，无后端、无数据库、无评论系统。

## 当前状态

已上线运行（https://kakarrot.com），内容持续更新中。
