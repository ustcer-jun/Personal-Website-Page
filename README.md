# 个人学术主页 | Personal Academic Homepage

一个使用 Astro 和 Tailwind CSS 构建的现代、优雅的个人学术主页。

A modern, elegant personal academic homepage built with Astro and Tailwind CSS.

## 项目特性 | Project Features

- **现代技术栈**: Astro + Tailwind CSS v4
- **响应式设计**: 适配各种设备尺寸
- **深色模式**: 支持系统偏好检测和手动切换
- **国际化支持**: 英语和中文双语界面
- **高性能**: 静态站点生成，最小化 JavaScript 运行时
- **SEO 优化**: 完善的 meta 标签和结构化数据
- **GitHub Actions 自动部署**: 推送到 main 分支自动部署到 GitHub Pages

- **Modern Tech Stack**: Astro + Tailwind CSS v4
- **Responsive Design**: Adapts to various device sizes
- **Dark Mode**: Supports system preference detection and manual switching
- **Internationalization Support**: English and Chinese bilingual interface
- **High Performance**: Static site generation, minimal JavaScript runtime
- **SEO Optimization**: Comprehensive meta tags and structured data
- **GitHub Actions Auto Deployment**: Push to main branch automatically deploys to GitHub Pages

## 快速开始 | Quick Start

### 前置要求 | Prerequisites

- Node.js 18.0.0 或更高版本 | Node.js 18.0.0 or higher
- npm 包管理器 | npm package manager

### 安装步骤 | Installation Steps

1. **进入项目目录** | **Navigate to project directory**

```bash
cd YjZhang_homepage
```

2. **安装依赖** | **Install dependencies**

```bash
npm install
```

3. **启动开发服务器** | **Start development server**

```bash
npm run dev
```

网站将在 `http://localhost:4321` 上可用。
The site will be available at `http://localhost:4321`.

4. **构建生产版本** | **Build production version**

```bash
npm run build
```

## 自定义指南 | Customization Guide

### 1. 修改个人信息 | Modify Personal Information

编辑 `src/i18n/en.json` 和 `src/i18n/zh.json` 文件中的 `hero` 部分：
Edit the `hero` section in `src/i18n/en.json` and `src/i18n/zh.json` files:

```json
{
  "hero": {
    "name": "你的名字",
    "title": "你的职位/研究方向",
    "bio": "你的个人简介"
  }
}
```

```json
{
  "hero": {
    "name": "Your Name",
    "title": "Your Position/Research Direction",
    "bio": "Your Personal Bio"
  }
}
```

### 2. 修改头像 | Modify Avatar

1. 将你的头像文件（建议使用方形图片）放在 `public/` 目录中
2. 在 `src/pages/index.astro` 和 `src/pages/zh/index.astro` 文件中修改头像路径：

1. Place your avatar file (square image recommended) in the `public/` directory
2. Modify the avatar path in `src/pages/index.astro` and `src/pages/zh/index.astro` files:

```astro
<img 
  src="/你的头像文件名" 
  alt="Profile" 
  class="w-full h-full object-cover"
/>
```

### 3. 修改联系方式 | Modify Contact Information

在 `src/pages/index.astro` 和 `src/pages/zh/index.astro` 文件中修改联系信息：

Modify contact information in `src/pages/index.astro` and `src/pages/zh/index.astro` files:

```astro
<a href="mailto:你的邮箱" class="flex items-center space-x-2 text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-accent">
  <span>✉️</span>
  <span class="text-sm">{locale === 'en' ? 'Email' : '邮箱'}: 你的邮箱</span>
</a>
```

### 4. 修改教育背景 | Modify Education Background

编辑 `src/data/education.json` 文件：

Edit the `src/data/education.json` file:

```json
[
  {
    "id": 1,
    "institution": "你的大学",
    "degree": "你的学位",
    "period": "时间范围"
  }
]
```

### 5. 修改发表论文 | Modify Publications

编辑 `src/data/publications.json` 文件：

Edit the `src/data/publications.json` file:

```json
[
  {
    "id": 1,
    "title": "论文标题",
    "authors": ["作者1", "作者2"],
    "journal": "期刊名称",
    "volume": "卷号",
    "issue": "期号",
    "year": "年份",
    "doi": "DOI链接"
  }
]
```

### 6. 修改相关链接 | Modify Related Links

在 `src/pages/index.astro` 和 `src/pages/zh/index.astro` 文件中修改相关链接：

Modify related links in `src/pages/index.astro` and `src/pages/zh/index.astro` files:

```astro
<a href="https://github.com/你的用户名" target="_blank" rel="noopener noreferrer" class="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-zinc-800 shadow-sm hover:shadow-md transition-all duration-300">
  <img src="/github.png" alt="GitHub" class="w-5 h-5" />
</a>
```

### 7. 修改网站标题和描述 | Modify Site Title and Description

