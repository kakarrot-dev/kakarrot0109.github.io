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

过去一段时间，我几乎每天都在 Codex 和 Claude Code 之间切换。

写代码时，我希望 Agent 先理解问题、写计划、跑验证；做产品时，我又希望它能查资料、整理 Obsidian、写 PRD、画架构图、做演示。默认能力当然能完成不少工作，但真正决定使用体验的，往往是装在外面的那一层：**Skill、Plugin、CLI、MCP 和项目模板。**

问题也从这里开始。GitHub 上的项目都说自己“开箱即用”，但有的只支持 Claude Code，有的通过 Agent Skills 标准兼容 Codex，有的根本不是 Skill，只是一个需要单独运行的应用。装得越多，重复命令、Hooks 冲突、规则打架也越常见。

我把自己日常使用和长期关注的清单重新核验了一遍，去掉一条重复项，最后留下 26 个项目。下面不做 Star 数排行榜，只回答四个实际问题：**它解决什么、去哪里找、Codex 和 Claude Code 怎么装、同类工具一起装会不会冲突。**

> 本文信息核验于 2026 年 7 月 15 日。项目安装方式会变化，执行前仍应以官方 README 为准。文中的远程脚本命令都建议先打开脚本检查，再决定是否执行。

## 1. Skill 不是装得越多越好

我现在把 Agent 的扩展能力分成五种。分清类型，比记住命令更重要。

| 类型 | 本质 | 常见安装位置 | 主要风险 |
| --- | --- | --- | --- |
| Skill | 给模型看的专业流程和知识 | `~/.codex/skills`、`~/.claude/skills` | 触发重复、规则冲突 |
| Plugin | Skill、命令、Hooks、MCP 的安装包 | 平台插件目录 | 重复安装、全局行为改变 |
| CLI | Agent 可以调用的本地程序 | npm、Homebrew、独立二进制 | 运行时和权限问题 |
| MCP | 给 Agent 暴露外部工具的协议服务 | 平台配置文件 | 服务名、端口和凭证冲突 |
| Template / App | 一个完整项目或独立工作台 | 单独仓库、桌面应用 | 不应当作全局 Skill 安装 |

所以，“同类安装多个是否冲突”不能只回答能或不能。我采用四个判断：

按实际任务，我把清单分成八类：开发工作流、输出控制、代码理解、联网研究、Office 文档、页面与视觉、知识管理、产品与 Skill 创作。为了保持这套博客原有的阅读节奏，后文再合并到四个场景章节中介绍。

- **无冲突**：能力边界不同，可以同时存在。
- **功能重叠**：都能做相似的事，但不会互相破坏，按任务选择即可。
- **规则冲突**：都在规定 Agent 应该如何计划、写作或停止，模型可能收到相反指令。
- **技术冲突**：会重复注册 Skill、Hooks、MCP、命令或 statusline，直接出现两次执行或配置覆盖。

先用一张表看完 26 项，再决定是否继续往下读：

| 项目 | 类型 | 主要用途 | 平台 | 共存结论 |
| --- | --- | --- | --- | --- |
| Superpowers | Plugin / Skills | 稳定开发闭环 | 双端原生 | 主工作流三选一 |
| Caveman | 风格 Skill | 压缩 Agent 表达 | 双端 | 避免覆盖强制汇报格式 |
| Planning with Files | Skill + Hooks | 长任务跨会话 | 双端原生 | 不重复安装 Hooks |
| ECC | Agent 框架 | 全套工程能力 | 双端原生 | 安装路径只选一种 |
| Claude HUD | statusline Plugin | 显示上下文与状态 | 仅 Claude Code | 状态栏只保留一个 |
| Understand Anything | 代码理解系统 | 生成代码知识图谱 | 双端原生 | 与 CodeGraph 先选一个 |
| CodeGraph | CLI + MCP | 本地代码关系检索 | 双端原生 | 与前者功能重叠 |
| Agent Reach | CLI + Skill | 多平台联网路由 | 双端兼容 | 可组合 OpenCLI |
| Last 30 Days | 研究 Skill | 最近 30 天趋势 | 双端 | 不走双安装通道 |
| OpenCLI | CLI + Skills | 操作登录态网页 | 双端兼容 | 可作为 Agent Reach 后端 |
| PPT Master | PPTX Skill | 可编辑 PowerPoint | 双端 | 与 HTML 演示可共存 |
| 归藏 PPT Skill | HTML Skill | 单文件网页演示 | 双端兼容 | 提示词写明输出格式 |
| OfficeCLI | CLI + Skill | PPTX、DOCX、XLSX | 双端原生 | 与文档 Skill 功能重叠 |
| AI Website Cloner | Template | 项目内复刻网站 | 双端兼容 | 不做全局安装 |
| Open Design | App + MCP | 可视化设计工作台 | 双端 MCP | 与 HTML Anything 选主工具 |
| HTML Anything | 本地 App | 多 Agent HTML 工作台 | 双端兼容 | 不复制到全局 Skills |
| UI UX Pro Max | Skill + CLI | 检索 UI/UX 规范 | 双端原生 | 与 Frontend Design 分工 |
| Frontend Design | 官方 Skill | 提升前端视觉完成度 | 双端 | 指定主设计规则 |
| 归藏 Social Card | 图片 Skill | 社交媒体卡片 | 双端兼容 | 与 PPT Skill 可共存 |
| Archify | 图表 Skill | 架构与流程图 | 双端兼容 | 边界窄，通常无冲突 |
| Obsidian Skills | Skill 集 | 正确读写 Obsidian | 双端原生 | 可作为知识流底层能力 |
| Claude Obsidian | Vault 工作流 | 自动维护第二大脑 | Claude 原生、Codex 实验 | 先在测试 Vault 使用 |
| PM Skills | Plugin 市场 | 串联 PM 工作流 | 双端原生 | 与另一 PM 库选主库 |
| Product Manager Skills | Skill 库 | 深入执行 PM 框架 | 双端官方路径 | 按需补充，不全量叠加 |
| Anthropic Skills | 官方集合 | 文档与示例能力 | 双端 | 用 `--skill` 按需安装 |
| Skill Creator | 官方 Skill | 创建和评估 Skill | 双端 | 同一项目只用一个生成流程 |

