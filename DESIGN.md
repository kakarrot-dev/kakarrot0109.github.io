---
version: 3.1.0
name: Quiet Column
principle: One column. Exact roles. Quiet interactions.
colors:
  light:
    gray-background:
      hex: '#fcfcfc'
    gray-100:
      hex: '#fcfcfc'
      lab: lab(98.956% .0000298023 -.0000119209)
    gray-200:
      hex: '#f6f6f6'
      lab: lab(96.752% 0 0)
    gray-300:
      hex: '#f0f0f0'
      lab: lab(94.78% 0 0)
    gray-400:
      hex: '#e8e8e8'
      lab: lab(91.996% -.0000298023 .0000119209)
    gray-500:
      hex: '#e0e0e0'
      lab: lab(89.212% -.0000298023 .0000119209)
    gray-600:
      hex: '#d9d9d9'
      lab: lab(86.66% 0 0)
    gray-700:
      hex: '#cecece'
      lab: lab(82.716% 0 0)
    gray-800:
      hex: '#bbb'
      lab: lab(75.872% 0 0)
    gray-900:
      hex: '#8d8d8d'
      lab: lab(58.588% 0 0)
    gray-1000:
      hex: '#838383'
      lab: lab(54.76% 0 0)
    gray-1100:
      hex: '#6f6f6f'
      lab: lab(46.64% 0 0)
    gray-1200:
      hex: '#202020'
      lab: lab(12.304% -.00000745058 0)
    preview-bg:
      hex: '#fff'
      lab: lab(100% 0 0)
    preview-border:
      hex: '#e8e8e8'
      lab: lab(91.996% -.0000298023 .0000119209)
    text-paragraph:
      hex: '#424242'
      lab: lab(28.08% 0 -.00000596046)
    danger-text:
      hex: '#e40014'
      lab: lab(48.4493% 77.4328 61.5452)
    danger-solid:
      hex: '#fb2c36'
      lab: lab(55.4814% 75.0732 48.8528)
    danger-solid-hover:
      hex: '#e40014'
      lab: lab(48.4493% 77.4328 61.5452)
    border-overlay:
      hex: '#0000001a'
    accent-blue:
      hex: '#3080ff'
    selection: gray-500
    theme-color: '#fcfcfc'
    backdrop: '#0000001a'
    command-surface: preview-bg
    command-footer: gray-100
    code-file-icon:
      hex: '#149eca'
  dark:
    gray-background:
      hex: '#101010'
    gray-100:
      hex: '#191919'
      lab: lab(8.94% -.00000745058 0)
    gray-200:
      hex: '#1f1f1f'
      lab: lab(11.84% 0 0)
    gray-300:
      hex: '#262626'
      lab: lab(15.088% 0 0)
    gray-400:
      hex: '#292929'
      lab: lab(16.712% 0 -.00000596046)
    gray-500:
      hex: '#313131'
      lab: lab(20.308% 0 0)
    gray-600:
      hex: '#3a3a3a'
      lab: lab(24.368% 0 -.00000596046)
    gray-700:
      hex: '#484848'
      lab: lab(30.632% -.0000149012 .00000596046)
    gray-800:
      hex: '#606060'
      lab: lab(40.724% -.0000149012 0)
    gray-900:
      hex: '#6e6e6e'
      lab: lab(46.408% 0 -.0000119209)
    gray-1000:
      hex: '#7b7b7b'
      lab: lab(51.628% 0 0)
    gray-1100:
      hex: '#b5b5b5'
      lab: lab(73.668% 0 0)
    gray-1200:
      hex: '#eee'
      lab: lab(94.084% .0000298023 0)
    preview-bg:
      hex: '#151515'
      lab: lab(6.69783% 0 0)
    preview-border:
      hex: '#232323'
      lab: lab(13.58% 0 0)
    text-paragraph:
      hex: '#dbdbdb'
      lab: lab(87.24% -.0000298023 0)
    danger-text:
      hex: '#ff6568'
      lab: lab(63.7053% 60.745 31.3109)
    danger-solid:
      hex: '#fb2c36'
      lab: lab(55.4814% 75.0732 48.8528)
    danger-solid-hover:
      hex: '#e40014'
      lab: lab(48.4493% 77.4328 61.5452)
    border-overlay:
      hex: '#ffffff1a'
    accent-blue:
      hex: '#3080ff'
    selection: gray-500
    theme-color: '#101010'
    backdrop: '#00000040'
    command-surface: gray-100
    command-footer: gray-200
    code-file-icon:
      hex: '#149eca'
syntax:
  light:
  - lab(12.304 -0.00000745058 0)
  - color(display-p3 0.388235 0.388235 0.388235)
  - color(display-p3 0.660755 0.179954 0.8154)
  - color(display-p3 0.266455 0.667541 0.435918)
  - color(display-p3 0.327292 0.790977 0.99566)
  - color(display-p3 0.83488 0.207921 0.387456)
  - color(display-p3 0.854172 0.502144 0.209646)
  - color(display-p3 0.246852 0.642335 0.817202)
  dark:
  - lab(94.084 0.0000298023 0)
  - color(display-p3 0.388235 0.388235 0.388235)
  - color(display-p3 0.829375 0.434619 0.954315)
  - color(display-p3 0.460672 0.843934 0.608755)
  - color(display-p3 0.327292 0.790977 0.99566)
  - color(display-p3 0.994741 0.445201 0.573499)
  - color(display-p3 1 0.688063 0.418777)
  - color(display-p3 0.452682 0.81411 0.989434)
typography:
  families:
    sans: Inter, Inter Fallback, system-ui, Arial
    display: Heldane, Heldane Fallback, Georgia, serif
    italic: Libre Baskerville, Libre Baskerville Fallback, Georgia, serif
    mono: Berkeley Mono, Berkeley Mono Fallback, ui-monospace, monospace
    demo: Open Runde, Open Runde Fallback, system-ui
  features: '"ss03"'
  ligatures: none
  fallback-metrics:
    inter Fallback:
      src: local(Arial)
      ascent-override: 89.79%
      descent-override: 22.36%
      line-gap-override: 0.0%
      size-adjust: 107.89%
    libreBaskerville Fallback:
      src: local(Arial)
      ascent-override: 93.58%
      descent-override: 26.05%
      line-gap-override: 0.0%
      size-adjust: 103.65%
    heldane Fallback:
      src: local(Arial)
      ascent-override: 106.04%
      descent-override: 38.08%
      line-gap-override: 0.0%
      size-adjust: 93.74%
    openRunde Fallback:
      src: local(Arial)
      ascent-override: 88.98%
      descent-override: 22.18%
      line-gap-override: 0.0%
      size-adjust: 108.87%
    berkeleyMono Fallback:
      src: local(Arial)
      ascent-override: 72.7%
      descent-override: 18.56%
      line-gap-override: 0.0%
      size-adjust: 131.49%
  roles:
    home-title:
      size-px: 17
      weight: 500
      line-height-px: 27.625
      color: gray-1200
    home-section:
      size-px: 17
      weight: 500
      line-height-px: 27.625
      color: gray-1200
    home-bio:
      size-px: 17
      weight: 400
      line-height-px: 27.625
      color: gray-1100
    home-list-title:
      size-px: 17
      weight: 450
      line-height-px: 27.625
      color: gray-1200
    home-list-meta:
      size-px: 17
      weight: 400
      line-height-px: 27.625
      color: gray-1100
    article-h1:
      size-px: 24
      weight: 550
      line-height-px: 32
      color: gray-1200
    article-h2:
      size-px: 17
      weight: 550
      line-height-px: 27.625
      color: gray-1200
    article-body:
      size-px: 17
      weight: 400
      line-height-px: 27.625
      color: text-paragraph
    product-hero-h1:
      size-px: 24
      weight: 600
      line-height-px: 32
      color: gray-1200
    demo-card-h3:
      size-px: 14
      weight: 500
      line-height-px: 20
      color: gray-1200
    quote:
      size-px: 30
      weight: 400
      line-height-px: 41.25
      color: gray-1200
    quote-credit:
      size-px: 15
      weight: 500
      line-height-px: 24.375
      color: gray-1200
    code:
      size-px: 13
      weight: 400
      line-height-px: 21.125
      color: gray-1200
    code-filename:
      size-px: 13
      weight: 400
      line-height-px: 21.125
      color: gray-1100
    pill:
      size-px: 14
      weight: 450
      line-height-px: 20
      color: gray-1100
    command-item:
      size-px: 14
      weight: 400
      line-height-px: 20
      color: gray-1200
    command-group:
      size-px: 14
      weight: 500
      line-height-px: 20
      color: gray-900
    breadcrumb:
      size-px: 14
      weight: 500
      line-height-px: 20
      color: gray-1200
    composer:
      size-px: 16
      weight: 400
      line-height-px: 26
      color: gray-1200
  article-h3: null
  cjk:
    body-weight: 400
    home-heading-weight: 500
    article-heading-weight: 550
    line-height-px: 27.625
    fallback: PingFang SC, Hiragino Sans GB, Microsoft YaHei, Noto Sans SC, system-ui
    policy: Language extension; retain role weights; verify actual glyph font and reject synthetic weight substitution
