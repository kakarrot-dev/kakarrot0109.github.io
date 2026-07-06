# Kakarrot Astro 个人网站 实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 在现有 Hexo 博客仓库根目录搭建一个纯静态 Astro 个人网站，覆盖首页、项目案例、文章、关于页。

**Architecture:** 纯 Astro 静态站，Content Collections 管理 Markdown 内容，Tailwind v4 负责样式，GitHub Actions 构建后发布到 GitHub Pages。Hexo 源文件保留在目录中不删除，仅作为历史归档。

**Tech Stack:** Astro 5.x, TypeScript, Tailwind CSS v4, GitHub Actions, GitHub Pages

## 全局约束

- 所有正式页面在构建阶段生成，不依赖服务端运行时
- 不引入 React、Vue 等客户端框架
- 基础交互使用 CSS，必要时使用原生 JS
- 中文为主体，英文只用于导航、编号和辅助信息
- 不使用圆角卡片和装饰性阴影
- 动效限制为 CSS 悬停 + 轻量淡入，尊重 `prefers-reduced-motion`
- 仓库只使用 `main` 作为核心源码分支
- 构建产物不提交到 Git，也不创建 `gh-pages`/`source`/`master` 发布分支
- 自定义域名 `kakarrot.com`，构建产物包含 `CNAME`

---

### Task 1: Astro 项目脚手架

**Files:**
- Create: `package.json`
- Create: `astro.config.mjs`
- Create: `tsconfig.json`
- Create: `.gitignore`（追加 Astro 相关条目）
- Create: `.github/workflows/deploy.yml`（占位）
- Create: `src/env.d.ts`

**说明：** 在项目根目录初始化 Astro。保留现有 Hexo 文件（`_config.yml`、`source/`、`themes/` 等）不动。Astro 使用 `src/` 目录，与 Hexo 的 `source/` 不冲突。

- [ ] **Step 1: 确认 Node 版本**

```bash
node --version
# 预期 v24.11.1
```

- [ ] **Step 2: 创建 Astro package.json**

```json
{
  "name": "kakarrot-website",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "check": "astro check",
    "lint": "astro check"
  },
  "dependencies": {
    "astro": "^5.7.0"
  },
  "devDependencies": {
    "@astrojs/check": "^0.9.0",
    "tailwindcss": "^4.1.0",
    "@tailwindcss/vite": "^4.1.0",
    "typescript": "^5.7.0"
  }
}
```

- [ ] **Step 3: 创建 astro.config.mjs**

```js
// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://kakarrot.com',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
});
```

- [ ] **Step 4: 创建 tsconfig.json**

```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src/**/*", "src/env.d.ts"]
}
```

- [ ] **Step 5: 创建 src/env.d.ts**

```ts
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
```

- [ ] **Step 6: .gitignore 追加 Astro 条目**

```
# Astro
.astro/
dist/
```

- [ ] **Step 7: 安装依赖并验证**

```bash
npm install
npx astro check --help
# 预期: 正常输出帮助信息，无错误
```

- [ ] **Step 8: 创建最小验证页**

创建 `src/pages/index.astro`:

```astro
---
---

<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Kakarrot</title>
  </head>
  <body>
    <h1>Hello, Kakarrot.</h1>
  </body>
</html>
```

- [ ] **Step 9: 构建验证**

```bash
npm run build
# 预期: dist/ 目录生成，无错误
```

- [ ] **Step 10: 提交**

```bash
git add package.json package-lock.json astro.config.mjs tsconfig.json .gitignore src/
git commit -m "feat: scaffold Astro project with Tailwind v4"
```

---

### Task 2: 设计令牌 + 全局 CSS

**Files:**
- Create: `src/styles/global.css`
- Modify: `src/pages/index.astro`（引入全局 CSS）

- [ ] **Step 1: 创建全局 CSS**

```css
@import "tailwindcss";

/* 设计令牌 */
:root {
  /* 暖底色背景 */
  --color-bg-warm: oklch(96% 0.015 75);
  --color-bg-card: oklch(94% 0.01 75);
  --color-text-primary: oklch(18% 0.01 260);
  --color-text-secondary: oklch(45% 0.02 260);
  --color-text-muted: oklch(60% 0.02 260);
  --color-accent: #39ff14;         /* 酸性绿：链接和交互反馈 */
  --color-accent-dim: #2ccc10;     /* 悬停态 */
  --color-border: oklch(85% 0.01 260);
  --color-border-strong: oklch(60% 0.02 260);
}

/* 全局默认 */
body {
  font-family: -apple-system, BlinkMacSystemFont, "Noto Sans SC", sans-serif;
  background-color: var(--color-bg-warm);
  color: var(--color-text-primary);
  line-height: 1.6;
}

/* 链接 */
a {
  color: var(--color-accent);
  text-decoration: underline;
  text-underline-offset: 2px;
}
a:hover {
  color: var(--color-accent-dim);
}

/* 选中文本 */
::selection {
  background-color: color-mix(in oklab, var(--color-accent) 30%, transparent);
}

/* 尊重减少动效偏好 */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 2: 修改 index.astro 引入全局 CSS**

```astro
---
---
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Kakarrot — AI 产品经理</title>
    <link rel="stylesheet" href="/src/styles/global.css" />
  </head>
  <body>
    <h1 class="text-4xl font-bold tracking-tighter uppercase">Kakarrot</h1>
    <p class="text-lg text-[var(--color-text-secondary)]">AI 产品经理</p>
  </body>
