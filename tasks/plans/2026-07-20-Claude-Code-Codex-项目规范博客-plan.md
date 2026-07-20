# Claude Code 与 Codex 项目规范博客开发计划

> **执行要求：** 实施时必须使用 `superpowers:subagent-driven-development`（推荐）或 `superpowers:executing-plans`，逐项执行并用复选框跟踪。

**目标：** 将原始项目规范对照表整理成一篇以个人实践为主线、事实经过核验的 `No. 21` Writing 博客文章。

**实现方式：** 先从 Claude Code 与 Codex 当前官方资料建立事实清单，再按“重复维护问题 → 单一事实来源 → 共享与分离边界 → 最小目录 → 维护原则”写成一篇 Markdown 文章。只新增文章和任务记录，不修改 Content Collections schema、页面组件或构建产物源码。

**技术栈：** Astro 5、Astro Content Collections、Markdown、npm。

## 全局约束

- 文章标题固定为 `No. 21: 一套项目，两套 Agent——我如何同时维护 Claude Code 和 Codex`。
- 发布日期固定为 `2026-07-20`。
- frontmatter 与文末标签统一为 `Claude Code`、`Codex`、`Coding Agent`、`项目规范`。
- 面向已经同时使用 Claude Code 和 Codex、正被重复配置困扰的读者。
- 核心观点是“项目事实保持单一来源，平台入口只承担适配职责”。
- 不逐项复刻原文，不编造具体事故、团队规模、使用时长或量化收益。
- 只保留当前官方资料能够支持的版本敏感事实；实验性或无法确认的能力不写成稳定通用能力。
- 不新增依赖，不修改 `docs/` 下的构建产物。

---

## 对应 spec

路径：`tasks/specs/2026-07-20-Claude-Code-Codex-项目规范博客-spec.md`

## 当前代码理解

- `src/content/writing/` 存放 Writing Markdown，下一篇序号为 `No. 21`。
- `src/content/config.ts` 定义 Writing frontmatter schema。
- 近期文章使用个人叙事开场、`1️⃣2️⃣3️⃣` 编号主体、短段落、加粗金句和文末标签。
- `docs/` 是 Astro 构建输出目录，只能通过 `npm run build` 生成。
- 仓库当前位于 `codex/blog-claude-codex-project-rules`，未跟踪的 `.codegraph/` 不属于本任务。

## 文件边界

- 新建：`src/content/writing/Claude-Code与Codex项目规范双轨实践.md`，承载完整文章。
- 修改：`tasks/todo.md`，跟踪实施状态并记录 Review。
- 检查但默认不修改：`README.md`、`tasks/lessons.md`。
- 构建生成：`docs/`，只在执行 `npm run build` 后按项目发布约定检查，不手工编辑。

### Task 1：建立官方事实清单

**文件：**

- 读取：`/Users/kakarrot/Desktop/Claude-Code vs Codex 项目规范对照表.md`
- 读取：`src/content/writing/Codex与Claude-Code-Skill-使用指南.md`
- 不写入仓库文件；研究结果在当前任务上下文中供 Task 2 使用。

**产出：** 一份只包含文章实际需要的事实清单，每项标记为“已确认”“版本相关”或“删除”。

- [x] **Step 1：检查搜索能力并定位官方入口**

  运行：`agent-reach doctor --json`

  预期：返回可用搜索后端；如果专用后端不可用，使用官方文档站点的网页检索。

- [x] **Step 2：核验 Claude Code 文章所需事实**

  只检索 Anthropic 官方文档，确认以下内容：

  - `CLAUDE.md` 与 `CLAUDE.local.md` 的用途和加载方式。
  - `.claude/settings.json` 与 `.claude/settings.local.json` 的职责。
  - `.claude/rules/`、`.claude/skills/`、`.claude/agents/` 的当前官方定位。

  预期：每项至少有一个可直接打开的官方来源链接；没有官方证据的原文细节标记为删除。

- [x] **Step 3：核验 Codex 文章所需事实**

  只检索 OpenAI 官方文档，确认以下内容：

  - `AGENTS.md` 与 `AGENTS.override.md` 的加载和替代关系。
  - 用户级、项目级配置的当前支持范围与项目信任边界。
  - Skills、Rules、多 Agent 和 Hooks 的当前官方支持状态与路径。

  预期：每项至少有一个可直接打开的官方来源链接；文档未确认的 `.codex/hooks.json`、`.codex/agents/*.toml` 等说法不得直接沿用。

- [x] **Step 4：收敛正文事实边界**

  将事实分成三组：

  1. 正文可明确陈述的稳定事实。
  2. 需要写“以当前版本为准”的版本相关能力。
  3. 从文章删除的未确认或无关细节。

  预期：正文只依赖前两组；来源链接直接放在对应段落附近，不设置独立参考资料堆砌区。

### Task 2：撰写 No. 21 文章

**文件：**

- 新建：`src/content/writing/Claude-Code与Codex项目规范双轨实践.md`
- 参考：`src/content/writing/从Hexo迁移到Astro的心路历程.md`
- 参考：`src/content/writing/Codex与Claude-Code-Skill-使用指南.md`
- 读取：`src/content/config.ts`

**产出：** 一篇符合现有 Writing schema 与写作调性的完整 Markdown 文章。

- [x] **Step 1：写入确定的 frontmatter**

  使用以下字段和值：

  ```yaml
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
  ```

