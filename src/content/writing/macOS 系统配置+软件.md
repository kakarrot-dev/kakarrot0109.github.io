---
title: "No. 15: macOS 开发环境初始化指南"
description: "换 Mac 新机时按这份清单走一遍，半小时恢复一套可用的开发环境。"
publishedAt: 2026-03-30
tags:
  - "macOS"
  - "开发环境"
  - "Homebrew"
  - "效率"
featured: true
draft: false
---

换新机最烦的不是用新系统，是**那些散落在各处的小工具和配置要重新装一遍。**

记录一份我的 Mac 初始化清单。从系统配置到开发工具到日常软件，全部 Homebrew 搞定。

## 1. 系统配置

外接显示器不是 Retina 的话，先开 HiDPI：

```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/xzhih/one-key-hidpi/master/hidpi.sh)"
```

## 2. Homebrew 包管理器

安装：

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Apple Silicon Mac 装在 `/opt/homebrew`，记得加入 PATH：

```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

常用命令：

```bash
brew install <包名>            # 命令行工具
brew install --cask <应用名>   # 图形应用
brew upgrade                  # 升级全部
brew cleanup                  # 清理旧版本
```

## 3. 命令行工具

基础工具：

```bash
brew install git gh git-filter-repo ripgrep pandoc gnupg
```

语言运行时：

```bash
brew install node oven-sh/bun/bun go uv
```

几点说明：
- **Python 用 uv 管理。** `uv python install 3.12` 装指定版本，`uv venv` 建虚拟环境。系统自带的 python3 留给系统。
- **npm / pnpm / bun 分工。** npm 随 Node 自带，pnpm 省磁盘空间，bun 用于追求速度的场景。

数据库：

```bash
brew tap mongodb/brew
brew install mongodb-community mongodb-database-tools mongosh
brew services start mongodb-community
```

## 4. 编辑器和终端

```bash
brew install --cask zed typora obsidian
brew install --cask ghostty
brew install --cask font-jetbrains-mono-nerd-font
```

字体设成 JetBrainsMono Nerd Font，终端里的图标才能正常显示。

## 5. AI 开发工具

```bash
brew install --cask claude-code codex
brew install gemini-cli
brew install --cask cherry-studio
```

各 CLI 首次运行会引导登录或填 API Key。

## 6. 日常应用

通讯：微信 / QQ / 企业微信 / 飞书 / 钉钉 / Telegram / Discord  
办公：Microsoft Office / Notion  
网盘：OneDrive / 百度网盘  
素材：Eagle

## 7. 常见问题

**Homebrew 安装慢：** 切换到清华镜像源再 update。

**权限错误：**
```bash
sudo chown -R $(whoami) /opt/homebrew
```

---

**环境配置这件事，做一次是为了用，记下来是为了下次不用重想。** 如果这份清单对你有用，拿去用就好。