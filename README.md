# kakarrot.com

个人网站 / 技术博客 — AI 产品经理的思考、写作与作品展示。

- 网站：https://kakarrot.com
- RSS：https://kakarrot.com/rss.xml

## 技术栈

| 层 | 选型 |
|---|---|
| 框架 | Astro 5 |
| 样式 | Tailwind CSS 4 + 自研全局样式 |
| 内容 | Astro Content Collections（Markdown） |
| 字体 | Space Grotesk + Space Mono |
| 部署 | GitHub Pages + GitHub Actions |

## 快速开始

```bash
# 安装依赖
npm install

# 本地开发（默认 http://localhost:4321）
npm run dev

# 类型检查
npm run check

# 构建（产物输出到 docs/）
npm run build

# 预览构建产物
npm run preview
```

## 项目架构

```
src/
  components/       Astro 组件
  content/          内容集合（Markdown）
    projects/       项目案例
    writing/        博客文章
    vibe-coding/    Vibe Coding 作品
    config.ts       集合 schema
  layouts/          页面布局
  pages/            路由页面
  styles/
    global.css      全局样式 & 设计令牌
public/             静态资源（头像、图标、CNAME）
docs/               构建产物（GitHub Pages 部署目录）
.github/workflows/  CI 自动部署
```

## 内容管理

在 `src/content/` 对应目录下新建 Markdown 文件，填写 frontmatter 后构建即可。

| 集合 | 目录 | 路由 |
|---|---|---|
| 博客文章 | `writing/` | `/writing/[slug]/` |
| 项目案例 | `projects/` | `/projects/[slug]/` |
| Vibe Coding | `vibe-coding/` | `/vibe-coding/[slug]/` |

frontmatter 字段定义见 `src/content/config.ts`。设置 `draft: true` 可隐藏未发布内容。

## 部署

推送 `master` 分支触发 GitHub Actions：

1. 运行 `npm run check` + `npm run build`
2. 将 `docs/` 构建产物 commit 并 push

本地手动发布：

```bash
npm run build && git add docs && git commit -m "deploy: 更新内容" && git push
```

## 设计规范

UI 修改遵守 `DESIGN.md`：暖白底色、酸绿强调色（#39ff14）、粗边框 shell 容器布局。

## AI Agent 规范

| 文件 | 用途 |
|---|---|
| `AGENTS.md` | AI Coding Agent 项目规范（Codex 默认读取） |
| `CLAUDE.md` | Claude Code 入口，导入 AGENTS.md |
| `DESIGN.md` | 设计系统规范 |
| `tasks/specs/` | 需求规格（中大型任务） |
| `tasks/plans/` | 开发计划（中大型任务） |
| `tasks/lessons.md` | 可复用项目经验 |

## 已知限制

- 纯静态站，无后端、无数据库、无评论系统
- 无单元测试，验证依赖 `astro check` + 构建 + 手动预览
- 构建产物 `docs/` 由 CI 自动维护，不要手改
