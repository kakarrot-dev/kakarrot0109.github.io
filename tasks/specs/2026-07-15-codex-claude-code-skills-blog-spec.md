# 功能规格：Codex 与 Claude Code Skill 使用指南文章

## 背景

日常使用 Codex 和 Claude Code 时，Skill、Plugin、CLI、模板项目与 Skill 合集经常被统一称为“Skill”。它们的安装入口、触发方式和平台兼容性并不相同。同类项目安装多个后，还可能出现功能重叠、规则冲突或技术冲突。

本次基于 `/Users/kakarrot/Desktop/skill推荐.md` 中的清单，写一篇符合网站既有结构和个人叙事调性的长篇使用指南。

## 目标

- 在 `src/content/writing/` 新建编号为 `No. 20` 的文章。
- 去重后完整介绍清单中的 26 个项目。
- 按工作场景分类，说明每个项目的类型、用途、官方地址、Codex 安装方式、Claude Code 安装方式、基础用法和冲突判断。
- 面向已安装 Codex 或 Claude Code、但第一次接触 Skill 的普通用户，安装命令应能直接复制。
- 给出同类项目的共存建议，帮助读者建立边界清楚的 Skill 组合。

## 非目标

- 不把所有项目强行描述为标准 Agent Skill。
- 不为官方未支持的平台编造安装命令。
- 不实测安装或修改本机现有 Codex、Claude Code 与 Skill 配置。
- 不评价项目作者或给出绝对排名。
- 不延伸介绍推荐清单之外的替代项目。
- 文章实现不修改网站组件、样式与 Content Collections schema；任务开始前发现的 7 个既有类型错误作为独立前置修复处理。

## 用户场景

读者已经能够使用 Codex 或 Claude Code，希望扩展开发、研究、设计、演示、知识管理或产品工作的能力，但不知道：

- 每个项目具体解决什么问题；
- 项目属于 Skill、Plugin、CLI、模板还是合集；
- 如何在 Codex 和 Claude Code 中安装和触发；
- 同类项目安装多个是否会冲突；
- 哪些能力适合常驻，哪些能力应该按任务选择。

## 需求边界

### 收录范围

清单中的 Obsidian Skills 重复出现一次，去重后收录以下 26 个项目：

1. Superpowers
2. Caveman
3. Agent Reach
4. Last 30 Days
5. Understand Anything
6. PPT Master
7. AI Website Cloner Template
8. Claude HUD
9. Planning with Files
10. 归藏 PPT Skill
11. Obsidian Skills
12. OfficeCLI
13. OpenCLI
14. Claude Obsidian
15. Open Design
16. HTML Anything
17. UI UX Pro Max Skill
18. Anthropic Skills
19. 归藏 Social Card Skill
20. ECC
21. PM Skills
22. CodeGraph
23. Archify
24. Product Manager Skills
25. Frontend Design
26. Skill Creator

### 分类方式

- Skill 生态与自定义；
- 开发流程与 Agent 增强；
- 代码理解；
- 联网搜索与网页操作；
- UI、网页与视觉设计；
- 演示与内容生产；
- 文档与知识管理；
- 产品经理方法。

### 单项内容

每个项目统一包含：

1. 类型；
2. 主要用途；
3. 官方地址；
4. Codex 安装方式；
5. Claude Code 安装方式；
6. 最小基础用法；
7. 与同类项目的共存和冲突判断。

安装和使用信息以 `2026-07-15` 可核验的官方仓库、官方文档和项目发布页为准。

### 平台支持标记

- **原生支持**：官方明确提供该平台的安装或集成方式。
- **标准兼容**：项目符合 `SKILL.md` 结构，可按平台支持的 Skill 目录安装。
- **不直接支持**：依赖特定平台的 Plugin、Hook、状态栏或运行时，不提供未经官方验证的跨平台方案。

### 冲突标记