编辑 `astro.config.mjs` 文件：

Edit the `astro.config.mjs` file:

```javascript
export default defineConfig({
  site: 'https://your-username.github.io',
  base: '/YjZhang_homepage',
  // 其他配置...
});
```

### 8. 自定义主题颜色 | Customize Theme Colors

编辑 `tailwind.config.js` 文件中的 `theme` 部分：

Edit the `theme` section in `tailwind.config.js` file:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6', // 主色调
        accent: '#8b5cf6',  // 强调色
        // 其他颜色...
      },
    },
  },
  // 其他配置...
};
```

## 部署指南 | Deployment Guide

### GitHub Pages (推荐) | GitHub Pages (Recommended)

本项目已配置 GitHub Actions 自动部署，只需：

This project is configured with GitHub Actions for automatic deployment, simply:

1. **推送到 main 分支** | **Push to main branch**
   - 任何推送到 `main` 分支的更改都会自动触发构建和部署
   - Any changes pushed to the `main` branch will automatically trigger build and deployment

2. **查看部署状态** | **Check deployment status**
   - 进入 GitHub 仓库的 "Actions" 标签页查看部署进度
   - Go to the "Actions" tab of your GitHub repository to check deployment progress

3. **访问网站** | **Access the website**
   - 部署完成后，网站将在 `https://your-username.github.io/YjZhang_homepage/` 可用
   - After deployment is complete, the site will be available at `https://your-username.github.io/YjZhang_homepage/`

### 其他部署选项 | Other Deployment Options

#### Vercel

1. 注册 Vercel 账号
2. 导入你的仓库
3. Vercel 会自动检测 Astro 项目并部署

1. Sign up for a Vercel account
2. Import your repository
3. Vercel will automatically detect the Astro project and deploy it

#### Netlify

1. 注册 Netlify 账号
2. 导入你的仓库
3. 构建命令：`npm run build`
4. 发布目录：`dist`

1. Sign up for a Netlify account
2. Import your repository
3. Build command: `npm run build`
4. Publish directory: `dist`

## 项目结构 | Project Structure

```
├── public/                  # 静态文件目录 | Static files directory
│   ├── ECUT.png             # 东华理工大学校徽 | East China University of Technology emblem
│   ├── ustcblue.jpg         # 中国科学技术大学校徽 | University of Science and Technology of China emblem
│   ├── profile.png          # 个人头像 | Personal avatar
│   ├── *.png                # 社交平台图标 | Social media icons
│   └── favicon.svg          # 网站图标 | Website favicon
├── src/
│   ├── components/          # 组件 | Components
│   │   ├── Header.astro     # 页面头部 | Page header
│   │   └── Footer.astro     # 页面底部 | Page footer
│   ├── data/                # 数据文件 | Data files
│   │   ├── education.json   # 教育背景 | Education background
│   │   └── publications.json # 发表论文 | Publications
│   ├── i18n/                # 国际化文件 | Internationalization files
│   │   ├── en.json          # 英文翻译 | English translation
│   │   ├── zh.json          # 中文翻译 | Chinese translation
│   │   └── helper.js        # 国际化工具 | Internationalization helper
│   ├── layouts/             # 布局 | Layouts
│   │   └── MainLayout.astro # 主布局 | Main layout
│   └── pages/               # 页面 | Pages
│       ├── index.astro      # 英文主页 | English homepage
│       └── zh/              # 中文页面 | Chinese pages
│           └── index.astro  # 中文主页 | Chinese homepage
├── .github/                 # GitHub Actions 配置 | GitHub Actions configuration
│   └── workflows/           # 工作流目录 | Workflows directory
│       └── deploy.yml       # 部署配置 | Deployment configuration
├── astro.config.mjs         # Astro 配置 | Astro configuration
├── tailwind.config.js       # Tailwind 配置 | Tailwind configuration
├── package.json             # 项目依赖 | Project dependencies
├── package-lock.json        # 依赖锁定文件 | Dependencies lock file
├── .gitignore               # Git 忽略文件 | Git ignore file
└── README.md                # 项目说明 | Project documentation
```

## 技术细节 | Technical Details

### 国际化实现 | Internationalization Implementation

- 使用 Astro 的内置支持和自定义 helper 函数实现双语切换
- 支持自动检测浏览器语言偏好

- Use Astro's built-in support and custom helper functions to implement bilingual switching
- Support automatic browser language preference detection

### 响应式设计 | Responsive Design

- 使用 Tailwind CSS 的响应式类
- 适配桌面、平板和移动设备

- Use Tailwind CSS responsive classes
- Adapt to desktop, tablet and mobile devices

### 性能优化 | Performance Optimization

- Astro 的静态站点生成
- 最小化 JavaScript 运行时
- 图片优化

- Astro's static site generation
- Minimize JavaScript runtime
- Image optimization

## 许可证 | License

MIT License

