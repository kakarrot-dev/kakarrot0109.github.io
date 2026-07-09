---
title: "Obsidian Wiki — AI 协作本地知识库"
description: "面向 Obsidian 和 AI Agent 协作的本地知识库：原文可追溯，加工有结构，标签可检索，附件可归档，规则可执行"
publishedAt: 2026-06-20
topics:
  - "知识管理"
  - "Obsidian"
  - "工作流"
featured: true
draft: false
---

一个面向 Obsidian 和 AI Agent 协作的本地知识库。

## 为什么做

传统的文件夹+标签知识管理，AI Agent 看不懂。我要一个既能自己用、又能让 Agent 自动写入和检索的知识库。

## 核心理念

**原文可追溯，加工有结构，标签可检索，附件可归档，规则可执行。**

知识库分为两层：

- **`raw/`** — 采集原文永久保存层，只增不改，保留来源 URL，AI 永不编辑此目录下的文件
- **`wiki/`** — LLM 编译层加工笔记，拍平到根目录；MOC 索引页单独放在 `wiki/索引/`

Agent 自动执行 Ingest 流程：读取 raw 文件 → 理解语义 → 创建或复用 wiki 笔记 → 更新索引。

## 规范化设计

每个笔记强制包含完整的 Properties（title、source、author、published、created、description、tags、formatter），不允许省略字段。标签体系使用简体中文为主，与内容笔记分离的 MOC 索引提供上层的知识导航。

Markdown 风格全程半角符号，标题不跳级，不复制大段原文，表格用于比较而非堆文字。所有规范都让 Agent 能准确理解上下文、识别笔记类型、正确放置和检索内容。

## Agent 协作

Agent 操作规则写在 `AGENTS.md` 里，非琐碎任务走 spec → plan → 开发的标准流程。Ingest 时 Agent 必须完整阅读 raw 文件再决定 wiki 下的归类；Query 时优先读编译层索引，每次检索附带 wiki 更新建议确保知识回流。被纠正的经验写入 `tasks/lessons.md`，防止重复犯错。

## 当前状态

知识库在持续增长，Agent 协作流程已经跑通，Obsidian 插件生态兼容良好。
