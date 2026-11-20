---
title: "Tampermonkey Scripts：为常用网页补上一层自己的体验"
description: "用原生 JavaScript 维护 X 和 2Libra 用户脚本，改善阅读布局与日常操作，并收录 V2EX Polish 上游快照作为参考"
summary: "给 X 和 2Libra 写可独立启停的用户脚本，保留 V2EX Polish 作为参考。"
publishedAt: 2026-07-21
topics:
  - "Tampermonkey"
  - "用户脚本"
  - "JavaScript"
  - "效率工具"
cover: "/images/vibe-coding/tampermonkey/cover.webp"
featured: true
draft: false
---

<p align="center">
  <a href="https://github.com/kakarrot-dev/tampermonkey">
    <img src="https://raw.githubusercontent.com/kakarrot-dev/tampermonkey/main/assets/repository-logo.png" width="112" alt="Tampermonkey Scripts Logo">
  </a>
</p>

![Tampermonkey Scripts 项目横幅](https://raw.githubusercontent.com/kakarrot-dev/tampermonkey/main/assets/repository-banner.png)

这是我的个人 Tampermonkey / Violentmonkey 用户脚本仓库。它用原生 JavaScript 按站点管理脚本，`.user.js` 源文件就是安装产物，不需要构建工具或包管理器。

## 为什么做

最初的问题来自 X。默认页面把大量空间交给右侧栏、浮动按钮和偏窄的主内容区，信息仍然能读，却需要在无关元素之间不断重新聚焦。后来使用 2Libra 时，我又遇到了另一个稳定问题：宽屏下的内容层级、主栏与侧栏比例、帖子和回复密度不符合我的阅读习惯。

这些摩擦稳定、重复，而且不需要改变平台本身的业务逻辑，适合交给小型用户脚本处理。

## 关键产品决策

- **一站一件事**：每个自有脚本只服务一个站点和一组明确的体验问题
- **保持低权限**，自有脚本只申请 `GM_addStyle`，布局和交互调整通过页面 DOM 完成
- **源码就是产物**：没有依赖、打包和生成目录，安装前可以直接检查匹配范围与权限
- **独立启停**，在脚本管理器关闭对应脚本并刷新，即可恢复站点的默认界面
- **分清来源**：自有脚本与第三方参考快照分别标注，不把上游作者和许可证混入自己的维护范围

## 当前脚本

### X 阅读增强

隐藏右侧栏和右下角浮动控件，加宽并居中主内容区，同时调整页面间距、正文行高和媒体高度。脚本兼容 `x.com` 与 `twitter.com`。点击“正在关注”发起取消关注后，脚本会自动确认弹窗。

### 2Libra V2EX 风格双栏

把宽屏页面整理为约 805 px 主栏与 270 px 侧栏，调整发帖页、帖子列表、详情和回复编辑器的间距与排版。配色跟随站点的浅色和深色主题，刷新时会读取已保存的主题。普通点击帖子在当前标签页打开，按住修饰键点击时保留浏览器原生行为。窄屏下恢复单栏。

### V2EX Polish 参考快照

仓库保留了一份 V2EX Polish 2.0.6 上游脚本快照，用于参考 V2EX 的阅读密度与排版处理。它不是我的自有脚本，安装与更新应优先前往上游项目，仓库也保留其作者和 MIT 许可证信息。

## 如何验证体验

这类脚本没有构建成功就算完成的捷径，验证发生在真实页面上。

X 阅读增强需要在 1280、1440 和 1920 像素宽度下检查首页、个人主页和帖子详情。测试自动确认时，选一个确实打算取消关注的账号，点击“正在关注”，确认弹窗自动关闭并完成取消关注。

2Libra 脚本需要检查 1440、1920 像素宽屏及 375、768 像素窄屏的首页、发帖页和帖子详情。切换浅色与深色主题后分别硬刷新，确认页面加载时采用所选配色。

## 当前状态

仓库目前收录 3 个脚本条目，其中 X 阅读增强和 2Libra 双栏布局是自有脚本，V2EX Polish 是明确标注来源的第三方快照。项目提供中英文 README、原始脚本安装链接，以及使用 Claude Cream 配色更新的 Logo 和仓库横幅。

后续是否增加脚本，仍然取决于真实使用中是否出现足够稳定、足够高频的问题。这个仓库不会为了数量被包装成通用脚本平台。

[查看 GitHub 仓库](https://github.com/kakarrot-dev/tampermonkey)

[阅读开发复盘：我用油猴脚本给常用网页补了一层自己的体验](/writing/我用油猴脚本给常用网页补了一层自己的体验/)
