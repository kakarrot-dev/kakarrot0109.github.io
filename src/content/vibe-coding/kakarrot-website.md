---
title: "kakarrot.com：把个人品牌做成一个持续迭代的产品"
description: "用 Astro 写文章、记录项目，再用 Quiet Column 的中性灰双主题和单列布局把它们放进同一个个人站"
summary: "用 Astro 维护我的写作和项目档案。"
publishedAt: 2026-07-06
topics:
  - "Astro"
  - "内容产品"
  - "个人品牌"
  - "静态站"
cover: "/images/vibe-coding/kakarrot-website/cover.webp"
featured: true
draft: false
---

kakarrot.com 是我的个人品牌网站，也是我持续迭代的一个 Vibe Coding 项目。它承载 AI 产品经理的思考、写作与作品，让零散实践不只停在代码仓库或聊天记录里，而是形成可以长期积累、对外表达的内容产品。

当前的设计叫 Quiet Column。首页和归档用同一套单列布局，明暗主题都以中性灰为底，让标题、简介和日期承担信息层级。

## 为什么重做

这个网站最初建立在 Hexo 上。它能发布文章，但通用博客主题越来越难准确表达我是谁、在做什么，也无法清晰区分观点写作和真实作品。

迁到 Astro 后，归档成了个人站的骨架，文章和作品终于能各司其职。早期的 Quiet Studio 沿用了 Claude Cream 的暖色。后来我把栏目的入口收紧，用同一列排版承载首页、归档和正文，形成现在的 Quiet Column。

## 关键产品决策

- **内容先结构化**：Astro Content Collections 为 Writing 和 Vibe Coding 提供明确 schema，Markdown 既保持写作自由，也有稳定数据边界
- **两类内容承担不同任务**：Writing 沉淀观点和方法，Vibe Coding 展示可访问的作品与持续实践
- **首页按阅读顺序组织**，先介绍我是谁，再列精选项目和近期文章。目录用缩略图、标题和简短说明，让访客能顺手点进正文
- **站内搜索覆盖两个栏目**，可以按关键词找文章和项目，命中章节时直接跳到正文
- **保持纯静态**：页面不依赖 React 或 Vue 运行时，没有后端和数据库，构建结果就是访客最终看到的页面
- **让发布成为日常动作**：master 分支通过 GitHub Actions 构建并部署到 GitHub Pages，内容更新不需要额外后台

## 从博客到内容产品

我把网站看成一套持续运转的表达系统，而不是一次性完成的主页。文章和作品可以互相补充：一篇方法论能够链接到真实作品，一个 Vibe Coding 实验也可能沉淀为更完整的文章。

网站本身同样接受这种迭代。内容结构、设计令牌、组件和 Agent 协作规范都保存在仓库中，排版、色彩和交互也有单独的设计文档。 [Quiet Column 设计规范](https://github.com/kakarrot-dev/kakarrot0109.github.io/blob/master/DESIGN.md)

## 项目价值

它为分散在不同仓库和笔记中的工作提供了一个统一出口，也迫使我把「做过什么」进一步整理为「为什么做、如何判断、产生了什么价值」。这种整理本身就是个人品牌最重要的基础设施。

## 当前状态

网站已上线，设计规范已更新到 Quiet Column 3.1。内容继续通过 GitHub Pages 发布，Writing 和 Vibe Coding 的更新会进入同一个 RSS。

[访问 kakarrot.com](https://kakarrot.com) · [查看 GitHub 仓库](https://github.com/kakarrot-dev/kakarrot0109.github.io)