## 2. 让开发过程更稳定

### 1. Superpowers：把“先想清楚再动手”变成默认流程

**类型：** 工作流 Plugin / Skill 集合
**平台：** Codex 原生插件；Claude Code 原生插件
**地址：** [obra/superpowers](https://github.com/obra/superpowers)

Superpowers 不是某一种编程能力，而是一整套开发纪律：需求澄清、方案设计、计划、测试驱动、系统调试、验证和分支收尾。它最有价值的地方，是把“写完代码再想怎么验证”改成“先定义完成标准，再开始实现”。

Claude Code 可以直接安装官方插件：

```text
/plugin install superpowers@claude-plugins-official
```

如果官方市场里没有，也可以添加项目市场后安装：

```text
/plugin marketplace add obra/superpowers-marketplace
/plugin install superpowers@superpowers-marketplace
```

Codex App 在 Plugins 侧栏的 Coding 分类中安装；Codex CLI 可以输入 `/plugins`，搜索 Superpowers 后安装。使用时通常不需要背命令，直接描述“先梳理需求，再实现并验证”，它会根据任务触发对应 Skill。

**冲突判断：规则冲突。** Superpowers、ECC 和 Planning with Files 都能接管计划与执行流程。它们可以同时装，但不要同时把三套规则设成强制主流程。我通常让 Superpowers 负责软件开发闭环，其他框架只按需调用。

### 2. Caveman：让 Agent 少说套话，保留结论

**类型：** 输出风格 Plugin / Skill
**平台：** Codex 标准兼容；Claude Code 原生插件
**地址：** [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)

Caveman 做的事情很单纯：压缩表达。它不会降低模型的推理能力，只是减少铺垫、重复解释和“当然可以”一类套话。对长期终端协作很实用，因为真正占注意力的不是 Token 数，而是我每次必须从一大段话里找结论。

Claude Code 安装：

```bash
claude plugin marketplace add JuliusBrussee/caveman
claude plugin install caveman@caveman
```

Codex 安装：

```bash
npx skills add JuliusBrussee/caveman -a codex
```

Claude Code 插件通过 Hooks 自动生效；Codex 中可以在需要时调用 `/caveman`，或者直接要求“使用 Caveman 风格回答”。

**冲突判断：规则冲突。** 它会改变输出风格。如果项目要求详细教学、审计记录或固定汇报模板，过度压缩会丢失必要解释。我的做法是只让它控制日常对话，不让它覆盖项目强制格式。

### 3. Planning with Files：把上下文写回文件

**类型：** 文件化规划 Skill + Hooks
**平台：** Codex 专用集成；Claude Code 原生插件
**地址：** [OthmanAdi/planning-with-files](https://github.com/OthmanAdi/planning-with-files)

长任务最怕两件事：上下文压缩后忘记决定，换一次会话后重新研究。Planning with Files 用三个文件解决：`task_plan.md` 记录阶段，`findings.md` 记录发现，`progress.md` 记录执行和验证。模型的短期上下文会消失，文件不会。

Claude Code 建议走插件安装，具体插件名以官方 README 当前版本为准：

```text
/plugin marketplace add OthmanAdi/planning-with-files
/plugin install planning-with-files@planning-with-files
```

Codex 官方建议把仓库中的 `.codex/` 集成复制到项目，团队可以一起版本化：

```bash
git clone https://github.com/OthmanAdi/planning-with-files.git /tmp/planning-with-files
cp -r /tmp/planning-with-files/.codex .
```

然后在 `~/.codex/config.toml` 的 `[features]` 下启用：

```toml
hooks = true
```

Codex 如果已有全局 `hooks.json`，不要直接覆盖，要手动合并。开始复杂任务时调用 `/plan` 或直接要求初始化文件化计划；一次性 `codex exec` 不想被现有计划影响，可以设置 `PLANNING_DISABLED=1`。

**冲突判断：规则冲突 + 技术冲突。** 它与其他计划框架会争夺同一任务流程；同时在项目级和全局各装一份 Hooks，还会收到双份提醒。只保留一个 Hooks 入口。

### 4. ECC：给 Agent 装一整套工程操作系统

**类型：** Agent 工程框架 / Plugin / Rules / Hooks / MCP 集合
**平台：** Codex 一等支持；Claude Code 原生插件
**地址：** [affaan-m/ECC](https://github.com/affaan-m/ECC)

ECC 原名 Everything Claude Code，现在已经不是几个 Skill 的集合，而是一套很完整的 Agent Harness。它覆盖编码规范、TDD、安全审查、文档查询、前后端模式、研究、内容生产和 MCP 配置。适合想一次建立完整工程环境的人，不适合只想加一个小能力的人。

Claude Code 推荐插件路径：

```text
/plugin marketplace add https://github.com/affaan-m/ECC
/plugin install ecc@ecc
```

插件不会自动分发 `rules`。如果确实需要规则，只复制 `rules/common` 和当前技术栈对应的目录。**不要在装完插件后再运行 full 安装器**，否则 Skill 和 Hooks 会重复。

Codex 当前更稳定的方式是克隆仓库后运行同步脚本，并先预览：

```bash
git clone https://github.com/affaan-m/ECC.git
cd ECC
npm install
bash scripts/sync-ecc-to-codex.sh --dry-run
bash scripts/sync-ecc-to-codex.sh
```

ECC 也提供实验性的 Codex Marketplace，但官方明确提示上游插件缓存仍可能丢失共享内容，因此现阶段手动同步更稳。

**冲突判断：规则冲突 + 技术冲突。** ECC 与 Superpowers、Planning with Files 在计划、测试、验证上大量重叠。更严重的是，同一个平台同时使用插件安装和 full 手动安装，会产生重复 Skill、重复 Hooks 和重复运行时。安装 ECC 时，“只选一条路径”比命令本身更重要。

### 5. Claude HUD：把上下文和工具状态放进状态栏

**类型：** Claude Code statusline Plugin
**平台：** Codex 不支持；Claude Code 原生插件
**地址：** [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud)

Claude HUD 显示当前模型、上下文占用、工具调用和任务状态。它不让模型变强，但能让我知道一次会话还剩多少空间，以及 Agent 是否真的在执行，而不是卡在某一步。

安装命令：

```text
/plugin marketplace add jarrodwatts/claude-hud
/plugin install claude-hud
/reload-plugins
/claude-hud:setup
```

设置完成后重启 Claude Code。Codex 没有对应安装入口，不建议把 Claude 的 statusline 配置硬搬过去。

**冲突判断：技术冲突。** 它可能与其他 statusline 插件或自己写的状态栏配置互相覆盖。状态栏只保留一个主实现。

### 6. Understand Anything：先画出代码知识图谱，再开始改

**类型：** 代码理解 Skill + 本地知识图谱
**平台：** Codex 专用安装；Claude Code 原生插件
**地址：** [Egonex-AI/Understand-Anything](https://github.com/Egonex-AI/Understand-Anything)

清单里的 SkillsLLM 页面已经不是最可靠入口，当前官方仓库是 Egonex-AI。它会分析代码库并生成 `.ua/knowledge-graph.json`，再提供 Dashboard、问答、Diff 分析等能力。面对陌生项目时，它比“把整个仓库塞进上下文”更节省重复阅读。

Claude Code 安装：

```text
/plugin marketplace add Egonex-AI/Understand-Anything
/plugin install understand-anything
```

Codex 官方提供安装脚本。先在浏览器打开脚本检查内容，再执行：

```bash
curl -fsSL https://raw.githubusercontent.com/Egonex-AI/Understand-Anything/main/install.sh | bash -s codex
```

Claude Code 使用 `/understand`，Codex 使用 `$understand`；后续可进入 Dashboard 或继续询问模块关系。首次索引大型仓库会消耗较多时间和 Token，不要把生成目录当业务源码提交。

**冲突判断：功能重叠。** 它与 CodeGraph 都在做代码结构检索。两者技术上可以共存，但会分别维护索引。先选一个，确定现有检索不够再加另一个。

### 7. CodeGraph：把本地代码关系暴露成 MCP

**类型：** 本地 CLI + 代码图谱 MCP
**平台：** Codex 原生检测；Claude Code 原生检测
**地址：** [colbymchenry/codegraph](https://github.com/colbymchenry/codegraph)

CodeGraph 更像基础设施。它在本地建立代码索引，通过 MCP 把符号、调用关系和语义检索交给 Agent。Understand Anything 偏“生成一套可浏览的理解成果”，CodeGraph 偏“让模型在工作时随查随用”。

两个平台使用同一套安装方式：

```bash
npm install -g @colbymchenry/codegraph
codegraph install
```

进入具体项目后初始化：

```bash
codegraph init
```

也可以先用 `npx @colbymchenry/codegraph` 体验。`codegraph install` 会检测本机 Agent 并写入 MCP 配置，执行前应查看它准备修改的平台。

**冲突判断：功能重叠。** 与 Understand Anything 共存不会直接报错，但两套索引会占用磁盘和维护时间。代码库很大、需要持续语义检索时选 CodeGraph；想快速获得结构化全景时选 Understand Anything。

## 3. 给 Agent 接上互联网

### 8. Agent Reach：让一个入口覆盖多个内容平台

**类型：** 联网 CLI + 路由 Skill
**平台：** Codex 标准兼容；Claude Code 标准兼容
**地址：** [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach)

Agent Reach 的价值不是“又一个搜索工具”，而是统一入口。网页、GitHub、X、Reddit、YouTube、Bilibili、小红书、播客等平台需要不同后端，它负责判断当前环境有哪些能力，再把请求路由过去。

官方推荐直接把安装文档交给 Agent。为了可控，我会先打开文档阅读，再让 Agent 执行其中步骤：

```text
帮我安装 Agent Reach：https://raw.githubusercontent.com/Panniantong/agent-reach/main/docs/install.md
```

安装后先检查：

```bash
agent-reach doctor --json
```

Codex 和 Claude Code 都可以用自然语言调用，例如“搜索最近一周 GitHub 上关于 Agent Skills 的讨论”。部分平台仍需要登录、Cookie 或第三方 CLI，Agent Reach 不会凭空绕过平台权限。

**冲突判断：功能重叠但可组合。** 它与 Last 30 Days 都能做联网研究，但后者强调时间窗口和综合报告；OpenCLI 反而可以成为 Agent Reach 访问登录网站的后端。三者不是必须三选一。

### 9. Last 30 Days：只研究最近一个月发生了什么

**类型：** 时效研究 Skill
**平台：** Codex 标准兼容；Claude Code 原生插件
**地址：** [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)

很多研究失败，不是因为资料少，而是因为新旧信息混在一起。Last 30 Days 把时间窗口固定在最近 30 天，跨多个来源检索，再总结趋势、共识和争议。适合研究模型更新、产品口碑、热点工具和社区变化。

Claude Code 插件安装：

```text
/plugin marketplace add mvanhorn/last30days-skill
/plugin install last30days
```

Codex 安装：

```bash
npx skills add mvanhorn/last30days-skill -g -a codex
```

使用方式很直接：

```text
/last30days Agent Skills
```

它需要 Python 3.12+，部分数据源还需要 API Key 或平台登录。

**冲突判断：技术冲突。** Claude Code 同时通过 Plugin 和 `npx skills` 安装，会出现两个 `/last30days`。同一台机器只选一种安装方式。与 Agent Reach 只是功能重叠，不会直接冲突。

### 10. OpenCLI：把已登录浏览器变成可复用命令行

**类型：** 浏览器数据 CLI + Skill 集
**平台：** Codex 标准兼容；Claude Code 标准兼容
**地址：** [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI)

很多网站没有公开 API，但浏览器里已经登录。OpenCLI 通过浏览器扩展和本地 CLI，把页面能力包装成结构化命令。相比让 Agent 盲点网页，它更适合可重复的数据读取和自动化。

先安装 CLI，Node.js 需要 20 或以上：

```bash
npm install -g @jackwener/opencli
opencli doctor
```

再安装浏览器桥接扩展，并把 Skills 接入当前 Agent：

```bash
npx skills add jackwener/opencli
```

之后可以直接说“用 OpenCLI 读取当前登录站点的数据”，也可以手动运行：

```bash
opencli hackernews top --limit 5
```

**冲突判断：无冲突。** 它与 Agent Reach 是上下层关系：OpenCLI 提供具体平台能力，Agent Reach 负责发现和路由。真正需要注意的是浏览器登录态和权限，不要让 Agent 在未确认时执行写操作。

## 4. 把想法变成页面、图片和演示

### 11. PPT Master：生成真正可编辑的 PowerPoint

**类型：** PPTX 生成 Skill / 完整仓库工作流
**平台：** Codex 标准兼容；Claude Code 原生插件
**地址：** [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)

PPT Master 的目标不是生成一张“像幻灯片的图”，而是输出可以继续编辑的原生 `.pptx`。它会先梳理内容和视觉方向，再通过 Python、Pandoc 等工具生成结构化页面，适合商业汇报、课程和需要交付源文件的场景。

跨平台安装 Skill：

```bash
npx skills add hugohe3/ppt-master
```

Claude Code 也可以安装插件：

```text
/plugin marketplace add hugohe3/ppt-master
/plugin install ppt-master@ppt-master
```

插件只负责 Skill 文件，仍要按照仓库 README 安装 Python 依赖和 Pandoc。使用时给出受众、页数、场景、内容来源和视觉方向，比只说“做个 PPT”稳定得多。

**冲突判断：功能重叠。** 它与归藏 PPT Skill 都做演示，但 PPT Master 的核心产物是可编辑 PPTX，归藏 PPT 是单文件 HTML。按照最终交付格式选，不需要争论谁“更强”。

### 12. 归藏 PPT Skill：把内容做成单文件 HTML 演示

**类型：** HTML 演示生成 Skill
**平台：** Codex 标准兼容；Claude Code 标准兼容
**地址：** [op7418/guizang-ppt-skill](https://github.com/op7418/guizang-ppt-skill)

归藏 PPT Skill 更适合快速展示和网页传播。它会处理封面、版式、配图和横向翻页，最后输出一个可直接打开的 HTML 文件。无需 PowerPoint 环境，发给别人也容易预览。

Codex 和 Claude Code 都可以通过 Agent Skills 安装：

```bash
npx skills add https://github.com/op7418/guizang-ppt-skill --skill guizang-ppt-skill
```

安装后直接描述主题、受众、页数和风格，例如“用归藏 PPT Skill 把这份产品复盘做成 12 页横版演示”。如果项目已有品牌色和字体，也应该一起给出。

**冲突判断：功能重叠。** 它不会与 PPT Master 产生技术冲突，但两个 Skill 都可能被“做演示”触发。提示词中明确写出“HTML 演示”或“可编辑 PPTX”，就能避免模型选错。

### 13. OfficeCLI：在终端里生成 PPTX、DOCX 和 XLSX

**类型：** Office 文件 CLI + Agent Skill
**平台：** Codex 官方 Skill；Claude Code 原生插件
**地址：** [officecli/officecli](https://github.com/officecli/officecli)

清单里的 `iOfficeAI/OfficeCLI` 已迁移到新的官方仓库。OfficeCLI 是一个独立命令行程序，可以从提示词生成可编辑的 PPTX、DOCX、XLSX、报告和图片。Agent Skill 只是让 Codex 或 Claude Code 知道如何调用它，真正干活的是本地 `officecli` 二进制。

先安装 CLI：

```bash
npm install -g officecli
officecli --version
officecli auth status
```

Claude Code 安装插件：

```text
/plugin marketplace add officecli/officecli
/plugin install officecli@officecli
```

Codex 使用官方 Skill 安装脚本。仍然建议先检查脚本内容：

```bash
curl -fsSL https://raw.githubusercontent.com/officecli/officecli/main/scripts/install-skill.sh | bash -s -- officecli
```

不经过 Agent 也能直接使用：

```bash
officecli new pptx "季度复盘" --prompt "生成六页 SaaS 季度业务复盘，包含增长、留存、风险和下季度行动"
```

**冲突判断：功能重叠。** OfficeCLI 与 PPT Master、Anthropic 文档 Skills 都能生成 Office 文件，但调用链不同。只做 PPT 时选专用 Skill；需要同一套 CLI 批量生成多种 Office 文件时选 OfficeCLI。

### 14. AI Website Cloner Template：在项目里完成网站复刻

**类型：** 项目 Template，不是全局 Skill
**平台：** Codex 项目内兼容；Claude Code 项目内兼容
**地址：** [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template)

这个项目最容易被装错。它不是应该复制到全局 Skills 目录的能力，而是一个准备好命令、规范和依赖的网站复刻模板。正确做法是在 GitHub 点击 **Use this template** 创建自己的仓库，再在那个新仓库里工作。

创建自己的项目后：

```bash
git clone <你的仓库地址>
cd <你的仓库目录>
npm install
```

然后在项目里启动 Codex 或 Claude Code，运行：

```text
/clone-website <目标页面地址>
```

Claude Code 官方示例更推荐配合 Chrome 能力启动，但 Codex 也可以读取项目内的 Agent 规则完成流程。使用前要确认目标网站的版权、商标和使用许可；“技术上能复刻”不等于“可以公开发布”。

**冲突判断：无冲突。** 它只影响当前项目，不会与全局 UI Skill 冲突。真正的风险是把模板仓库直接当业务仓库长期开发，导致后续无法区分上游模板和自己的代码。

### 15. Open Design：让 Agent 通过 MCP 操作设计工作台

**类型：** 本地优先桌面 App + CLI + MCP + Skills
**平台：** Codex MCP；Claude Code MCP
**地址：** [nexu-io/open-design](https://github.com/nexu-io/open-design)

Open Design 是一个完整设计环境，可以生成网页原型、演示、图片和视频。它不是把一个 `SKILL.md` 丢进目录就结束，而是先安装桌面应用和 `od` CLI，再把 MCP 注册到 Agent。

从官方 Releases 或网站安装应用后，可以先预览 MCP 配置：

```bash
od mcp install codex --print
od mcp install claude --print
```

确认无误再安装：

```bash
od mcp install codex
od mcp install claude
```

之后直接让 Agent “在 Open Design 中创建一个 SaaS 首页原型”，它会通过 MCP 操作本地工作台。卸载时用对应的 `--uninstall`，不要手动留下失效的 MCP 配置。

**冲突判断：功能重叠。** 它与 HTML Anything 都是设计工作台，通常不需要同时常驻。MCP 名称不同不会天然冲突，但两个系统都会争夺同类“生成页面”任务，提示词要指定工具。

### 16. HTML Anything：把多个 Agent 接进同一个 HTML 工作台

**类型：** 本地 Web App / Agent 工作区
**平台：** 自动检测 Codex CLI；自动检测 Claude Code CLI
**地址：** [nexu-io/html-anything](https://github.com/nexu-io/html-anything)

HTML Anything 也不是一个全局 Skill。它是用 pnpm 启动的本地应用，内置大量 Skill 模板，可以让 Codex、Claude Code 等 Agent 在统一界面里生成和迭代 HTML 作品。适合需要一边看效果、一边让 Agent 修改的人。

安装运行：

```bash
git clone https://github.com/nexu-io/html-anything
cd html-anything
pnpm install
pnpm -F @html-anything/next dev
```

应用会检测本机已经登录的 Codex 和 Claude Code CLI，不需要再把整个仓库复制到 Skills 目录。它的 Skill 模板属于应用内部能力，和平台全局 Skill 是两个层级。

**冲突判断：功能重叠。** 与 Open Design 同时安装不会破坏配置，但使用定位接近。我会选一个作为主要可视化工作台，另一个只在需要其独有输出时打开。

### 17. UI UX Pro Max：给 Agent 一套可检索的设计知识库

**类型：** UI/UX Skill + 本地检索 CLI
**平台：** Codex 专用初始化；Claude Code 原生插件
**地址：** [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)

UI UX Pro Max 包含设计风格、配色、字体、组件、行业模式和可访问性规则。它的特点不是给一段固定 Prompt，而是根据产品类型检索合适的设计系统，再指导 Agent 落地。

安装 CLI：

```bash
npm install -g ui-ux-pro-max-cli
```

在项目中为不同平台初始化：

```bash
uipro init --ai codex
uipro init --ai claude
```

Claude Code 也可以走插件：

```text
/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill
/plugin install ui-ux-pro-max@ui-ux-pro-max-skill
```

不要在 Claude Code 同时使用插件和 CLI 生成的重复副本。使用时给出产品类型和技术栈，例如“为 B2B AI 工作台设计信息密度较高的桌面端界面”。

**冲突判断：功能重叠。** 它与 Frontend Design 都会约束界面质量。UI UX Pro Max 更像可检索设计数据库，Frontend Design 更像审美和实现原则。可以共存，但同一轮生成最好指定谁负责主规则。

### 18. Frontend Design：让前端不再长得像默认 AI 页面

**类型：** Anthropic 官方示例 Skill
**平台：** Codex 标准兼容；Claude Code 官方插件
**地址：** [anthropics/skills/skills/frontend-design](https://github.com/anthropics/skills/tree/main/skills/frontend-design)

Frontend Design 关注的是成品质量：视觉概念、排版、配色、动效和空间关系。它反对没有判断的渐变、卡片堆叠和模板化布局，要求 Agent 先确定明确的设计方向，再写可运行代码。

Claude Code 安装官方示例 Skill 集：

```text
/plugin marketplace add anthropics/skills
/plugin install example-skills@anthropic-agent-skills
```

Codex 可以只安装这一项标准 Skill：

```bash
npx skills add anthropics/skills -g --skill frontend-design -a codex
```

使用时不要只说“美化页面”，而要给内容、用户、设备和限制，例如“保持现有 Astro 结构，只重做首页视觉层级，不增加依赖”。

**冲突判断：功能重叠。** 与 UI UX Pro Max 共存没有技术问题，但两套审美规则可能给出不同方向。UI UX Pro Max 负责查规范、Frontend Design 负责形成视觉主张，是比较清楚的分工。

### 19. 归藏 Social Card Skill：把长内容拆成社交卡片

**类型：** 社交图片生成 Skill
**平台：** Codex 标准兼容；Claude Code 标准兼容
**地址：** [op7418/guizang-social-card-skill](https://github.com/op7418/guizang-social-card-skill)

它把文章、观点或产品内容转换成小红书卡片、公众号封面等社交媒体视觉。对我来说，它不是“画一张图”，而是先把长内容重组为封面、核心观点和连续阅读节奏。

两个平台都可以安装：

```bash
npx skills add https://github.com/op7418/guizang-social-card-skill --skill guizang-social-card-skill
```

提示词中给出发布平台、画幅、卡片数量、品牌色和原始文案。生成后仍要人工检查文字换行、事实和平台安全区，不能因为图做出来了就直接发布。

**冲突判断：无冲突。** 它与归藏 PPT 共用一些视觉思路，但交付物不同，一个服务社交传播，一个服务演示。两者可以同时安装。

### 20. Archify：专门生成能交付的技术图

**类型：** 架构图与流程图 Skill
**平台：** Codex 标准兼容；Claude Code 标准兼容
**地址：** [tt-a1i/archify](https://github.com/tt-a1i/archify)

Archify 专注架构图、工作流、时序图、数据流和生命周期图，输出带明暗主题和导出能力的独立 HTML。与通用网页生成相比，它的边界更窄，反而更稳定：节点、关系、方向和分组是第一优先级。

全局安装：

```bash
npx skills add tt-a1i/archify -g
```

也可以直接指定平台体验：

```bash
npx skills use tt-a1i/archify@archify --agent codex
npx skills use tt-a1i/archify@archify --agent claude-code
```

使用时先提供对象和关系，再给视觉要求。例如“画出从用户输入、Intent Router、Agent Runtime 到 Memory Store 的数据流”。

**冲突判断：无冲突。** 它与其他设计 Skill 只有表面重叠。Archify 负责技术关系，Frontend Design 负责页面审美，边界明确时可以组合。

## 5. 管理文档、知识和产品工作

### 21. Obsidian Skills：先让 Agent 正确读写 Obsidian 文件

**类型：** Obsidian 基础 Skill 集
**平台：** Codex 官方支持；Claude Code 原生插件
**地址：** [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills)

这是 Obsidian CEO Steph Ango 维护的一组标准 Agent Skills，解决的是基础能力：Obsidian Markdown、Bases、JSON Canvas、Obsidian CLI 和网页正文提取。它不会替你决定知识管理方法，但能避免 Agent 把 Wikilink、Callout、Properties 或 `.canvas` 写错。

Claude Code 插件安装：

```text
/plugin marketplace add kepano/obsidian-skills
/plugin install obsidian@obsidian-skills
```

Codex 和 Claude Code 也都可以通过标准安装器接入：

```bash
npx skills add https://github.com/kepano/obsidian-skills
```

Codex 手动安装时，把仓库的 `skills/` 中各 Skill 目录复制到 `~/.codex/skills`。项目级使用则放在具体 Vault 或仓库中，避免所有项目都加载 Obsidian 规则。

**冲突判断：无冲突。** 它提供的是文件格式与工具能力，可以作为 Claude Obsidian 的底层能力。只有当另一套 Skill 也定义了相反的 Markdown 写法时，才会出现规则冲突。

### 22. Claude Obsidian：让 Vault 自己生长和维护

**类型：** 第二大脑工作流 / Obsidian Vault 模板 / Skill 集
**平台：** Codex 实验兼容；Claude Code 原生插件
**地址：** [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian)

Claude Obsidian 不是几个语法 Skill，而是一套完整知识库方法。它会创建索引、实体、概念、来源、热缓存和日志，并提供 `/wiki`、`/save`、`/autoresearch`、`/canvas`、`/think` 等工作流。适合从零建立持续增长的第二大脑，不适合直接接管一个已经有严格目录规范的 Vault。

最完整的方式是克隆为独立 Vault：

```bash
git clone https://github.com/AgriciDaniel/claude-obsidian
cd claude-obsidian
bash bin/setup-vault.sh
```

Claude Code 也可以安装插件：

```bash
claude plugin marketplace add AgriciDaniel/claude-obsidian
claude plugin install claude-obsidian@agricidaniel-claude-obsidian
```

Codex 可在克隆后的仓库中读取兼容的 Agent Skills，但官方说明目前是**实验支持**，生产验证仍以 Claude Code 为主。对 Codex 用户，我更建议先在副本 Vault 中测试自然语言调用，不要直接让它重组主知识库。

**冲突判断：规则冲突。** 它与 Obsidian Skills 的基础能力互补，但会对目录、命名、索引和自动写入提出自己的规则。如果现有 Vault 已使用 PARA、Zettelkasten 或自定义结构，先选一个测试目录，确认方法兼容后再扩大范围。

### 23. PM Skills：按产品工作流组织的插件市场

**类型：** 产品管理 Plugin Marketplace / Skill 与命令集合
**平台：** Codex 原生插件；Claude Code 原生插件
**地址：** [phuryn/pm-skills](https://github.com/phuryn/pm-skills)

PM Skills 把产品工作拆成发现、战略、市场研究、数据分析、增长、上市、执行和 AI 交付等插件。它的优势是完整工作流：`/discover` 会串起创意、假设、优先级和实验，而不只是给一张模板。

Claude Code 先添加市场，再按领域安装，不需要九个全部装：

```bash
claude plugin marketplace add phuryn/pm-skills
claude plugin install pm-toolkit@pm-skills
claude plugin install pm-product-discovery@pm-skills
claude plugin install pm-execution@pm-skills
```

Codex 也支持同一市场结构：

```bash
codex plugin marketplace add phuryn/pm-skills
codex plugin add pm-toolkit@pm-skills
codex plugin add pm-product-discovery@pm-skills
codex plugin add pm-execution@pm-skills
```

Claude Code 可以直接运行 `/discover`、`/write-prd` 等命令；Codex 当前不会把这些命令暴露成同名 Slash Command，需要用自然语言描述流程，例如“完成产品发现：生成方案、识别假设、按风险排序，再设计实验，每一步暂停确认”。

**冲突判断：功能重叠。** 与 Product Manager Skills 覆盖大量相同框架。如果两个库都全量安装，模型可能同时触发同名或近义 Skill。选一个作为主产品工作流库，另一个只补缺少的框架。

### 24. Product Manager Skills：更像一本可执行的 PM 方法手册

**类型：** 产品管理 Skill 库 / Claude Plugin Marketplace
**平台：** Codex 官方 ZIP；Claude Code 原生插件
**地址：** [deanpeters/Product-Manager-Skills](https://github.com/deanpeters/Product-Manager-Skills)

这套库强调框架的来龙去脉、适用条件和常见误区，包含 Jobs to be Done、PRD、机会解决方案树、路线图、定价、增长、领导力和 AI 产品能力。与 PM Skills 相比，它更像一组可以单独学习和调用的方法手册。

Claude Code 可以按 Skill 安装：

```text
/plugin marketplace add deanpeters/Product-Manager-Skills
/plugin install jobs-to-be-done@pm-skills
/plugin install prd-development@pm-skills
/reload-plugins
```

Codex 官方提供专用包：从 [Releases](https://github.com/deanpeters/Product-Manager-Skills/releases/latest) 下载 `pm-skills-codex.zip`，解压到项目根目录，确认生成：

```text
.agents/
  skills/
AGENTS.md
```

然后在该项目打开 Codex，直接说“使用 `jobs-to-be-done` Skill 分析这个客户问题”。它是项目级安装，不会自动污染所有仓库。

**冲突判断：功能重叠。** 与 PM Skills 同时少量安装通常没问题，全量并存则容易重复。想要端到端命令链选 PM Skills；想按一个框架深入学习和执行，Product Manager Skills 更直观。

### 25. Anthropic Skills：官方示例、标准参考和文档能力集合

**类型：** Anthropic 官方 Agent Skills 示例仓库
**平台：** Codex 标准兼容；Claude Code 官方插件
**地址：** [anthropics/skills](https://github.com/anthropics/skills)

Anthropic Skills 有三层价值。第一，它提供 DOCX、PDF、PPTX、XLSX 等文档 Skill；第二，它提供 Frontend Design、Skill Creator、MCP Builder 等示例；第三，它本身是理解 Agent Skills 目录结构和写法的参考实现。它是“集合”，不是一个叫 Anthropic Skills 的单一命令。

Claude Code 添加官方市场后，按包安装：

```text
/plugin marketplace add anthropics/skills
/plugin install document-skills@anthropic-agent-skills
/plugin install example-skills@anthropic-agent-skills
```

Codex 遵循相同 `SKILL.md` 标准，可以按需安装整个仓库或某一项：

```bash
npx skills add anthropics/skills -g -a codex
```

如果只需要一个 Skill，优先使用 `--skill` 限定，减少全局上下文和触发重叠。还要注意仓库中不同目录的许可证说明并不完全相同，二次分发前应检查对应文件。

**冲突判断：功能重叠。** 仓库本身不会主动接管工作流，风险来自全量安装后与现有 PDF、PPT、前端 Skill 重复。按需安装比“一键全装”更合理。

### 26. Skill Creator：把个人经验变成可复用能力

**类型：** Skill 创建与评估工作流
**平台：** Codex 标准兼容；Claude Code 官方插件
**地址：** [anthropics/skills/skills/skill-creator](https://github.com/anthropics/skills/tree/main/skills/skill-creator)

当现成 Skill 不能覆盖自己的工作方法时，Skill Creator 用来创建、修改、评估和迭代 Skill。它会引导你定义触发条件、工作流、资源文件和测试样例，而不是只生成一个很长的 Prompt。

Claude Code 安装 `example-skills` 后已经包含它：

```text
/plugin marketplace add anthropics/skills
/plugin install example-skills@anthropic-agent-skills
```

Codex 可以单独安装：

```bash
npx skills add anthropics/skills -g --skill skill-creator -a codex
```

使用时提供一个真实任务、理想输出和失败样例，例如“把我的跨平台网站设计审查流程做成 Codex 与 Claude Code 都能读的 Skill”。越接近真实工作，写出的触发描述和验收样例越可靠。

**冲突判断：规则冲突。** 与其他 Skill 生成器同时存在不会直接报错，但可能采用不同目录、Frontmatter 和评估方法。创建同一个 Skill 时只选一个主工作流，再分别用两端标准审查兼容性。

## 6. Codex 与 Claude Code 怎么安装

看完 26 项，真正需要记住的安装原则只有五条。

**第一，先确认它到底是什么。** Template 要新建项目，App 要单独运行，CLI 要安装二进制，MCP 要写配置，只有 Skill 才应该进入 Skills 目录。把所有 GitHub 仓库都复制到 `~/.codex/skills`，结果通常是一堆无法加载的文件。

**第二，优先使用项目明确支持的平台入口。** Claude Code 有成熟的 Plugin Marketplace；Codex 同样在逐步提供插件能力，但很多项目仍通过 `npx skills`、`.agents/skills`、`.codex/skills` 或 MCP 接入。所谓“兼容”不一定意味着所有 Slash Command、Hooks 和 UI 都完全一致。

| 安装方式 | Codex | Claude Code | 适合场景 |
| --- | --- | --- | --- |
| 平台 Plugin | `/plugins` 或 `codex plugin ...` | `/plugin ...` 或 `claude plugin ...` | 项目明确提供原生插件 |
| `npx skills` | 常用 | 可用 | 标准 `SKILL.md`、多平台分发 |
| 项目级 Skill | `.agents/skills`、`.codex/skills` | `.claude/skills` | 只在一个仓库生效 |
| 全局 Skill | `~/.codex/skills` | `~/.claude/skills` | 几乎每个项目都需要 |
| MCP 安装 | `codex mcp` 或配置文件 | `claude mcp` 或配置文件 | 本地 App、外部服务和工具调用 |

**第三，同一个项目只选一种安装通道。** Plugin、`npx skills` 和手动复制不是三道都要做的步骤，而是三个替代入口。Last 30 Days 和 ECC 都明确记录过重复安装问题。

**第四，默认先装项目级。** 一个 Obsidian Skill 没必要出现在前端仓库，一个 PM Skill 也没必要在每次修 Bug 时触发。只有确认跨项目高频使用后，再移动到全局目录。

**第五，远程脚本先看再跑。** 最短的命令不一定是最安全的命令。遇到下面这种安装方式：

```bash
curl <远程地址> | bash
```

至少先打开脚本地址，确认它会下载什么、修改哪些目录、是否写入全局配置。能用 npm、Homebrew 或 Release 二进制时，我通常优先选择可查看版本和卸载路径的方式。

## 7. 同类 Skill 安装多个会不会冲突

最后给出我实际采用的判断表。重点不是“能否同时存在”，而是**是否应该同时激活**。

| 组合 | 冲突级别 | 影响 | 建议 |
| --- | --- | --- | --- |
| Superpowers + ECC | 规则冲突 | 计划、TDD、验证规则重复，流程变长 | 选一个主框架，另一个按需调用 |
| Superpowers + Planning with Files | 规则冲突 | 计划文档和停止条件可能不一致 | 前者管开发方法，后者只管长任务记忆 |
| ECC Plugin + ECC full installer | 技术冲突 | Skill、Hooks、命令重复加载 | 只选一种安装路径 |
| Planning with Files 项目 Hooks + 全局 Hooks | 技术冲突 | 同一事件收到两次提醒 | 只保留项目级或全局其中一个 |
| Claude HUD + 其他 statusline | 技术冲突 | 状态栏被覆盖或重复渲染 | 只保留一个主状态栏 |
| Agent Reach + OpenCLI | 无冲突 | 前者路由，后者提供浏览器能力 | 推荐组合 |
| Agent Reach + Last 30 Days | 功能重叠 | 都能研究热点，输出侧重点不同 | 明确是否需要固定 30 天窗口 |
| Last 30 Days Plugin + `npx skills` | 技术冲突 | 出现重复命令 | 同一平台只装一次 |
| Understand Anything + CodeGraph | 功能重叠 | 两份代码索引、额外资源消耗 | 大型项目先选一个 |
| PPT Master + 归藏 PPT | 功能重叠 | 同一提示可能触发错误输出格式 | 明确写 PPTX 或 HTML |
| OfficeCLI + 文档 Skills | 功能重叠 | 多条生成 Office 文件的路径 | 批处理选 CLI，深度编辑选专用 Skill |
| Open Design + HTML Anything | 功能重叠 | 两个设计工作台定位接近 | 选一个主工作台 |
| UI UX Pro Max + Frontend Design | 功能重叠 | 设计建议可能方向不同 | 前者查规范，后者定视觉方向 |
| Obsidian Skills + Claude Obsidian | 轻度规则重叠 | 基础语法兼容，知识库结构由后者接管 | 可组合，先在测试 Vault 验证 |
| PM Skills + Product Manager Skills | 功能重叠 | 同名框架、触发重复、上下文增加 | 选一个主库，另一个补缺 |
| Anthropic Skills 全量包 + 专用 Skill | 功能重叠 | 文档、前端、Skill 创建能力重复 | 使用 `--skill` 按需安装 |

我以前也会把 Skill 数量当成能力数量。装了 30 个，好像 Agent 就有 30 种新本事。真正用久了才发现，**能力不是相加关系，而是路由关系。** 同一句“帮我做个产品方案”，如果五个 Skill 都觉得自己应该介入，模型拿到的不是五倍专业，而是五套优先级。

现在我的做法是：每一类任务只有一个主 Skill，其他工具必须有明确边界。开发流程由一套框架负责；联网研究区分通用检索和 30 天时效研究；演示按 PPTX 与 HTML 分流；Obsidian 区分文件能力和知识管理方法；产品管理只保留一个主库。

这样做之后，Agent 反而更稳定。不是因为它知道得更少，而是因为它更清楚什么时候应该使用哪一种能力。

**真正有价值的不是装了多少 Skill，而是每一种能力都有清楚的边界。**

**标签：** #AI Agent · #Codex · #Claude Code · #Agent Skills · #效率工具
