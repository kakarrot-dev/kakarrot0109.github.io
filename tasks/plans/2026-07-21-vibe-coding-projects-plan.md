# Vibe Coding 项目展示与内容优化 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 让 Vibe Coding 只按指定顺序展示 6 个项目，并把每个详情页改写为真实、统一且突出个人产品判断的案例内容。

**Architecture:** 保留现有 Astro Content Collections 和 Markdown 详情页结构。列表页使用显式 slug 清单完成筛选、排序与缺项校验；旧项目沿用 `draft` 字段退出公开展示；6 个目标项目继续由独立 Markdown 文件承载内容。

**Tech Stack:** Astro 5、Astro Content Collections、Markdown、TypeScript、Tailwind CSS 4。

## Global Constraints

- 固定顺序必须是 `wukong`、`kakarrot-website`、`claude-cream`、`obsidian-wiki`、`pm-ai-agent-book`、`tampermonkey`。
- 列表和静态详情路由只能公开这 6 项。
- 不调整 Content Collections schema，不新增依赖、组件、布局、后端或数据库。
- 内容使用第一人称产品案例叙事，事实以对应仓库为准，不虚构数据或成果。
- Claude Cream 保留现有 Logo 与横幅，其他项目不新增未经确认的图片。
- 不删除 `Zeno.md` 和 `claude-code-skills.md`，仅使用现有 `draft` 机制隐藏。
- 不直接编辑 `docs/`；构建产物只由 `npm run build` 生成。

---

## 文件结构

- `src/pages/vibe-coding/index.astro`：定义唯一公开清单、固定顺序和缺项失败逻辑。
- `src/pages/vibe-coding/[slug].astro`：继续按现有 `draft` 规则生成公开详情路由，无需修改。
- `src/content/vibe-coding/Zeno.md`、`claude-code-skills.md`：标记为草稿，保留源内容。
- `src/content/vibe-coding/wukong.md`、`kakarrot-website.md`、`claude-cream.md`、`obsidian-wiki.md`：改写现有案例。
- `src/content/vibe-coding/pm-ai-agent-book.md`、`tampermonkey.md`：新增案例。

### Task 1：锁定公开范围与列表顺序

**Files:**

- Modify: `src/pages/vibe-coding/index.astro:6-8`
- Modify: `src/content/vibe-coding/Zeno.md:1-12`
- Modify: `src/content/vibe-coding/claude-code-skills.md:1-12`

**Interfaces:**

- Consumes: `getCollection("vibe-coding")` 返回的内容条目和现有 `draft: boolean`。
- Produces: 严格按 `orderedSlugs` 排列的 `items`；任一目标条目缺失或为草稿时抛出构建错误。

- [ ] **Step 1：隐藏两个旧项目**

只把 `Zeno.md` 和 `claude-code-skills.md` frontmatter 中的 `draft: false` 改为 `draft: true`，不改正文。

- [ ] **Step 2：替换日期排序**

在 `src/pages/vibe-coding/index.astro` 中将原有 `items` 计算替换为：

```ts
const orderedSlugs = [
  "wukong",
  "kakarrot-website",
  "claude-cream",
  "obsidian-wiki",
  "pm-ai-agent-book",
  "tampermonkey",
] as const;

const publishedItems = (await getCollection("vibe-coding")).filter((item) => !item.data.draft);
const itemsBySlug = new Map(publishedItems.map((item) => [item.slug, item]));
const items = orderedSlugs.map((slug) => {
  const item = itemsBySlug.get(slug);
  if (!item) {
    throw new Error(`Vibe Coding 项目缺失或未发布：${slug}`);
  }
  return item;
});
```

该逻辑同时完成允许列表过滤、固定排序和缺项校验。

- [ ] **Step 3：验证失败路径**

Run: `npm run check`

Expected: 在新增两个页面之前，FAIL 且包含 `Vibe Coding 项目缺失或未发布：pm-ai-agent-book`。若 check 不执行页面模块，则运行 `npm run build`，预期同样失败。

Task 1 不单独提交；与 Task 2 合并为首个可构建提交。

### Task 2：新增两个项目案例并闭合公开清单

**Files:**

- Create: `src/content/vibe-coding/pm-ai-agent-book.md`
- Create: `src/content/vibe-coding/tampermonkey.md`

**Interfaces:**

- Consumes: Task 1 的 `orderedSlugs`、现有 frontmatter schema 和对应仓库 README。
- Produces: slug 分别为 `pm-ai-agent-book` 和 `tampermonkey` 的已发布条目。

- [ ] **Step 1：新增 AI Agent 产品经理实战案例**

frontmatter：

```yaml
---
title: "AI Agent 产品经理实战 — 从机会识别到上线运营"
description: "面向 AI 产品经理的中文 Agent 产品教材，用完整产品生命周期、双案例和可复用工具，把技术知识转化为产品决策方法"
publishedAt: 2026-07-21
topics:
  - "AI Agent"
  - "产品方法"
  - "内容创作"
featured: true
draft: false
---
```

