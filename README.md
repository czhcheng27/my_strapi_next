# OTT Financial Group Website

这是一个基于 Next.js 15 和 Strapi CMS 构建的 OTT Financial Group 官方网站重构项目。

## 功能特点

- 🚀 **Next.js 15** - 使用最新的 App Router 和 React 19
- 🎨 **Tailwind CSS 4** - 现代化的样式框架
- 📱 **响应式设计** - 完美适配桌面端和移动端
- **Strapi CMS** - 无头内容管理系统
- ⚡ **ISR** - 增量静态再生，60 秒缓存更新

## 环境配置

### 超简单的环境切换

打开 `src/lib/strapi.ts` 文件，找到这两行：

```typescript
// 环境配置 - 取消注释需要使用的环境
const STRAPI_URL = "http://3.131.240.216:1337"; // 生产环境
// const STRAPI_URL = 'http://localhost:1337';   // 本地环境
```

**使用生产环境** (默认)：

- 保持第一行不注释
- 注释第二行

**切换到本地环境**：

- 注释第一行 (在前面加 `//`)
- 取消注释第二行 (删除前面的 `//`)

就这么简单！修改后重启开发服务器即可。

## 开始开发

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看网站。

### 访问 Strapi 管理界面

- **生产环境**: [http://3.131.240.216:1337/admin](http://3.131.240.216:1337/admin)
- **本地环境**: [http://localhost:1337/admin](http://localhost:1337/admin)

## 项目结构

```
src/
├── app/                    # Next.js App Router 页面
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   └── [各种页面]/         # 其他页面
├── components/            # React 组件
│   ├── HeroBanner.tsx     # 首页轮播横幅
│   └── layout/            # 布局组件
└── lib/                   # 工具函数
    └── strapi.ts          # Strapi API 集成 (环境配置在这里)
```

## 内容管理

### Hero Banner 横幅

在 Strapi 中创建 `hero-banner` 内容类型，包含以下字段：

- `title` (Text) - 主标题
- `subtitle` (Text) - 副标题
- `description` (Rich Text) - 描述内容
- `buttonText` (Text) - 按钮文本
- `buttonLink` (Text) - 按钮链接
- `order` (Number) - 排序
- `isActive` (Boolean) - 是否激活
- `backgroundImage` (Media) - 背景图片

## 部署

```bash
npm run build
npm start
```

## 技术栈

- **前端**: Next.js 15, React 19, TypeScript
- **样式**: Tailwind CSS 4
- **后端**: Strapi CMS
- **部署**: Vercel (前端), Ubuntu Server (CMS)
