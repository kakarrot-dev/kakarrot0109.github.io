---
title: "悟空（Wukong）— 本机个人智能体服务"
description: "Telegram + Dashboard 双入口的本地 Agent 服务：长期记忆、技能系统、子代理、定时任务，全部跑在本机"
publishedAt: 2026-07-06
topics:
  - "AI Agent"
  - "Python"
  - "AI 原生产品"
featured: true
draft: false
---

Wukong 是本机个人智能体服务。它通过 Telegram 和内置 Dashboard 提供对话、工具调用、长期记忆、技能系统、子代理、定时任务等能力。

## 为什么做

我需要一个 7×24 小时在线的个人 Agent，但不想把数据和记忆交给任何云服务。Wukong 跑在我自己的机器上，用本机数据库和向量库管理长期记忆。

## 核心能力

- **Telegram Bot** — 主对话入口，随时通过手机发送指令
- **Dashboard** — 本机管理台，默认 `http://127.0.0.1:8800`
- **长期记忆** — MongoDB + Chroma 向量库，对话历史可回溯可检索
- **技能系统** — 内置技能 + 自学习技能，可动态加载
- **子代理** — 任务可拆解分配给子 Agent，协同完成复杂任务
- **定时任务** — 支持计划任务和周期任务
- **运维脚本** — 备份、恢复、健康检查脚本齐全

## 技术栈

Python 3.12+，FastAPI + Uvicorn 做 Web 层，python-telegram-bot 处理 Telegram 集成，MongoDB 存数据，Chroma + fastembed 做向量记忆。包管理用 `uv`，部署支持 Docker 和 macOS launchd。

## 当前状态

个人本机服务，稳定运行中。每天通过 Telegram 和它交互，积累记忆。
