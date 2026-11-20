---
title: "Obsidian Wiki — 让个人知识同时对人和 Agent 可用"
description: "用 Web Clipper 采集原文，在 Obsidian 中阅读和连接，在明确授权后由 Agent 整理、校验并更新本地 Wiki"
summary: "让笔记和原始资料能被人和 Agent 一起检索。"
publishedAt: 2026-06-20
topics:
  - "知识管理"
  - "Obsidian"
  - "AI Agent"
cover: "/images/vibe-coding/obsidian-wiki/cover.webp"
featured: true
draft: false
---

Obsidian Wiki 是我为自己构建的本地知识系统。我用 Obsidian 阅读和连接笔记，让 Agent 帮我沿来源查证，在需要时把可复用的结论写回 Wiki。内容存为本地 Markdown，变更由 Git 记录。

## 为什么做

知识管理真正困难的地方，不只是文件越来越多。当网页原文、我的加工结论、项目资料和 Agent 的临时状态混在一起时，任何一次搜索都可能得到无法追溯的答案；Agent 也不知道哪些文件可以修改、哪些内容必须保持原样。

所以我没有继续增加更复杂的标签和文件夹，而是先解决知识的生命周期：资料从哪里来，经过什么加工，如何进入索引，使用后又怎样回流。

## 关键产品决策

- **在 `raw/` 保留原文**，后续分类时保留剪藏正文、来源和作者信息。
- **在 `wiki/` 综合知识**，按七个主题维护内容页，用双链表达跨主题的关系。知识索引和办公、兴趣、自媒体入口集中在 `wiki/索引/`。
- **给原创记录和交付资料各留一个位置**。`notes/` 保存观察、练习和研究记录，`project/` 保存有明确交付目标的资料。
- **把写入边界写进规则**。Codex 和 Claude Code 共用规则，按任务读取整理、查询和维护所需的约定。

## 从采集到知识回流

Web Clipper 先把网页保存到 `raw/` 根目录。我明确要求整理时，Agent 才分类归档原文，判断哪些资料值得综合进 Wiki，并更新相关索引。平时查询从 Wiki 开始，证据不足时再回到 raw 查证。

日常问答保持只读，写回由我发起。做专题研究时，我会把报告、截图和数据留在 `notes/`，复核来源、附件链接和关键数值后，再把能独立复用的结论写进 Wiki。

## 可维护性设计

Wiki 内容页用 Properties 记录日期、描述、标签和来源。仓库里的校验脚本检查这些字段、双链、来源和索引入口，也能列出待复核的页面。

## 当前状态

这套流程已用于日常剪藏、查询和专题研究。每次整理通过校验后，Agent 会在本地 Git 中提交变更，方便审查和回滚。

[GitHub 私有仓库](https://github.com/kakarrot-dev/Obsidian-Wiki)
