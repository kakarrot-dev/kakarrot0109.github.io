---
title: "悟空 — 本机个人智能体服务"
description: "Telegram + Dashboard 双入口，长期记忆、技能系统、子代理、定时任务，全部跑在本机"
publishedAt: 2026-07-06
topics:
  - "AI Agent"
  - "Python"
  - "AI 原生产品"
featured: true
draft: false
---

本地运行的个人 AI 智能体。Telegram 主对话入口，浏览器 Dashboard 管理台，全本机服务，不做 SaaS。

目标不是做另一个 AI 助手，是做一个能一直活在我机器里、跟我一起工作的服务。

### 核心能力

- **Telegram Bot** — 主对话入口，常驻在聊天列表里
- **Dashboard** — `http://127.0.0.1:8800` 本地管理台
- **长期记忆** — MongoDB + Chroma 本地向量库，记忆持久化
- **技能系统** — 内置技能 + 自学习技能，可动态加载
- **子代理** — 子任务可委派给专用子代理执行
- **定时任务** — 心跳、自检、主动复盘、weekly report
- **运维工具** — 备份、恢复、迁移、日志跟踪

### 技术栈

Python 3.12+ / FastAPI / python-telegram-bot / MongoDB / Chroma + fastembed / uv 包管理。Dashboard 纯静态 HTML/CSS/JS，不需要前端构建工具。

后端核心层分 interfaces（Telegram / Dashboard / CLI）、core（Agent runtime / memory / learning）、infrastructure（config / security / integrations / scheduler），第一天就把九层架构搭齐了。

### 部署

本机运行为主，支持 Docker Compose，macOS launchd 自动重启。`start.sh` 一键启动，`.env.example` 配好 Key 就能跑。

[→ GitHub 仓库](https://github.com/kakarrot-dev/Wukong)
