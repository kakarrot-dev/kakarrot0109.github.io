---
title: "AI Employee OS：数字员工的本地桌面工作台"
description: "基于 OpenMausBot 的桌面工作台，可以从员工广场打开对话，另有事项处理原型"
summary: "在桌面上浏览数字员工和打开对话。"
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

AI Employee OS 是一个本地数字员工工作台。桌面端把员工和对话放在同一处，事项原型则在验证怎样单独记录工作进度与交付。

## 从员工对话到连续工作

第一版 Demo 验证的是怎样把员工身份、多轮对话和本地执行接起来。现在继续做两件事，让每个员工有自己的对话，让需要持续办理的工作能够单独记录进度。

## 桌面工作空间

工作台用类似通讯录的方式呈现本地员工。可以在员工广场搜索员工、看岗位简介，再打开对话。

事项原型在隔离环境中用模拟 Agent 跑通了从草稿、执行到复核、完成的流程。事项列表和详情已实现，桌面菜单入口仍待接入。

## 技术基线

当前开发版以 OpenMausBot 社区代码为基础，桌面端使用 Electron、React 和 TypeScript。项目主要在员工入口和事项流程上继续迭代。 [OpenMausBot 上游仓库](https://github.com/milind-soni/OpenMausBot)

## 当前状态

当前可以在仓库查看开发代码，桌面安装包仍待正式发布。首版 Demo 的设计取舍记录在开发复盘里。

[查看 GitHub 仓库](https://github.com/kakarrot-dev/AI-Employee-OS)

[阅读首版复盘《我把 AI Employee OS 第一版砍到只剩一条主线》](/writing/我把-ai-employee-os-第一版砍到只剩一条主线/)
