---
version: alpha
name: kakarrot.com · 静室 Quiet Studio
description: 用 Claude Cream、文字层级、留白和发丝线组织个人介绍、写作与作品。
colors:
  primary: "#b7791f"
  primary-dark: "#e6bf7a"
  primary-text: "#8a5a12"
  primary-text-dark: "#e6bf7a"
  canvas: "#f5f3e9"
  canvas-dark: "#2d2e2d"
  ink: "#29271d"
  ink-dark: "#e9e6dc"
  body: "#403d36"
  body-dark: "#ddd9cd"
  muted: "#6d675b"
  muted-dark: "#bbb6a8"
  hairline: "#d8d2c3"
  hairline-dark: "#3d3d3a"
  surface: "#ffffff"
  surface-dark: "#303030"
  syntax-bg: "#f0eee6"
  syntax-bg-dark: "#242524"
typography:
  editorial-title:
    fontSize: 44px
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: -0.035em
  editorial-title-small:
    fontSize: 34px
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: -0.035em
  article-title:
    fontSize: 22px
    fontWeight: 500
    lineHeight: 1.6
  title:
    fontSize: 20px
    fontWeight: 500
  section:
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.6
  prose-subheading:
    fontSize: 17px
    fontWeight: 500
    lineHeight: 1.6
  reading:
    fontFamily: 'PingFang SC, Hiragino Sans GB, Microsoft YaHei, Noto Sans SC, Segoe UI, system-ui, sans-serif'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.85
  small:
    fontSize: 15px
  subheading:
    fontSize: 14px
    lineHeight: 1.6
  metadata:
    fontFamily: 'JetBrains Mono, ui-monospace, SF Mono, Cascadia Code, Consolas, monospace'
    fontSize: 13px
    fontWeight: 400
rounded:
  none: 0px
spacing:
  content-width: 600px
  page-inset: 20px
  page-top: 48px
  page-top-small: 36px
  hairline-width: 1px
  control-target: 44px
components:
  reading-page:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.reading}"
  reading-page-dark:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.body-dark}"
    typography: "{typography.reading}"
  article-link:
    textColor: "{colors.ink}"
    typography: "{typography.subheading}"
  article-link-dark:
    textColor: "{colors.ink-dark}"
    typography: "{typography.subheading}"
  article-link-hover:
    textColor: "{colors.primary-text}"
  article-link-dark-hover:
    textColor: "{colors.primary-text-dark}"
  article-date:
    textColor: "{colors.muted}"
    typography: "{typography.metadata}"
  article-date-dark:
    textColor: "{colors.muted-dark}"
    typography: "{typography.metadata}"
  divider:
    backgroundColor: "{colors.hairline}"
    height: "{spacing.hairline-width}"
  divider-dark:
    backgroundColor: "{colors.hairline-dark}"
    height: "{spacing.hairline-width}"
  work-cover:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.none}"
  work-cover-dark:
    backgroundColor: "{colors.surface-dark}"
    rounded: "{rounded.none}"
  theme-toggle:
    textColor: "{colors.ink}"
    width: "{spacing.control-target}"
    height: "{spacing.control-target}"
  code-block:
    backgroundColor: "{colors.syntax-bg}"
  code-block-dark:
    backgroundColor: "{colors.syntax-bg-dark}"
  code-copy-active:
    textColor: "{colors.primary}"
  code-copy-dark-active:
    textColor: "{colors.primary-dark}"
---

# 静室 Quiet Studio

## Overview

kakarrot.com 是面向技术读者和潜在合作方的个人站。首屏先交代来访者所在的栏目，接着让人读到正文、找到文章或进入作品。全站沿一条居中的阅读轴线展开，语气克制，信息直接可见。

先用字号和文字深浅区分主次，再用间距组织阅读顺序。发丝线标记内容边界。照片、封面和正文配图属于内容，页面留出空间让它们自己表达。

