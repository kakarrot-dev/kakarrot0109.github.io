---
title: "AI Employee OS：在桌面上管理数字员工和事项"
description: "一个基于 OpenMausBot 的本地桌面工作台，把数字员工对话、员工广场和事项记录放在一起"
summary: "在桌面上找数字员工、继续对话和查看事项。"
publishedAt: 2026-08-06
topics:
  - "AI Agent"
  - "macOS"
  - "Electron"
  - "TypeScript"
cover: "/images/vibe-coding/ai-employee-os/cover.webp"
featured: true
draft: false
---

<p align="center">
  <a href="https://github.com/kakarrot-dev/AI-Employee-OS">
    <img src="/images/vibe-coding/ai-employee-os/logo.webp" width="128" height="128" alt="AI Employee OS 产品图标" decoding="async">
  </a>
</p>

AI Employee OS 是一个本地数字员工工作台。桌面端把员工和对话放在同一处，也可以单独打开事项页，回看正在办理的工作。

## 从员工对话到连续工作

第一版 Demo 验证的是怎样把员工身份、多轮对话和本地执行接起来。现在这条路继续往前走。员工有自己的对话，持续办理的工作也能留在事项页，减少每次都从聊天记录里找进度的成本。

## 桌面工作空间

工作台用类似通讯录的方式呈现本地员工。员工广场提供浏览入口，点开员工后可以进入对话。事项有自己的列表和详情，进度可以脱离聊天窗口单独查看。

## 技术基线

当前开发版以 OpenMausBot 社区代码为基础，桌面端使用 Electron、React 和 TypeScript。项目主要在员工入口和事项流程上继续迭代。 [OpenMausBot 上游仓库](https://github.com/milind-soni/OpenMausBot)

## 当前状态

当前可以在仓库查看开发代码，桌面安装包仍待正式发布。首版 Demo 的设计取舍记录在开发复盘里。

[查看 GitHub 仓库](https://github.com/kakarrot-dev/AI-Employee-OS)

[阅读首版复盘《我把 AI Employee OS 第一版砍到只剩一条主线》](/writing/我把-ai-employee-os-第一版砍到只剩一条主线/)