radii-px:
  xs: 2
  sm: 4
  md: 6
  lg: 8
  xl: 12
  2xl: 16
  3xl: 24
  4xl: 32
  full: 9999
  command-item: 10
  folio-inner: 5
shadows:
  light-custom: '0px 0px 0px 1px #0000000f, 0px 1px 2px -1px #0000000f, 0px 2px 4px 0px #0000000a'
  light-custom-hover: '0px 0px 0px 1px #00000014, 0px 1px 2px -1px #00000014, 0px 2px 4px 0px #0000000f'
  light-border: '0px 0px 0px 1px #0000000f'
  dark-custom: '0 0 0 1px #ffffff14'
  dark-custom-hover: '0 0 0 1px #ffffff21'
  dark-border: '0 0 0 1px #ffffff14'
spacing:
  unit-px: 4
  root-px: 16
  shell-outer-max-px: 692
  shell-inline-pad-px: 24
  content-max-px: 644
  shell-block-mobile-px: 64
  shell-block-desktop-px: 128
  home-section-mobile-px: 64
  home-section-desktop-px: 128
  toolbar-to-title-px: 96
  article-h2-before-px: 96
  article-h2-after-px: 20
  paragraph-break-box-px: 26
  home-row-li-block-pad-px: 6
  home-row-link-pad-px: 8
  home-row-gap-px: 16
  folio-outer-px:
  - 46
  - 54
  folio-inner-px:
  - 40
  - 48
  folio-pad-px: 3
  logo-px: 24
breakpoints-rem:
- 40
- 48
- 64
- 80
- 96
layers:
- 0
- 1
- 10
- 20
- 30
- 40
- 50
- 100
- 101
effects:
  blur-px: 8
  interactive-ms: 200
  command-ms: 150
  scrollbar-ms: 100
  active-scale: 0.97
  reduced-motion-ms: 0.01
components:
  command:
    top: 18%
    width: calc(100vw - 40px)
    max-width-px: 720
    radius-px: 16
    input-box-height-px: 40
    input-content-height-px: 38
    input-pad-px: 6
    item-height-px: 40
    item-radius-px: 10
    item-inline-pad-px: 10
    list-max-height-px: 372
    footer-height-px: 45
    mobile-input-scale: 0.875
  circle:
    size-px: 36
    icon-px: 18
    hover-bg: gray-400
    hover-text: gray-1200
  newsletter:
    outer-padding-px: 4
    inner-height-px: 56
    submit-height-px: 48
    submit-min-width-px: 112
    submit-inline-pad-px: 16
    field-inline-pad-px: 20
    section-gap-px: 20
  code:
    header-height-px: 40
    header-margin-px:
    - 4
    - 4
    - 0
    header-padding-px:
    - 6
    - 6
    - 6
    - 12
    copy-px: 28
    body-padding-px: 12
    scrollbar-height-px: 4
  video:
    center-px: 64
    center-icon-px: 28
    gradient-height-px: 80
    controls-height-px: 36
    control-px: 26
    control-icon-px: 16
    seek-track-height-px: 4
    seek-input-height-px: 24
  inline-icon-link:
    icon-px: 16
    icon-margin-right-px: 4
    icon-margin-bottom-px: 2
    graphic-badge-px:
    - 64
    - 12
    graphic-badge-margin-right-px: 4
    underline-offset-px: 3
    font-weight: 450
    color: gray-1200
    hover-underline-color: gray-1100
  inline-keycap:
    size-px: 18
    radius-px: 5
    font-size-px: 12
    font-weight: 450
    gap-px: 4
    group-margin-right-px: 4
    bg: gray-200
    border: preview-bg
    inset-ring-light: rgba(0, 0, 0, 0.06)
    inset-ring-dark: rgba(255, 255, 255, 0.08)
    touch-fallback-icon-px: 16
  qa:
    textarea-size-px: 16
    textarea-line-height-px: 26
    textarea-min-height-px: 36
    textarea-max-height-px: 240
    composer-padding-px: 6
    composer-radius-px: 24
    submit-size-px: 36
    suggestion-height-px: 32
    suggestion-gap-px: 8
    dock-bottom-padding: max(24px, env(safe-area-inset-bottom))
syntax-additional:
  string:
    light: color(display-p3 0.259723 0.647032 0.276349)
    dark: color(display-p3 0.451324 0.823458 0.446819)
  callable-identifier:
    light: color(display-p3 0.391345 0.215644 0.853560)
    dark: color(display-p3 0.615613 0.445256 1.000000)
---

# Quiet Column

## Overview

我把个人主页、阅读、短笔记、能力说明、交互文章与对话放在同一条安静的内容列里。层级来自精确的字重、灰度、细线与间距，而不是更大的标题、更多卡片或更强的背景。本文顶部 YAML 是封闭 token 源；正文规定 token 的角色和组合方式。不得只复制色板，另行发明页面结构。

本文是我自己的界面规范。所有正文、名称、命令、日期和图形都由内容层注入；组件示例只用匿名占位。需要商业字体时先确认使用权；无法提供同一字体的发行版，必须声明为字体替代版，不承诺字形和断行等价。

## MUST / MUST NOT：十五条不可破坏的约束

1. MUST 使用 `box-sizing:border-box`。外壳最大692px，左右padding各24px，文字最大净宽644px。MUST NOT 把692px用作净文字宽。
2. MUST 保持小于40rem时上下64px、大于等于40rem时上下128px；首页分区间距分别64/128px。MUST NOT 为凑一个标题的绝对y而任意压缩分区。
3. MUST 首页H1/H2为17px/500，文章H1为24px/550，文章H2为17px/550，产品主标题为24px/600。MUST NOT 用一个heading-weight覆盖全部角色。
4. MUST 首页简介和列表说明用gray-1100；文章正文用text-paragraph。深色仍沿用语义。MUST NOT 把首页简介染成正文深灰，或把文章正文一起变浅。
5. MUST 首页项目与文章目录都保留“左小图框＋右标题/说明或日期”。MUST NOT 删除文章目录图框，或将日期移到最右侧形成单行紧凑表。
6. MUST 保留li上下6px和a四边8px两层padding。MUST NOT 把`py-1.5`当作整个目录行全部间距。
7. MUST 首页简介内的实体与动作链接嵌于文字流（`450`字重、`gray-1200`、`whitespace-nowrap`、默认透明下划线 hover 显 `gray-1100`），前置 `16×16px` 实心同色小图标（`mr-1 mb-0.5 inline-block`）；搜索触发器透明无 padding，精细指针端把两枚独立 `18×18px` `rounded-[5px]` 键帽排在文字前面，粗指针/触屏端自动降级为前置 `16×16px` 搜索图标。MUST NOT 把首页搜索独立成行或套用灰色胶囊、把双键帽合并成单个胶囊或放到文字后面、或省略行内链接前置图标与防拆行约束。
8. MUST 目录小图框外46×54px、内40×48px、外padding3px、文字gap16px；logo24px。MUST NOT 用40px方形封面裁切代替双层装裱结构。
9. MUST 文章工具头36px高、两端圆形按钮。工具头底至标题96px，文章标题组后留20px，H2前96px后20px。MUST NOT 把内容起点改成32px。
10. MUST 区分首页章节、文章章节和演示卡标题。演示卡h3为14px/500，不是文章三级标题配方；`article-h3:null`禁止自动生成一个没有定义的全局三级变体。
11. MUST 命令面板固定在视口18%高度、最大720px、左右保留20px，16px圆角。MUST NOT 垂直居中或收窄成文章列644px。
12. MUST 代码正文13px等宽、文件栏40px高、复制按钮28px；引文正文30px展示衬线。MUST NOT 把演示插画里的文字当正文代码或引文。
13. MUST 播放器使用自定义控制层、渐变、进度、倍速和全屏；MUST NOT 默认显示浏览器原生controls；MUST NOT 把媒体未就绪时的白画面定成海报设计。
14. MUST 区分内容层、系统控件和演示层。演示中的旋转、拖动、业务卡片、连接状态不能成为全站默认交互。
15. MUST 保留可见键盘焦点、对话焦点管理和减弱动态分支。MUST NOT 用全局outline:none或无限动画换取静态外观。

