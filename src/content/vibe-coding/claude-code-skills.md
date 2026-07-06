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

个人 Claude Code Skills 开发与管理仓库。收录一组覆盖日常工作的可复用技能，通过符号链接挂载到 `~/.claude/skills`，在 Claude Code 中通过 `/skill-name` 直接调用。

### 技能分类

**AI 内容创作**
- `image-prompt-generator` — Gemini / Flux / Midjourney 摄影级提示词生成，支持多参考图分析
- `video-prompt-generator` — Kling / Seedance / Veo / Sora 电影级视频提示词
- `image-generator` — 统一的图片生成接口，适配 Poe / Gemini / DALL-E
- `style-dna-builder` — 批量分析参考图、聚类去重，提取可复用的视觉基因
- `xiaohongshu-replicator` — 小红书笔记全流程：选题 → 文案 → 生图 → 审核 → 封面

**知识库管理**
- `obsidian-knowledge-writer` — 从视频、文章、网页生成结构化 Obsidian 文档
- `obsidian-markdown-formatter` — AI 分析、格式化和智能归档
- `obsidian-article-translator` — 英文 Markdown 翻译为中文，保留 Obsidian 元素
- `douyin-content-analyzer` — 抖音视频 Whisper 转录，自动接入知识写入
- `audio-transcriber` — 通用音频 Whisper 转写

**产品开发**
- `pm` — 产品工作流协调器，4 模式（new / iterate / review / develop）
- `apm` — AI 教育产品经理工作流，8 阶段链式（业务定义→需求→设计→评审→原型→PRD）
- `daily-report` — 基于 Git 提交生成日报
- `demo-doc-generator` — 自动截图 Demo 并生成产品文档与用户指南

**调研与元工具**
- `ai-paper-scout` — 分析项目技术栈，搜索 arXiv / HuggingFace / Semantic Scholar
- `skill-creator` — 元技能：创建、修改、优化、评测其他 skill

### 仓库结构

```
skills/
  _shared/          # 共享工具与参考资料
  <skill-name>/     # 每个 skill 一个目录
    SKILL.md        # YAML frontmatter + 提示词
    memory/         # 状态与缓存（可选）
    references/     # 参考文档（可选）
```

`make link` 把所有 skill 符号链接到 `~/.claude/skills`，`make validate` 校验格式，每个 skill 提交前跑 CI 检查。

[→ GitHub 仓库](https://github.com/kakarrot-dev/Claude-Code-Skills)
