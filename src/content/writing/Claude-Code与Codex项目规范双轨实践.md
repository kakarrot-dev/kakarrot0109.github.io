---
title: "No. 21: 一套项目，两套 Agent——我如何同时维护 Claude Code 和 Codex"
description: "同一个项目同时使用 Claude Code 和 Codex，真正麻烦的不是多一个配置文件，而是项目事实被维护了两遍。这是我把公共规范和平台适配拆开的实践。"
publishedAt: 2026-07-20
tags:
  - Claude Code
  - Codex
  - Coding Agent
  - 项目规范
---

同一个项目里，我会在 Claude Code 和 Codex 之间切换。

最自然的做法，是分别维护 `CLAUDE.md` 和 `AGENTS.md`：两边都写一遍构建命令、目录职责、安全边界和 Git 约定。看起来很对称，实际上是把同一份项目事实复制了一遍。

问题不在今天多写几行，而在以后改一条命令、换一个目录或收紧一条权限时，我必须记得同步两处。只要一次遗漏，两个 Agent 看到的“项目”就不再是同一个项目。

**我后来想清楚了：需要双轨的是平台入口，不是项目事实。**

## 1️⃣ 问题不在两份文件，而在两份事实

`CLAUDE.md` 和 `AGENTS.md` 同时存在，本身不是问题。两个平台有不同的指令发现方式，项目需要两个入口很正常。

真正的风险是：两份文件都开始解释“这个项目是什么”。

构建命令是项目事实，目录职责是项目事实，不能读取和提交密钥也是项目事实。它们不会因为我换了 Agent 就改变，所以不该各自维护。

这里的“单一事实来源”是一条维护原则：**同一条项目约定，只选一个权威位置。** 它不等于必须使用软链接，也不等于先写一套自动同步脚本。

原始资料里有一张很长的功能对照表。我现在只保留最常查的六项，因为两端的文件名即使相似，加载和作用机制也不一定一一对应。

| 核心项 | Claude Code | Codex | 共享边界 |
| --- | --- | --- | --- |
| 项目指令入口 | `CLAUDE.md` | `AGENTS.md` | 都承载项目指令，但发现机制不同 |
| 本机补充 / 同层候选 | `CLAUDE.local.md` 与同层 `CLAUDE.md` 一起拼接 | `AGENTS.override.md` 非空时成为同层首选，不再加载同层 `AGENTS.md` | 不是一组可直接互换的“覆盖文件” |
| 项目设置 | `.claude/settings.json` | 受信任项目中的 `.codex/config.toml` | 各自维护，不合并 |
| 用户设置 | `~/.claude/settings.json` | `~/.codex/config.toml`（默认位置） | 位于用户环境，不属于仓库 |
| 项目 Skills | `.claude/skills/<name>/SKILL.md` | `.agents/skills/<name>/SKILL.md` | 可共享方法语义，加载路径分别适配 |
| Rules | `.claude/rules/*.md` | `.codex/rules/*.rules`（实验性，以当前版本为准） | 前者是项目指令，后者控制 sandbox 外命令，不是对应物 |

