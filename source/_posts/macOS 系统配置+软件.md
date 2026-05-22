---
title: macOS 系统配置+软件
categories:
  - 技术
tags:
  - macOS
  - 开发环境
  - Homebrew
abbrlink: 42597ae8
date: 2026-03-30 16:45:57
---

# macOS 系统配置+软件

> 适用于 macOS (Apple Silicon) · 以开发环境为主

换新机时按本文从零搭一遍，基本能在半小时内恢复一套可用的开发环境。

## 一、系统配置

### 1.1 开启 HIDPI（外接显示器）

让非原生 Retina 的外接显示器也能用上高分辨率缩放：

```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/xzhih/one-key-hidpi/master/hidpi.sh)"
```

## 二、Homebrew 包管理器

### 2.1 安装

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

安装后把 Homebrew 加入 PATH（Apple Silicon 安装在 `/opt/homebrew`）：

```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

### 2.2 常用命令

```bash
brew install <包名>            # 命令行工具
brew install --cask <应用名>   # 图形应用
brew upgrade                  # 升级全部
brew cleanup                  # 清理旧版本
brew services list            # 查看后台服务
```

## 三、命令行开发工具

### 3.1 基础工具

```bash
brew install git              # 版本控制
brew install gh               # GitHub CLI（gh auth login 登录）
brew install git-filter-repo  # 重写 Git 历史
brew install ripgrep          # 极速全文搜索（命令 rg）
brew install pandoc           # 文档格式转换
brew install gnupg            # GPG 加密 / 签名
```

### 3.2 语言运行时与版本管理

```bash
brew install node                 # Node.js（自带 npm）
brew install oven-sh/bun/bun      # Bun：更快的 JS 运行时 / 打包器
brew install go                   # Go
brew install uv                   # Python 版本 + 包管理
```

几点说明：

- **Python 用 uv 管理**，不再装 pyenv / conda。`uv python install 3.12` 装指定版本，`uv venv` 建虚拟环境，`uv pip ...` 装包。系统自带的 `python3`（3.9）留给系统，别拿来开发。
- **npm / pnpm / bun 分工**：npm 随 Node 自带；`npm install -g pnpm` 装 pnpm 做日常依赖管理（更省磁盘）；bun 用于追求速度的脚本或构建。
- 全局 npm 工具按需补，例如本博客用到的 `npm install -g hexo-cli`。

### 3.3 数据库 MongoDB

```bash
brew tap mongodb/brew
brew install mongodb-community mongodb-database-tools mongosh
brew services start mongodb-community   # 后台常驻；stop 可停止
```

图形管理界面：

```bash
brew install --cask mongodb-compass
```

## 四、编辑器与终端

### 4.1 编辑器

```bash
brew install --cask zed         # 现代化代码编辑器，启动快
brew install --cask typora      # 所见即所得 Markdown
brew install --cask obsidian    # 本地 Markdown 知识库
```

### 4.2 终端与字体

```bash
brew install --cask ghostty                       # 高性能 GPU 终端
brew install --cask font-jetbrains-mono-nerd-font # 等宽 + 图标字体
```

在 Ghostty 和编辑器里把字体设成 *JetBrainsMono Nerd Font*，终端里的图标才能正常显示。

## 五、AI 开发工具

三个命令行 Agent 装完即用，注意命令名和 cask 名不一样：

```bash
brew install --cask claude-code   # 命令：claude  （Anthropic）
brew install --cask codex         # 命令：codex   （OpenAI）
brew install gemini-cli           # 命令：gemini  （Google）
```

桌面客户端：

```bash
brew install --cask cherry-studio # 多模型聊天客户端
```

各 CLI 首次运行会引导登录或填 API Key，按提示走即可。

## 六、Shell（zsh）

macOS 默认就是 zsh，开箱即用。我的配置很轻，只在 `~/.zshrc` 放必要的环境变量：

```bash
export API_TIMEOUT_MS="600000"   # 示例：调大 AI CLI 的请求超时
```

> 没用 oh-my-zsh / starship —— 默认 zsh 加 Homebrew 的 PATH 已经够用，配置越少，换机迁移越省心。

## 七、常见问题

**Homebrew 安装 / 更新慢（国内）**

```bash
export HOMEBREW_BREW_GIT_REMOTE="https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git"
export HOMEBREW_CORE_GIT_REMOTE="https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git"
brew update
```

**权限错误**

```bash
sudo chown -R $(whoami) /opt/homebrew
```

**MongoDB 服务没起来**

```bash
brew services restart mongodb-community
brew services list   # 确认 status 为 started
```

## 附录 · 其他常用应用

非开发类，能用 Homebrew 的尽量用，省得一个个去官网下载：

```bash
# 通讯
brew install --cask wechat qq wechatwork feishu dingtalk telegram discord
# 办公
brew install --cask microsoft-office notion
# 网盘
brew install --cask onedrive baidunetdisk
# 效率 / 素材
brew install --cask eagle         # 素材 / 灵感图管理
brew install mole                 # 命令行 Mac 清理工具
```