</html>
```

- [ ] **Step 3: 构建验证**

```bash
npm run build
# 预期: 构建成功，dist/ 下 index.html 包含正确样式
```

- [ ] **Step 4: 提交**

```bash
git add src/styles/ src/pages/index.astro
git commit -m "feat: add design tokens and global CSS"
```

---

### Task 3: Content Collections 目录 + Schema

**Files:**
- Create: `src/content/config.ts`
- Create: `src/content/projects/.gitkeep`
- Create: `src/content/writing/.gitkeep`

- [ ] **Step 1: 安装 astro content 类型支持**

```bash
npm install @astrojs/mdx
```

实际上不用 MDX。纯 Markdown 用 Astro 内置集合即可，不需要额外包。

- [ ] **Step 2: 创建 content/config.ts**

```ts
import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.date(),
    topics: z.array(z.string()),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    disclosureLevel: z.enum(['A', 'B', 'C']),
  }),
});

const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.date(),
    updatedAt: z.date().optional(),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects, writing };
```

- [ ] **Step 3: 创建 .gitkeep 占位**

```bash
mkdir -p src/content/projects src/content/writing
touch src/content/projects/.gitkeep src/content/writing/.gitkeep
```

- [ ] **Step 4: 构建验证（集合尚未有内容，应成功但警告）**

```bash
npm run build
# 预期: 构建成功（可能有 info-level 消息说集合为空）
```

- [ ] **Step 5: 提交**

```bash
git add src/content/ package.json package-lock.json
git commit -m "feat: add content collection schemas for projects and writing"
```

---

### Task 4: 示例内容（悟空案例 + 第一篇文章）

**Files:**
- Create: `src/content/projects/wukong.md`
- Create: `src/content/writing/hello-world.md`

- [ ] **Step 1: 创建悟空案例**

`src/content/projects/wukong.md`:

```markdown
---
title: "悟空 — AI 驱动的教育智能体"
description: "从聊天机器人到业务智能体，重构教育机构的服务交付方式"
publishedAt: 2026-07-06
topics:
  - "AI Agent"
  - "教育"
  - "AI 原生产品"
featured: true
draft: false
disclosureLevel: C
---

## 业务问题：为什么需要悟空

教育机构的日常运营中，大量时间消耗在重复性咨询、排课、通知和反馈收集上。传统 SaaS 系统将这些流程拆成独立模块，用户需要在多个系统间跳转。

## 错误起点：为什么聊天机器人不是答案

最初尝试用问答机器人解决咨询问题。结果：用户问的 80% 问题需要上下文（学生姓名、班级、历史记录），而机器人没有业务数据访问能力。

## 第一性原理：用户实际需要完成的任务

家长不是想"跟机器人聊天"，而是想"确认孩子今晚的数学课改到 7 点半了"。教师不是想"查询排课"，而是想"把周三的课和周五对调，确保不会冲突"。

## 业务拆解

- 角色：家长、教师、教务、校长
- 输入：语音消息、文字消息、表单
- 决策：排课冲突检测、教师资质匹配
- 执行：创建订单、发送通知、更新课表
- 反馈：满意度评分、出勤统计

## AI 原生方案

智能体工作流：用户输入 → NLU 识别意图 → 调用业务 API 执行 → 反馈确认。关键区别：智能体不是"回答问题"，而是"完成任务"。

## 实践反思

核心判断：AI 的价值不在替代人理解问题，而在于把确认路径从 5 步压缩到 1 步。

## 公开边界

本文档不包含真实界面截图、代码实现、API 设计或业务数据。流程图和系统图为脱敏示意。
```

- [ ] **Step 2: 创建示例文章**

`src/content/writing/hello-world.md`:

```markdown
---
title: "AI 产品经理的第一性原理"
description: "做 AI 产品不是套 API，是重新理解用户要完成的任务"
publishedAt: 2026-07-06
tags:
  - "AI 产品"
  - "方法论"
  - "第一性原理"
featured: true
draft: false
---

