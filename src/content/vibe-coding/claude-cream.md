---
title: "Claude Cream — 为创作工具建立统一的暖色体验"
description: "用共享设计 Token 统一 Typora、Obsidian、Ghostty 与 AI CLI，在不同工具之间保持舒适、克制且可维护的阅读与创作体验"
publishedAt: 2026-07-06
topics:
  - "Design System"
  - "CSS"
  - "Theme"
featured: true
draft: false
---

<p align="center">
  <a href="https://github.com/kakarrot-dev/claude-cream">
    <img src="https://raw.githubusercontent.com/kakarrot-dev/claude-cream/main/img/brand/logo.svg" width="112" alt="Claude Cream Logo">
  </a>
</p>

![Claude Cream 项目横幅](https://raw.githubusercontent.com/kakarrot-dev/claude-cream/main/img/brand/banner.svg)

Claude Cream 是我为 Typora、Obsidian、Ghostty 和 AI CLI 构建的统一暖色编辑体验。它不是把同一种颜色复制到几个软件里，而是尝试建立一套跨工具仍然一致、长时间使用也足够舒适的设计语言。

## 为什么做

我的阅读、写作和 AI 协作会在多个工具之间不断切换。市面上有大量暗色主题，但不少亮色主题仍然使用刺眼的冷白；不同工具的颜色、字体和代码高亮也常常互相割裂。

单独调整一个软件只能解决局部问题。我更需要的是一套能够跨平台迁移的视觉原则：打开笔记、终端或编辑器时，表面层级、强调色和排版节奏仍然属于同一个工作环境。

## 关键设计决策

- **暖色优先** — 亮色模式使用暖象牙色画布，暗色模式使用暖炭灰，避开冷白和纯黑带来的生硬对比
- **强调色承担语义** — 琥珀金不只是装饰，而是统一表达链接、选中、焦点和交互状态
- **中文阅读优先** — 正文使用 PingFang SC 系统字体，代码使用 JetBrains Mono，在中英文混排和代码阅读之间取得平衡
- **本地离线可用** — 不依赖付费字体或云端服务，主题与配置都能跟随本地工作环境
- **只暴露高频选项** — 自定义集中在页宽、字号和主色等真实高频需求，避免把主题变成难以维护的配置面板

## 用 Token 管理跨平台一致性

`tokens/tokens.json` 是整个项目的单一真源，统一描述 Light / Dark 语义色、排版、间距、圆角和语法高亮。Typora、Obsidian 和 Ghostty 分别把这些 Token 映射到自己的主题格式，AI CLI 则复用同一套项目级工作规范。

这种设计让“统一”不再依赖人工记住颜色值。修改设计决策时，我可以从 Token 出发检查各平台，而不是在多个孤立主题文件中反复猜测。

## 项目价值

Claude Cream 减少了不同创作工具之间的视觉切换成本，也把个人审美从一次性配置沉淀为可维护、可复用的设计系统。对我来说，它同时验证了一个产品思路：即使是个人工具，只有找到稳定的设计约束，体验才能持续演进而不失去一致性。

## 当前状态

项目已覆盖 Typora、Obsidian、Ghostty 以及 Claude Code、Codex CLI、Cursor 等 AI CLI 配置，支持 Light + Dark 双模式，并以 MIT License 开源。

[查看 GitHub 仓库](https://github.com/kakarrot-dev/claude-cream)
