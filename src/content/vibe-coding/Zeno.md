---
title: "Zeno — 本地优先的桌面 AI 工作台"
description: "Tauri 2 + React + Rust 构建的桌面 Agent runtime，整合会话、记忆、技能系统、搜索证据、本地文件理解和产物输出"
publishedAt: 2026-07-06
topics:
  - "AI Agent"
  - "Tauri"
  - "桌面应用"
cover: "/images/vibe-coding/Zeno/cover.webp"
featured: true
draft: true
---

Zeno 是一个本地优先的桌面 AI 工作台。

它不是又一个 AI 聊天窗口。Zeno 的核心假设是：**真正有用的 Agent 需要跑在本地，离用户的数据和文件够近**。

## 为什么做

云端的 AI 对话产品割裂了两个核心需求：对话上下文和本地数据。每次打开新对话，之前积累的理解就丢了。Zeno 把会话、记忆、技能和文件放在同一个本地 Runtime 里，让 Agent 能持续理解用户。

## 能力和架构

Zeno 用 Tauri 2 搭骨架，前端 React + TypeScript，后端 Rust + SQLite。桌面原生能力让 Agent 能访问本地文件、通知、Keychain 存储 —— 浏览器做不到的那些事。

- **长期记忆** — 情景记忆 + insight + lesson，持续积累用户画像
- **技能系统** — 本地技能安装、启停、推荐，可拼装成工作流
- **搜索证据** — Tavily Search/Extract + URL 读取 + 证据归纳
- **文件理解** — 本地文件引用、文本解析、图片理解、受限 Office 读写
- **产物输出** — 草稿 → 校验 → 最终产物，带版本追踪
- **模型管理** — 多模型 profile、路由、能力探测、Keychain 密钥存储

## 当前状态

个人桌面应用，不追求 SaaS 化。核心能力底座基本成型，正在打磨 Agent Runtime 的稳定性和体验细节。
