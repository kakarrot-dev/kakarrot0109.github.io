---
title: "kakarrot.com：把个人品牌做成一个持续迭代的产品"
description: "从 Hexo 迁到 Astro，再把站收进 Claude Cream 的 Quiet Studio：Writing 与 Vibe Coding 双入口，亮暗双主题，纯静态部署，持续对外表达"
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

站内把这套视觉叫作静室 Quiet Studio：暖象牙画布、琥珀金强调、暖炭灰深色，设计系统对齐 [Claude Cream](https://github.com/kakarrot-dev/claude-cream)。

## 为什么重做

这个网站最初建立在 Hexo 上。它能发布文章，但通用博客主题越来越难准确表达我是谁、在做什么，也无法清晰区分观点写作和真实作品。

迁到 Astro 解决的是容器问题：归档变成个人站骨架，文章和作品终于能各司其职。容器立住之后，站还是不像我。苔绿、粗边框 Shell、半废弃的 Projects 入口，看起来像模板换了个名字。于是有了第二次换向：砍信息架构，把站点吃进 Claude Cream 的 Website 色板与插画规范，让对外门面和创作工具属于同一套气质。

## 关键产品决策

- **内容先结构化**：Astro Content Collections 为 Writing 和 Vibe Coding 提供明确 schema，Markdown 既保持写作自由，也有稳定数据边界
- **两类内容承担不同任务**：Writing 沉淀观点和方法，Vibe Coding 展示可访问的作品与持续实践
- **视觉服务个人表达**：Quiet Studio 对齐 Cream，亮暗双主题，细线与留白取代苔绿 shell；首页用琥珀雾场 Hero、作品封面横滚和文章行列表回答「这是谁，在做什么」
- **保持纯静态**：页面不依赖 React 或 Vue 运行时，没有后端和数据库，构建结果就是访客最终看到的页面
- **让发布成为日常动作**：master 分支通过 GitHub Actions 构建并部署到 GitHub Pages，内容更新不需要额外后台

## 从博客到内容产品

我把网站看成一套持续运转的表达系统，而不是一次性完成的主页。文章和作品可以互相补充：一篇方法论能够链接到真实作品，一个 Vibe Coding 实验也可能沉淀为更完整的文章。

网站本身同样接受这种迭代。内容结构、设计令牌、组件和 Agent 协作规范都保存在仓库中，每次优化既改变站点，也成为我实践 AI 协作产品开发的一部分。Claude Cream 则负责把颜色、对比度和封面语言钉住，避免站每改一版就漂成另一张脸。

## 项目价值

它为分散在不同仓库和笔记中的工作提供了一个统一出口，也迫使我把「做过什么」进一步整理为「为什么做、如何判断、产生了什么价值」。这种整理本身就是个人品牌最重要的基础设施。

## 当前状态

网站已上线运行，Quiet Studio 视觉与 Claude Cream Website 色板对齐，内容和展示方式持续更新。当前保持纯静态、无后台、无评论系统，把精力集中在作品、写作和清晰表达上。

[访问 kakarrot.com](https://kakarrot.com) · [查看 GitHub 仓库](https://github.com/kakarrot-dev/kakarrot0109.github.io)