正文必须覆盖：

1. 定位：从机会识别、产品定义到评估上线的中文书，不是工程教程。
2. 动机：产品经理需要判断场景、自主权、证据、风险、成本和人工介入。
3. 决策：按产品生命周期组织；使用事务办理与企业知识双案例；每章提供检查表、模板或思考题。
4. 内容：机会识别、任务建模、产品定义、交互信任、能力方案、评估、安全成本、上线运营和组织协作。
5. 状态：第一版含引言、10 章、后记和说明；不含 PDF、配套代码、网站或多语言版。
6. 文末链接：`[查看 GitHub 仓库](https://github.com/kakarrot-dev/pm-ai-agent-book)`。

- [ ] **Step 2：新增 Tampermonkey 案例**

frontmatter：

```yaml
---
title: "Tampermonkey — 为高频网页补上个人体验层"
description: "从 X 阅读增强开始，用轻量用户脚本消除固定页面干扰，把重复的浏览器样式调整沉淀为可维护的个人工具"
publishedAt: 2026-07-21
topics:
  - "Tampermonkey"
  - "用户脚本"
  - "效率工具"
featured: true
draft: false
---
```

正文必须覆盖：

1. 定位：个人 Tampermonkey / Violentmonkey 用户脚本仓库。
2. 动机：解决 X 右栏、浮钮、主栏宽度和媒体高度造成的阅读干扰。
3. 决策：先解决个人高频痛点；仅用 CSS 和 `GM_addStyle`；兼容 `x.com` 与 `twitter.com`；保持低权限、易恢复。
4. 当前脚本：隐藏右栏和右下浮钮、加宽主栏、调整间距/行高/媒体高度，保留左侧导航。
5. 验证：1280、1440、1920 宽度下检查首页、个人主页、帖子详情和站内跳转。
6. 状态：从单个 X 阅读增强脚本起步，不包装成通用脚本平台。
7. 文末链接：`[查看 GitHub 仓库](https://github.com/kakarrot-dev/tampermonkey)`。

- [ ] **Step 3：验证并提交**

Run: `npm run check`

Expected: `0 errors`，不再报告两个目标 slug 缺失。

```bash
git add src/pages/vibe-coding/index.astro src/content/vibe-coding/Zeno.md src/content/vibe-coding/claude-code-skills.md src/content/vibe-coding/pm-ai-agent-book.md src/content/vibe-coding/tampermonkey.md
git diff --cached --check
git commit -m "feat: 调整 Vibe Coding 项目展示"
```

### Task 3：改写 Wukong 与 kakarrot.com

**Files:**

- Modify: `src/content/vibe-coding/wukong.md`
- Modify: `src/content/vibe-coding/kakarrot-website.md`

**Interfaces:**

- Consumes: 两个仓库 README 的已确认定位、能力和状态。
- Produces: frontmatter schema 不变、正文为第一人称产品案例的两个条目。

- [ ] **Step 1：改写 Wukong**

保留 slug 与发布日期，正文必须：

1. 明确是个人本机智能体服务，不是公网多租户 SaaS。
2. 围绕手机随时访问、本地数据与长期记忆、可靠完成任务解释动机。
3. 写出 Telegram + Dashboard、本地优先、Run/Step/Attempt/Event 持久化、Tool 幂等、Outbox 去重，以及 Skill 人工维护且学习结果不自动晋升的决策。
4. 概括长期记忆、Agent-Reach、受控文件工具、只读 Git 检查、子代理资产、定时任务和备份恢复。
5. 技术栈只支撑产品决策，不放安装命令。
6. 使用“个人本机服务”的当前状态，不写未经当前运行证据验证的“稳定运行中”。
7. 文末添加 `[查看 GitHub 仓库](https://github.com/kakarrot-dev/Wukong)`。

- [ ] **Step 2：改写 kakarrot.com**

保留 slug 与发布日期，正文必须：

1. 定位为承载 AI 产品经理思考、写作和作品的个人品牌网站。
2. 说明从通用 Hexo 博客迁移，是为让内容结构和视觉共同服务个人品牌。
3. 写 Astro Content Collections、纯静态零运行时、暖白与苔绿的编辑杂志式视觉、GitHub Pages 自动部署。
4. 解释 Writing、Projects、Vibe Coding 分别承担观点、正式案例和快速实践。
5. 强调网站也是持续迭代的 Vibe Coding 案例，不写流量或转化数据。
6. 当前状态为已上线并持续更新。
7. 文末添加网站和仓库链接：`https://kakarrot.com`、`https://github.com/kakarrot-dev/kakarrot0109.github.io`。

- [ ] **Step 3：验证并提交**

Run: `npm run check`

Expected: `0 errors`。

