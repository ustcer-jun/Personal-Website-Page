# 张亚军的个人学术主页

一个使用 Astro 和 Tailwind CSS 构建的现代、优雅的个人学术主页。

## 项目特性

- **现代技术栈**: Astro + Tailwind CSS v4
- **响应式设计**: 适配各种设备尺寸
- **深色模式**: 支持系统偏好检测和手动切换
- **国际化支持**: 英语和中文双语界面
- **高性能**: 静态站点生成，最小化 JavaScript 运行时
- **SEO 优化**: 完善的 meta 标签和结构化数据
- **GitHub Actions 自动部署**: 推送到 main 分支自动部署到 GitHub Pages

## 快速开始

### 前置要求

- Node.js 18.0.0 或更高版本
- npm 包管理器

### 安装步骤

1. **进入项目目录**

```bash
cd YjZhang_homepage
```

2. **安装依赖**

```bash
npm install
```

3. **启动开发服务器**

```bash
npm run dev
```

网站将在 `http://localhost:4321` 上可用。

4. **构建生产版本**

```bash
npm run build
```

## 自定义指南

### 1. 修改个人信息

编辑 `src/i18n/en.json` 和 `src/i18n/zh.json` 文件中的 `hero` 部分：

```json
{
  "hero": {
    "name": "你的名字",
    "title": "你的职位/研究方向",
    "bio": "你的个人简介"
  }
}
```

### 2. 修改头像

1. 将你的头像文件（建议使用方形图片）放在 `public/` 目录中
2. 在 `src/pages/index.astro` 和 `src/pages/zh/index.astro` 文件中修改头像路径：

```astro
<img 
  src="/你的头像文件名" 
  alt="Profile" 
  class="w-full h-full object-cover"
/>
```

### 3. 修改联系方式

在 `src/pages/index.astro` 和 `src/pages/zh/index.astro` 文件中修改联系信息：

```astro
<a href="mailto:你的邮箱" class="flex items-center space-x-2 text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-accent">
  <span>✉️</span>
  <span class="text-sm">{locale === 'en' ? 'Email' : '邮箱'}: 你的邮箱</span>
</a>
```

### 4. 修改教育背景

编辑 `src/data/education.json` 文件：

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

### 5. 修改发表论文

编辑 `src/data/publications.json` 文件：

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

### 6. 修改相关链接

在 `src/pages/index.astro` 和 `src/pages/zh/index.astro` 文件中修改相关链接：

```astro
<a href="https://github.com/你的用户名" target="_blank" rel="noopener noreferrer" class="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-zinc-800 shadow-sm hover:shadow-md transition-all duration-300">
  <img src="/github.png" alt="GitHub" class="w-5 h-5" />
</a>
```

### 7. 修改网站标题和描述

编辑 `astro.config.mjs` 文件：

```javascript
export default defineConfig({
  site: 'https://your-username.github.io',
  base: '/YjZhang_homepage',
  // 其他配置...
});
```

### 8. 自定义主题颜色

编辑 `tailwind.config.js` 文件中的 `theme` 部分：

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

## 部署指南

### GitHub Pages (推荐)

本项目已配置 GitHub Actions 自动部署，只需：

1. **推送到 main 分支**
   - 任何推送到 `main` 分支的更改都会自动触发构建和部署

2. **查看部署状态**
   - 进入 GitHub 仓库的 "Actions" 标签页查看部署进度

3. **访问网站**
   - 部署完成后，网站将在 `https://your-username.github.io/YjZhang_homepage/` 可用

### 其他部署选项

#### Vercel

1. 注册 Vercel 账号
2. 导入你的仓库
3. Vercel 会自动检测 Astro 项目并部署

#### Netlify

1. 注册 Netlify 账号
2. 导入你的仓库
3. 构建命令：`npm run build`
4. 发布目录：`dist`

## 项目结构

```
├── public/                  # 静态文件目录
│   ├── ECUT.png             # 东华理工大学校徽
│   ├── ustcblue.jpg         # 中国科学技术大学校徽
│   ├── profile.png          # 个人头像
│   ├── *.png                # 社交平台图标
│   └── favicon.svg          # 网站图标
├── src/
│   ├── components/          # 组件
│   │   ├── Header.astro     # 页面头部
│   │   └── Footer.astro     # 页面底部
│   ├── data/                # 数据文件
│   │   ├── education.json   # 教育背景
│   │   └── publications.json # 发表论文
│   ├── i18n/                # 国际化文件
│   │   ├── en.json          # 英文翻译
│   │   ├── zh.json          # 中文翻译
│   │   └── helper.js        # 国际化工具
│   ├── layouts/             # 布局
│   │   └── MainLayout.astro # 主布局
│   └── pages/               # 页面
│       ├── index.astro      # 英文主页
│       └── zh/              # 中文页面
│           └── index.astro  # 中文主页
├── .github/                 # GitHub Actions 配置
│   └── workflows/           # 工作流目录
│       └── deploy.yml       # 部署配置
├── astro.config.mjs         # Astro 配置
├── tailwind.config.js       # Tailwind 配置
├── package.json             # 项目依赖
├── package-lock.json        # 依赖锁定文件
├── .gitignore               # Git 忽略文件
└── README.md                # 项目说明
```

## 技术细节

### 国际化实现

- 使用 Astro 的内置支持和自定义 helper 函数实现双语切换
- 支持自动检测浏览器语言偏好

### 响应式设计

- 使用 Tailwind CSS 的响应式类
- 适配桌面、平板和移动设备

### 性能优化

- Astro 的静态站点生成
- 最小化 JavaScript 运行时
- 图片优化

## 许可证

MIT License

## 联系方式

- 邮箱: ustcer-jun@mail.ustc.edu.cn
- GitHub: [https://github.com/ustcer-jun](https://github.com/ustcer-jun)
- 哔哩哔哩: [https://space.bilibili.com/492486522](https://space.bilibili.com/492486522)
- 网易云音乐: [https://music.163.com/#/playlist?id=3003575598](https://music.163.com/#/playlist?id=3003575598)
- CSDN: [https://blog.csdn.net/JJOHJHOUJ](https://blog.csdn.net/JJOHJHOUJ)
