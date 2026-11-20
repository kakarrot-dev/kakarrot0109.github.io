<p align="center">
  <a href="https://kakarrot.com">
    <img src="./public/images/readme/brand.webp" alt="Kakarrot" width="420" />
  </a>
</p>

<h1 align="center">kakarrot.com</h1>

<p align="center">
  <strong>Quiet Column</strong> · AI 产品经理的个人站与作品集<br/>
  思考、写作与 Vibe Coding 实践 · 明暗双主题
</p>

<p align="center">
  <a href="https://kakarrot.com">Website</a>
  ·
  <a href="https://kakarrot.com/rss.xml">RSS</a>
  ·
  <a href="https://github.com/kakarrot-dev">Author</a>
</p>

<p align="center">
  <a href="https://astro.build"><img src="https://img.shields.io/badge/Astro-7-BC52EE?logo=astro&logoColor=white" alt="Astro 7" /></a>
  <a href="https://nodejs.org"><img src="https://img.shields.io/badge/node-%3E%3D22.23.4-339933?logo=node.js&logoColor=white" alt="Node >= 22.23.4" /></a>
  <a href="https://pages.github.com"><img src="https://img.shields.io/badge/deploy-GitHub%20Pages-222?logo=github" alt="GitHub Pages" /></a>
</p>

---

## Features

- 首页标题旁展示站点头像。简介中的 About、GitHub 和邮件链接带有前置图标，搜索在桌面显示快捷键、在触屏上显示搜索图标。**Projects** 展示五项精选作品，**Writing** 展示最近十一篇文章，点击栏目标题可进入完整归档。
- **Vibe Coding** 归档展示作品标题、简介、日期、主题和封面缩图。旧 `/projects/*` 地址会跳转到 `/vibe-coding/`。
- **Writing** 归档按年份排列文章，日期位于标题下方。展开「标签」可以浏览各主题的文章。
- **About** 收录时间线、做事原则和可折叠的设备清单。首页订阅区提供可复制的 RSS 地址，页脚展示版权与签名。
- **站内搜索**覆盖已发布的文章和作品。点搜索或按 `⌘ K`、`Ctrl+K` 打开，用 `↑`、`↓` 选择，按 `Enter` 跳转，按 `Esc` 关闭。同一栏目内，标题和章节匹配排在仅命中简介、标签或主题的结果前，章节结果可直接跳到正文。
- 文章和作品详情顶部可返回栏目或复制永久链接。Markdown 正文支持行内代码、代码高亮与复制、局部横向滚动表格，以及按需加载的 Mermaid 图表。图表随主题切换重绘，语法有误时保留原始代码。
- 全站使用中性灰明暗主题，首次访问跟随系统，之后记住手动选择。

## Stack