## 1. Token 落地与字体

### 1.1 色彩

YAML中每个浅/深色对象的hex为兼容层；支持`lab()`时覆盖同名变量，不能改角色。背景用gray-background，不是gray-100：深色背景#101010、gray-100#191919，两者不是同一表面。代码/媒体preview-bg深色#151515；命令面板深色例外用gray-100，底部键盘栏用gray-200。

```css
:root { color-scheme:light; --spacing:4px; }
.dark { color-scheme:dark; }
::selection { background:var(--color-gray-500); }
body { margin:0; background:var(--color-gray-background); color:var(--color-gray-1200); }
```

所有`--color-*`变量由YAML生成，禁止组件私自追加新灰阶。高亮色保留`color(display-p3 …)`，不能将三个分量直接写成RGB百分数。YAML syntax中每个浅/深列表一一对应：默认、标点、标签、属性、运算符、花括号、键名、数字。语法器逐token设置成对的`--shiki-light`/`--shiki-dark`，主题只切换取值，不重新猜配色。字符串与可调用标识符使用syntax-additional中的成对颜色，不能丢掉绿色字符串或蓝紫色函数标识。仅出现于演示画布内的彩色不提升为全站强调色。

### 1.2 字体与metric fallback

Sans用Inter，正常变量范围400–700，启用`"ss03"`。展示引文用Heldane；斜体用Libre Baskerville Italic；代码用Berkeley Mono；演示局部圆润字体使用Open Runde 500/600。全局`font-variant-ligatures:none`。英文正文400、强调500、链接450；不能把450截成400或把550截成600。

YAML的fallback-metrics必须随字体族实施：Arial为local源，保留size-adjust、ascent/descent、line-gap override。公开发行时Sans可保留Inter；展示衬线可退Georgia；等宽可用IBM Plex Mono或Geist Mono。这些替代**不保证同字宽**，字体替代后要重新检查断行，而不是修改字号掩盖差别。

中文是语言扩展，不冒充拉丁字体原生覆盖：在Inter后接CJK候选栈，正文400、首页标题500、文章标题550、正文仍17px/27.625px。只提供400的中文文件不能保证可变550；必须确认真实命中字形字体与可用字重，禁止无声合成粗体。若平台只能离散映射，显式记录550映射策略，不得修改拉丁550。正文与中文混排不得额外套全局1.75行高；图片、logo与代码尺寸也不随中文放大。

```css
html { font-family:Inter,"Inter Fallback",system-ui,Arial; font-feature-settings:"ss03"; font-variant-ligatures:none; }
.text-body { font-size:17px; line-height:1.625; }
.home-title,.home-heading { font-size:17px; font-weight:500; }
.home-bio { font-size:17px; line-height:1.625; color:var(--color-gray-1100); }
.article-body { font-size:17px; line-height:1.625; color:var(--color-text-paragraph); }
.article-title { font-size:24px; font-weight:550; line-height:32px; }
.article-heading { font-size:17px; font-weight:550; line-height:1.625; }
```

### 1.3 基础外壳

```css
*,*::before,*::after { box-sizing:border-box; }
.shell { width:100%; max-width:692px; margin-inline:auto; padding:64px 24px; line-height:1.625; }
@media(min-width:40rem) { .shell { padding-block:128px; } }
```

1440px视口下外壳x374、文字x398、净宽644；390px下外壳全宽、文字x24、净宽342。页面滚动条策略必须保持一致，不能通过补偿margin人为改变中心。断点40rem承担主壳变化；48/64/80/96rem只在明确声明的组件内使用。

## 2. 六类页面蓝图

### Type 1 · 首页索引

顺序：Identity → Bio（含行内搜索）→ 归档链接 → 项目目录 → 文章目录 → 独立短笔记入口 → 订阅区 → 轻页底。没有全宽常驻导航，不设独立头像栏或主题按钮占位。

- Identity是17/500单行标题，站点自有头像为24×24px圆形，位于标题文字左侧，间距8px并垂直居中。标题底部margin16px；Bio第一段无margin，第二段margin-top16px；Bio17/400/gray-1100，行高27.625px；链接与搜索是行内450/gray-1200。
- 简介下方提供带下划线的「全部文章」「全部作品」，各有至少44px高的触区。作品分区标题沿用归档名称 Vibe Coding。
- 各section用margin-top64px，在40rem起128px；标题与列表容器gap12px。首页标题不是550。section标题17/500，gap12px接1px gray-400细线。
- 项目和文章目录复用同一行几何，仅小图框内容与第二行信息不同；目录背景透明，li细线gray-300，末行无线。
- 订阅区标题后12px到说明；说明后20px到表单外框，表单外框后20px到辅助人数信息。订阅区与前后section仍沿用64/128px。
- 页底是小文本与签名并排、总高80px，签名80×80px；不可替换成社交图标市场或厚重版权栏。

固定内容时桌面参考链：Identity y128/h27.625 → Bio y171.625 → 第二段 y215.25 → 项目标题y426.125 → 项目列表y465.75 → 文章标题y1014 → 短入口标题y2107.375 → 订阅标题y2358.25 → 轻页底y2685.125。移动时Identity y64、项目标题y436.25、文章标题y987.75。内容变化后按角色边界和margin运行，不能强行锁死这些绝对y。

### Type 2 · 长文阅读

```html
<div class="shell">
  <header class="reading-toolbar"><a class="circle" aria-label="返回"></a><button class="circle" aria-label="复制链接"></button></header>
  <main class="reading-main article-body">
    <header class="article-header"><h1 class="article-title">文章标题</h1><p class="article-dates">发布 <time datetime="2026-01-01">2026.01.01</time></p></header>
    <details class="article-toc"><summary>文章目录</summary><nav aria-label="文章目录"><ul><li><a href="#section-a">章节</a></li></ul></nav></details>
    <p>正文内容</p><br><p>后续内容</p>
    <h2 class="article-heading" id="section-a"><span class="anchor-label">章节</span><span class="hairline"></span></h2>
    <section class="content-components"></section>
    <section class="article-more"></section>
    <nav class="article-nav" aria-label="相邻文章"></nav>
  </main>
</div>
```

