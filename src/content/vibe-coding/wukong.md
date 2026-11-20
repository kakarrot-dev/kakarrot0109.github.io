---
title: "悟空（Wukong）— 少即是多的本机个人智能体"
description: "常驻 macOS 的单主人 Telegram 助手，可以查公开资料、读文档、设置提醒，并保留有原文依据的长期记忆"
summary: "用 Telegram 查资料、读文档、设提醒。"
publishedAt: 2026-07-06
topics:
  - "AI Agent"
  - "Python"
  - "AI 原生产品"
cover: "/images/vibe-coding/wukong/cover.webp"
featured: true
draft: false
---

Wukong 是我为自己构建的本机个人智能体。它不是面向公众的多租户 SaaS，也不是功能无限扩张的 Agent 平台，而是一个住在 Telegram 里、只服务唯一主人的本机系统。

## 为什么做

我需要的不是另一个必须坐在电脑前打开的 AI 对话框，而是一个可以随时触达的个人服务：从 Telegram 发出需求，让它查资料、核对信息、形成判断，再把回复或文件可靠送回来。

我也希望长期记忆、原始资料和运行凭据都由自己的机器管理。更重要的是，Agent 需要留下可回查的任务记录，让我知道工具是否真的成功，结果是否已经送达。

## 关键产品决策

- 我把范围定在**一个主人、一台 Mac、一个 Telegram 入口**，任务交给 nanobot 的原生 Agent Loop 执行。
- **原生会话和检查点**记录执行状态，SQLite 保存收件、记忆、提醒和交付凭据。结果的送达状态若无法确认，由我决定是否补发。
- **长期记忆以主人原文为依据**。个人事实必须能定位到原消息，在任务完成且结果确认送达后才会生效。
- **研究能力交给 Research Skill**，按需查公开网页和 Exa，授权后也能只读查询 GitHub。

## 核心能力

我可以在 Telegram 里对话、设置单次或周期提醒，也可以让悟空读取 20 MB 以内的 PDF、DOCX、XLSX、PPTX 和 UTF-8 文本文件。Poe 处理照片和相册，Telegram 语音先在 Mac 上转写。长文可以随回复交付完整的 Markdown 文件。

技术上使用 Python、nanobot、Telegram Bot、SQLite 和 macOS `launchd`。Poe 是主要模型服务，DeepSeek 只在首个有效输出前接替文本请求。

## 项目价值

这个项目让我不断验证一个判断：个人 Agent 的价值不取决于功能数量，而取决于它能否长期闭合真实任务。少一个事实源，就少一类漂移；少一条执行路径，就少一套恢复语义。少即是多，意味着每一个留下的模块都必须对最终交付负责。

## 当前状态

2026 年 10 月，常驻服务切换到 nanobot，启动、重启和状态查询也统一使用新版服务。

11 月我另做了一个名为「卒过河」的后台原型，包含独立登录页和会话、任务、长期记忆等 12 个后台视图。它用内置模拟记录展示操作流程，数据保存在浏览器，与 Telegram 常驻服务独立运行。

[阅读 8 月重构复盘](/writing/我把悟空推倒重来-少即是多/) · [查看 GitHub 仓库（私有）](https://github.com/kakarrot-dev/Wukong)
