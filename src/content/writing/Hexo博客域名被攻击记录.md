---
title: "No. 14: GitHub Pages 自定义域名被劫持与恢复记录"
description: "域名被篡改成赌博网站，一次完整的 GitHub Pages 域名劫持事件复盘——从发现、定位到恢复和预防。"
publishedAt: 2025-12-29
tags:
  - "GitHub Pages"
  - "安全"
  - "域名"
  - "技术复盘"
featured: false
draft: false
---

那天下班前随手打开博客，页面加载完我愣住了——**一片赌场配色**。

`kakarrot.com` 跳转到了一个叫 DADU128 Slot 的页面。再试一次，一样。我当时想的是：完了，域名没了。

冷静下来之后，发现事情没我想的那么糟，但也足够糟糕。

## 1. 现象：DNS 没挂，但内容变了

第一时间查 DNS：

- 本地 `dig kakarrot.com` 返回了错误 IP `198.18.0.73`
- 用 Google DNS 查 `dig @8.8.8.8` 却指向了正确的 GitHub Pages IP

说明 DNS 解析本身没问题。问题出在 GitHub Pages 这端。

接着打开仓库 Settings → Pages，发现两个关键信号：

- **仓库被设成了私有**。GitHub Pages 免费版只服务公开仓库，私有仓库不提供服务。
- 自定义域名显示已被占用，提示说如果我拥有该域名，需要先验证所有权才能重新绑定。

问题确认了：**域名被另一个 GitHub 账户绑定了。**

## 2. 根因：GitHub Pages 域名验证机制的漏洞

这不是 DNS 劫持。是一种针对 GitHub Pages 的特殊攻击：

1. 攻击者发现某个域名的 DNS 指向了 GitHub Pages（CNAME 到 `*.github.io`）
2. 但该域名从未在 GitHub 上验证过所有权
3. 攻击者在自己账户的仓库里配置了这个自定义域名
4. GitHub Pages 的 Host 头匹配机制直接导向了攻击者的内容

GitHub Pages 的工作原理是：收到请求 → 看 Host 头 → 匹配绑定了该域名的仓库 → 返回内容。**如果域名没被验证，任何人都能"认领"它。**

## 3. 恢复：四步夺回域名控制权

**第一步：仓库改公开。** 仓库 Settings → General → Danger Zone → Change visibility → Make public。没有这一步，GitHub Pages 根本不服务你的仓库。

**第二步：验证域名所有权。** 这是最关键的步骤，也是我之前忽略的。进入 GitHub 账户设置 `https://github.com/settings/pages` → Add a domain。GitHub 会生成一条 TXT 记录验证要求，类似：

```
主机记录: _github-pages-challenge-kakarrot0109
记录值: a034b75ef658207bb454fc2edb01ff
```

在阿里云 DNS 管理后台添加这条 TXT 记录。生效后点 Verify，域名就从攻击者账户释放了。

**第三步：配置 DNS。** 根域名不能设 CNAME，所以用 4 个 A 记录：

| 主机记录 | 类型 | 记录值 |
|---------|------|--------|
| @ | A | 185.199.108.153 |
| @ | A | 185.199.109.153 |
| @ | A | 185.199.110.153 |
| @ | A | 185.199.111.153 |
| www | CNAME | kakarrot0109.github.io |

**第四步：重新绑定域名 + 开启 HTTPS。** 仓库 Settings → Pages → 输入自定义域名，Save，等 DNS check 通过后勾选 Enforce HTTPS。

## 4. 预防：一次就够

- **验证域名所有权要第一时间做。** `https://github.com/settings/pages` 里 Add a domain，做一次就不需要再做。
- 保持仓库为公开（除非你买了 GitHub Pro）。
- 开启 Enforce HTTPS。
- 偶尔打开自己网站看一眼，别等别人提醒你。

---

这件事之后我养成了个习惯：每换一次 DNS 配置，就去检查一遍域名验证状态。

**安全措施只有在出事之前做完才叫安全措施。出事后做的，叫补救。**