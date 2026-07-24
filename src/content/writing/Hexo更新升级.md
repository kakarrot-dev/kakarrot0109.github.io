---
title: "No. 11: 在 2022 年折腾 Hexo 升级"
description: "NPM 依赖全过期，Hexo 停在 3.x，插件报错爬满屏。一个下午搞定升级。"
publishedAt: 2022-07-11
tags:
  - "Hexo"
  - "维护"
  - "技术笔记"
featured: false
draft: false
---

主题折腾完了，又开始对版本号有强迫症。

我的 Hexo 停在 3.x 好几年，依赖过期、插件冲突、`hexo s` 报错满天飞。终于决定花一个下午把整条工具链升级。

步骤不复杂，但容易踩坑。

## 1. 全局工具升级

先升级 npm 本身和 Hexo CLI：

```shell
npm cache clean -f
npm install -g npm-check
npm install -g npm-upgrade
npm-check -g
npm update -g
npm install --global hexo
```

## 2. 项目依赖更新

进入博客目录，检查有哪些模块需要更新：

```shell
npm-check
```

然后更新 `package.json` 里的版本号——`npm-upgrade` 会自动检测最新版本，一路回车即可。

接下来是最关键的一步：**删掉 `node_modules` 再重新安装。**

```shell
rm -rf node_modules
npm update --save
```

很多 Hexo 升级翻车，就是因为保留了旧的 `node_modules`，新旧依赖混在一起。

## 3. 验证

跑 `hexo clean && hexo g && hexo s` 本地预览。如果 `hexo d` 报错，通常是因为 `.deploy_git` 里缓存了旧版本生成的静态文件——删掉就好了。

---

这篇文章写于 2022 年。当时的 Hexo 还是 6.x，现在我已经完全迁移到 Astro 了。**工具会过时，但折腾的过程会留下。**