- 工具头`min-height:36px;display:flex;justify-content:space-between;gap:8px`。阅读main `margin-top:96px`，**桌面与移动相同**。因此标题桌面y260、移动y196。
- H1为24/550/32px，`width:fit-content;scroll-margin-top:80px`。标题下方用13px灰1100显示发布日期，有更新日期时一并显示。标题组后留20px，正文为17/27.625px。
- 二、三级章节合计达4个时，在正文前提供默认折叠的「文章目录」，目录项链接到对应章节。
- 连续自然段由内容中的`br`承载换段，当前27.625px行高环境里段落可见底→下一段顶约26px；不要同时保留br又给p加26px margin而翻倍。
- H2 `margin-top:96px;margin-bottom:20px;display:flex;align-items:center;gap:12px`；后接1px gray-400延伸线，heading wrapper处理左侧锚点；所有视口仍96/20。
- 文章没有独立三级标题视觉变体；演示内h3不等于文章h3。需要新的层级必须先扩展本文角色定义，不从产品演示卡挪用14px。
- 媒体、代码、引用、演示模块常用`margin-block:32px;width:100%`。普通正文列表使用自己的标记，不继承首页目录图框。
- More推荐、彩色主CTA与相邻导航是三个层次；CTA近蓝#3080ff、白字、500、右箭头，仅在内容指定位置出现。页底nav上距64px、1px gray-300顶线、padding-top48px；两侧链接最大宽160px／40rem起320px，左/右对齐，gap2px。标签15/500/gray-900，标题15/500/gray-1100；hover分别变1100与1200。

### Type 3 · 短笔记流

保留同一工具头和96px main上距，不是一个首页文章目录，也不是多列时间线。

```html
<main class="reading-main"><article>
  <h1 class="article-title">笔记</h1>
  <div class="notes-intro"><p>简介</p><p>附加说明</p></div>
  <ol class="notes-stream">
    <li><h2 class="article-heading"><span class="anchor-label">日期</span><span class="hairline"></span></h2><p>条目正文</p><p>补充正文</p><figure class="note-demo"></figure></li>
  </ol>
  <nav class="article-nav"></nav>
</article></main>
```

- H1仍17/550、后20px；简介容器`display:flex;flex-direction:column;gap:24px`。
- ordered list去掉默认编号/缩进；每条以日期H2开始，`mt96 mb20`＋1px灰400延伸细线，锚点结构与文章相同。
- 同条内部直接相邻`p+p`采用24px上距，**不是长文的br换段配方**。条目没有外部灰卡背景。
- 技术叙述figure是mono15px／gray-1100、上下32、column gap24；其中引导文字`padding-inline-start:2ch;text-indent:-2ch`，不能错当30px引文卡。
- 嵌入演示和代码仍是各自preview组件；本页末尾双向导航沿用64px上距、48px顶padding。移动正文自然换行，不压缩日期章节的96px前距。

### Type 4 · 产品 / 能力说明

同一工具头和96px main上距，正文的标题层级与长文不同。

- Hero是`flex-column gap4px`；H1为24/600/32px，前有低对比斜杠，`margin-bottom:16px`。与下一段之间实际合计20px（16px margin＋4px flex gap）；说明17px、text-paragraph。
- 首个安装模块上下margin32px；外框padding4、gap4、radius16、custom shadow。第一行44px高、左右padding16/4、gap8、radius12、preview底、custom shadow；命令14px mono，truncate但保留可复制完整内容；复制钮36×36、radius8。第二行是两个等宽44px动作钮，gap4、radius12、padding-inline20，背景preview，hover gray-200。
- 后续能力章节仍H2 `mt96 mb20`，不是24px展示标题。每节说明17px；配图/动态演示上下32。
- 流程图桌面采用五列`auto minmax(1rem,1fr) auto minmax(1rem,1fr) auto`，高400px；移动收成三列小卡与上下连接布局，不把固定400px桌面高度直接塞进窄屏。
- 局部暗色状态面板与全站主题隔离；状态选择器是radio group：选项28px高、padding-inline10、13px、radius8、200ms颜色过渡；选中白字，未选white/60、hover white/85。窄屏使用36px高下拉、#262626底、13px/500、左右padding16/36、内描边white10%。九种状态为：已连接、配置未完成、在其他位置连接、已断开、骨架、同步中、错误、认证过期、缺少权限；状态标签与画布内容联动，保留radiogroup/aria-checked。状态只作用于该演示，不能改全站主题。
- 局部开关轨道36×22px、padding2、圆形；灰400为未选、blue-500为选中，必须保留状态语义。
- FAQ采用h3内button触发器：aria-expanded驱动面板；触发器padding-block16、gap16、16px/500、图标18px，gray800→1200并在展开时旋转45°；条目之间1px gray400、末条无边。不得擅自换成浏览器默认details外观；演示卡h3为14/500，另有局部宣传h3为30/600，二者都不是文章h3。

### Type 5 · 交互技术文章 / 组件实验

工具头、H1、正文、96/20章节、锚点、代码与文章导航沿用Type 2。技术文与颜色实验是同一阅读外壳的内容变体，不另开全宽画布。

- 演示容器`preview-card`为列宽、radius16、preview底、custom shadow、overflow:hidden；外包装上下32。一个默认实验画布可以高280px，另一个手势画布280px加说明/间距后总317.125px；**高度属于各实例，不是全局preview固定280px**。
- 示例手势盒为160×160px；旋转或拖动仅发生在演示盒。其局部弹簧参数/按压参数从内容配置传入，不替换全局200ms微交互。
- 章节`#`入口24×24px，放在标题左侧28px凹槽；默认隐藏、hover标题/键盘聚焦时显现；标题仍在原始文字列边缘，不被图标推右。
- 演示按钮与输入框保留局部样式。例如实验中40×40px、radius10的键盘聚焦按钮不是全站36px圆钮。
- 技术代码是真正可复制pre/code，图示代码是aria-hidden的演示素材；两者不能共用自动复制目标或读屏内容。
- 颜色实验的滑块、色域画布和图示只属于该内容模块，不把其彩色色板注入全站语义色。

### Type 6 · 对话问答

这里不是垂直居中的营销hero。顶部是sticky面包屑，底部是固定输入，初始中间留白。

```html
<div class="shell">
  <div class="qa-top"><header><nav aria-label="位置"><ol><li><a>主页</a></li><li aria-hidden="true">/</li><li><h1>对话</h1></li></ol></nav><span aria-hidden="true"></span></header></div>
  <main class="qa-main"><div class="qa-messages"><div class="message-stack"></div></div>
    <div class="qa-dock"><div class="qa-dock-inner"><form>
      <ul class="qa-suggestions"><li><button class="pill" type="button">建议问题</button></li></ul>
      <label class="qa-composer"><textarea aria-label="问题"></textarea><button class="qa-submit" aria-label="提交问题" disabled></button></label>
    </form></div></div>
  </main>
</div>
```

- sticky壳`top:0;z-index:10;margin-top:-48px;margin-bottom:48px;padding-top:max(24px,env(safe-area-inset-top));padding-bottom:40px`，40rem起margin-top:-96px；自上而下背景渐变，从50%开始为页面背景到透明。
- header高36px，左右对齐；面包屑14px/500/20px、gap8，前一层gray-1000、分隔gray-800、当前gray-1200。桌面文字y64，移动y48。
- main文字列644/342；空消息区有`padding-bottom:160px`，消息stack gap24。
- 输入dock `position:fixed;inset-inline:0;bottom:0;padding-top:64px;pointer-events:none`，背景自下向上前50%实色后渐隐；内部仍max692/px24，底padding `max(24px,env(safe-area-inset-bottom))`；form恢复pointer-events:auto。
- 建议列表绝对定位在form上方，`bottom:100%;margin-bottom:12px;display:flex;flex-wrap:wrap;gap:8px`。桌面文字自然形成两行，390px形成更多行，不能把建议改成横向溢出滚动条。
- composer为flex/items-end/gap8、padding6、radius24、preview底、custom shadow，单行自然高48px；textarea16px/26px，padding5px 12px，min-height36、max-height240、field-sizing:content、resize:none、placeholder gray-900；不能使用14px输入触发移动缩放。
- 提交36×36圆、gray-1200底、gray-100图标、disabled opacity .4；空白内容不可提交。桌面form y828/h48、底24；移动y772/h48、底24。建议按钮高32。
- 点击建议可填入问题或发起内容指定的动作，但真正发送必须来自用户确认；不在页面载入时自动提交。回复、错误、取消是功能层状态，不得用静态空页面假装已有完整服务。

