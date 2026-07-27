---
title: "Claude Cream：为创作工具建立统一的暖色体验"
description: "用共享设计 Token 连接 Codex、Cursor、VS Code、Zed、Typora、Obsidian 与 Ghostty，再把 Website 和图像生成收进同一套暖色视觉语言"
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

Claude Cream 是一套跨工具暖色主题资产库。它覆盖 Codex、Cursor / VS Code、Zed、Typora、Obsidian、Ghostty、Website 与 Image Generation 八类资产。灵感来自 Claude.com 的视觉语言：有层次的暖色表面、克制的琥珀金，以及让代码读起来更像印刷物、而不是工业面板的排版质感。

## 为什么做

我的阅读、写作、编程和终端工作会在多个工具之间切换。市面上暗色主题很多，但好用的亮色主题仍然偏少；不同软件之间的颜色、字体、代码高亮和交互状态也常常互相割裂。

单独给一个软件换皮，解决不了切换成本。我需要的是一套能跨平台迁移的视觉原则：打开 Codex、编辑器、笔记、终端或个人站时，画布、强调色和排版节奏仍然属于同一个工作环境。

## 关键设计决策

- **暖色优先**：亮色用暖象牙画布 `#f5f3e9`，暗色用暖炭灰 `#2d2e2d`，避开冷白和纯黑
- **琥珀金承担语义**：强调色 `#b7791f` 统一表达链接、选中、焦点和交互状态
- **中文阅读优先**：正文用 PingFang SC，代码用 JetBrains Mono，兼顾中英混排和代码阅读
- **一套语言，八类资产**：Codex、Cursor / VS Code、Zed、Typora、Obsidian、Ghostty、Website 与 Image Generation 共用同一套审美约束
- **本地离线可用**：不依赖付费字体或云端服务，配置跟着本机工作环境走

## 用 Token 管住一致性，也分清真源边界

`tokens/tokens.json` 是 Codex、Cursor / VS Code、Zed、Typora、Obsidian 与 Ghostty 的单一真源。Light / Dark 各有 28 个语义色变量，并补充五种编辑器模式下的界面状态与语法高亮。各平台再把这些 Token 映射到自己的主题格式。

Website 与 Image Generation 则有意拆开管理：

- `themes/website` 保存博客色板快照，只管颜色变量，不管站点布局与组件
- `themes/image-generation` 把 Website 的视觉语言转成编辑插画、个人头像与壁纸的生成规则

这样「统一」不再靠人脑记住色值，真源边界也清楚：编辑器与终端共享一套 Token，站点色板与图像生成规范各自记录来源。不同载体保持同一种气质，但不被强行塞进同一种配置格式。

## 跨平台主题也需要工程验证

平台增加之后，单个文件能加载已经不够。一次 Token 修改可能只同步到部分主题，浅色和深色字段也可能悄悄漂移。

项目现在提供无依赖的跨平台校验：

```bash
python3 scripts/validate.py
git diff --check
```

它会检查 Token 结构、五种编辑器模式、Codex 导入格式、Ghostty 的 16 色调色板、Typora 文件名，以及主题文件与 Token 的关键映射。文字对比度也进入验证范围，浅色强调文字和不同模式下的注释都要达到至少 4.5:1。

静态校验不能替代真实客户端里的视觉检查，但可以先守住结构、映射和可访问性的底线。

## 安装不应该破坏用户原有配置

主题文档也重新检查了安装边界。Ghostty 只复制主题文件，再由用户把一行主题配置合并进现有文件，不再覆盖完整配置；Obsidian 使用可替换的 Vault 路径；Typora 提醒先保存文档，再手动重启。

这些细节不会改变主题截图，却决定了别人能否安全地照着文档完成安装。个人配置一旦公开复用，安装说明本身就是产品体验的一部分。

## 项目价值

Claude Cream 减少了不同创作工具之间的视觉切换成本，也把个人审美从一次性配置沉淀成可维护、可验证的设计系统。对我来说，它同时验证了一个产品判断：个人工具也需要稳定的设计约束、清楚的真源边界和不会伤害用户原有配置的安装方式。

## 当前状态

项目已提供 Codex、Cursor / VS Code、Zed、Typora、Obsidian、Ghostty、Website 与 Image Generation 八类主题资产。Codex 与 Zed 提供 Light / Dark，Cursor / VS Code 进一步覆盖 Dark Dimmed、Light High Contrast 与 Dark High Contrast，项目以 MIT License 开源。

[查看 GitHub 仓库](https://github.com/kakarrot-dev/claude-cream)

[阅读更新复盘：Claude Cream 从一套配色长成八类主题资产](/writing/claude-cream-从一套配色长成八类主题资产/)
