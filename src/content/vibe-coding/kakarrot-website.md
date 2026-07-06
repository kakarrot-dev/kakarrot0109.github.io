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

AI 产品经理的品牌网站。从运行十年的 Hexo 博客迁移而来，定位从"博客归档"转变为"个人品牌入口"。

### 技术栈

| 层 | 选型 |
|---|---|
| 框架 | Astro 5 |
| 样式 | Tailwind CSS 4 + 全局样式（global.css） |
| 内容 | Astro Content Collections（文章 / 项目 / Vibe Coding） |
| 部署 | GitHub Pages + GitHub Actions |
| 字体 | 系统字体 + JetBrains Mono 等宽字体 |

### 设计系统

- **背景** 暖白底色（oklch(96% 0.015 75)）
- **强调色** 酸绿色 #39ff14
- **布局** Shell 容器 + 固定宽度 + 全屏色块穿透
- **组件** 粗边框、项目卡片、文章卡片、滚动渐入动效
- **页面** 首页 / 文章 / 项目 / Vibe Coding / 关于 / 404 / RSS

### 迁移要点

- 17 篇老文章从 Hexo 迁移到 Astro Content Collections，统一 frontmatter schema
- 三套内容集合：writing / projects / vibe-coding，各有独立 schema 和类型校验
- 部署从 Hexo `master` 分支改为 GitHub Actions + `main` 分支
- CNAME 自定义域名保持 `kakarrot.com`，Cloudflare DNS 托管

### 结构

```
src/
  content/       Markdown 内容（writing / projects / vibe-coding）
  components/   Astro 组件（Nav、Footer、Card 系列、SeoHead）
  layouts/      页面布局（BaseLayout、ProseLayout）
  pages/        文件系统路由
  styles/       global.css 设计令牌
```

[→ kakarrot.com](https://kakarrot.com) · [→ GitHub 仓库](https://github.com/kakarrot-dev/kakarrot0109.github.io)
