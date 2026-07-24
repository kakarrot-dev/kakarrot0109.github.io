---
title: "AI Agent 产品经理实战 — 从机会识别到上线运营"
description: "面向 AI 产品经理的开源中文教程，分为产品方法与产品工程两篇，覆盖场景选择、产品边界、工程判断、评估上线和持续运营"
publishedAt: 2026-07-21
topics:
  - "AI Agent"
  - "产品方法"
  - "内容创作"
cover: "/images/vibe-coding/pm-ai-agent-book/cover.webp"
featured: true
draft: false
---

这是一套面向 AI 产品经理的开源中文教程。我希望回答的不只是“怎么搭一个 Agent”，而是**什么问题值得 Agent 化，以及怎样把模型能力建设成可控、可验证、可持续运营的产品**。

<div class="book-cover-grid">
  <a href="https://github.com/kakarrot-dev/pm-ai-agent-book/blob/main/book1/00-introduction.md" aria-label="阅读《AI Agent 产品经理实战：入门篇》">
    <img src="/images/vibe-coding/pm-ai-agent-book/book1-agent-product-method-cover.webp" alt="《AI Agent 产品经理实战：入门篇——Agent 产品方法》封面" width="1024" height="1536" />
  </a>
  <a href="https://github.com/kakarrot-dev/pm-ai-agent-book/blob/main/book2/00-introduction.md" aria-label="阅读《AI Agent 产品经理实战：进阶篇》">
    <img src="/images/vibe-coding/pm-ai-agent-book/book2-agent-product-engineering-cover.webp" alt="《AI Agent 产品经理实战：进阶篇——Agent 产品工程》封面" width="1024" height="1536" />
  </a>
</div>

## 项目现在是什么

仓库现在包含两套相互独立、也能前后衔接的教程：

- **入门篇：Agent 产品方法** — 沿产品生命周期展开，讨论需求是否值得 Agent 化，产品应该做成什么，以及怎样评估、上线和运营
- **进阶篇：Agent 产品工程** — 沿 Agent 从理解目标到进入生产的工程链路展开，讨论 Context、知识、记忆、工具、执行路径、用户控制、评估和生产系统

入门篇适合系统建立产品方法；进阶篇适合在实际项目中按问题查阅。两部分可以分别阅读，进阶篇也不要求先读完入门篇。

## 为什么拆成两篇

很多 Agent 内容从模型、工具调用和架构讲起，但产品经理的第一组判断往往发生在技术方案之前：场景是否值得投入？Agent 应该拥有多大自主权？结果如何验证？什么时候必须让人介入？风险与成本能否被业务接受？

当产品进入真实交付，产品经理又不能把工程问题完全交给技术团队。Context 怎样组织，知识与记忆怎样分工，工具调用如何停止和恢复，评估怎样成为发布证据，都会直接改变产品边界和用户风险。

因此，我把内容分成“做什么”和“怎样稳定地做成”两层：先建立产品判断，再补齐工程判断。

## 两篇分别覆盖什么

入门篇从机会识别推进到规模化经营，覆盖用户研究与任务建模、MVP 与自主等级、交互信任、能力方案、评估体系、可靠性与安全、上线运营和组织协作。书稿用客户服务与事务办理 Agent、企业知识与办公 Agent 两条案例线，持续比较权限、证据和人工介入的差异。

进阶篇覆盖 Prompt 与 Context Engineering、Retrieval / Knowledge Engineering、Memory Engineering、Tool Loop Engineering、Graph Engineering、Agent Experience Engineering、Harness + Eval Engineering、Reliability Engineering、Safety Engineering 和 Production Engineering。

两篇共同围绕三个坐标展开：

- **目标**：用户真正要完成什么结果
- **行动**：Agent 可以依据什么信息，采取哪些动作
- **证据**：团队怎样证明结果正确、风险可控，并能在失败后恢复

## 适合谁阅读

- 希望转向 AI 产品或 Agent 产品的产品经理
- 正在负责 Agent 产品，希望补齐工程判断能力的从业者
- 需要与设计、算法、工程、安全和运营团队共同交付 Agent 的项目负责人

默认读者理解基本产品工作，不要求具备模型训练或 Agent 编程经验。

## 当前状态

入门篇与进阶篇正文均已完整收录，内容仍在持续校订。仓库优先维护 Markdown 书稿和可编辑图示，暂不维护网站、PDF 或配套工程脚手架。

[阅读入门篇](https://github.com/kakarrot-dev/pm-ai-agent-book/blob/main/book1/00-introduction.md) · [阅读进阶篇](https://github.com/kakarrot-dev/pm-ai-agent-book/blob/main/book2/00-introduction.md) · [查看 GitHub 仓库](https://github.com/kakarrot-dev/pm-ai-agent-book)
