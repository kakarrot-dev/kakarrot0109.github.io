---
title: "AI PM Workbench：把产品讨论变成可评审的交互原型"
description: "把 Codex 中的需求讨论、产品图稿、可交互原型、区域标注和 Markdown PRD 放进同一套本地评审工作台"
publishedAt: 2026-08-08
topics:
  - "AI 产品经理"
  - "Vibe Coding"
  - "React"
  - "产品设计"
cover: "/images/vibe-coding/ai-pm-workbench/cover.webp"
featured: true
draft: false
---

<p align="center">
  <a href="https://github.com/kakarrot-dev/ai-pm-workbench">
    <img src="/images/vibe-coding/ai-pm-workbench/logo.png" width="112" alt="AI PM Workbench Logo">
  </a>
</p>

AI PM Workbench 是一套本地优先的 AI 产品经理工作台。它把 Codex 中的产品讨论转成可交互原型、区域标注、产品图稿和研发可用的 Markdown PRD，让需求、页面与评审证据留在同一个工作环境里。

## 为什么做

产品需求经常散落在对话、原型工具、流程图和文档中。评审者能看到页面，却不清楚控件背后的交互规则；开发人员读完 PRD，也未必能确认文档描述的是不是当前原型。

AI PM Workbench 把这些产物串成一条连续路径：从用户、场景、目标和边界开始，按需生成产品图稿，再进入可操作的原型。页面区域可以挂接交互摘要并定位到对应 PRD，原型、标注和文档因此可以放在一起核对。

## 核心体验

- 从产品菜单进入彼此隔离的产品 Demo
- 操作核心前端流程，并看到次要控件的反馈或禁用原因
- 点击区域角标查看可拖动的交互摘要，并定位产品 PRD
- 在右侧边栏切换需求文档和产品架构图
- 在产品页面、文档和图稿之间切换时保留当前会话状态
- 刷新或重新进入产品后恢复唯一一套默认 Mock 状态

工作台运行在本机，可以通过局域网完成评审，不依赖账号系统、真实后端或云端部署。

## 八阶段产品工作流

新产品从输入识别开始，依次确认目标、问题、范围、用户任务和产品责任。需要产品图稿时，工作流会先判断哪些图适用，再逐张确认；核心路径与 Mock 准备完成后才搭建原型，最后生成产品 PRD，并检查原型、标注、图稿和文档是否一致。

已有产品的新需求进入迭代阶段。Codex 会先读取现有 PRD、图稿、原型和项目记忆，再判断当前能力应该直接复用、扩展复用，还是独立实现。

## 产品边界

工作台只负责产品评审层，不把所有产品写进同一套业务组件。不同产品可以共享 Claude Cream Token、基础组件、通用动效和评审能力，但业务页面、状态和交互保持独立。

当前版本不提供在线评论与审批、账号权限、云端分享、在线编辑器、低代码拖拽和真实生产后端。产品 PRD 也不包含数据库、API、框架与部署方案，这些内容仍属于研发设计阶段。

## 技术基线

项目使用 React 19、TypeScript、Vite 7 和 React Router，界面能力由 Radix Primitives、Motion、Recharts 与 Zustand 支撑。视觉系统采用 Claude Cream，并提供 UI 契约检查、构建检查和 Playwright 浏览器测试。

## 当前状态

工作台 v0.1 基线和 Skill v0.2 已经完成机制验证，产品菜单、区域标注、产品文档与架构图评审层可以运行。Claude Cream 目前是验证样例，下一步需要通过首个正式产品检验完整业务需求、原型和 PRD 的质量。

[查看 GitHub 仓库](https://github.com/kakarrot-dev/ai-pm-workbench)

[阅读开发复盘：我为什么做了一个 AI 产品经理工作台](/writing/我为什么做了一个-ai-产品经理工作台/)
