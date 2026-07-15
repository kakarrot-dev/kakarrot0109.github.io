# 开发计划：Codex 与 Claude Code Skill 使用指南文章

## 对应 spec

路径：`tasks/specs/2026-07-15-codex-claude-code-skills-blog-spec.md`

## 已确认需求

- 文章标题为 `No. 20: 把 Codex 和 Claude Code 武装起来——我日常使用的 26 个 Skill`。
- 收录推荐清单全部 26 个去重项目。
- 面向第一次接触 Skill 的 Codex 与 Claude Code 用户。
- 每项详细写用途、地址、两平台安装、基础用法和冲突判断。
- 按工作场景分类，保持现有文章的个人叙事和编号结构。
- 先修复阻断部署的 7 个既有类型错误，再写文章。
- spec 和 plan 改放 `tasks/`，避免被 Astro 构建清空。

## 当前代码理解

- 文章位于 `src/content/writing/`，由 `src/content/config.ts` 的 `writing` schema 校验。
- `npm run check` 与 `npm run lint` 都执行 `astro check`。
- `npm run build` 输出到 `docs/`，GitHub Actions 在构建前强制运行类型检查。
- 当前工作分支为 `codex/blog-codex-claude-skills`。
- `.codegraph/` 是用户既有未跟踪目录，本任务不读取、不修改、不暂存。

## 涉及文件

新建：

- `src/content/writing/Codex与Claude-Code-Skill-使用指南.md`
- `/tmp/codex-claude-skills-research.md`，只用于研究，不提交。

已修改或继续更新：

- `src/layouts/ProseLayout.astro`
- `src/pages/index.astro`
- `src/pages/projects/index.astro`
- `src/pages/vibe-coding/index.astro`
- `AGENTS.md`
- `README.md`
- `tasks/todo.md`
- `tasks/lessons.md`
- `tasks/specs/2026-07-15-codex-claude-code-skills-blog-spec.md`
- `tasks/plans/2026-07-15-codex-claude-code-skills-blog-plan.md`
- `docs/` 构建产物

## 实现步骤

### 1. 修复部署基线

- [x] 运行 `npm run check`，确认 7 个既有类型错误。
- [x] 删除 Astro 原生标签上的 5 个 React `key` 属性。
- [x] 将代码块节点收窄为 `HTMLPreElement`，使用 `pre.before()` 替代可空 `parentNode`。
- [x] 重新运行 `npm run check`：0 error，保留 1 个既有弃用提示。
- [x] 运行 `npm run build`：成功生成 90 个页面。

### 2. 修复规划目录边界

- [x] 将规范路径改为 `tasks/specs/`、`tasks/plans/`。
- [x] 更新 `AGENTS.md` 与 `README.md`。
- [x] 在 `tasks/lessons.md` 记录根因和新规则。
- [x] 恢复已确认的 spec 与 plan。

### 3. 建立 26 项官方研究矩阵

- [x] 从以下官方仓库读取 README、安装文档、Plugin manifest、`SKILL.md` 与安装脚本；脚本只读不执行：

```text
obra/superpowers
JuliusBrussee/caveman
Panniantong/Agent-Reach
mvanhorn/last30days-skill
Egonex-AI/Understand-Anything
hugohe3/ppt-master
JCodesMore/ai-website-cloner-template
jarrodwatts/claude-hud
OthmanAdi/planning-with-files
op7418/guizang-ppt-skill
kepano/obsidian-skills
officecli/officecli
jackwener/OpenCLI
AgriciDaniel/claude-obsidian
nexu-io/open-design
nexu-io/html-anything
nextlevelbuilder/ui-ux-pro-max-skill
anthropics/skills
op7418/guizang-social-card-skill
affaan-m/ECC
phuryn/pm-skills
colbymchenry/codegraph
tt-a1i/archify
deanpeters/Product-Manager-Skills
```

- [x] 单独读取 `anthropics/skills/skills/frontend-design/SKILL.md` 与 `skills/skill-creator/SKILL.md`。
- [x] SkillsLLM 的 Understand Anything 条目映射到当前官方仓库 `Egonex-AI/Understand-Anything`。
- [x] 使用 `apply_patch` 新建 `/tmp/codex-claude-skills-research.md`。
- [x] 每项记录：类型、官方地址、Codex 支持与安装、Claude Code 支持与安装、基础用法和冲突判断。
- [x] 核对临时研究矩阵包含 26 项。

```bash
rg -c '^## [0-9]+\.' /tmp/codex-claude-skills-research.md
rg -c '^- Codex 支持：' /tmp/codex-claude-skills-research.md
rg -c '^- Claude Code 支持：' /tmp/codex-claude-skills-research.md
rg -c '^- 冲突判断：' /tmp/codex-claude-skills-research.md
```

### 4. 创建文章骨架

- [x] 新建 `src/content/writing/Codex与Claude-Code-Skill-使用指南.md`。
- [x] frontmatter 固定为：

