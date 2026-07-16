# Codex 与 Claude Code Skill 使用指南

- [x] 读取推荐清单、文章结构与项目规范
- [x] 确认收录全部 26 个去重项目
- [x] 确认文章深度、目标读者和场景分类方式
- [x] 确认标题、序号、写作调性与冲突判断原则
- [x] 编写并自审 spec
- [x] 用户确认 spec
- [x] 编写并自审开发 plan
- [x] 用户确认开发 plan
- [x] 修复文章开发前发现的 7 个既有类型错误
- [x] 核验 26 个项目的官方安装与使用信息
- [x] 撰写 `No. 20` 文章
- [x] 运行类型检查、lint 和构建
- [x] 检查 README.md、tasks/lessons.md 与 Git 范围

## Review

- 文章：完成 26 项连续编号、26 项快速选择表、两端安装说明与 16 组冲突矩阵。
- 地址：核验 30 个外链；28 个由 `curl` 通过，2 个 TLS 失败项由 GitHub API 复核存在且未归档。
- 验证：`npm run check`、`npm run lint`、`npm run build` 均为退出码 0；构建生成 95 个页面和 No.20 路由。
- 提示：保留 `document.execCommand` 的 1 条既有弃用 hint，不影响类型检查与构建。
- 文档：README.md、AGENTS.md、tasks/lessons.md 已同步并去重。
- 范围：只包含文章、7 个基线类型修复、任务文档和对应构建产物；`.codegraph/` 保持未跟踪且不暂存。
- Git：主提交 `d1e925c` 已推送至 `codex/blog-codex-claude-skills`，按计划不创建 PR。

# Claude Cream 品牌素材与 GitHub 链接修复

- [x] 排查网站与上游仓库的 GitHub 链接
- [x] 确认方案 A：网站增加品牌素材，上游修复 9 个旧账号链接
- [x] 编写实施计划
- [x] 创建两个隔离分支
- [x] 网站文章增加 Logo、横幅和作者链接
- [x] 修复上游两份 README
- [x] 运行文本检查、类型检查、lint 和构建
- [x] 检查 README.md、tasks/lessons.md 与 Git 范围
- [ ] 提交并推送两个分支

## Review

- 待完成后补充。
