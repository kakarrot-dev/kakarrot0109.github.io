# 功能规格：Vibe Coding 项目展示与内容优化

## 背景

当前 Vibe Coding 列表按发布时间倒序展示，包含不再需要公开展示的项目，同时缺少 `pm-ai-agent-book` 和 `tampermonkey`。现有详情页的内容结构也不统一，部分内容更接近技术 README，没有充分体现项目背后的产品判断和个人实践。

## 目标

- Vibe Coding 只展示以下 6 个项目，并严格保持固定顺序：
  1. Wukong
  2. kakarrot.com
  3. Claude Cream
  4. Obsidian Wiki
  5. AI Agent 产品经理实战
  6. Tampermonkey
- 将 6 个详情页统一优化为面向网站访客、潜在合作方和 AI 产品从业者的产品案例。
- 用第一人称突出项目动机、关键判断、核心能力、实际价值与当前状态。

## 非目标

- 不新增 Vibe Coding 页面布局、组件或视觉体系。
- 不调整 Content Collections schema。
- 不新增依赖、后端、数据库或管理功能。
- 不把详情页扩写成安装手册或完整技术文档。
- 不虚构用户数量、效率提升、商业成绩或其他无法从仓库确认的数据。
- 不删除已存在的 `Zeno` 和 `claude-code-skills` 源文件。

## 用户场景

- 网站访客进入 Vibe Coding 列表，按指定顺序浏览作者最希望展示的 6 个项目。
- 访客进入详情页后，能够快速理解项目解决的问题、作者的产品判断、主要能力和当前进展。
- 潜在合作方可以从不同项目中识别作者在 AI Agent、知识管理、产品内容、设计系统和效率工具方面的实践能力。

## 需求边界

### 展示范围

列表和静态详情路由只包含以下 slug：

1. `wukong`
2. `kakarrot-website`
3. `claude-cream`
4. `obsidian-wiki`
5. `pm-ai-agent-book`
6. `tampermonkey`

`Zeno` 和 `claude-code-skills` 保留源文件，但通过现有 `draft` 机制停止生成列表项和详情路由。

### 固定顺序

列表页使用显式 slug 顺序，不再依赖 `publishedAt` 排序。固定顺序只影响 Vibe Coding 列表，不改变其他内容集合。

### 详情页内容

每个项目根据真实特点组织内容，整体覆盖以下信息：

- 项目是什么；
- 为什么要做；
- 关键产品决策；
- 核心能力或工作流；
- 项目带来的实际价值；
- 当前状态；
- GitHub 仓库入口。

标题可以根据项目语义调整，不要求机械使用完全相同的章节名。内容应保持第一人称、案例化和可读性，技术细节只在支撑产品判断时保留。

Claude Cream 详情页保留现有品牌 Logo 和横幅。其余项目不新增未经确认的图片。

## 交互流程

1. 用户打开 `/vibe-coding/`。
2. 页面按固定顺序展示 6 张项目卡片。
3. 用户点击卡片进入对应详情页。
4. 详情页展示项目案例内容，并提供 GitHub 仓库链接。
5. 已停止展示的项目不出现在列表中，其详情路由不再生成。

## 数据与状态

- 内容继续存储在 `src/content/vibe-coding/*.md`。
- 使用现有 `draft` 字段控制旧项目是否公开。
- 固定顺序由列表页的 slug 清单定义。
- 不新增浏览器状态、本地存储、数据库字段或 Content Collections 字段。

## 权限与安全

- 不涉及权限、鉴权或敏感数据。
- 内容只引用公开仓库信息，不读取或展示 `.env`、Token、Cookie 或本地运行数据。

## 异常情况

- 固定顺序中配置了不存在或被标记为草稿的 slug 时，该项目不能静默消失；构建阶段应直接报错，避免线上顺序或数量悄然变化。
- Markdown frontmatter 不符合现有 schema 时，由 Astro Content Collections 检查阻止构建。

## 验收标准

- `/vibe-coding/` 只展示指定 6 个项目。
- 6 个项目严格按照需求中的固定顺序排列。
- `Zeno` 和 `claude-code-skills` 不出现在列表中，也不生成公开详情路由。
- `pm-ai-agent-book` 和 `tampermonkey` 拥有可访问的详情页。
- 6 个详情页均采用产品案例叙事，信息来源可追溯到对应仓库，不包含虚构成果。
- 每个详情页包含对应 GitHub 仓库入口。
- Claude Cream 的 Logo 和横幅保持展示。
- `npm run check`、`npm run lint`、`npm run build` 通过。
- 本地实际预览列表页和 6 个详情页，确认页面渲染、顺序和链接正常。
