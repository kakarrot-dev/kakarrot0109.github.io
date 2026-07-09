---
title: "Claude Code Skills — AI 编码技能集合"
description: "17 个主技能、32 个子技能，覆盖 AI 内容创作、知识库管理、产品开发、技术调研与文档生成"
publishedAt: 2026-06-15
topics:
  - "Claude Code"
  - "AI Agent"
  - "工作流"
featured: true
draft: false
---

一套覆盖 AI 内容创作、知识库管理、产品开发、技术调研和文档生成等场景的 Claude Code Skills 集合。

## 为什么做

Claude Code 的灵活性来自它可以被赋予做任何事情的指令。把这些指令打包成可复用的技能，就是最高效的工作方式 —— 遇到同类需求直接 `/` 调用。

## 能力范围

- **AI 内容创作** — 从提示词生成到小红书全流程，视觉基因提取与复用
- **知识库管理** — Obsidian 文档结构化、格式化、翻译和归档
- **产品开发** — PM 工作流编排、AI 教育产品经理流水线、日报生成、Demo 文档自动化
- **调研与元工具** — 论文搜索与落地评估、Skill 自身的创建与评测

## 架构

Skill 以 `SKILL.md` 定义，通过符号链接挂载到 `~/.claude/skills`。17 个主技能搭配 32 个子技能，按 `parent:sub` 命名空间组织。子技能不可单独调用，由父技能编排。

- **pm** — 4 模式（new/iterate/review/develop），支持截图取证 + 双清单评审
- **apm** — AI 教育垂直版，8 阶段链式交付（业务定义 → 原型 → PRD）
- **xiaohongshu-replicator** — 选题 → 文案 → 生成 → 审核 → 封面
- **style-dna-builder** — 扫描 → 聚类 → 提取视觉基因
- **obsidian-knowledge-writer** — 视频/文章/网页 → 结构化笔记

## 当前状态

持续迭代中。新技能按 `docs/plans/YYYY-MM-DD-主题-design.md` 设计，实现后跑的 `make validate` 校验，再符号链接生效。
