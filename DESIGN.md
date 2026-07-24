# 设计系统 — 静室 Quiet Studio

本文件是 kakarrot.com 视觉与布局的单一真相。UI 改动必须遵守本文。

气质：**克制、干净、有呼吸感、有设计感**。个人品牌博客 + 作品站。

色彩 SSOT：[claude-cream `tokens/tokens.json`](https://github.com/kakarrot-dev/claude-cream)。

---

## 1. 色彩（Claude Cream）

通过 `html[data-theme="light"|"dark"]` 切换。

| Token | Light | Dark | 用途 |
|---|---|---|---|
| `--color-canvas` | `#f5f3e9` | `#2d2e2d` | 页面底 |
| `--color-ink` | `#29271d` | `#e9e6dc` | 主文字 |
| `--color-body` | `#403d36` | `#ddd9cd` | 正文 |
| `--color-muted` | `#6d675b` | `#bbb6a8` | 元信息 |
| `--color-primary` | `#b7791f` | `#e6bf7a` | 强调 / 链接 / CTA |
| `--color-hairline` | `#d8d2c3` | `#3d3d3a` | 细线 |
| `--color-surface` | `#ffffff` | `#303030` | 卡片/浮层底 |
| `--color-teal` | `#2c6f75` | `#75b5bc` | 极少点缀 |

兼容别名（过渡期）：`--color-bg-warm` → canvas；`--color-text-primary` → ink；`--color-accent` → primary；`--color-border` → hairline。

禁止：苔绿、紫渐变、brutal 实色投影、荧光描边。

主题：系统偏好 → `localStorage`；head 内联 boot 防闪。

---

## 2. 字体

| Token | 栈 | 用途 |
|---|---|---|
| `--font-sans` | Noto Sans SC → PingFang SC → Microsoft YaHei → Segoe UI → system-ui | 正文 / UI |
| `--font-mono` | JetBrains Mono → ui-monospace → SF Mono → Cascadia Code → Consolas | 元信息 / 代码 |
| `--font-display` | Syne → sans | 品牌拉丁（KAKARROT） |

自托管 `@fontsource`；`font-display: swap`。不绑死 PingFang。

加载约束（首访体积）：

- Noto Sans SC 只引 `chinese-simplified-400`（700 全量 CJK ~1.1MB，粗体走合成/系统栈）
- JetBrains Mono / Syne 只引 `latin-*` 子集
- 首页对 Noto 400 woff2 做 `rel=preload`

字号阶梯：display / title / body / meta。正文行宽约 `65ch`（阅读柱 760px）。

---

## 3. 布局

| 面 | 宽 | 说明 |
|---|---|---|
| 列表 / 首页区块 | `1120px` | `.container` |
| 内容阅读柱 | `760px` | 视口 `1fr \| 760 \| 1fr` 居中 |

水平 padding：`clamp(20px, 5vw, 48px)`。区块垂直：`64–96px`。

废弃：`.shell` 左右粗边、文字口号 marquee、brutal 投影卡、方法论三列墙、pill 堆。

Header / Footer 全站一份，经 `BaseLayout` 注入。

---

## 4. 信息架构

导航：`Vibe Coding · Writing · About` + 主题切换。不要 Projects。

首页：Hero（雾场）→ VIBE CODING 全宽跑马 → WRITING 行列表 → About 短条 → Footer。

`/projects/*` → `/vibe-coding/`。

---

## 5. 组件约定

- **WorkCard**：封面主导；标题叠在封面上；无封面用渐变占位。
- **ArticleRow**：整行可点；hover = 浅琥珀底 + 左侧 primary 竖条。
- **TOC**：右侧线条常驻，无折叠；窄屏叠到正文上方。
- **Hero**：琥珀雾场（Three.js）；无头像、无「作品/写作」CTA；社交图标+文字。
- 区头：`01` / `02` + 大写英文标题 + 描述 + VIEW ALL。

文案：栏目/区头/chips 优先大写英文；长文中文标题可保留。

---

## 6. Prose

页眉顺序：标题 → 导语 → 时间 → 标签 → 正文。

- 代码块：语法高亮 + 语言标签 + 图标复制；顶栏无背景条；配色跟主题。
- Mermaid：阅读柱内自适应。
- 表格：行 hover 高亮。
- 顶距：导航下 `--page-top`（32px），与栏目页一致。

---

## 7. 动效

- 滚动渐入：短 opacity（可关）。
- 链接：下划线生长。
- 主题：背景/文字 150–200ms。
- Hero：指针视差；`prefers-reduced-motion` 销毁 WebGL → 静态径向渐变。

---

## 8. 封面规范（Cover）

目标：封面像「静室里的一幅静物」，服务扫读与分享，不抢品牌、不喧宾夺主。一张图同时适配站点列表 / 详情氛围 / OG 分享。

### 8.1 用途矩阵

| 场景 | 比例 | 说明 |
|---|---|---|
| Vibe 列表 / 首页跑马（WorkCard） | **16:10** | 主封面；标题叠在图上，需留暗区 |
| Writing 列表（当前行列表） | 可选；若加缩略图用 **3:2** | 不宜喧宾夺主 |
| Writing / Vibe 内容页顶图 | **16:9** 或 **3:2** | 阅读柱内满宽，高度克制 |
| OG / 社交分享 | **1200×630（≈1.91:1）** | 必须能单独成立 |

一篇内容可共用一稿构图，再导出多裁切；以 **16:10 构图安全区** 为母版最省事。

### 8.2 技术规格

| 项 | 标准 |
|---|---|
| 母版画布 | **1600×1000**（16:10）；OG 另出 **1200×630** |
| 格式 | 站内优先 **WebP**（质量 75–82）；源文件可保留 PNG/SVG |
| 体积 | 列表封面 **≤ 180KB**；OG **≤ 300KB** |
| 存放 | Vibe：`public/images/vibe-coding/<slug>/cover.webp`；Writing：`public/images/writing/<slug>/cover.webp` |
| frontmatter | `cover: "/images/.../cover.webp"`（Writing 启用时再加 schema 字段） |
| 色域 | sRGB；避免过饱和 HDR 感 |

### 8.3 色彩（必须吃 Cream）

底色优先：

- Light 氛围：`#f5f3e9` canvas，或略深一档的纸感 `#efebe0`
- 强调只允许：`#b7791f` primary；点缀可极少用 `#2c6f75` teal
- 墨色结构：`#29271d` / `#403d36`

禁止：

- 紫粉霓虹、赛博网格、苔绿（旧站指纹）
- 大面积高饱和渐变、荧光描边、玻璃拟态堆叠
- 与站点无关的库存「科技地球 / 机器人握手」图

Dark 主题下列表卡会叠墨色渐变浮层；封面本身按 **浅色纸感** 制作即可，不必出双套。

### 8.4 构图与层级

一张合格封面只做 **一件视觉事**：

1. **一个主形**（物件 / 符号 / 几何结构 / 场景局部）
2. **大留白**（≥ 35% 面积接近 canvas 或低对比纹理）
3. **一条琥珀线或一个静点** 作焦点（呼应 Logo 语言）

安全区：

```text
┌──────────────────────────────────┐
│  外缘 6% 勿放关键信息              │
│  ┌────────────────────────────┐  │
│  │                            │  │
│  │     主形偏一侧或偏下        │  │
│  │     上半或对角留呼吸        │  │
│  │                            │  │
│  │  ░░ 下 28%：可叠标题暗区 ░░ │  │
│  └────────────────────────────┘  │
└──────────────────────────────────┘
```

- WorkCard 默认 **hover 才出字**：下 28% 可略加深，保证白字可读；不要在图上烤死大标题（站点会叠 HTML 文案）。
- 内容页顶图：图上 **不要** 再写文章标题（页眉已有）。

### 8.5 字体（仅当封面自带字时）

多数封面 **无字** 更好。若必须有字：

- 拉丁：偏 Syne / 几何无衬线；中文：干净黑体，字重 1–2 档即可
- 字数：主句 ≤ 12 字；不要段落
- 字色：ink 或 primary；禁止白字描黑边的「海报体」

### 8.6 内容语义（贴文章，不贴关键词堆砌）

| 文章类型 | 封面方向 | 避免 |
|---|---|---|
| 方法论 / 产品判断 | 结构、路径、边界、天平、地图局部 | 抽象「大脑发光」 |
| Agent / 工程 | 本机、终端、链路、开关、证据纸 | 人形机器人 |
| 设计系统 / Cream | 纸、色票、排版网格、暖光 | UI 假界面堆砌 |
| 工具 / Skill | 单个工具静物、卡片、剪影 | logo 墙 |
| 个人叙事 / 复盘 | 桌面一角、手稿、窗光、物件 | 自拍主视觉 |
| 游戏 / 兴趣 | 氛围局部、符号，克制 | 官方海报翻拍 |

原则：**用「现场的一件证物」代替「主题的百科插图」**。

### 8.7 视觉体验检查清单

发布前自问：

- [ ] 缩到 320px 宽仍能认主形
- [ ] 与站点 canvas 并置不跳色
- [ ] 去掉图上的字后，仍能感到「这是同一品牌站点」
- [ ] 列表 3–6 张并排时，色温与留白节奏一致，不单张特别吵
- [ ] 无封面时，站内渐变占位仍可接受（不强制每篇都有图）

### 8.8 无封面占位

无 `cover` 时沿用站点默认：径向琥珀雾 + 轻 teal，底为 canvas。不要用随机库存图充数。

### 8.9 生成提示词骨架（给 AI 出图时）

```text
Quiet editorial still-life cover for a personal blog.
Warm cream paper background #f5f3e9, charcoal ink #29271d,
single amber accent #b7791f, generous negative space,
soft daylight, no purple, no neon, no glossy 3D mascot,
16:10, minimal, calm, design-system consistent.
Subject: {用一件证物概括文章核心}.
```