这张表只用来定位文件，不用来证明两套工具能力对等。[Claude Code 项目记忆文档](https://code.claude.com/docs/en/memory) [Claude Code 设置文档](https://code.claude.com/docs/en/settings) [Claude Code Skills 文档](https://code.claude.com/docs/en/skills) [Codex `AGENTS.md` 文档](https://learn.chatgpt.com/docs/agent-configuration/agents-md) [Codex 配置文档](https://learn.chatgpt.com/docs/config-file/config-basic) [Codex Skills 文档](https://learn.chatgpt.com/docs/build-skills) [Codex Rules 文档](https://learn.chatgpt.com/docs/agent-configuration/rules)

## 2️⃣ 先把内容分成三层

我不再先问“这句话写进哪个文件”，而是先判断它属于哪一层。

**第一层是项目事实。** 包括技术栈、常用命令、目录职责、编码约定、验证方式、安全边界和 Git 流程。这一层回答的是：这个项目如何正确地工作。

**第二层是工作流能力。** 比如某类任务要如何调研、规划、实现或验证。这些能力可以由 Skill 承载，但路径和触发方式由平台决定。

**第三层是平台运行配置。** 模型、审批、sandbox、MCP、本机偏好和平台自身的权限设置，都应该留在各自平台的配置层。

这三层拆开后，“共享”就不再意味着两个目录完全一样。共享的是不变的项目语义；分开的是平台如何读取它、配置它和调用它。

| 内容层 | 典型内容 | 共享边界 | 推荐位置 |
| --- | --- | --- | --- |
| 项目事实 | 技术栈、命令、目录、安全、验证、Git 约定 | 同一语义只维护一份 | `AGENTS.md` 作为权威来源，`CLAUDE.md` 只负责导入和少量平台说明 |
| 工作流能力 | 专项调研、写作、调试、验证流程 | 共享方法，分别适配路径与触发方式 | Claude 放 `.claude/skills/<name>/SKILL.md`；Codex 放 `.agents/skills/<name>/SKILL.md` |
| 平台运行配置 | 权限、MCP、模型、审批、sandbox、本机偏好 | 不共享 | Claude 使用 settings 层；Codex 使用 config 层 |

## 3️⃣ 哪些内容共享，哪些必须分开

我把 `AGENTS.md` 选为项目事实的权威来源，不是因为 Claude Code 会自动读它。事实正好相反：Claude Code 不会自动读取 `AGENTS.md`。官方支持在 `CLAUDE.md` 中用 `@AGENTS.md` 显式导入，也支持让 `CLAUDE.md` 成为指向它的符号链接。我选显式导入，只是因为这个入口更容易被人读懂，不是因为它是唯一方式。[Claude Code 项目记忆文档](https://code.claude.com/docs/en/memory)

因此，我的 `CLAUDE.md` 只保留一个薄入口：

```text
# CLAUDE.md
# 本文推荐的显式导入方式，不是官方唯一方案
@AGENTS.md
```

Claude Code 发现的 `CLAUDE.md` 和 `CLAUDE.local.md` 会被拼接进上下文，后者不是同目录主文件的机械替换。Codex 则会在每一层按 `AGENTS.override.md`、`AGENTS.md` 和回退名的顺序，选择第一个非空文件，再把各层内容从根目录向当前目录拼接。这两种机制不同，所以我不会把 `CLAUDE.local.md` 和 `AGENTS.override.md` 当成一组对应物。[Claude Code 项目记忆文档](https://code.claude.com/docs/en/memory) [Codex `AGENTS.md` 文档](https://learn.chatgpt.com/docs/agent-configuration/agents-md)

把两套简化顺序并排看，差异更清楚：

```text
Claude Code（多层拼接）
  用户级 ~/.claude/CLAUDE.md
  → 项目根到当前目录沿途发现的 CLAUDE.md / CLAUDE.local.md
  → 同目录内 CLAUDE.local.md 排在 CLAUDE.md 之后

Codex（同层选一个，再跨层拼接）
  Codex home（默认 ~/.codex，可由 CODEX_HOME 改变）
  → 每层依次检查 AGENTS.override.md、AGENTS.md、配置的回退名
  → 每层只取第一个非空候选
  → 项目根到当前目录的各层命中内容按顺序拼接
```

配置层也是同样。Claude 的 `.claude/settings.json` 用于可提交的项目设置，`.claude/settings.local.json` 用于不提交的本机项目设置，普通同键设置中本地层优先级更高。Codex 的用户配置默认在 `~/.codex/config.toml`，项目的 `.codex/config.toml` 只会在项目受信任时加载。这些都是平台运行边界，强行合并反而会隐藏差异。[Claude Code 设置文档](https://code.claude.com/docs/en/settings) [Codex 配置文档](https://learn.chatgpt.com/docs/config-file/config-basic)

## 4️⃣ 我最终采用的最小目录

我最终保留的骨架很小：

```text
your-project/
├── AGENTS.md
├── CLAUDE.md
├── .claude/
│   ├── settings.json
│   ├── settings.local.json  # 本机项目设置，不提交
│   └── skills/<name>/SKILL.md
├── .codex/
│   └── config.toml
└── .agents/skills/
    └── <name>/SKILL.md

# 用户配置不在仓库目录中：
# Claude Code：~/.claude/settings.json
# Codex：~/.codex/config.toml（默认；Codex home 可由 CODEX_HOME 改变）
```

`AGENTS.md` 写完整的项目规范。`CLAUDE.md` 作为 Claude Code 的薄入口，显式导入 `@AGENTS.md`，只在必要时补充 Claude 专属的入口说明。

`.claude/` 和 `.codex/` 不是两份项目手册，而是两个平台的适配层。项目 Skill 也按各自的正式路径放置：Claude 使用 `.claude/skills/<name>/SKILL.md`，Codex 使用 `.agents/skills/<name>/SKILL.md`，Codex 的用户级 Skill 路径是 `~/.agents/skills`。[Claude Code Skills 文档](https://code.claude.com/docs/en/skills) [Codex Skills 文档](https://learn.chatgpt.com/docs/build-skills)

这个目录没有解决“如何让两端共用同一份 Skill”的所有问题，但它先解决了更基础的问题：什么是项目事实，什么是平台适配。只有这个边界稳定后，才值得评估软链接、安装工具或同步脚本。

## 5️⃣ 一条规则应该放在哪里

我现在用三个问题来判断。

第一，**换一个 Agent 后，这条规则还成立吗？** 如果成立，它大概是项目事实，应该回到 `AGENTS.md`。“构建前先运行类型检查”和“不要直接修改构建产物”都属于这一类。

第二，**它描述的是任务方法，还是平台行为？** 可复用的任务方法可以写成 Skill，再分别放到平台识别的项目路径。审批、sandbox 和 MCP 则是平台行为，应该回到各自的 settings 或 config。

第三，**它真的是“规范”吗？** Claude 的 `.claude/rules/` 用于模块化项目指令；没有 `paths` 的规则在启动时加载，只有声明 `paths` 的规则才会按匹配文件生效。Codex Rules 则是控制哪些命令可以在 sandbox 外执行的实验性能力，使用 `.codex/rules/*.rules`，并受项目信任边界约束。两者名字相似，但不是两端对应的同一层；Codex Rules 的具体行为应以当前版本文档为准。[Claude Code 项目记忆文档](https://code.claude.com/docs/en/memory) [Codex Rules 文档](https://learn.chatgpt.com/docs/agent-configuration/rules)

这三个问题的作用，不是找到一个万能文件，而是避免把不同性质的内容堆在一起。

## 6️⃣ 两套 Agent 并用时，我现在只守五条原则

**第一，项目事实只写一遍。** 命令、目录、安全和验证规则只有一个权威来源。

**第二，平台入口保持足够薄。** `CLAUDE.md` 负责让 Claude Code 读到共享事实，不重写整份项目手册。

**第三，平台配置不伪装成通用规范。** 权限、sandbox、MCP 和本机偏好各归各位。

**第四，名字相似不等于机制对等。** `CLAUDE.local.md` 与 `AGENTS.override.md`、Claude Rules 与 Codex Rules，都不能只按文件名建立类比。

**第五，先保持最小结构，再解决自动化。** 如果显式导入已经能让边界清楚，就不必急着增加软链接和同步脚本。

我现在仍然会同时使用 Claude Code 和 Codex。两个工具可以有自己的入口、Skill 路径和运行配置，但它们不应该各自发明一个项目。

**工具可以走双轨，项目事实只能有一条主线。**

#ClaudeCode #Codex #CodingAgent #项目规范