- **无冲突**：可以同时安装，不争夺相同入口。
- **功能重叠**：可以共存，但在同一任务中同时使用会增加上下文或 Token 消耗。
- **规则冲突**：多套工作流会同时要求规划、测试、审批或任务状态管理，需要指定主工作流。
- **技术冲突**：存在同名命令、Hook、状态栏、目录、端口或依赖覆盖，不建议同时启用。

## 文章结构

标题：

```text
No. 20: 把 Codex 和 Claude Code 武装起来——我日常使用的 26 个 Skill
```

正文结构：

1. 个人使用经历开场：从重复解释工作方法，到把方法固化为 Skill。
2. `1️⃣ Skill 不是装得越多越好`：解释 Skill、Plugin、CLI、模板和合集的区别。
3. `2️⃣ 让开发过程更稳定`：开发流程、Agent 增强和代码理解类项目。
4. `3️⃣ 给 Agent 接上互联网`：联网搜索、近期研究和登录态网页操作类项目。
5. `4️⃣ 把想法变成页面、图片和演示`：UI、网页、演示与视觉内容类项目。
6. `5️⃣ 管理文档、知识和产品工作`：办公文档、Obsidian 与产品经理方法类项目。
7. `6️⃣ Codex 与 Claude Code 怎么安装`：按项目形态解释安装、更新、卸载和识别方法。
8. `7️⃣ 同类 Skill 安装多个会不会冲突`：提供冲突矩阵和个人推荐组合。
9. 结尾强调能力边界，而不是安装数量。

## 写作调性

- 使用第一人称和真实工作场景，不写成纯目录或官方手册。
- 延续既有文章的口语化短段落、`1️⃣2️⃣3️⃣` 编号主体、适度加粗与表格。
- 开场先写个人困惑或变化，再进入工具分类。
- 重点概念与最终判断使用粗体，不堆叠 emoji。
- 结尾保留一句可独立阅读的加粗金句。

## 数据与状态

- frontmatter 使用 `writing` 集合现有字段：`title`、`description`、`publishedAt`、`tags`、`featured`、`draft`。
- 文章状态为正式发布，`draft: false`、`featured: false`。
- 官方地址使用推荐清单给出的链接；SkillsLLM 条目同时核验其指向的官方 GitHub 仓库。
- 文章注明信息核验日期，避免把会变化的安装方式描述为永久规则。

## 权限与安全

- 不读取或展示本机 API Key、Token、Cookie、私钥、`.env` 或个人配置内容。
- 安装命令涉及远程脚本时，提醒读者先查看脚本来源，不把 `curl | bash` 描述为无风险操作。
- 不在本次任务中实际安装、卸载或覆盖任何 Skill。

## 异常情况

- 官方仓库已删除、改名或归档：保留清单地址并明确当前状态，不引用第三方镜像替代。
- 官方文档只说明一个平台：另一个平台标记为“不直接支持”。
- 安装方式存在多个版本：优先使用官方当前推荐方式，并注明其他方式的适用条件。
- 项目同时包含 Skill 与 CLI：分别说明两层用途，避免混为一种安装方式。
- 项目名称相似但定位不同：通过使用场景和冲突矩阵说明边界，不按名称判断冲突。

## 验收标准

- 文章位于 `src/content/writing/`，标题序号为 `No. 20`。
- 26 个去重项目全部出现，官方地址无遗漏。
- 每个项目均包含类型、用途、两平台安装说明、基础用法和冲突判断。
- 所有安装命令均有官方来源支撑；不支持的平台明确标记。
- 正文包含快速选择表、平台支持标记和冲突矩阵。
- frontmatter 通过 Content Collections schema 校验。
- `npm run check`、`npm run lint`、`npm run build` 均通过。
- README.md、tasks/lessons.md 与任务 Review 已检查。
- Git 仅包含本次文章、基线修复、规范迁移、spec、plan、tasks 与相关构建产物，不包含 `.codegraph/`。