```bash
git add src/content/vibe-coding/wukong.md src/content/vibe-coding/kakarrot-website.md
git diff --cached --check
git commit -m "docs: 优化 Wukong 与网站项目案例"
```

### Task 4：改写 Claude Cream 与 Obsidian Wiki

**Files:**

- Modify: `src/content/vibe-coding/claude-cream.md`
- Modify: `src/content/vibe-coding/obsidian-wiki.md`

**Interfaces:**

- Consumes: 两个仓库 README 的设计 Token、平台范围、知识库目录契约和 Agent 工作流。
- Produces: 保留 Claude Cream 品牌图、突出产品决策的两个条目。

- [ ] **Step 1：改写 Claude Cream**

保留 Logo、横幅、slug 和发布日期，正文必须：

1. 定位为跨 Typora、Obsidian、Ghostty 和 AI CLI 的统一暖色编辑体验。
2. 说明冷白、纯黑和跨工具割裂对长时间阅读与创作的影响。
3. 写暖象牙/暖炭灰双模式、琥珀金语义强调、中文优先、本地离线、精简自定义。
4. 解释 `tokens/tokens.json` 如何作为颜色、排版、间距、圆角和语法高亮的单一真源。
5. 强调减少工具切换的视觉割裂，并让设计选择可维护、可复用。
6. 当前状态准确写四类工具配置、双模式和 MIT 许可。
7. 保留仓库链接 `https://github.com/kakarrot-dev/claude-cream`。

- [ ] **Step 2：改写 Obsidian Wiki**

保留 slug 与发布日期，正文必须：

1. 定位为同时服务个人阅读和 AI Agent 操作的本地知识系统。
2. 说明外部原文、加工结论和 Agent 规则混在一起会损害追溯与复用。
3. 写 `raw/` 永久层、`wiki/` 编译层、`wiki/索引/` MOC、`tasks/hot-cache.md` 短期状态。
4. 概括 Ingest、Query、Retrieve、Lint，以及先索引、再相关笔记、按需核对 raw 的检索路径。
5. 说明统一 Properties、来源追踪、标签约束和 `tasks/lessons.md` 的维护价值。
6. 当前状态写共享工作流已用于日常摄入、查询和维护，不虚构自动校验。
7. 文末添加 `[查看 GitHub 仓库](https://github.com/kakarrot-dev/Obsidian-Wiki)`。

- [ ] **Step 3：验证并提交**

Run: `npm run check`

Expected: `0 errors`，品牌图片与外链 Markdown 正常解析。

```bash
git add src/content/vibe-coding/claude-cream.md src/content/vibe-coding/obsidian-wiki.md
git diff --cached --check
git commit -m "docs: 优化设计与知识库项目案例"
```

### Task 5：完整验证、部署产物与推送

**Files:**

- Verify: `src/pages/vibe-coding/index.astro`
- Verify: `src/pages/vibe-coding/[slug].astro`
- Verify: `src/content/vibe-coding/*.md`
- Generated, do not hand-edit: `docs/`

**Interfaces:**

- Consumes: Tasks 1-4 的列表逻辑和 6 个公开条目。
- Produces: 类型、Lint、构建和实际页面均通过的交付结果。

- [ ] **Step 1：检查可见性**

Run: `rg -n "^draft:|^title:" src/content/vibe-coding`

Expected: 两个旧项目为 `draft: true`，6 个目标条目为 `draft: false`。

- [ ] **Step 2：串行验证**

```bash
npm run check
npm run lint
npm run build
```

Expected: 三个命令退出码均为 0。

- [ ] **Step 3：检查生成路由**

Run: `find docs/vibe-coding -mindepth 1 -maxdepth 1 -type d -print | sort`

Expected: 只包含 6 个目标 slug 目录，不包含 `Zeno` 或 `claude-code-skills`。

- [ ] **Step 4：实际浏览器预览**

运行 `npm run dev` 并检查：

1. `/vibe-coding/` 只有 6 张卡片且顺序正确；桌面双列与移动单列无溢出。
2. 6 个详情页的标题、段落、列表和外链正常。
3. Claude Cream Logo 与横幅正常显示。
4. 两个旧详情 URL 返回 404。

- [ ] **Step 5：范围与文档检查**

```bash
git status --short
git diff --check
git diff --stat
```

Expected: 不暂存或修改 `.codegraph/`、`public/images/` 等用户原有文件。README 无需更新；未产生跨任务新经验时，`tasks/lessons.md` 无需更新。

- [ ] **Step 6：提交构建产物**

如果构建修改了已跟踪的 `docs/`：

```bash
git add docs
git diff --cached --check
git commit -m "deploy: 更新 Vibe Coding 页面"
```

- [ ] **Step 7：推送**

先检查当前分支和工作区。若仍在 `master`，按项目 Git 规则停止并切换非默认功能分支；确认后运行 `git push`。不得使用 force push。
