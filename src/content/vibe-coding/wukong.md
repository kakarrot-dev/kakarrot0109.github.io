---
title: "悟空（Wukong）— 少即是多的本机个人智能体"
description: "一个主人、一台 Mac、一个 Telegram 入口、一个 Agent Loop 和一个 SQLite 事实源，只保留经真实使用验证的个人 Agent 能力"
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

我也不希望长期记忆、本地文件和运行凭据离开自己的机器。更重要的是，Agent 不能只「看起来完成了」：它必须记录任务执行到哪一步，工具是否真的成功，结果是否已经送达。

## 关键产品决策

- **用五个「一」限定系统** — 一个主人、一台 Mac、一个 Telegram 入口、一个 Agent Loop、一个 SQLite 事实源
- **删除未被当前场景证明的复杂度** — 不再包含 Dashboard、MongoDB、Chroma、Knowledge、Workflow、Worker、OpenTelemetry 和服务器部署路径
- **保留可靠执行契约** — Run、Step、Attempt、Event、Artifact 和 Delivery 持久化状态；进程中断后可以恢复，`result_unknown` 不会被盲目重试
- **记忆必须回到主人原文** — 只有带可定位原消息证据的 active Claim 才能进入 Current Profile，网页和工具结果不能污染个人记忆
- **场景策略外置到 Skill** — 内核只维护通用闭环；Research Skill 通过受控 Tool 完成公开网页、GitHub、X 和 URL 读取

## 核心能力

Wukong 通过 Telegram 接收文本和受支持的 UTF-8 附件，使用 `agent-reach` 完成有界的只读研究，并把长结果以分片消息或经校验的 Markdown Artifact 交付。Poe 作为主 Provider，DeepSeek 只在 Run 固定前备用。

技术上使用 Python、Telegram Bot、SQLite、Poe、DeepSeek、`agent-reach` 和 macOS `launchd`。运行、Session、Memory、Scheduler、Artifact 和 Delivery 的元数据统一落在 SQLite，日常不需要 Web 服务器、向量数据库或容器栈。

## 项目价值

这个项目让我不断验证一个判断：个人 Agent 的价值不取决于功能数量，而取决于它能否长期闭合真实任务。少一个事实源，就少一类漂移；少一条执行路径，就少一套恢复语义。少即是多，意味着每一个留下的模块都必须对最终交付负责。

## 当前状态

2026 年 8 月，Wukong vNext 已完成生产主链切换。它当前是 macOS 上的单主人本机服务，专注 Telegram 对话、只读研究、可回查记忆、可验证交付与中断恢复，不计划扩展为公网多租户平台。

[查看 GitHub 仓库](https://github.com/kakarrot-dev/Wukong)
