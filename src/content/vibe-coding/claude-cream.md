---
title: "Claude Cream — 暖色调编辑工作台"
description: "覆盖 Typora、Obsidian、Ghostty 与 AI CLI 的跨平台统一设计系统"
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

[Claude Cream](https://github.com/kakarrot-dev/claude-cream) 是一个暖色调编辑工作台，覆盖 Typora、Obsidian、Ghostty 与 AI CLI。它借鉴 Claude.com 的视觉语言，用有层次的暖色表面、克制的琥珀金和偏印刷感的排版，统一不同工具中的阅读与创作体验。

## 为什么做

市面上的暗色主题很多，但舒适、耐看的亮色主题仍然不多。Claude Cream 刻意避开冷白和纯黑：亮色模式以暖象牙色（#f5f3e9）为画布，暗色模式采用暖炭灰（#2d2e2d），再以琥珀金（#b7791f）表达强调与交互状态。

## 设计理念

- **暖色优先** — 亮色模式使用暖象牙画布，暗色模式使用暖炭灰，避免生硬的冷白与纯黑
- **琥珀金强调** — `#b7791f` 克制、温暖，同时清晰表达链接、选中和焦点等交互状态
- **中文优先** — 正文使用 PingFang SC 系统字体，代码使用 JetBrains Mono
- **单一真源** — 以 `tokens/tokens.json` 统一管理颜色、排版、间距、圆角和语法高亮

## 截图展示

![Typora 亮色主题](https://raw.githubusercontent.com/kakarrot-dev/claude-cream/main/img/showcase/typora-1.png)
![Typora 暗色主题](https://raw.githubusercontent.com/kakarrot-dev/claude-cream/main/img/showcase/typora-2.png)
![Obsidian 亮色主题](https://raw.githubusercontent.com/kakarrot-dev/claude-cream/main/img/showcase/obsidian-1.png)
![Obsidian 暗色主题](https://raw.githubusercontent.com/kakarrot-dev/claude-cream/main/img/showcase/obsidian-2.png)

## 覆盖平台

- **Typora** — Light + Dark 双主题
- **Obsidian** — 亮色/暗色 + Style Settings 插件支持
- **Ghostty** — 终端主题，跟随系统外观自动切换
- **AI CLI** — Claude Code、Codex CLI 与 Cursor 的项目级配置

所有平台共享同一套设计令牌，确保跨平台体验一致。

## 当前状态

项目采用 MIT 开源许可。四个平台共享同一套暖色设计语言，并以设计 Token 保持 Light + Dark 双模式的一致性。

---

Made with ☕ + 琥珀金 by [KAKARROT](https://github.com/kakarrot-dev)