| Layer | Choice |
|---|---|
| Framework | [Astro 7.4](https://astro.build) |
| Styling | Tailwind CSS 4 + `src/styles/global.css` design tokens |
| Content | Astro Content Collections (Markdown) |
| Fonts | Inter Variable · IBM Plex Mono · Libre Baskerville · Noto Sans SC（自托管） |
| Motion | CSS transitions（支持 `prefers-reduced-motion`） |
| Diagrams | Mermaid（客户端渲染） |
| Deploy | GitHub Pages + GitHub Actions |

## Requirements

- **Node.js** `>= 22.23.4`（CI 使用 Node 24）
- **npm**（仓库包管理器）

## Getting started

```bash
npm ci
npm run dev          # http://localhost:4321
```

| Command | Description |
|---|---|
| `npm run dev` | 本地开发服务器 |
| `npm run check` | Astro / TypeScript 检查 |
| `npm run lint` | 同 `check` |
| `npm run build` | 生产构建 → `docs/` |
| `npm run preview` | 本地预览 `docs/` |

发布前在本地检查并预览构建产物。

```bash
npm run check && npm run build && npm run preview
```

## Repository layout

```text
src/
  content.config.ts     Content Collections schema
  components/           UI（Nav、WorkCard、ArticleRow、SiteSearch 等）
  content/
    writing/            博客文章
    vibe-coding/        Vibe Coding 作品
    projects/           历史项目 Markdown（站点不再消费，保留数据）
  data/                 共享数据（如社交链接）
  layouts/              BaseLayout · ProseLayout
  pages/                页面路由、RSS、搜索索引
  styles/global.css     设计令牌与全局样式
public/                 静态资源（favicon、logo、CNAME、README 展示图）
docs/                   GitHub Pages 构建产物（勿手改）
.github/workflows/      部署流水线
AGENTS.md               AI Coding Agent 项目规范
CLAUDE.md               Claude Code 入口
```

## Content

| Collection | Path | Route |
|---|---|---|
| Writing | `src/content/writing/` | `/writing/[slug]/` |
| Vibe Coding | `src/content/vibe-coding/` | `/vibe-coding/[slug]/` |

1. 在对应目录新增 Markdown
2. 按 `src/content.config.ts` 填写 frontmatter
3. `draft: true` 可排除未发布内容
4. `npm run build` 验证

Writing 常用字段有 `title`、`description`、`publishedAt`、`tags`、`featured` 和 `draft`。Vibe Coding 用 `topics` 标记主题，也可填写列表简介 `summary` 和封面 `cover`。

`/rss.xml` 汇集已发布的 Writing 和 Vibe Coding。`/search.json` 在构建时生成，包含这些内容的标题、简介、标签或主题，以及二、三级章节的标题和锚点。

## Design system

Quiet Column 3.1 的规范见 [`DESIGN.md`](./DESIGN.md)，视觉令牌和共用样式见 [`src/styles/global.css`](./src/styles/global.css)。

- 全站以中性灰和留白建立层级，使用 1px 细线区分分区与列表条目
- 栏目页和长文共用最大宽度 692px 的外壳，包含两侧各 24px 内边距。垂直内边距为 64px，在 640px 起为 128px。长文正文为 17px、行高 1.625
- 首页与归档的目录行使用双层图框，标题和说明或日期分行。作品详情页展示整列封面
- 交互反馈集中在链接、按钮和复制状态，尊重系统的减少动效设置

本站使用规范允许的字体替代版。引文使用 Georgia，代码使用 IBM Plex Mono，字形和断行随实际字体变化。中文保留标定字重并禁用合成加粗。macOS 上 550 匹配 PingFang SC Semibold，其他平台按可用真实字重匹配，可变 Noto Sans SC 作为缺字回退。

品牌标识

<p align="center">
  <img src="./public/logo.svg" alt="Kakarrot mark" width="72" />
</p>

## Deployment

推送到 `master` 会触发 GitHub Pages 发布，也可以在 Actions 页面手动运行。[Deploy to GitHub Pages](.github/workflows/deploy.yml)

1. 在 Node.js 24 下运行 `npm ci`。
2. 运行 `npm run check` 和 `npm run build`。
3. 上传此次构建的 `docs/` 并部署到 `github-pages` 环境。

发布域名由 [`public/CNAME`](./public/CNAME) 指定。构建文件写入 `docs/`，仓库里的静态快照可按需随源码提交。[kakarrot.com](https://kakarrot.com)

完成本地检查和提交后，推送当前改动。

```bash
git push origin master
```

## Agent & contribution notes

本仓库面向个人站点维护，同时约定 AI Coding Agent 行为：

| File | Role |
|---|---|
| [`AGENTS.md`](./AGENTS.md) | 项目级 Agent 规范（Codex 等） |
| [`CLAUDE.md`](./CLAUDE.md) | Claude Code 入口 |

中大型改动建议：先 Spec → Plan → 实现 → `check` / `build`。

每次提交前同步更新 README，记录本次改动涉及的功能、运行要求或使用方式。

## Limitations

- 纯静态站：无后端、数据库、评论、账号系统
- 无单元 / E2E 测试；质量门禁以 `astro check` + 构建 + 人工预览为主
- `src/content/projects/` 仅保留历史数据；对外入口已下线并重定向

## License

源码与站点内容版权归作者所有，未经许可请勿复制整站用于商业用途。  
第三方依赖遵循各自开源许可证。