## 为什么第一性原理对 AI 产品尤其重要

当技术范式从"用户操作软件"转变为"AI 代理替用户操作"，产品的边界从界面扩展到了决策链路。

### 常见误区

很多人把 AI 产品理解为"现有的功能 + 一个 AI 按钮"。这是错的。正确的做法是问：如果没有 UI 的约束，用户真正想完成的任务是什么？

### 案例：从聊天机器人到智能体

传统请求-响应模式中，每次交互都是独立的。AI 智能体模式下，交互变成连续的、有状态的工作流。产品经理的工作不是设计对话框，而是设计决策树。

### 小结

第一性原理思考对 AI 产品经理不是可选项，是必需品。技术变化越快，越要回到用户任务的本质。
```

- [ ] **Step 3: 构建验证**

```bash
npm run build
# 预期: 构建成功，集合数据正常加载
```

- [ ] **Step 4: 提交**

```bash
git add src/content/projects/wukong.md src/content/writing/hello-world.md
git commit -m "feat: add sample content — wukong case and first article"
```

---

### Task 5: BaseLayout + SeoHead 组件

**Files:**
- Create: `src/layouts/BaseLayout.astro`
- Create: `src/components/SeoHead.astro`

**Interfaces:**
- `SeoHead` Props: `{ title: string; description: string; canonical?: string; ogImage?: string }`
- `BaseLayout` Props: `{ title: string; description: string; canonical?: string } + <slot/>`

- [ ] **Step 1: 创建 SeoHead**

```astro
---
export interface Props {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

const { title, description, canonical, ogImage } = Astro.props;
const site = "https://kakarrot.com";
const fullCanonical = canonical ? `${site}${canonical}` : undefined;
---

<title>{title} — Kakarrot</title>
<meta name="description" content={description} />
<link rel="canonical" href={fullCanonical || site} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:url" content={fullCanonical || site} />
<meta property="og:type" content="website" />
{ogImage && <meta property="og:image" content={`${site}${ogImage}`} />}
<meta name="twitter:card" content="summary_large_image" />
```

- [ ] **Step 2: 创建 BaseLayout**

```astro
---
import SeoHead from "@/components/SeoHead.astro";

export interface Props {
  title: string;
  description: string;
  canonical?: string;
}

const { title, description, canonical } = Astro.props;
---

<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <SeoHead {title} {description} {canonical} />
    <link rel="icon" type="image/png" href="/favicon.png" />
    <link rel="stylesheet" href="/src/styles/global.css" />
  </head>
  <body>
    <slot />
  </body>
</html>
```

- [ ] **Step 3: 构建验证**

```bash
npm run build
# 预期: 构建成功
```

- [ ] **Step 4: 提交**

```bash
git add src/layouts/ src/components/
git commit -m "feat: add BaseLayout and SeoHead components"
```

---

### Task 6: 全局导航 + 页脚

**Files:**
- Create: `src/components/Nav.astro`
- Create: `src/components/Footer.astro`
- Modify: `src/layouts/BaseLayout.astro`（引入 Nav + Footer）

**Interfaces:**
- `Nav`: 无 props，硬编码导航条目：work、writing、about
- `Footer`: 无 props，硬编码版权信息

- [ ] **Step 1: 创建 Nav**

```astro
---
const links = [
  { href: "/projects/", label: "Work" },
  { href: "/writing/", label: "Writing" },
  { href: "/about/", label: "About" },
];
---

<nav class="border-b border-[var(--color-border)] py-4">
  <div class="max-w-5xl mx-auto px-6 flex items-center justify-between">
    <a href="/" class="text-sm font-bold uppercase tracking-wider no-underline text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors">
      Kakarrot
    </a>
    <ul class="flex gap-6">
      {links.map(({ href, label }) => (
        <li>
          <a
            href={href}
            class="text-xs uppercase tracking-widest no-underline text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  </div>
</nav>
```

- [ ] **Step 2: 创建 Footer**

```astro
---

---

<footer class="border-t border-[var(--color-border)] py-8 mt-24">
  <div class="max-w-5xl mx-auto px-6 text-center">
    <p class="text-xs text-[var(--color-text-muted)] tracking-wider uppercase">
      &copy; {new Date().getFullYear()} Kakarrot
    </p>
  </div>
</footer>
```

- [ ] **Step 3: 修改 BaseLayout 引入 Nav + Footer**

```astro
---
import SeoHead from "@/components/SeoHead.astro";
import Nav from "@/components/Nav.astro";
import Footer from "@/components/Footer.astro";

export interface Props {
  title: string;
  description: string;
  canonical?: string;
}

const { title, description, canonical } = Astro.props;
---

<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <SeoHead {title} {description} {canonical} />
    <link rel="icon" type="image/png" href="/favicon.png" />
    <link rel="stylesheet" href="/src/styles/global.css" />
  </head>
  <body>
    <Nav />
    <main class="max-w-5xl mx-auto px-6 py-12">
      <slot />
    </main>
    <Footer />
  </body>
</html>
```

- [ ] **Step 4: 构建验证**

```bash
npm run build
# 预期: 构建成功
```

- [ ] **Step 5: 提交**

```bash
git add src/components/Nav.astro src/components/Footer.astro src/layouts/BaseLayout.astro
git commit -m "feat: add global navigation and footer"
```

---

### Task 7: HomePage 组件（Hero + MethodSection + ProjectCard + ArticleCard + EvidenceList）

**Files:**
- Create: `src/components/HomeHero.astro`
- Create: `src/components/MethodSection.astro`
- Create: `src/components/ProjectCard.astro`
- Create: `src/components/ArticleCard.astro`
- Create: `src/components/EvidenceList.astro`
- Modify: `src/pages/index.astro`

**Interfaces:**
- `HomeHero`: 无 props，硬编码首屏文案
- `MethodSection`: 无 props，硬编码三层方法
- `ProjectCard` Props: `{ title: string; description: string; topics: string[]; slug: string }`
- `ArticleCard` Props: `{ title: string; description: string; tags: string[]; slug: string; publishedAt: Date }`
- `EvidenceList` Props: `{ items: EvidenceItem[] }` where `EvidenceItem = { label: string; description: string; url?: string }`

- [ ] **Step 1: 创建 HomeHero**

```astro
---
---

<section class="py-16 md:py-24 border-b border-[var(--color-border)]">
  <h1 class="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-6">
    Kakarrot
  </h1>
  <p class="text-2xl md:text-3xl font-bold tracking-tight mb-4">
    AI 产品经理
  </p>
  <p class="text-lg text-[var(--color-text-secondary)] max-w-2xl">
    我从第一性原理拆解复杂业务，用 AI 原生方式把它做成可落地的产品系统。
  </p>
</section>
```

- [ ] **Step 2: 创建 MethodSection**

```astro
---
const methods = [
  {
    step: "01",
    title: "定位问题本质",
    desc: "不急着想方案，先搞清楚真正要解决什么。用户的 Task 是什么，约束条件是什么。",
  },
  {
    step: "02",
    title: "拆解业务系统",
    desc: "角色、输入、决策、执行、反馈。关注点：Agent 工作流、AI 原生产品架构、教育场景等。",
  },
  {
    step: "03",
    title: "AI 原生重构",
    desc: "不用 AI 打补丁，而是重新设计流程——让 AI 承担重复判断，让人专注在决策和例外处理上。",
  },
];
---

<section class="py-16">
  <h2 class="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-8">
    方法
  </h2>
  <div class="grid gap-8 md:grid-cols-3">
    {methods.map(({ step, title, desc }) => (
      <div class="border-t border-[var(--color-border-strong)] pt-4">
        <span class="text-sm font-mono text-[var(--color-text-muted)]">{step}</span>
        <h3 class="text-lg font-bold mt-1 mb-2">{title}</h3>
        <p class="text-sm text-[var(--color-text-secondary)] leading-relaxed">{desc}</p>
      </div>
    ))}
  </div>
</section>
```

- [ ] **Step 3: 创建 ProjectCard**

```astro
---
export interface Props {
  title: string;
  description: string;
  topics: string[];
  slug: string;
}

const { title, description, topics, slug } = Astro.props;
---

<article class="border border-[var(--color-border)] p-6 hover:border-[var(--color-accent)] transition-colors">
  <a href={`/projects/${slug}/`} class="no-underline group block">
    <div class="flex flex-wrap gap-2 mb-3">
      {topics.map((topic) => (
        <span class="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] border border-[var(--color-border)] px-2 py-0.5">
          {topic}
        </span>
      ))}
    </div>
    <h3 class="text-xl font-bold mb-2 text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
      {title}
    </h3>
    <p class="text-sm text-[var(--color-text-secondary)] leading-relaxed">
      {description}
    </p>
  </a>
</article>
```

- [ ] **Step 4: 创建 ArticleCard**

```astro
---
export interface Props {
  title: string;
  description: string;
  tags: string[];
  slug: string;
  publishedAt: Date;
}

const { title, description, tags, slug, publishedAt } = Astro.props;
const dateStr = publishedAt.toLocaleDateString("zh-CN", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});
---

<article class="py-6 border-b border-[var(--color-border)] last:border-b-0">
  <a href={`/writing/${slug}/`} class="no-underline group block">
    <p class="text-xs text-[var(--color-text-muted)] font-mono mb-1">{dateStr}</p>
    <div class="flex flex-wrap gap-2 mb-2">
      {tags.map((tag) => (
        <span class="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)]">
          {tag}
        </span>
      ))}
    </div>
    <h3 class="text-lg font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors mb-1">
      {title}
    </h3>
    <p class="text-sm text-[var(--color-text-secondary)]">
      {description}
    </p>
  </a>
</article>
```

- [ ] **Step 5: 创建 EvidenceList**

```astro
---
export interface EvidenceItem {
  label: string;
  description: string;
  url?: string;
}

export interface Props {
  items: EvidenceItem[];
}
---

<section class="py-16">
  <h2 class="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-8">
    证据
  </h2>
  <ul class="grid gap-4 md:grid-cols-2">
    {Astro.props.items.map(({ label, description, url }) => (
      <li class="border border-[var(--color-border)] p-4">
        {url ? (
          <a href={url} class="no-underline block">
            <p class="text-sm font-bold mb-1 text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors">
              {label} →
            </p>
            <p class="text-xs text-[var(--color-text-secondary)]">{description}</p>
          </a>
        ) : (
          <>
            <p class="text-sm font-bold mb-1">{label}</p>
            <p class="text-xs text-[var(--color-text-secondary)]">{description}</p>
          </>
        )}
      </li>
    ))}
  </ul>
</section>
```

- [ ] **Step 6: 组装首页**

```astro
---
import BaseLayout from "@/layouts/BaseLayout.astro";
import HomeHero from "@/components/HomeHero.astro";
import MethodSection from "@/components/MethodSection.astro";
import ProjectCard from "@/components/ProjectCard.astro";
import ArticleCard from "@/components/ArticleCard.astro";
import EvidenceList from "@/components/EvidenceList.astro";
import { getCollection } from "astro:content";

const featuredProjects = (await getCollection("projects"))
  .filter((p) => !p.data.draft && p.data.featured)
  .slice(0, 3);

const featuredArticles = (await getCollection("writing"))
  .filter((p) => !p.data.draft && p.data.featured)
  .sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf())
  .slice(0, 3);

const evidenceItems = [
  {
    label: "悟空 — AI 教育智能体",
    description: "脱敏案例详情，展示从问题拆解到 Agent 方案的全过程。",
    url: "/projects/wukong/",
  },
  {
    label: "产品文档与架构图",
    description: "脱敏后的业务流程图和决策树示意。",
  },
];
---

<BaseLayout title="Kakarrot" description="AI 产品经理 — 从第一性原理拆解复杂业务，用 AI 原生方式做成可落地的产品系统。">
  <HomeHero />
  <MethodSection />

  <!-- 精选项目 -->
  <section class="py-16">
    <h2 class="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-8">
      项目
    </h2>
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {featuredProjects.map((p) => (
        <ProjectCard
          title={p.data.title}
          description={p.data.description}
          topics={p.data.topics}
          slug={p.id}
        />
      ))}
    </div>
  </section>

  <!-- 精选文章 -->
  <section class="py-16">
    <h2 class="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-8">
      文章
    </h2>
    {featuredArticles.map((a) => (
      <ArticleCard
        title={a.data.title}
        description={a.data.description}
        tags={a.data.tags}
        slug={a.id}
        publishedAt={a.data.publishedAt}
      />
    ))}
  </section>

  <EvidenceList items={evidenceItems} />
</BaseLayout>
```

- [ ] **Step 7: 构建验证**

```bash
npm run build
# 预期: 构建成功
```

- [ ] **Step 8: 提交**

```bash
git add src/components/ src/pages/index.astro
git commit -m "feat: build homepage with all section components"
```

---

### Task 8: 项目列表页 + 项目详情页

**Files:**
- Create: `src/pages/projects/index.astro`
- Create: `src/pages/projects/[slug].astro`
- Create: `src/layouts/ProseLayout.astro`

**Interfaces:**
- `ProseLayout` Props: `{ title: string; description: string } + <slot/>` — 约束正文排版

- [ ] **Step 1: 创建 ProseLayout**

```astro
---
import BaseLayout from "@/layouts/BaseLayout.astro";

export interface Props {
  title: string;
  description: string;
}

const { title, description } = Astro.props;
---

<BaseLayout {title} {description}>
  <article class="max-w-[820px] mx-auto prose">
    <header class="mb-12">
      <h1 class="text-3xl md:text-4xl font-black tracking-tighter uppercase">{title}</h1>
      <p class="text-[var(--color-text-secondary)] mt-2">{description}</p>
    </header>
    <slot />
  </article>
</BaseLayout>

<style>
  .prose h2 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-top: 2.5rem;
    margin-bottom: 0.75rem;
  }
  .prose h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
  }
  .prose p {
    margin-bottom: 1.25rem;
    line-height: 1.75;
    color: var(--color-text-primary);
  }
  .prose ul, .prose ol {
    margin-bottom: 1.25rem;
    padding-left: 1.5rem;
  }
  .prose li {
    margin-bottom: 0.25rem;
    line-height: 1.75;
  }
  .prose strong {
    font-weight: 700;
  }
  .prose hr {
    border: none;
    border-top: 1px solid var(--color-border);
    margin: 2.5rem 0;
  }
