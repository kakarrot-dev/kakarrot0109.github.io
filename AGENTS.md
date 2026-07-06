# 项目 AI Coding Agent 规范

本文件适用于当前项目。
Codex 默认读取本文件。
Claude Code 通过项目根目录 `CLAUDE.md` 导入本文件。

------

## 1. 项目基本信息

项目名称：

```text
kakarrot.com — KAKARROT'S BLOG
```

项目定位：

```text
个人网站 / 技术博客 — AI 产品经理的思考、写作与作品展示
```

主要用户：

```text
网站访客、技术读者、潜在合作方
```

核心目标：

```text
展示作品与写作，建立个人品牌，分享 AI 产品实践与方法论
```

非目标：

```text
- 不做多用户系统
- 不做后台管理
- 不做评论系统
- 不做 SEO 优化外的商业化尝试
```

------

## 2. 技术栈

前端：

```text
Astro 5 + .astro 组件
```

后端：

```text
无后端 — 纯静态站，通过 Astro Content Collections 管理内容
```

数据库：

```text
无数据库 — 内容以 Markdown 文件存储在 src/content/ 下
```

包管理器：

```text
npm
```

UI 体系：

```text
Tailwind CSS 4 + 自研全局样式（global.css）
```

部署方式：

```text
GitHub Pages — GitHub Actions 自动构建部署
```

------

## 3. 常用命令

开始任务前，先查看本节，不要凭空猜命令。

安装依赖：

```bash
npm install
```

本地开发：

```bash
npm run dev
```

类型检查：

```bash
npm run check
```

测试：

```bash
暂无
```

Lint：

```bash
npm run lint
```

构建：

```bash
npm run build
```

格式化：

```bash
暂无
```

数据库迁移：

```bash
暂无
```

------

## 4. 目录约定

```text
src/
  components/       Astro 组件
  content/          内容集合
    projects/       项目案例（Markdown）
    writing/        博客文章（Markdown）
    vibe-coding/    Vibe Coding 作品（Markdown）
    config.ts       集合 schema 定义
  layouts/          页面布局（BaseLayout、ProseLayout）
  pages/            路由页面
    index.astro     首页
    about.astro     关于
    projects/       项目列表 & 详情
    writing/        文章列表 & 详情
    vibe-coding/    作品列表
    rss.xml.ts      RSS 生成
   404.astro        404 页面
  styles/
    global.css      全局样式 & 设计令牌
public/
  avatar.jpeg       头像
  favicon.ico       图标
  CNAME             自定义域名
.github/
  workflows/
    deploy.yml      GitHub Actions 自动部署
```

规则：

- 修改前先理解目录职责
- 不要把文件放到无关目录
- 不要创建重复目录
- 不要移动无关文件
- 不要顺手重构目录结构

------

## 5. 工作流规则

### 5.1 小任务

以下任务可以直接做：

- typo
- 文案调整
- 小配置修改
- 明确单点 bug
- 我已经给出明确修改点

执行前说明：

```text
目标：
改动位置：
验证方式：
```

### 5.2 中大型任务

以下任务必须先写 spec：

- 新增功能
- 修改核心逻辑
- 数据库变更
- 权限、登录、安全、支付
- 多端联动
- 架构调整
- 多模块改动
- 需求有歧义

流程：

```text
讨论需求边界
→ 编写 spec
→ 等我确认
→ 编写 plan
→ 等我确认
→ 开发
→ 验证
→ 文档同步
→ commit
→ push
```

------

## 6. Spec 规则

spec 放到：

```text
docs/superpowers/specs/
```

命名格式：

```text
YYYY-MM-DD-功能名-spec.md
```

spec 模板：

```md
# 功能规格：功能名

## 背景

为什么要做。

## 目标

要实现什么。

## 非目标

明确不做什么。

## 用户场景

谁在什么场景下使用。

## 需求边界

包含什么，不包含什么。

## 交互流程

用户如何操作，系统如何响应。

## 数据与状态

涉及哪些数据、状态、缓存、本地存储、数据库字段。

## 权限与安全

是否涉及权限、敏感数据、鉴权、日志脱敏。

## 异常情况

只列真实可能发生的异常，不为低概率场景过度设计。

## 验收标准

怎么判断完成。
```

spec 不写实现细节，除非实现约束会影响需求边界。

------

## 7. Plan 规则

plan 放到：

```text
docs/superpowers/plans/
```

命名格式：

```text
YYYY-MM-DD-功能名-plan.md
```

plan 模板：

```md
# 开发计划：功能名

## 对应 spec

路径：docs/superpowers/specs/xxx.md

## 已确认需求

列出已确认的需求点。

## 当前代码理解

说明现有代码结构和关键文件。

## 实现步骤

按最小可提交单元拆分。

## 涉及文件

列出预计修改文件。

## 验证方式

列出要运行的检查命令。

## 回滚方式

说明如何回滚本次改动。

## 文档同步

说明是否需要更新 README.md、lessons.md 或其他文档。
```

plan 要能执行，不要写泛泛而谈的计划。

------

## 8. 编码规则

默认最小改动。

禁止：

