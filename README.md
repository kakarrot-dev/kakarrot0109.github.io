# kakarrot.com

个人网站 / 技术博客 — AI 产品经理的思考、写作与作品展示。

## 技术栈

| 层 | 选型 |
|---|---|
| 框架 | Astro 5 |
| 样式 | Tailwind CSS 4 + 自研全局样式 |
| 内容 | Astro Content Collections（Markdown） |
| 部署 | GitHub Pages + GitHub Actions |

## 开发

```bash
# 安装依赖
npm install

# 本地开发
npm run dev

# 构建
npm run build

# 类型检查
npm run check
```

## 目录结构

```
src/
  components/     Astro 组件
  content/        内容集合（Markdown）
    projects/     项目案例
    writing/      博客文章
    vibe-coding/  Vibe Coding 作品
    config.ts     集合 schema
  layouts/        页面布局
  pages/          路由
  styles/         全局样式
public/           静态资源
.github/workflows/  部署配置
```

## 部署

推送 `master` 分支即触发 GitHub Actions 自动构建并更新 `docs/` 部署产物。

## 链接

- 网站：https://kakarrot.com
- RSS：https://kakarrot.com/rss.xml