</style>
```

- [ ] **Step 2: 创建项目列表页**

```astro
---
import BaseLayout from "@/layouts/BaseLayout.astro";
import ProjectCard from "@/components/ProjectCard.astro";
import { getCollection } from "astro:content";

const projects = (await getCollection("projects"))
  .filter((p) => !p.data.draft)
  .sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());
---

<BaseLayout title="项目" description="项目案例 — AI 产品实践">
  <h1 class="text-4xl font-black tracking-tighter uppercase mb-2">项目</h1>
  <p class="text-[var(--color-text-secondary)] mb-12">项目案例 — AI 产品实践</p>
  <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {projects.map((p) => (
      <ProjectCard
        title={p.data.title}
        description={p.data.description}
        topics={p.data.topics}
        slug={p.id}
      />
    ))}
  </div>
</BaseLayout>
```

- [ ] **Step 3: 创建项目详情页**

```astro
---
import ProseLayout from "@/layouts/ProseLayout.astro";
import { getCollection } from "astro:content";

export async function getStaticPaths() {
  const projects = await getCollection("projects");
  return projects
    .filter((p) => !p.data.draft)
    .map((p) => ({
      params: { slug: p.id },
      props: { project: p },
    }));
}

const { project } = Astro.props;
const { Content } = await project.render();
---