## 3. 核心组件的可执行骨架

以下自定义class按本章CSS实施；省略的SVG形状属于图形资源层，不可用emoji代替同尺寸图标。目录与按钮的ARIA语义不可省略。

### HomeProjectRow / HomeWritingRow

```html
<ul class="home-list">
  <li><a class="index-row" href="#entry-a"><span class="index-row-inner">
    <span class="folio-outer" aria-hidden="true"><span class="folio-inner"><svg class="project-logo" viewBox="0 0 24 24"></svg></span></span>
    <span class="index-copy"><span class="index-title">项目名称<span class="row-chevron" aria-hidden="true"><svg viewBox="0 0 24 24"></svg></span></span><span class="index-meta">项目说明</span></span>
  </span></a></li>
  <li><a class="index-row" href="#entry-b"><span class="index-row-inner">
    <span class="folio-outer" aria-hidden="true"><span class="folio-inner"><span class="document-lines"></span></span></span>
    <span class="index-copy"><span class="index-title">文章标题<span class="row-chevron" aria-hidden="true"><svg viewBox="0 0 24 24"></svg></span></span><time class="index-meta">日期</time></span>
  </span></a></li>
</ul>
```

```css
.home-list { margin:0; padding:0; list-style:none; display:flex; flex-direction:column; }
.home-list>li { padding-block:6px; border-bottom:1px solid var(--color-gray-300); }
.home-list>li:last-child { border-bottom:0; }
.index-row { position:relative; display:flex; align-items:center; margin-inline:-8px; padding:8px; border-radius:16px; text-decoration:none; }
.index-row::before { content:""; position:absolute; inset-inline:0; inset-block:-4px; }
.index-row-inner { display:flex; min-width:0; align-items:flex-start; gap:16px; }
.folio-outer { display:flex; flex:none; align-items:center; justify-content:center; padding:3px; border-radius:8px; background:var(--color-gray-background); box-shadow:var(--shadow-custom); }
.folio-inner { display:flex; flex:none; align-items:center; justify-content:center; width:40px; height:48px; overflow:hidden; border-radius:5px; background:var(--color-preview-bg); box-shadow:var(--shadow-custom); }
.project-logo { width:24px; height:24px; overflow:visible; }
.index-copy { display:flex; min-width:0; flex-direction:column; }
.index-title { font:450 17px/1.625 Inter,"Inter Fallback",system-ui; color:var(--color-gray-1200); text-wrap:pretty; }
.index-meta { font:400 17px/1.625 Inter,"Inter Fallback",system-ui; color:var(--color-gray-1100); text-wrap:pretty; }
.row-chevron { display:inline-flex; width:0; vertical-align:-.2em; color:var(--color-gray-1000); opacity:0; translate:-2px 0; scale:.75; transition:opacity .2s ease-out,translate .2s ease-out,scale .2s ease-out; }
.row-chevron svg { width:18px; height:18px; flex:none; margin-left:2px; }
@media(hover:hover) and (pointer:fine) { .index-row:hover .row-chevron { opacity:1; translate:0; scale:1; } }
```

两行文字高55.25，加a上下16为71.25；再加li上下12与1px细线，普通步距84.25px，末行83.25px。文字换行时自然增高。项目首字从列左边+62px起；不要只给整行height84px再把内容垂直居中。文档内灰条：padding4、gap4，三条高度3px，宽12/20/16px，圆角full；第一条上margin2、第二条上margin4。**反例：无图标＋标题左／日期右grid，即使颜色全部正确也不属于这个组件。**

### InlineIconLink / InlineSearchTrigger / InlineLink

首页简介段落中的实体链接、入口徽标与快捷键搜索触发器共同构成「文字流内嵌图标」体系，图标始终位于词组左侧并绑定防拆行。

```html
<p class="home-bio">
  简介文字中的<a class="inline-icon-link" href="/profile" rel="noopener" target="_blank"><svg class="inline-glyph" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"></svg>外部实体<span class="sr-only"> (在新标签页打开)</span></a>，
  以及专属入口<a class="inline-icon-link" href="/qa"><svg class="inline-dither-badge" aria-hidden="true" viewBox="0 0 64 12" fill="currentColor" shape-rendering="crispEdges"></svg>提问</a>或<button class="inline-search" type="button" aria-haspopup="dialog" aria-keyshortcuts="Meta+K"><span class="inline-keycaps" aria-hidden="true"><kbd class="inline-kbd">⌘</kbd><kbd class="inline-kbd">K</kbd></span><svg class="inline-glyph inline-search-touch-icon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"></svg>搜索</button>。
</p>
```

```css
.inline-icon-link,
.inline-search { font-weight:450; color:var(--color-gray-1200); white-space:nowrap; text-decoration:underline transparent; text-underline-offset:3px; transition:text-decoration-color .2s ease; }
.inline-search { display:inline; cursor:pointer; padding:0; border:0; background:transparent; font-size:17px; line-height:20px; }
@media(hover:hover) and (pointer:fine) {
  .inline-icon-link:hover,
  .inline-search:hover { text-decoration-color:var(--color-gray-1100); }
}
.inline-glyph { display:inline-block; width:16px; height:16px; margin-right:4px; margin-bottom:2px; vertical-align:middle; }
.inline-dither-badge { display:inline-block; flex-shrink:0; width:64px; height:12px; margin-right:4px; margin-bottom:0; vertical-align:middle; shape-rendering:crispEdges; }
.inline-keycaps { display:none; align-items:center; gap:4px; margin-right:4px; vertical-align:middle; }
.inline-kbd { display:inline-flex; flex:none; min-width:18px; height:18px; align-items:center; justify-content:center; user-select:none; border-radius:5px; border:1px solid var(--color-preview-bg); background-color:var(--color-gray-200); background-clip:padding-box; font-size:12px; font-weight:450; color:var(--color-gray-1100); box-shadow:var(--shadow-custom), inset 0 0 0 1px rgba(0,0,0,.06); transition:color .1s ease-out,background-color .1s ease-out,border-color .1s ease-out,box-shadow .1s ease-out,scale .1s ease-out; }
.dark .inline-kbd { box-shadow:var(--shadow-custom), inset 0 0 0 1px rgba(255,255,255,.08); }
@media(pointer:fine) {
  .inline-keycaps { display:inline-flex; }
  .inline-search-touch-icon { display:none; }
}
@media(prefers-reduced-motion:reduce) { .inline-kbd { transition:none; } }
.article-underline { text-decoration:underline var(--color-gray-600); text-underline-offset:3px; transition:color .2s ease,text-decoration-color .2s ease; }
.article-underline:hover { color:var(--color-gray-1200); text-decoration-color:var(--color-gray-1100); }
```

- **行内小图标（`inline-glyph`）**：`16×16px`、右边距 `4px`、底部抬升 `2px` 对齐中轴，继承链接 `gray-1200`（`fill="currentColor"`），采用 24×24 实心或圆角厚面图形以匹配 `450` 字重墨量；`aria-hidden="true"`，外链末尾附 `.sr-only` 新标签提示。
- **宽幅点阵徽标（`inline-dither-badge`）**：用于需要特殊视觉辨识的独立入口（如对话入口，首页与短笔记正文均可用），`64×12px` 单色渐密点阵 SVG、`mr-1 mb-0`、`crispEdges`、`fill="currentColor"` 同步适配浅深主题。
- **前置双键帽与触屏回退**：精细指针端把**两枚独立 `18×18px` 键帽**（间距 `4px`、圆角 `5px`、字号 `12px`、立体边+阴影+内微描边）排在触发文字**前面**，与文字间距 `4px`；触屏/粗指针端隐藏双键帽，自动切换为前置 `16×16px` 搜索图标，确保移动端与其余行内图标链接视觉一致。
- **下划线角色隔离**：首页简介内链默认下划线透明、hover 变 `gray-1100`；正文链接 `.article-underline` 默认 `gray-600` 下划线、hover 变 `gray-1200` 与 `gray-1100`。两者默认态绝不混用。
- **显式反例**：禁止把行内链接做成无图标的纯加粗文字；禁止把 `⌘` 与 `K` 合并成一个宽胶囊；禁止把键帽放到「搜索」文字右侧；禁止给搜索触发器套用灰色 pill 背景或从段落中拆出独立成行。

