# 设计系统 — kakarrot.com

> 参考 https://yanliudesign.live/ 的 New Brutalism 风格，结合本站暖白+酸绿配色建立的设计规范。

---

## 1. 设计令牌

### 1.1 色彩

| 令牌 | 值 | 用途 |
|---|---|---|
| `--background` | `oklch(96% 0.015 75)` | 暖白页面底色 |
| `--foreground` | `oklch(18% 0.01 260)` | 正文文字色 |
| `--card` | `oklch(94% 0.01 75)` | 卡片背景（预留，目前未用） |
| `--primary` | `oklch(18% 0.01 260)` | 主文字色 |
| `--secondary` | `oklch(45% 0.02 260)` | 次要文字色 |
| `--muted` | `oklch(60% 0.02 260)` | 辅助信息/标签色 |
| `--accent` | `#39ff14` | 酸绿强调色 |
| `--accent-dim` | `#2ccc10` | 酸绿 hover |
| `--border` | `oklch(85% 0.01 260)` | 细边框 |
| `--border-strong` | `oklch(60% 0.02 260)` | 粗边框（2px） |
| `--selection` | `color-mix(in oklab, #39ff14 30%, transparent)` | 选中高亮 |

### 1.2 字体系列

| 令牌 | 值 | 用途 |
|---|---|---|
| `--font-sans` | `"Space Grotesk", "Noto Sans SC", sans-serif` | 标题、正文 |
| `--font-mono` | `"Space Mono", ui-monospace, monospace` | 标签、代码、辅助文字 |

### 1.3 排版层级

| 变量名 | 字号 | 字重 | 字距 | 行高 | 用法 |
|---|---|---|---|---|---|
| `--text-hero` | `clamp(48px,12vw,170px)` | 900 | `-.06em` | `.85` | 首页 Logo |
| `--text-section-title` | `clamp(50px,7vw,100px)` | 900 | `-.07em` | `.9` | 板块标题 |
| `--text-method-title` | `clamp(44px,6vw,88px)` | 900 | `-.06em` | `.92` | 首页方法区 |
| `--text-card-title-lg` | `clamp(28px,4vw,48px)` | 900 | `-.05em` | `1.15` | 作品卡 |
| `--text-card-title-sm` | `clamp(22px,2.5vw,30px)` | 900 | `-.03em` | `1.15` | 文章卡 |
| `--text-body` | `17px` | 400 | normal | `1.55` | 正文内容 |
| `--text-body-sm` | `15px` | 400 | normal | `1.7` | 辅助正文 |
| `--text-mono-tag` | `13px` | 700 | `.04em` | `1` | 分类、步骤编号 |
| `--text-mono-sm` | `12px` | 400/700 | `.04em` | `1.4` | 日期、小标签 |

> 全局 CSS 变量定义在 `--text-*` / `--lh-*` / `--ls-*` 命名空间下，页面引用变量而非硬编码值。

### 1.4 间距系统

基础单位 `--spacing: 0.25rem`（4px）。

| Token | 值 | 典型用途 |
|---|---|---|
| `p-4` | 16px | 容器内边距 |
| `p-6` | 24px | 卡片内边距 |
| `p-8` | 32px | 大卡片、section |
| `gap-4` | 16px | Grid/弹性间距 |
| `gap-8` | 32px | 大间距 |
| `gap-12` | 48px | 区块间距 |
| `py-16` | 64px | 垂直板块间距 |

### 1.5 边框

| Token | 值 | 用途 |
|---|---|---|
| `--border-thick` | `2px solid var(--color-border-strong)` | shell 容器、模块分隔线 |
| `border` | `1px solid var(--color-border)` | 细分割线 |
| `border-l-4` | 4px 左侧粗边 | 引用/描述块强调 |

### 1.6 Shell 容器

```css
.shell {
  max-width: 1340px;
  margin: 0 auto;
  border-left: var(--border-thick);
  border-right: var(--border-thick);
}
```

- 全宽区块始终 `border-bottom: var(--border-thick)`
- 移动端（<768px）不显示 shell 左右边框，区块全宽铺满

---

## 2. 组件规范

### 2.1 卡片（ProjectCard / ArticleCard）

```
┌──────────────────────────┐
│ mono 标签                │  ← 12-13px, --muted 色
│                          │
│ 标题 — — — — — — — — —  │  ← 大字重、大尺寸
│ 标题                      │
│                          │
│ 描述文字...               │  ← --secondary 色
│                          │
│ 查看案例 →               │  ← mono 标签, hover 变色
└──────────────────────────┘
```

**规则：**
- `border: 2px solid var(--color-border-strong)`
- `box-shadow: 6px 6px 0 var(--color-border-strong)`（brutal 实色投影）
- hover：`translateY(-2px)` + 边框变 accent + `box-shadow: 8px 8px 0 var(--color-accent)` + 背景 10% 酸绿半透明
- 内容上下 `space-between` 撑满卡片高度
- 过渡时长 `0.3s`（transform/shadow）、`0.15s`（background）
- CSS class `.card` 定义于 global.css

### 2.2 导航栏（Nav）

```
│ KAKARROT.COM    Projects Vibe Coding Writing About │
```