- [x] **Step 2：写个人叙事开场**

  从已确认事实展开：同一个项目同时使用 Claude Code 和 Codex，最初自然地分别维护 `CLAUDE.md` 与 `AGENTS.md`，随后发现构建命令、目录职责和安全边界被重复书写。不得补充未经用户确认的时间、次数、团队成员或事故。

  预期：开场在 3—5 个短段落内提出核心矛盾，并用一句加粗观点收束。

- [x] **Step 3：完成编号主体**

  按以下顺序写作：

  1. `1️⃣ 问题不在两份文件，而在两份事实`
  2. `2️⃣ 先把内容分成三层`
  3. `3️⃣ 哪些内容共享，哪些必须分开`
  4. `4️⃣ 我最终采用的最小目录`
  5. `5️⃣ 一条规则应该放在哪里`
  6. `6️⃣ 两套 Agent 并用时，我现在只守五条原则`

  内容要求：

  - 三层分别为项目事实、工作流能力、平台运行配置。
  - 只保留一张“内容职责与推荐位置”对照表。
  - 目录树保持最小，只展示 `CLAUDE.md`、`AGENTS.md`、`.claude/`、`.codex/`、`.agents/skills/` 中经核验且与观点相关的部分。
  - 明确“单一事实来源”是维护原则，不把软链接或自动同步脚本写成默认方案。

- [x] **Step 4：完成结尾与标签**

  结尾回到个人判断：工具可以同时使用，但项目事实不能各写一套。最后用一句加粗金句收束，并添加：

  ```markdown
  #ClaudeCode #Codex #CodingAgent #项目规范
  ```

- [x] **Step 5：执行内容静态检查**

  运行：

  ```bash
  rg -n 'No\. 21|1️⃣|2️⃣|3️⃣|4️⃣|5️⃣|6️⃣|#ClaudeCode #Codex #CodingAgent #项目规范' src/content/writing/Claude-Code与Codex项目规范双轨实践.md
  rg -n 'TODO|TBD|待补充|据说|一定|完全兼容' src/content/writing/Claude-Code与Codex项目规范双轨实践.md
  ```

  预期：第一条命令命中标题、六个主体和文末标签；第二条命令无输出。

### Task 3：验证、文档检查与 Git 收尾

**文件：**

- 修改：`tasks/todo.md`
- 检查：`README.md`
- 检查：`tasks/lessons.md`
- 检查：`docs/`

**产出：** 文章通过项目检查，任务记录完整，Git 只包含本任务文件和构建产物。

- [x] **Step 1：运行类型检查**

  运行：`npm run check`

  预期：退出码 0；若失败，记录精确错误并判断是否由新文章 frontmatter 或 Markdown 引起。

- [x] **Step 2：运行 lint**

  运行：`npm run lint`

  预期：退出码 0；若只有项目既有提示，记录但不扩大修复范围。

- [x] **Step 3：运行构建**

  运行：`npm run build`

  预期：退出码 0，并在 `docs/writing/` 生成 `No. 21` 对应页面；不得手工修改生成文件。

- [x] **Step 4：检查文章构建结果和文档同步需求**

  运行：

  ```bash
  rg -n '一套项目，两套 Agent' docs/writing docs/rss.xml
  git diff -- README.md tasks/lessons.md
  ```

  预期：构建页面或 RSS 中出现文章标题；README.md 无需更新；如果没有产生新的可复用教训，`tasks/lessons.md` 无需更新。

- [x] **Step 5：更新任务记录**

  在 `tasks/todo.md` 勾选已完成项，并追加 `## Review`，记录：文章路径、事实核验范围、三条验证命令结果、README/lessons 检查结论和未跟踪 `.codegraph/` 未纳入范围。

- [x] **Step 6：检查最终范围**

  运行：

  ```bash
  git status --short
  git diff --check
  git diff --stat
  ```

  预期：无空白错误；源码改动仅包含新文章和 `tasks/todo.md`，其余变化只能是 `npm run build` 生成的 `docs/`；`.codegraph/` 保持未跟踪且不暂存。

- [x] **Step 7：提交实现**

  运行：

  ```bash
  git add src/content/writing/Claude-Code与Codex项目规范双轨实践.md tasks/todo.md docs
  git diff --cached --check
  git commit -m "docs: 发布 Claude Code 与 Codex 项目规范文章"
  ```

  预期：提交成功，提交内容不含 `.codegraph/`、原始桌面文档或其他无关文件。

- [x] **Step 8：推送分支**

  运行：`git push -u origin codex/blog-claude-codex-project-rules`

  预期：远端分支创建成功；不合并 `master`，不执行强推。

## 回滚方式

- 文章实施尚未提交时，只删除本次新建文章并恢复本次 `tasks/todo.md` 变更；不处理 `.codegraph/`。
- 文章实施已提交但未推送时，使用新的反向提交撤销，不执行 `git reset --hard`。
- 已推送后继续使用反向提交，并正常推送该分支，不改写远端历史。

## 文档同步

- `README.md`：文章不改变长期安装、命令、架构或配置，预计无需更新，但完成前必须检查。
- `tasks/lessons.md`：只有事实核验或 Astro 内容流程产生新的可复用经验时才更新，并先去重。
- `tasks/todo.md`：实施完成后更新勾选状态与 Review。