### ReadingToolbar / CircularIconButton

```html
<header class="reading-toolbar"><a class="circle interactive pressable" aria-label="返回"><svg width="18" height="18"></svg></a><button class="circle interactive pressable" aria-label="复制链接"><span class="copy-mark"><svg width="18" height="18"></svg></span></button><span class="sr-only" role="status" aria-live="polite"></span></header>
```

```css
.reading-toolbar { display:flex; min-height:36px; justify-content:space-between; align-items:center; gap:8px; user-select:none; }
.circle { display:flex; flex:none; width:36px; height:36px; justify-content:center; align-items:center; border:0; border-radius:9999px; background:var(--color-gray-300); color:var(--color-gray-1000); }
@media(hover:hover) and (pointer:fine) { .circle:hover:not(:disabled) { background:var(--color-gray-400); color:var(--color-gray-1200); } }
.pressable:active:not(:disabled) { scale:.97; }
```

图标18px，不是将36px热区作为图标尺寸。复制成功切换到check图形，采用独立span的blur/opacity/transform退入，而不是把整钮缩放到消失；剪贴板失败不能展示成功。ARIA名称说明动作，状态用独立live region，不依赖图形变化传意。具体成功显示时长由行为配置管理，不凭空定一个全站计时常量。

### PillButton

仅用于问答建议与内容指定的次要筛选，不用于首页搜索。

```html
<button class="pill interactive pressable" type="button">建议问题</button>
```

```css
.pill { border:0; border-radius:9999px; background:var(--color-gray-300); color:var(--color-gray-1100); padding:6px 14px; font:450 14px/20px Inter,system-ui; }
@media(hover:hover) and (pointer:fine) { .pill:hover { color:var(--color-gray-1200); } }
```

总高32px；hover背景不变，仅文字从1100变1200。反例：给建议套48px主按钮或给首页搜索套此组件。

### NewsletterForm / PrimarySubmitButton

```html
<div class="newsletter-shell"><form class="newsletter-form"><label class="sr-only" for="email">邮箱</label><input id="email" type="email" autocomplete="email" required><div class="newsletter-action"><button class="primary-submit" type="submit"><span>订阅</span><span aria-hidden="true" class="submit-feedback"></span></button></div></form></div>
```

```css
.newsletter-shell { width:100%; padding:4px; border-radius:9999px; background:var(--color-gray-background); box-shadow:var(--shadow-custom); }
.newsletter-form { display:flex; width:100%; align-items:stretch; overflow:hidden; border-radius:9999px; background:var(--color-preview-bg); box-shadow:var(--shadow-custom); }
.newsletter-action { flex:none; padding:4px; }
.newsletter-form input { min-width:0; flex:1; height:56px; padding-inline:20px; border:0; background:transparent; color:var(--color-gray-1200); font:400 17px/1 Inter,system-ui; outline:none; text-overflow:ellipsis; }
.primary-submit { position:relative; display:inline-flex; flex:none; align-items:center; justify-content:center; height:48px; min-width:112px; padding-inline:16px; overflow:hidden; border:0; border-radius:9999px; background:var(--color-gray-1200); color:var(--color-gray-100); font:500 17px/1.625 Inter,system-ui; }
```

实际输入外框由组件层级决定：外壳整体高64px、内表单56px，字段56、提交48；字段与按钮不能各占一行。提交按钮宽随文案，不能把英文113.14px硬锁给所有语言。禁用opacity .6、cursor:not-allowed；加载/成功/失败反馈共用同一按钮边界，不扩出大状态卡。只在明确提交时发送，静态预览不可自动订阅。

### CommandPalette

```html
<div class="command-backdrop" hidden></div>
<div class="command" role="dialog" aria-modal="true" aria-label="搜索" hidden>
 <div class="command-input-pad"><div class="command-input-box"><div class="command-input-scale"><input role="combobox" aria-expanded="true" aria-controls="command-results" aria-autocomplete="list"></div></div></div>
 <div class="command-scroll"><div id="command-results" role="listbox"><section><div class="command-group">分类</div><div class="command-option" role="option" data-selected="true"><span>结果</span><span class="command-detail">说明</span></div></section></div></div>
 <footer class="command-keys"><span aria-hidden="true"></span><div><kbd>↑</kbd><kbd>↓</kbd><span>选择</span><kbd>↵</kbd><span>确认</span><kbd>esc</kbd><span>关闭</span></div></footer>
</div>
```

```css
.command-backdrop { position:fixed; inset:0; background:#0000001a; }
.dark .command-backdrop { background:#00000040; }
.command { position:fixed; top:18%; left:50%; z-index:50; width:calc(100vw - 40px); max-width:720px; translate:-50% 0; overflow:clip; border:0; border-radius:16px; background:var(--color-preview-bg); box-shadow:var(--shadow-custom); outline:none; transition:scale .15s ease-out,opacity .15s ease-out; }
.dark .command { background:var(--color-gray-100); }
.command-input-pad { padding:6px 6px 0; }
.command-input-box { display:flex; height:40px; align-items:center; gap:10px; padding-inline:10px; border:1px solid var(--color-gray-400); border-radius:10px; background:var(--color-gray-100); }
.command-input-scale { flex:1; min-width:0; height:100%; }
.command input { width:calc(100% / .875); height:100%; padding:0; border:0; background:transparent; color:var(--color-gray-1200); transform-origin:left; transform:scale(.875); font-size:16px; line-height:calc(1.25 / .875); outline:none; }
.command-scroll { max-height:372px; padding-inline:6px; scroll-padding-block:6px; transition:height .15s ease-out; overflow:auto; }
.command-option { display:flex; align-items:center; height:40px; gap:10px; padding-inline:10px; border-radius:10px; cursor:pointer; font-size:14px; line-height:20px; color:var(--color-gray-1200); }
.command-option[data-selected=true] { background:var(--color-gray-300); }
.command-group { padding:10px; color:var(--color-gray-900); font-size:14px; font-weight:500; line-height:20px; }
.command-group:first-child { padding-top:4px; }
.command-keys { display:none; align-items:center; justify-content:space-between; border-top:1px solid var(--color-gray-300); padding:12px 14px; background:var(--color-gray-100); color:var(--color-gray-900); font-size:14px; line-height:20px; }
.dark .command-keys { background:var(--color-gray-200); }
@media(min-width:40rem) { .command input { width:100%; transform:none; font-size:14px; line-height:20px; } .command-keys { display:flex; } }
```

桌面面板x360/y162/w720；输入外壳708×40、内容686×38；结果区372px上限，整体高度随内容变化，不锁定463px。结果内容上/下padding6；首组标签padding4px 10px 10px，后组10px。底栏45px含顶边；键帽20px高、最小宽20px、6px圆角、1px gray400边、preview底、14/450/gray1100；Esc字帽padding-inline6且12px字。

移动输入16px原始字号乘.875获得14px视觉，宽除.875抵消缩放；不得直接把原始字号改14导致自动缩放。底栏小于40rem隐藏。滚动条6px宽，gray800 thumb、圆角，默认透明，hover/scroll时100ms显现。

键盘流程：Meta+K打开；输入框接管焦点；输入改变结果与分组；上下选择并把选中项滚入视口；Enter确认当前项；Escape关闭并还原触发前焦点；Tab不能落回背景。输入为空显示默认分类，不为空可出现问答兜底；没有匹配时仍可保留一条“询问当前词”的可执行项、显示空结果说明与清除入口；**不得未确认就请求问答服务**。`aria-activedescendant`、option id、aria-selected与视觉data-selected保持一致。遮罩平坦背景在浅色为226灰、深色为12灰；不能使用正文深灰40%那种过重遮罩。

### CodeBlock