- 做需求外功能
- 提前抽象
- 无关重构
- 顺手格式化无关文件
- 引入不必要依赖
- 大范围重写
- 不理解代码就删除
- 为一次性逻辑创建复杂架构

新增依赖前必须说明：

- 现有能力为什么不够
- 新依赖解决什么问题
- 是否有更轻量方案
- 对构建、包体积、维护的影响

------

## 9. UI 规则

遵守 `DESIGN.md` 规范（如存在）。

当前项目设计风格：

- 暖白底色（oklch(96% 0.015 75)）
- 酸绿色强调色（#39ff14）
- 粗边框 + shell 容器布局
- 等宽字体用于标签、数字
- 滚动渐入动效

------

## 10. API 与后端规则

当前项目无后端 API 服务。如果未来引入：

- 输入校验
- 权限判断
- 错误处理
- 日志脱敏
- 幂等性
- 数据一致性
- 超时与重试边界
- 不向用户暴露内部错误

API 变更前必须明确：

- 调用方是谁
- 请求参数是什么
- 返回结构是什么
- 错误码是什么
- 是否需要分页
- 是否需要鉴权
- 是否需要幂等
- 是否会被前端直接消费

不要随意改变已有字段语义。
破坏性变更必须先说明兼容方案。

------

## 11. 数据库规则

当前项目无数据库。如果未来引入 Content Collections schema 变更：

- 字段变化
- 是否影响已有 Markdown 文件
- 回滚方式
- 是否影响旧版本

禁止未确认就执行：

- 删除字段
- 清空内容目录

------

## 12. 验证规则

代码改动后必须尽量验证。

验证优先级：

1. 类型检查（`npm run check`）
2. 构建（`npm run build`）
3. 手动在浏览器预览

如果验证失败，必须说明：

- 失败命令
- 失败原因
- 是否由本次改动导致
- 下一步建议

不要隐藏失败。

------

## 13. README 与 lessons.md 同步规则

新增功能、修改功能、关键修复后，必须检查：

- README.md
- lessons.md
- docs/

### 13.1 README.md

只有影响长期使用或开发的信息才更新 README。

适合写入：

- 安装方式
- 启动方式
- 构建方式
- 环境变量
- 核心功能
- 项目架构
- 开发命令
- 配置说明
- 已知限制

不写：

- 临时过程
- 普通修复流水账
- 无关想法

### 13.2 lessons.md

lessons.md 记录可复用经验。

适合写入：

- bug 根因
- 框架限制
- 项目约定
- 调试经验
- 不要重复犯的错误
- 已确认不可行方案

写入前必须去重。
已有类似内容时，更新原条目，不新增重复条目。

推荐格式：

```md
## YYYY-MM-DD

### 主题

- 现象：
- 根因：
- 解决：
- 以后注意：
```

------

## 14. Git 规则

每完成一个已确认的 plan，默认执行：

```text
git status
→ 只添加本次相关文件
→ 运行验证
→ git commit
→ git push
```

提交前必须检查：

- 当前分支不是 main/master/production/release
- 没有无关文件
- 没有密钥、token、.env
- 没有缓存、构建产物、大文件
- 验证已运行，或已说明不能运行原因
- README.md 和 lessons.md 已检查

commit message 使用：

```text
类型: 简短说明
```

常用类型：

```text
feat / fix / docs / refactor / test / chore / style / perf
```

示例：

```text
fix: 修复模型能力检测失败
docs: 更新模型能力检测计划
feat: 新增供应商能力自动识别
```

禁止无确认执行：

```bash
git push --force
git push --force-with-lease
git reset --hard
git clean -fd
git rebase
```

------

## 15. 安全规则

禁止读取、输出、提交：

- API Key
- Token
- 密码
- Cookie
- 私钥
- 证书
- .env
- .env.local
- 本地数据库
- 用户隐私数据
- 生产凭证

如果发现敏感信息进入 git，立即停止，不要 push。

------

## 16. 完成定义

任务满足以下条件才算完成：

- 需求已实现
- 验证已运行，或已说明不能运行的原因
- 没有无关改动
- 没有敏感信息泄露
- README.md 已检查
- lessons.md 已检查
- 如有 plan，plan 状态已更新
- 已按规则 commit
- 如允许 push，已 push
- 已用简短中文汇报结果

完成后回复格式：

```text
已完成。

改动：
- 文件：改动说明

验证：
- 命令：xxx
- 结果：通过 / 失败 / 未运行

文档：
- README.md：已检查 / 已更新 / 无需更新
- lessons.md：已检查 / 已更新 / 无需更新

Git：
- commit：xxx
- push：已完成 / 未执行，原因：xxx

风险：
- 无 / xxx
```

不要贴完整代码。
不要贴完整 diff。
不要写长篇过程。

------

## 17. Claude Code 兼容层

项目根目录额外创建 `CLAUDE.md`，内容保持极简：

```md
# Claude Code 项目入口

请先读取并遵守：

@AGENTS.md

补充规则：

- 默认使用简体中文沟通。
- 不要在终端展示大段代码或完整 diff，除非用户明确要求。
- 中大型任务先进入 plan mode，确认后再实现。
```
