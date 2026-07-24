---
title: "Claude Cream：为创作工具建立统一的暖色体验"
description: "用共享设计 Token 覆盖 Typora、Obsidian、Ghostty，并把 Website 色板与插画生成规范收进同一套暖色视觉语言"
publishedAt: 2026-07-06
topics:
  - "Design System"
  - "CSS"
  - "Theme"
cover: "/images/vibe-coding/claude-cream/cover.webp"
featured: true
draft: false
---

<p align="center">
  <a href="https://github.com/kakarrot-dev/claude-cream">
    <img src="https://raw.githubusercontent.com/kakarrot-dev/claude-cream/main/img/brand/logo.png" width="112" alt="Claude Cream Logo">
  </a>
</p>

![Claude Cream 项目横幅](https://raw.githubusercontent.com/kakarrot-dev/claude-cream/main/img/brand/banner.png)

Claude Cream 是一套暖色编辑主题资产库。它覆盖 Typora、Obsidian、Ghostty、Website 色彩主题，以及可复用的插画生成规范。灵感来自 Claude.com 的视觉语言：有层次的暖色表面、克制的琥珀金，以及让代码读起来更像印刷物、而不是工业面板的排版质感。

## 为什么做

我的阅读、写作和终端工作会在多个工具之间切换。市面上暗色主题很多，但好用的亮色主题仍然偏少；不同软件之间的颜色、字体和代码高亮也常常互相割裂。

单独给一个软件换皮，解决不了切换成本。我需要的是一套能跨平台迁移的视觉原则：打开笔记、终端或站点时，画布、强调色和排版节奏仍然属于同一个工作环境。

## 关键设计决策

- **暖色优先**：亮色用暖象牙画布 `#f5f3e9`，暗色用暖炭灰 `#2d2e2d`，避开冷白和纯黑
- **琥珀金承担语义**：强调色 `#b7791f` 统一表达链接、选中、焦点和交互状态
- **中文阅读优先**：正文用 PingFang SC，代码用 JetBrains Mono，兼顾中英混排和代码阅读
- **一套语言，五类资产**：Typora、Obsidian、Ghostty、Website、Illustration 共用同一套审美约束
- **本地离线可用**：不依赖付费字体或云端服务，配置跟着本机工作环境走

## 用 Token 管住一致性，也分清真源边界

`tokens/tokens.json` 是 Typora、Obsidian 与 Ghostty 的单一真源，统一描述 Light / Dark 语义色、排版、间距、圆角和语法高亮。各平台再把这些 Token 映射到自己的主题格式。

Website 与 Illustration 则有意拆开管理：

- `themes/website` 保存博客色板快照，只管颜色变量，不管站点布局与组件
- `themes/illustration` 把 Website 的视觉语言转成封面和编辑插画的生成规则

这样「统一」不再靠人脑记住色值，真源边界也清楚：编辑器与终端共享一套 tokens；站点色板与插画规范各自可追溯。

## 项目价值

Claude Cream 减少了不同创作工具之间的视觉切换成本，也把个人审美从一次性配置沉淀成可维护的设计系统。对我来说，它同时验证了一个产品判断：即使是个人工具，只有找到稳定的设计约束，体验才能持续演进而不散掉。

## 当前状态

项目已提供 Typora、Obsidian、Ghostty、Website、Illustration 五类主题资产，支持 Light + Dark，并以 MIT License 开源。

[查看 GitHub 仓库](https://github.com/kakarrot-dev/claude-cream)