```html
<figure class="code-block">
 <div class="code-bar"><div class="code-file"><svg width="16" height="16"></svg><span>example.tsx</span></div><button class="code-copy pressable" aria-label="复制代码"><span class="copy-mark"></span></button></div>
 <pre tabindex="0"><code><span style="--shiki-light:var(--syntax-light-1);--shiki-dark:var(--syntax-dark-1)">示例内容</span></code></pre>
 <span class="sr-only" role="status" aria-live="polite"></span>
</figure>
```

```css
.code-block { width:100%; margin-block:32px; overflow:hidden; border-radius:16px; background:var(--color-preview-bg); box-shadow:var(--shadow-custom); }
.code-bar { display:flex; align-items:center; justify-content:space-between; gap:8px; margin:4px 4px 0; padding:6px 6px 6px 12px; border-radius:12px; background:var(--color-gray-100); box-shadow:var(--shadow-custom); }
.code-file { display:flex; align-items:center; min-width:0; gap:8px; color:var(--color-gray-1100); font:400 13px/1.625 "Berkeley Mono",monospace; }
.code-file svg { color:#149eca; }
.code-copy { display:flex; flex:none; width:28px; height:28px; align-items:center; justify-content:center; border:0; border-radius:6px; background:transparent; }
.code-block pre { margin:0; padding:12px; overflow-x:auto; overscroll-behavior-x:contain; tab-size:4; scrollbar-width:thin; scrollbar-color:var(--color-gray-600) transparent; font:400 13px/1.625 "Berkeley Mono",monospace; }
.code-block pre::-webkit-scrollbar { height:4px; }
.code-block pre::-webkit-scrollbar-thumb { border-radius:9999px; background:var(--color-gray-600); }
.code-block pre span { color:var(--shiki-light); }
.dark .code-block pre span { color:var(--shiki-dark); }
.code-block:has(pre:focus-visible) { outline:2px solid var(--color-gray-1100); }
.code-block pre:focus-visible { outline:none; }
@media(hover:hover) and (pointer:fine) { .code-copy:hover { background:var(--color-gray-300); } }
```

栏高40px=6+28+6；前4px留白；pre高由行数自然决定，不把整个代码块锁定152.5px。复制只复制原始代码，不含文件名、按钮、行号或复制反馈。图标16px、hover文字gray1000→1200，点击成功check图形与复制图形采用局部blur-fade切态；权限失败明确反馈。

### QuoteCard

```html
<figure class="quote-card"><blockquote><span class="quote-mark">“</span>引文内容<span class="quote-mark">”</span></blockquote><figcaption><div><span class="quote-author">作者</span><span class="quote-separator" aria-hidden="true"></span><span class="quote-source">出处</span></div></figcaption></figure>
```

```css
.quote-card { display:flex; flex-direction:column; align-items:center; width:100%; margin-block:32px; overflow:hidden; border-radius:16px; background:var(--color-preview-bg); box-shadow:var(--shadow-custom); }
.quote-card blockquote { width:100%; margin:0; padding:16px; color:var(--color-gray-1200); font:400 30px/1.375 Heldane,Georgia,serif; letter-spacing:-.01em; text-wrap:pretty; }
.quote-mark { color:var(--color-gray-900); }
.quote-card figcaption { display:flex; width:100%; justify-content:flex-end; gap:12px; padding:0 4px 4px; }
.quote-card figcaption>div { display:flex; flex-direction:column; align-items:flex-start; gap:1px; width:100%; padding:12px 16px; border-radius:12px; background:var(--color-gray-100); box-shadow:var(--shadow-custom); }
.quote-author { font:500 15px/1.625 Inter,system-ui; color:var(--color-gray-1200); }
.quote-source { font:400 15px/1.625 Inter,system-ui; color:var(--color-gray-1000); overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
.quote-separator { display:none; width:4px; height:4px; border-radius:1px; background:var(--color-gray-1000); rotate:45deg; }
@media(min-width:40rem) { .quote-card blockquote { padding:20px; } .quote-card figcaption>div { flex-direction:row; align-items:center; gap:8px; padding:16px 20px; } .quote-separator { display:block; } }
```

外层hover变custom-hover阴影。出处不是简单一条顶边加文字，更不是左侧竖线blockquote；它是4px内缩的12px圆角浅色独立底栏。

### CustomVideoPlayer

```html
<figure class="media-wrap"><div class="video-player">
 <video autoplay muted playsinline loop preload="metadata"></video><div class="media-outline"></div>
 <button class="video-hit" aria-label="播放或暂停"></button><div class="video-center" aria-hidden="true"><span></span></div>
 <div class="video-gradient"></div><div class="video-controls"><button aria-label="播放或暂停"></button><time>00:00</time><div class="video-seek"><input type="range" aria-label="播放进度"></div><time>00:00</time><select aria-label="播放速度"><option>1×</option></select><button aria-label="全屏"></button></div>
</div></figure>
```

- 外层列宽，aspect-ratio由资源真实宽高比给出；此实例644×434.16，不能强行改16:9。`video{position:absolute;inset:0;width:100%;height:100%;object-fit:contain}`。不要把所有图片框共用这个比例。
- 外框radius16、overflow:hidden；单独overlay `outline:1px solid var(--color-border-overlay);outline-offset:-1px`，不让边框增加布局尺寸。
- 主热区absolute inset0、bottom44px、z0；hover:none时bottom0。中心64×64圆、黑25%底、white90%图形、blur8，图标28px；默认opacity0，group-hover或hover:none时1，200ms ease-out。
- 底部渐变高80px、黑70%→透明、默认0；hover或控件focus-visible时1。
- 控条left/right8、bottom8、height36、z10、水平padding8、gap8；默认向下8px且opacity0，hover/focus时translate0且opacity1。按钮26×26、radius8、hover白15%，图形16px。时间12px/450、line-height16、tabular-nums；倍速select高26、padding-inline6、12px、取消原生箭头。
- seek视觉轨道4px高，交互区域24px高，touch-action:none；未播放段white30%，播放段white。拖动、键盘、倍速、全屏分别由媒体状态驱动；不能只动UI而不改媒体时间。
- 焦点热区使用白2px内偏移4px轮廓；隐藏的控制层在键盘聚焦时必须可见。资源加载前保留比例，时长未知显示占位；禁止伪装已播放、禁止把失败当空白设计。

### MediaFrame / SocialEmbedCard / Tooltip

MediaFrame为列宽、radius16、overlay 1px内描边；素材比例作为内容属性，不写全局固定比例；图片保留语义alt，视频另走前述控件。

SocialEmbedCard是外部内容链接，外层block、padding4、radius16、gray-background底、custom shadow；内层flex-column、padding16、radius12、1px preview-border、preview-bg。身份行gap12；头像40×40圆形、object-fit:cover、浅色黑10%/深色白10% outline；名称600/gray1200，账号14px/gray1100。正文上距12、16px/24px、gray1200；媒体上距12、radius16、overlay描边；元数据上距12、14px/gray1100；操作行上距12、gray200顶边、padding-top12，图标18px、图标与数字gap6。整卡随内容自然增高；点击进入来源，不制造本地点赞成功状态。匿名骨架如下：

```html
<a class="social-outer"><div class="social-inner"><header><span role="img" aria-label="头像"></span><div><strong>名称</strong><span>账号</span></div></header><p>动态内容</p><figure class="social-media"></figure><p class="social-meta">时间与浏览量</p><footer class="social-actions"><span>操作统计</span></footer></div></a>
```

不得把社交头像引入首页Identity，不用未经样式控制的嵌入外观。

Tooltip是浮层而非正文：padding6px 10px、radius8、14px/20px、preview底、gray1200文字、custom shadow、z50；焦点与hover均可触发，不能仅靠鼠标。内容演示中的仿系统菜单不是全站menubar。

### SectionHeadingWithHairline / InteractiveDemoCanvas

```html
<h2 class="article-heading"><span class="anchor-label"><a class="heading-anchor" href="#section-a" aria-label="章节链接">#</a>章节名称</span><span class="hairline" aria-hidden="true"></span></h2>
<div class="demo-wrap"><div class="demo-canvas" data-demo-scope="a"><div class="demo-state"></div></div><p class="demo-caption">操作说明</p></div>
```

