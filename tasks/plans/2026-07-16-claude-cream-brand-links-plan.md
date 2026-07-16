# Claude Cream 品牌素材与 GitHub 链接修复计划

> 执行要求：在当前会话内逐项实施，每项完成后验证并更新勾选状态。

**目标：** 为网站 Claude Cream 作品页增加仓库内的 Logo、横幅和正确作者链接，同时修复 `kakarrot-dev/claude-cream` 两份 README 中指向旧账号的 9 个链接。

**实现方式：** 网站只修改 Markdown 内容，通过 GitHub Raw URL 引用现有 SVG，不复制图片。上游仓库只替换 README 中的旧账号链接，不修改历史文章或其他内容。

**技术栈：** Astro Content Collections、Markdown、GitHub Raw、Git。

## 全局约束

- 网站图片使用 `kakarrot-dev/claude-cream` 仓库 `main/img/brand/` 中的现有 SVG。
- 正确 GitHub 账号统一为 `kakarrot-dev`。
- 不修改两篇历史文章中的 `kakarrot0109.github.io` 记录。
- 不处理 `.codegraph/`。
- 不创建 PR，不合并主分支。

---

### 任务 1：更新网站作品页

**文件：**

- 修改：`src/content/vibe-coding/claude-cream.md`

- [x] 修改前检查 Logo、横幅和作者链接尚不存在。
- [x] 在正文开头加入居中 Logo 和项目横幅。
- [x] 在正文底部加入指向 `https://github.com/kakarrot-dev` 的作者链接。
- [x] 运行文本检查，确认三个新增内容存在。
- [x] 运行 `npm run check`、`npm run lint`、`npm run build`。

### 任务 2：修复上游仓库 README

**文件：**

- 修改：`README.md`
- 修改：`README.zh-CN.md`

- [x] 修改前检查两份 README 中共存在 9 个 `kakarrot0109` 链接。
- [x] 将仓库徽章链接改为 `https://github.com/kakarrot-dev/claude-cream`。
- [x] 将作者链接改为 `https://github.com/kakarrot-dev`。
- [x] 检查两份 README 不再包含 `kakarrot0109`，且新链接数量正确。

### 任务 3：提交与推送

- [x] 检查两个仓库的 diff，仅包含本次相关文件。
- [x] 网站仓库提交并推送 `codex/claude-cream-brand-links`。
- [x] 上游仓库提交并推送 `codex/fix-github-links`。
- [x] 检查 README.md 和 `tasks/lessons.md` 是否需要同步。