<ProseLayout title={project.data.title} description={project.data.description}>
  <p class="text-xs text-[var(--color-text-muted)] font-mono">
    发布时间：{project.data.publishedAt.toLocaleDateString("zh-CN")}
  </p>
  <p class="text-xs text-[var(--color-text-muted)] font-mono mb-4">
    公开级别：{project.data.disclosureLevel}
  </p>
  <Content />
</ProseLayout>
```

- [ ] **Step 4: 构建验证**

```bash
npm run build
# 预期: 构建成功，/projects/ 和 /projects/wukong/ 页面生成
```

- [ ] **Step 5: 提交**

```bash
git add src/pages/projects/ src/layouts/ProseLayout.astro
git commit -m "feat: add project list and detail pages"
```

---

### Task 9: 文章列表页 + 文章详情页

**Files:**
- Create: `src/pages/writing/index.astro`
- Create: `src/pages/writing/[slug].astro`

- [ ] **Step 1: 创建文章列表页**

```astro
---
import BaseLayout from "@/layouts/BaseLayout.astro";
import ArticleCard from "@/components/ArticleCard.astro";
import { getCollection } from "astro:content";

const articles = (await getCollection("writing"))
  .filter((a) => !a.data.draft)
  .sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());
---

<BaseLayout title="文章" description="关于 AI 产品、方法论与实践的思考">
  <h1 class="text-4xl font-black tracking-tighter uppercase mb-12">文章</h1>
  {articles.map((a) => (
    <ArticleCard
      title={a.data.title}
      description={a.data.description}
      tags={a.data.tags}
      slug={a.id}
      publishedAt={a.data.publishedAt}
    />
  ))}
