---
title: "AI Employee OS：跑在 macOS 上的本地 AI 员工系统"
description: "从员工档案和多轮对话开始，把任务、工具、审批、审计与成果交付收进一套可验证的本地运行系统"
publishedAt: 2026-08-06
topics:
  - "AI Agent"
  - "macOS"
  - "Swift"
  - "Rust"
cover: "/images/vibe-coding/ai-employee-os/cover.webp"
featured: true
draft: false
---

<p align="center">
  <a href="https://github.com/kakarrot-dev/AI-Employee-OS">
    <img src="/images/vibe-coding/ai-employee-os/logo.png" width="128" alt="AI Employee OS 产品图标">
  </a>
</p>

AI Employee OS 是我正在构建的一套 Local-first macOS AI 员工运行系统。第一版 Demo 没有从技能市场、Multi-Agent 或 Computer Use 开始，而是先验证一条更基础的路径：创建一个有明确身份的 AI 员工，与它持续对话，再把需要执行的工作交给受治理的 Runtime。

## 为什么先做“能聊天”

如果一个 AI 员工连身份、上下文和对话都不能稳定保存，后面接再多 Skill 和 Tool，也只是一次性的功能演示。因此第一版先把员工 Profile、多轮会话和本地持久化做成可以反复使用的产品能力。

新安装会提供 AI 产品经理 Alex，也可以创建、编辑或彻底删除员工。每个员工的 Identity、Soul 和 Persona 会由 Rust Runtime 编译成 Effective Prompt，而不是散落在界面状态里。

## 从对话到受治理的工作

同一个输入可能只是闲聊，也可能要求读取文件、生成内容或搜索资料。Runtime 会识别意图，再决定留在对话里，还是进入工作执行路径。

真正产生副作用的 Tool 不由模型直接调用。Python Worker 负责意图、上下文、规划和模型请求；Rust Runtime 管理 Task、Action、权限、审批、幂等、事件和审计；SwiftUI 客户端只负责交互、状态展示和 Keychain 访问。Secret 不进入 SQLite、日志或 Agent Context。

当前主线已经提供本地文件读写与受控网络搜索 Package。真实网络搜索仍依赖本机环境，不属于默认 CI 的完整端到端门禁，这个边界会在产品里如实保留。

## 原生 macOS 工作空间

客户端使用 SwiftUI 构建，包含办公室、通讯录、工作库、技能库、工具库和设置。办公室只负责状态总览、团队状态、用量和结果回看；创建员工放在通讯录，发起工作放在具体员工和工作语境里。

视觉系统沿用 Claude Cream。暖色画布、琥珀强调色和少量青色状态点保持统一，但界面仍优先使用 macOS 原生 Sidebar、Toolbar、列表和窗口行为，不把桌面工具做成网页 Dashboard。

## 技术边界

- SwiftUI macOS Client：界面、本地 Store、Keychain
- Rust Runtime：状态机、权限、审批、Tool Gateway、SQLite、Event
- Python Agent Worker：Intent、Chat、Context、Planning、LLM Provider
- JSON Schema：约束跨语言请求、响应和状态契约

项目现在是面向开发与评估的本地 MVP，还没有公证发行、自动更新和 DMG，也暂不包含 Multi-Agent、Cloud Sync、Marketplace 与企业 RBAC。仓库目前没有 License，因此代码可以公开查看，但还不能被描述为已经完成许可授权的开源软件。

## 当前状态

第一版 Demo 已经跑通原生客户端、多轮对话、员工 Profile、受治理工作执行、审批、审计和本地 App Bundle。下一阶段的重点不是继续堆能力，而是用同一组任务比较“没有 Skill/Tool”和“接入 Skill/Tool”后的真实差异。

[查看 GitHub 仓库](https://github.com/kakarrot-dev/AI-Employee-OS)

[阅读开发复盘：我把 AI Employee OS 第一版砍到只剩一条主线](/writing/我把-ai-employee-os-第一版砍到只剩一条主线/)
