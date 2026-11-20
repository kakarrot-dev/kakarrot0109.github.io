---
title: "AI PM Workbench：把原型、需求文档和架构图放在一起"
description: "在本地打开已注册的交互原型，在页面上看区域标注，再从侧栏查看相关需求和架构图"
summary: "在一个工作台里看交互原型、需求文档和架构图。"
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
    <img src="/images/vibe-coding/ai-pm-workbench/logo.webp" width="112" height="112" alt="AI PM Workbench Logo" decoding="async">
  </a>
</p>

AI PM Workbench 把已经做好的原型、标注、需求文档和架构图放进同一个本地界面。评审时可以一边操作页面，一边核对文档里的规则。

## 为什么做

产品需求经常散落在对话、原型工具、流程图和文档中。评审者能看到页面，却不清楚控件背后的交互规则；开发人员读完 PRD，也未必能确认文档描述的是不是当前原型。

工作台里的区域标注会指向对应的需求章节。遇到有疑问的控件，先点角标看交互说明，再打开整份文档确认边界。需要了解上下游时，可以在同一个侧栏切到架构图。

## 核心体验

- 从产品菜单进入彼此隔离的产品 Demo
- 操作核心前端流程，并看到次要控件的反馈或禁用原因
- 点击区域角标查看可拖动的交互摘要，并定位产品 PRD
- 在右侧边栏切换需求文档和产品架构图
- 在产品页面、文档和架构图之间切换时保留原型状态
- 刷新时按原型约定恢复默认 Mock 数据或上一次保存的状态

工作台运行在本机，可以通过局域网完成评审，不依赖账号系统、真实后端或云端部署。

## 当前有哪些原型

菜单上有数字员工前台、数字员工管理后台，以及用于查看共享组件和交互模式的 Claude Cream 设计系统。前后台各有自己的业务页面、需求文档和架构图。

## 产品边界

工作台只负责产品评审层，不把所有产品写进同一套业务组件。不同产品可以共享 Claude Cream Token、基础组件、通用动效和评审能力，但业务页面、状态和交互保持独立。

产品用 Mock 数据演示流程和异常状态。工作台的范围是本地展示和查看，需求编写、原型制作与发布由各项目自己处理。

## 技术基线

项目使用 React 19、TypeScript、Vite 7 和 React Router，界面能力由 Radix Primitives、Motion、Recharts 与 Zustand 支撑。视觉系统采用 Claude Cream，并提供 UI 契约检查、构建检查和 Playwright 浏览器测试。

## 当前状态

当前可以从菜单进入各原型，在 1280×720 和 1024×720 两类桌面窗口里操作流程、查看文档和展开架构图。

[GitHub 私有仓库](https://github.com/kakarrot-dev/ai-pm-workbench)

[阅读首版复盘《我为什么做了一个 AI 产品经理工作台》](/writing/我为什么做了一个-ai-产品经理工作台/)