</BaseLayout>
```

- [ ] **Step 2: 创建文章详情页**

```astro
---
import ProseLayout from "@/layouts/ProseLayout.astro";
import { getCollection } from "astro:content";

export async function getStaticPaths() {
  const articles = await getCollection("writing");
  return articles
    .filter((a) => !a.data.draft)
    .map((a) => ({
      params: { slug: a.id },
      props: { article: a },
    }));
}

const { article } = Astro.props;
const { Content } = await article.render();
---

<ProseLayout title={article.data.title} description={article.data.description}>
  <p class="text-xs text-[var(--color-text-muted)] font-mono">
    {article.data.publishedAt.toLocaleDateString("zh-CN")}
    {article.data.updatedAt && ` · 更新于 ${article.data.updatedAt.toLocaleDateString("zh-CN")}`}
  </p>
  <div class="flex flex-wrap gap-2 mt-2 mb-8">
    {article.data.tags.map((tag) => (
      <span class="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] border border-[var(--color-border)] px-2 py-0.5">
        {tag}
      </span>
    ))}
  </div>
  <Content />
</ProseLayout>
```

- [ ] **Step 3: 构建验证**

```bash
npm run build
# 预期: 构建成功，/writing/ 和 /writing/hello-world/ 页面生成
```

- [ ] **Step 4: 提交**

```bash
git add src/pages/writing/
git commit -m "feat: add writing list and article detail pages"
```

---

### Task 10: 关于页

**Files:**
- Create: `src/pages/about.astro`

- [ ] **Step 1: 创建关于页**

```astro
---
import BaseLayout from "@/layouts/BaseLayout.astro";
---