```yaml
---
title: "No. 20: 把 Codex 和 Claude Code 武装起来——我日常使用的 26 个 Skill"
description: "我把日常使用的 26 个 Agent Skill、Plugin 和 CLI 分成八类，逐一说明用途、地址、Codex 与 Claude Code 安装方式，以及同类工具能否共存。"
publishedAt: 2026-07-15
tags:
  - "AI Agent"
  - "Codex"
  - "Claude Code"
  - "Agent Skills"
  - "效率工具"
featured: false
draft: false
---
```

- [x] 写第一人称开场。
- [x] 写 `1️⃣ Skill 不是装得越多越好`，解释 Skill、Plugin、CLI、模板、合集。
- [x] 写 26 项快速选择表，覆盖类型、用途、平台和共存结论。

### 5. 写 26 个项目正文

每项使用连续编号 `### 1.` 到 `### 26.`，并包含统一七项信息。

- [x] `2️⃣ 让开发过程更稳定`：开发流程、输出控制与代码理解。
- [x] `3️⃣ 给 Agent 接上互联网`：联网搜索、近期研究和登录态网页操作。
- [x] `4️⃣ 把想法变成页面、图片和演示`：UI、网页、演示与视觉内容。
- [x] `5️⃣ 管理文档、知识和产品工作`：Obsidian、PM 方法、Anthropic Skills 与 Skill Creator。
- [x] 运行项目编号检查，输出 `26`。

### 6. 写安装总则与冲突矩阵

- [x] 写 `6️⃣ Codex 与 Claude Code 怎么安装`：标准 `SKILL.md`、Plugin、CLI、模板和 MCP。
- [x] 远程脚本命令前加入先查看脚本内容的提醒。
- [x] 写 `7️⃣ 同类 Skill 安装多个会不会冲突`。
- [x] 冲突矩阵覆盖已确认的八组同类项目。
  - Superpowers / Planning with Files / ECC；
  - Agent Reach / Last 30 Days / OpenCLI；
  - Understand Anything / CodeGraph；
  - UI UX Pro Max / Frontend Design / Open Design / HTML Anything；
  - PPT Master / 归藏 PPT；
  - Obsidian Skills / Claude Obsidian；
  - PM Skills / Product Manager Skills；
  - Claude HUD 与 Codex。
- [x] 写个人组合与触发边界。
- [x] 结尾固定为：`**真正有价值的不是装了多少 Skill，而是每一种能力都有清楚的边界。**`

### 7. 事实与链接审计

- [x] 对照临时研究矩阵，逐项检查统一信息。
- [x] 无官方依据的跨平台能力标记为实验兼容或不支持。
- [x] 提取外链并逐条检查；两次 `curl` TLS 失败的 GitHub 地址已通过 GitHub API 确认仓库存在且未归档：

```bash
rg -o 'https://[^) >]+' src/content/writing/Codex与Claude-Code-Skill-使用指南.md | sort -u
curl -L --fail --silent --show-error --output /dev/null '<URL>'
```

- [x] 检查远程脚本和破坏性命令，并加入安全提醒。

```bash
rg -n 'curl.*\|.*bash|wget.*\|.*bash|iwr.*iex|--force|reset --hard|clean -fd' src/content/writing/Codex与Claude-Code-Skill-使用指南.md
```

- [x] 检查主标题从 `1️⃣` 连续到 `7️⃣`，26 个项目编号连续无跳号。

### 8. 项目验证

- [x] `npm run check`：退出码 `0`。
- [x] `npm run lint`：退出码 `0`。
- [x] `npm run build`：退出码 `0`，生成 `No. 20` 文章页面。
- [x] 在构建产物中确认文章标题、路由和标签页。
- [x] 更新 `tasks/todo.md` Review，记录文章完整性、验证结果和文档检查。

### 9. Git 交付

- [x] 运行 `git status --short`、`git diff --check`，确认无无关修改。
- [x] 只暂存文章、4 个基线修复文件、AGENTS、README、tasks 与相关 `docs/` 构建产物。
- [x] 确认 `.codegraph/` 未暂存，且没有密钥、缓存或无关大文件。
- [x] 提交：`git commit -m "docs: 新增 Codex 与 Claude Code Skill 使用指南"`，主提交 `d1e925c`。
- [x] 推送：`git push -u origin codex/blog-codex-claude-skills`。
- [x] 停止，不创建 PR。

## 验证方式

```bash
npm run check
npm run lint
npm run build
git diff --check
```

## 回滚方式

- 文章可通过删除单个 Markdown 源文件并重新构建回滚。
- 7 个类型修复均为局部修改，可按文件逐项反向修改。
- 规划目录迁移可通过恢复 `AGENTS.md` 与 README 路径回滚，但不建议重新把持久文档放入构建输出目录。

## 文档同步

- `README.md`：更新规划目录位置。
- `tasks/lessons.md`：记录类型检查交付门禁和构建输出目录冲突。
- `docs/`：只由 `npm run build` 更新，不手改。