```css
.anchor-label { position:relative; margin-left:-28px; padding-left:28px; }
.heading-anchor { position:absolute; left:0; top:50%; display:flex; width:24px; height:24px; align-items:center; justify-content:center; translate:0 -50%; border-radius:6px; opacity:0; transition:opacity .2s ease-out; }
.anchor-label:hover .heading-anchor,.heading-anchor:focus-visible { opacity:1; }
.hairline { flex:1; height:1px; background:var(--color-gray-400); }
.demo-wrap { display:flex; width:100%; flex-direction:column; align-items:center; margin-block:32px; }
.demo-canvas { display:flex; width:100%; flex-direction:column; align-items:center; justify-content:center; overflow:hidden; border-radius:16px; background:var(--color-preview-bg); box-shadow:var(--shadow-custom); }
```

演示caption14px灰1100、上距16；画布尺寸与动态由各实例定义。`data-demo-scope`只是隔离建议，不承担样式；所有radio/switch/drag/menu状态限于该实例。不得把演示中的全屏展示式布局变成真实页面导航。

## 4. 完整状态合同

| 组件 | 默认 | Hover | Focus-visible | Active / 执行 | Disabled / 空 / 失败 |
|---|---|---|---|---|---|
| 首页目录 | 透明、双行、箭头0 | 精细指针箭头显现并复位缩放位移，无整行灰块 | 显示2px焦点环 | 跟随语义链接导航 | 无内容不渲染假行 |
| 行内搜索 | 无底、450、透明下划线 | 线1100 | 可见环、打开后移焦输入 | 打开命令面板 | 不提交服务请求 |
| 圆形工具钮 | 灰300底/1000字 | 灰400底/1200字 | 通用2px环 | scale .97；复制成功局部check | opacity .5、不可按；失败不得check |
| 建议胶囊 | 灰300/1100 | 背景不变、文字1200 | 通用环 | .97；按明确动作填入/提交 | 空建议不渲染 |
| 邮件主提交 | 48px近黑胶囊 | 保持主色体系的短反馈 | 通用环 | 异步状态在原边界内切换 | .6，禁止重复提交，错误文案可读 |
| 命令面板 | 默认分组、首项高亮 | 指针选择结果 | 焦点锁在对话内 | 上下/Enter/Esc | 空结果提示＋可选问答兜底，不自动执行 |
| 代码复制 | 28px透明钮 | 灰300底/1200图形 | 可见环 | .97＋复制图形换态 | 权限失败保持可重试 |
| 引用卡 | preview底/custom | custom-hover阴影 | 若有链接保留焦点 | 来源链接按语义动作 | 无来源时不画假链接 |
| 视频 | 画面/比例占位，控制层隐藏 | 中心/渐变/控条显现 | 控条不能不可见 | 播放/暂停/进度/倍速/全屏同步媒体 | 未就绪与失败明确，不伪造时长 |
| 本地状态演示 | 每个画布自身默认状态 | 仅本地反馈 | radio/switch支持键盘 | 更新本地state与ARIA | 错误只属于演示，不改变全站 |
| 问答输入 | 底部固定，空按钮禁用 | 建议胶囊文字变化 | textarea/submit可达 | 用户确认后发起 | 输入为空禁用；失败可重试；保留用户内容 |

这里的“状态合同”是实现必须具备的行为，不将静态CSS存在等同于异步服务、剪贴板权限或设备媒体能力已经可用。

## 5. 主题、动效与键盘

主题不在组件内写两套颜色；只更新根标记与语义变量。以下初始化是应用实现合同，不依赖站点业务。

```js
const root = document.documentElement;
const systemTheme = matchMedia('(prefers-color-scheme: dark)');
let explicitTheme;
try { const saved = localStorage.getItem('theme'); if (saved === 'light' || saved === 'dark') explicitTheme = saved; } catch {}
function applyTheme() {
 const theme = explicitTheme || (systemTheme.matches ? 'dark' : 'light');
 root.classList.toggle('dark', theme === 'dark');
 root.classList.toggle('light', theme === 'light');
 root.dataset.theme = theme;
 const meta = document.querySelector('meta[name="theme-color"]');
 if (meta) meta.content = theme === 'dark' ? '#101010' : '#fcfcfc';
}
applyTheme();
systemTheme.addEventListener('change', () => { if (!explicitTheme) applyTheme(); });
function chooseTheme(theme) {
 explicitTheme = theme;
 try { if (theme) localStorage.setItem('theme', theme); else localStorage.removeItem('theme'); } catch {}
 applyTheme();
}
```

初始化在首屏绘制前运行；显式偏好优先，否则跟随系统。上面没有要求首页增加可见主题切换器。深浅色同时覆盖preview表面、命令面板例外、阴影、引用出处栏、代码token和浏览器theme-color，不能只改背景。

默认交互`200ms ease-out`；命令面板/结果高度150ms；滚动条100ms。blur-fade只用于小图形/文本替换。演示弹簧、旋转、拖动完全隔离；默认页面不得模仿演示作大幅弹跳。

```css
.interactive { transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,box-shadow; transition-duration:.2s; transition-timing-function:ease-out; }
:focus-visible { outline:2px solid var(--color-gray-1100); outline-offset:2px; border-radius:4px; }
@media(prefers-reduced-motion:reduce) {
 *,*::before,*::after { scroll-behavior:auto!important; transition-duration:.01ms!important; animation-duration:.01ms!important; animation-iteration-count:1!important; animation-delay:0s!important; }
}
```

键盘顺序必须跟视觉：返回→复制→文章目录（如果有）→正文链接→页底导航；对话打开后输入接管焦点、关闭后还原；所有图标按钮有action aria-label、复制有live状态；列表用li、日期用time、引用用blockquote/figcaption、代码用pre/code。不能仅用颜色表达选中、错误和禁用；输入label不能只靠placeholder。

## 6. 开发自检门禁

### 结构断言

- [ ] 六类页面分别走自己的蓝图，不用一份首页模板包全部。
- [ ] 外壳692含48px水平padding，正文644；390视口正文342。
- [ ] 首页标题500、文章标题550、产品hero600；首页Bio始终gray1100。
- [ ] 项目与文章目录均有46×54装裱框；日期在标题下；li6+a8双层padding完整。
- [ ] 普通目录内a自然高71.25，li步距84.25；文本换行后自动增高。
- [ ] 首页简介内链带前置16×16实心同色小图标（mr-1/mb-0.5/whitespace-nowrap）；搜索属于段落流、无pill背景，精细指针双18×18独立键帽位于文字前，触屏回退为前置16×16图标。
- [ ] 工具头36、到H1间隔96；H2前96后20；notes p+p24与长文br换段不混用。
- [ ] 命令面板720最大宽、18%顶部、16px角、选中项40高、移动输入原始16px。
- [ ] Quote出处栏是内缩浅底12px圆角，不是普通顶线；代码栏40高、复制28、代码13。
- [ ] 视频控条36、中心64、渐变80、键盘聚焦可见；真实资源比例不被覆盖。
- [ ] 问答初始输入在底部，不在页面中间；建议自动折行，输入16px，提交36px。
- [ ] 全局没有未授权的新字体、新色值、新组件或演示控件泄漏。

### 视觉与行为独立检查

固定同一内容、字体、视口、DPR、滚动锚点与资源就绪条件后，分别保存1440×900/390×844、浅/深、默认/hover/focus/active、命令开/过滤/空、代码复制、引用、视频控件、产品状态、问答输入的对照。颜色先比语义角色，再比色域；几何先比相对gap，再比绝对y；文字先确认字体命中，再比较断行。动态内容冻结在同一帧，异步失败与成功分开。

文件完整性、链接完整性和可运行构建是三项工程检查，不替代视觉对齐；静态状态齐全也不替代键盘路径、剪贴板结果、媒体播放和真实触屏检查。未经过对应检查的状态不能在发布清单里记为通过。