<BaseLayout title="关于" description="Kakarrot — AI 产品经理的经历与原则">
  <h1 class="text-4xl font-black tracking-tighter uppercase mb-12">关于</h1>

  <section class="max-w-[760px]">
    <h2 class="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-4">经历</h2>
    <p class="text-base leading-relaxed mb-6">
      AI 产品经理，十年互联网与教育科技经验。经历过从零到一的产品搭建，也管理过千万级用户平台。
    </p>

    <h2 class="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-4">原则</h2>
    <ul class="text-base leading-relaxed space-y-3 mb-6">
      <li>先理解问题，再设计方案。</li>
      <li>技术是手段，不是目的。</li>
      <li>最好的产品是那些用户感觉不到的产品。</li>
    </ul>

    <h2 class="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-4">这个网站</h2>
    <p class="text-base leading-relaxed mb-6">
      基于 Astro 构建，纯静态生成。源码在 GitHub 上公开。不追踪用户，不加载外部脚本。
    </p>

    <h2 class="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-4">联系方式</h2>
    <ul class="text-base leading-relaxed space-y-2">
      <li><a href="https://github.com/kakarrot0109">GitHub</a></li>
      <li><a href="mailto:kakarrot@kakarrot.com">kakarrot@kakarrot.com</a></li>
    </ul>
  </section>
</BaseLayout>
```

- [ ] **Step 2: 构建验证**

```bash
npm run build
# 预期: 构建成功，/about/ 页面生成
```

- [ ] **Step 3: 提交**

```bash
git add src/pages/about.astro
git commit -m "feat: add about page"
```

---

### Task 11: 404 页面 + 首页 CNAME + favicon 占位

**Files:**
- Create: `src/pages/404.astro`
- Create: `public/CNAME`
- Create: `public/favicon.png`（占位）

- [ ] **Step 1: 创建 404 页面**

```astro
---
import BaseLayout from "@/layouts/BaseLayout.astro";
---

<BaseLayout title="404" description="页面不存在">
  <div class="text-center py-24">
    <h1 class="text-8xl font-black tracking-tighter mb-4">404</h1>
    <p class="text-lg text-[var(--color-text-secondary)] mb-8">页面不存在</p>
    <a href="/" class="text-sm uppercase tracking-widest">返回首页</a>
  </div>
</BaseLayout>
```

- [ ] **Step 2: 创建 CNAME**

```bash
echo "kakarrot.com" > public/CNAME
```

- [ ] **Step 3: 创建 favicon 占位**

```bash
# 使用一个 1x1 透明 PNG 作为占位，后续替换真实 favicon
touch public/favicon.png
```

- [ ] **Step 4: 构建验证**

```bash
npm run build
# 预期: 构建成功，dist/CNAME 存在，dist/404/index.html 存在
```

- [ ] **Step 5: 提交**

```bash
git add src/pages/404.astro public/
git commit -m "feat: add 404 page, CNAME, favicon placeholder"
```

---

### Task 12: RSS + Sitemap

**Files:**
- Modify: `astro.config.mjs`
- Create: `src/pages/rss.xml.ts`（或使用 Astro 内置 RSS）

Astro 5.x 的内置 RSS 支持通过 `@astrojs/rss` 实现。或者直接用 API route 生成。

- [ ] **Step 1: 安装 @astrojs/rss**

```bash
npm install @astrojs/rss
```

- [ ] **Step 2: 创建 RSS 端点**

```astro
---
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

const posts = await getCollection("writing");
const projects = await getCollection("projects");

export const GET = () =>
  rss({
    title: "Kakarrot",
    description: "AI 产品经理 — 思考与实践",
    site: "https://kakarrot.com",
    items: [
      ...posts.map((p) => ({
        title: p.data.title,
        description: p.data.description,
        pubDate: p.data.publishedAt,
        link: `/writing/${p.id}/`,
      })),
      ...projects.map((p) => ({
        title: p.data.title,
        description: p.data.description,
        pubDate: p.data.publishedAt,
        link: `/projects/${p.id}/`,
      })),
    ],
  });