本文按 Google Labs DESIGN.md 规范编排。文件开头的 YAML 给出设计值，全局样式将它们落实为站点使用的 CSS 自定义属性。[格式规范](https://github.com/google-labs-code/design.md/blob/main/docs/spec.md) · [全局样式](./src/styles/global.css)

## Colors

全站采用 Claude Cream 的浅色和深色主题。YAML 中不带后缀的色值对应浅色，`-dark` 对应深色。两组映射到同一套 CSS 属性，例如 `canvas` 与 `canvas-dark` 都对应 `--color-canvas`。[Claude Cream 色彩令牌](https://github.com/kakarrot-dev/claude-cream/blob/main/tokens/tokens.json)

- `canvas` 是连续的页面底色。`ink` 用于标题和重点文字，`body` 用于长文，`muted` 用于导语、日期、计数和标签。
- `primary` 用于少量交互强调，`primary-text` 用于小字号链接、交互状态和可见焦点。阅读链接通过下划线或状态变化提示可点击。
- `hairline` 是所有普通细分隔线的颜色。`surface` 和 `syntax-bg` 服务于封面底层、代码等局部区域。
- 页脚社交图标使用 `muted`，交互时切换到 `primary-text`。代码语法色由 Shiki 的双主题提供。
- 主题切换优先读取已保存的选择，首次访问跟随系统偏好。在浅色和深色下分别检查文字、链接、焦点与代码高亮的可读性。

## Typography

正文与界面以系统中文无衬线字体优先，Noto Sans SC 作回退。JetBrains Mono 用于日期、计数和代码，Syne 用于独立品牌字标。字体自托管，中文回退加载简体中文常规字重，拉丁等宽及品牌字体按拉丁子集加载。

| 角色 | 用法 |
| --- | --- |
| `editorial-title` | Writing、Vibe Coding 与 About 页首标题。在 `editorial-title-small` 与 `editorial-title` 之间随视口缩放。 |
| `article-title` | 文章与作品详情页的主标题。 |
| `title` / `section` | 标签页与错误页的标题。更小一级用于年份、About 分节和正文二级标题。 |
| `prose-subheading` | 正文三级标题。 |
| `reading` | 首页介绍、About 与详情正文。段落留足呼吸空间，正文中的重点保留真实粗体。 |
| `small` | 导航中的名字、返回链接、目录入口及条目、正文表格。 |
| `subheading` | Writing、标签页、Vibe Coding 的标题链接，以及文章详情的上下篇入口。About 的设备分类标题也沿用此字号。CSS 使用 `--text-subheading`。 |
| `metadata` | 日期、计数、代码语言标签和少量辅助文字。 |

长标题和标签自然换行，展示完整内容。链接的可点击面积由整行与内边距提供。

## Layout

页头、内容和页脚沿同一对左右边界对齐。桌面内容净宽取 `content-width`，窄屏在视口宽度中各扣一侧 `page-inset`。桌面和手机都采用单栏阅读。页面顶部间距随视口缩小调整，首屏之后随内容自然滚动。

首页介绍沿居中的内容列展开，正文左对齐。高度允许时，介绍在页头与页脚之间垂直居中。内容超过可用高度时，页面自然滚动。

同一条目内的标题与日期、主题等元信息靠近。条目之间、年份之间和章节之间逐级增加间距。窄屏按内容顺序叠放元信息和多列内容。宽表格、代码、图表和设备清单在所属区域内横向滚动。

## Elevation & Depth

界面保持平面。标题和正文在同一底色上用大小、字重与灰度建立层次。分组边界使用 `--line-hairline`，它是宽度取 `hairline-width`、颜色取当前主题 `hairline` 的实线。

细线用于页脚、目录、About 分节、Writing 年份、作品条目，以及标签页和错误页的标题区边界。普通段落和同组的文章链接用留白组织。代码、表格和引用沿用同样的细线划定阅读范围。键盘焦点用独立的可见轮廓标明。

## Shapes

阅读区域、作品封面、代码与表格采用直角。头像保留圆形裁切，头像与作品封面沿用素材原色。交互控件以文字或现有图标表达，标签直接显示为文字。封面与标题分开，沿内容列边界对齐。

## Components

- **导航与页脚**。页头使用同一张小头像和名字，并提供主题切换。首页在介绍正文里链接到栏目，内页导航显示 Vibe Coding、Writing 与 About，标记当前栏目，手机上使用折叠菜单。页脚用一条细线承接内容，放置版权、主题来源与社交链接。
- **Writing**。目录按发表年份分组，同年按日期倒序。行内显示完整文章标题和月日。桌面日期靠右，手机放到标题下方。标签页沿用标题链接样式，显示完整日期。
- **Vibe Coding**。作品依次显示完整标题、日期、首个主题与整列封面。没有封面的条目直接呈现文字。封面沿用原有图片，文字位于图片上方。
- **首页**。以个人经历、产品工作方法与兴趣介绍自己，Writing、Vibe Coding 与 About 的入口融入正文。
- **About**。独立页面沿用栏目页标题和阅读列，按 Timeline、Principles 与 Desk & kit 分节。时间线的年份和说明对齐。设备清单使用默认展开的原生折叠控件，支持键盘操作，桌面双列，手机单列。
- **详情页**。按标题、导语与元信息、目录、可选封面、正文的顺序阅读。目录使用原生折叠控件，默认关闭，存在章节时才显示。保留章节跳转、可见焦点、代码复制和文章上下篇。
- **图像**。作品封面优先使用 WebP 和 sRGB，母版比例 16:10。OG 图片单独准备。标题保留为可读、可换行的 HTML 文本，封面图中避免重复烘焙大标题。

## Do's and Don'ts

- 优先使用已有色彩和文字令牌，在各栏目沿用同一套边界样式。只有需要交代分组或控件边界时才加线。
- 让内容在首帧可读，普通链接和阅读内容可在关闭 JavaScript 时使用。保留键盘焦点，主要图标控件至少提供 `control-target` 的操作区域。
- 交互反馈保持轻微，遵循 `prefers-reduced-motion`。避免滚动入场、自动跑马、封面放大等展示性动画。
- 避免用彩色底座、渐变、卡片阴影、重复边框、装饰编号和标签制造层次。
- 在桌面和手机的两种主题下检查长标题换行、导航和阅读区域。横向滚动限于内容实际需要的局部。