- 粘性顶栏，`rgba(244,241,232,.96)` 半透明背景
- 站名左对齐，导航右对齐
- 链接：`font: 700 13px/1 var(--font-mono)`、uppercase、`tracking: .04em`
- 默认 `--secondary` 色，hover 变 `--accent`
- 当前页面：`--accent` 色 + 底部 `2px solid var(--color-accent)` 下划线
- 底部 `border-bottom: 2px solid --border-strong`

### 2.3 按钮 / CTA

```
[READ MORE →]          ← mono, uppercase, tracking-wider
```

- 文字型：`font: 700 13px/1 var(--font-mono)`，hover 变 accent
- 按钮型（待统一）：2px 边框 + 实色投影

### 2.4 跑马条（Marquee）

```css
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.marquee-track {
  display: flex;
  animation: marquee 30s linear infinite;
}
```

- 酸绿底色 `--accent`
- 文字黑色、字重 900
- 水平无缝滚动

### 2.5 代码块

```
┌──────────────────────────────┐
│ JAVASCRIPT             复制  │  ← 深色 header
├──────────────────────────────┤
│ const x = 1;                  │
│ console.log(x);               │
└──────────────────────────────┘
```

- 深色背景（`#12121e`），1px `#2a2a4a` 边框
- Header：语言标签 + 复制按钮
- 零圆角

---

## 3. 布局规则

### 3.1 页面网格

| 区域 | 列数 | 间距方式 |
|---|---|---|
| 首页方法区 | 1fr + 3fr（左侧解释 + 右侧 3 列步骤） | border-right 分隔 |
| Vibe 作品 | 2 列 | 偶数项 `border-right: none` |
| 文章 | 3 列 | 每 3n 项去除右边框 |
| 项目列表页 | `1fr 1fr` | border 分隔 |

**待统一规则：**
- 卡片之间始终用 `2px solid --border-strong` 分隔，而不是用 gap 混合
- 或在全局定一个统一的 `gap-4`（16px）方案

### 3.2 板块垂直节奏

```
Hero (full-bleed)
  ↓ 2px border-bottom
Marquee (full-bleed)
  ↓ 2px border-bottom
方法区 (full-bleed)
  ↓ 2px border-bottom
Vibe Coding (shell)
  ↓ 2px border-bottom
Writing (shell)
  ↓ (无底部边框)
Footer
```

### 3.3 响应式断点

| 断点 | 宽度 | Shell 行为 |
|---|---|---|
| 桌面 | >768px | 显示 shell 左右边框 |
| 移动 | ≤768px | 全宽，无 shell 边框，卡片改为单列 |

---

## 4. 动效规范

### 4.1 滚动渐入

```css
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

- Monitor：`IntersectionObserver`，`threshold: 0.15`
- 延迟阶梯：`reveal-delay-1`（0s）/ `2`（0.1s）/ `3`（0.2s）

### 4.2 Hero 标题逐字动画

- 每个 `.hero-line span` 从 `translateY(100%)` 到 `0`、`0.8s`、缓出
- 辅助信息 `.hero-fade`：`opacity 0→1` + `translateY(8px→0)`、`0.6s`

### 4.3 Hover 微交互

| 元素 | 效果 | 时长 |
|---|---|---|
| 卡片 | `translateY(-2px)` + 投影偏移 6→8px + 背景变半透明绿 | `0.3s` / `0.15s` |
| 导航链接（非 active） | color `--secondary → --accent` | `0.15s` |
| 导航 active | 底部酸绿下划线保留，不变色 | — |
| 头像 | `filter: grayscale(1) → grayscale(0)` | `0.5s` |
| 社交图标 | opacity `.6 → 1` | `0.15s` |
| 链接 | color `--accent → --accent-dim` | `0.15s` |

### 4.4 无障碍

```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
```

---

## 5. 内容规范

### 5.1 排版

- .prose 正文基础字号：`1.0625rem`（17px），行高 `1.8`
- h2：`1.65rem`，底部边框分隔
- blockquote：4px 酸绿左边框 + 6% 酸绿半透明背景
- 表格：深色表头（`--foreground`），条纹行

### 5.2 标签标签

- 分类标签（如 "AI PRODUCT"、"THINKING"）：`font-mono 12-13px`、uppercase、`--muted` 色
- 位置在卡片标题上方、section 标识右侧

### 5.3 按钮/链接文案

- "查看案例 →" / "阅读 →"
- always uppercase（CSS 控制）

---

## 6. 与 Yanliu Design 的差异对照

| 维度 | Yanliu Design | kakarrot.com | 说明 |
|---|---|---|---|
| 背景色 | 纯白 `oklch(100% 0 0)` | 暖白 `oklch(96% 0.015 75)` | 保持温暖感 |
| 强调色 | `#7FFF00` (chartreuse) | `#39ff14` (酸绿) | 更暗更电子 |
| 卡片 | 2px 黑色边框 + 8px 实色投影 | 2px 边框 + 6px 实色投影 | ✅ 已对齐 |
| 卡片 hover | 投影偏移 8→12px | 投影偏移 6→8px + 边框变 accent + 背景变绿 | ✅ 风格一致 |
| Hero | 纯文字大标题 + 头像 | 大字 + 头像 + 社交图标 | 结构不同 |
| 字体 | 全英文 Space Grotesk/Mono | 含中文 fallback | 中英文混合 |
| 图片 | grayscale → hover 还原彩色 | 头像 grayscale → hover 还原 | ✅ 已引入 |
| 导航 active | hover underline | hover 变色 + active 下划线 | ✅ 更完整 |