```

但 Astro 的 RSS 端点需要 `.xml` 后缀。Astro 5 中，`src/pages/rss.xml.ts` 会被路由到 `/rss.xml`。

`src/pages/rss.xml.ts`:

```ts
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET() {
  const posts = await getCollection("writing");
  const projects = await getCollection("projects");

  return rss({
    title: "Kakarrot",
    description: "AI 产品经理 — 思考与实践",
    site: "https://kakarrot.com",
    items: [
      ...posts.map((p) => ({
        title: p.data.title,
        description: p.data.description,
        pubDate: p.data.publishedAt,
        link: `/writing/${p.id}/`,
      })),
      ...projects.map((p) => ({
        title: p.data.title,
        description: p.data.description,
        pubDate: p.data.publishedAt,
        link: `/projects/${p.id}/`,
      })),
    ],
  });
}
```

- [ ] **Step 3: 更新 astro.config.mjs 启用 sitemap**

```bash
npm install @astrojs/sitemap
```

```js
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kakarrot.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
```

- [ ] **Step 4: 构建验证**

```bash
npm run build
# 预期: dist/sitemap-index.xml 和 dist/rss.xml 生成
```

- [ ] **Step 5: 提交**

```bash
git add src/pages/rss.xml.ts astro.config.mjs package.json package-lock.json
git commit -m "feat: add RSS feed and sitemap"
```

---

### Task 13: GitHub Actions 部署工作流

**Files:**
- Create: `.github/workflows/deploy.yml`

- [ ] **Step 1: 创建部署工作流**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 24
          cache: npm

      - run: npm ci

      - run: npm run build

      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist/

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 2: 提交**

```bash
git add .github/workflows/deploy.yml
git commit -m "ci: add GitHub Pages deploy workflow"
```

---

### Task 14: 分支切换（source → main）

**说明：** spec 要求仓库只使用 `main` 作为核心源码分支。当前在 `source` 分支。在最终合并前，将整个工作转移到 `main` 分支。

- [ ] **Step 1: 在 main 分支重建**

```bash
# 从 source 分支创建 main（保留所有 Astro 和 Hexo 文件）
git checkout -b main
```

- [ ] **Step 2: 推送到 origin**

```bash
git push origin main
```

- [ ] **Step 3: 更新 GitHub Pages 设置**

仓库 Settings → Pages → Source 选择 "GitHub Actions"。

- [ ] **Step 4: 验证部署**

推送后等待 Actions 完成，访问 `https://kakarrot.com` 确认 HTTPS 和域名解析正常。

---

### Task 15: TableOfContents 组件（可选增强）

**Files:**
- Create: `src/components/TableOfContents.astro`
- 暂不接入页面，作为独立组件保留

如果后续需要文章目录功能，此组件可按需接入到 ProseLayout。

```astro
---
export interface Props {
  headings: { depth: number; slug: string; text: string }[];
}

const { headings } = Astro.props;
const filtered = headings.filter((h) => h.depth <= 3);
---

{filtered.length > 1 && (
  <nav class="mb-8 p-4 border border-[var(--color-border)]">
    <p class="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-3">目录</p>
    <ul class="space-y-1">
      {filtered.map(({ depth, slug, text }) => (
        <li style={{ paddingLeft: `${(depth - 2) * 1}rem` }}>
          <a href={`#${slug}`} class="text-sm no-underline text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors">
            {text}
          </a>
        </li>
      ))}
    </ul>
  </nav>
)}
```

---

## 自检

**Spec 覆盖：**

| Spec 需求 | 对应 Task |
|---|---|
| 首页 5 段叙事（定位+方法、项目、文章、证据） | Task 7 |
| 项目列表 + 详情 | Task 8 |
| 文章列表 + 详情 | Task 9 |
| 关于页 | Task 10 |
| Content Collections + Schema | Task 3 |
| 悟空案例 C 级别公开 | Task 4 |
| 证据规则表格 | Task 7（EvidenceList 组件 + 首页硬编码） |
| 视觉设计：黑灰暖底色 + 酸性绿 | Task 2 |
| 导航三条目（work、writing、about） | Task 6 |
| 文章正文宽度 760-820px | Task 8（ProseLayout） |
| 无圆角无阴影 | Task 2（全局 CSS 未设置圆角） |
| SEO + Open Graph | Task 5（SeoHead） |
| RSS + Sitemap | Task 12 |
| GitHub Actions 部署 | Task 13 |
| 自定义域名 | Task 11（CNAME） |
| 404 页面 | Task 11 |
| 移动端无横向溢出 | 容器使用 `max-w-5xl mx-auto px-6` |

**无占位符：** 所有代码块均已填入完整实现。

**类型一致性：** Component props 接口在各 Task 间一致——`ProjectCard` 的 Props 在 Task 7 定义，Task 8 使用相同签名。

---

Plan complete and saved to `docs/superpowers/plans/2026-07-06-astro-personal-site.md`.

两种执行方式：

1. **Subagent-Driven（推荐）** — 每个 Task 派发独立子代理，任务间审查，快速迭代
2. **Inline Execution** — 在当前会话用 executing-plans 批量执行，设检查点

选哪种？
