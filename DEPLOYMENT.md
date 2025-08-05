# 部署到 Vercel 指南

## 架构说明

- **Strapi 后端**：已部署在 `http://3.131.240.216:1337`
- **Next.js 前端**：将部署到 Vercel
- **环境变量**：本地开发和 Vercel 部署都使用同一个 Strapi 地址

## 环境变量配置

### 本地开发（已配置）

`.env.local` 文件中：

```bash
STRAPI_API_URL=http://3.131.240.216:1337
NEXT_PUBLIC_STRAPI_API_URL=http://3.131.240.216:1337
```

### Vercel 部署配置

在 Vercel 项目设置中添加相同的环境变量：

1. `STRAPI_API_URL` = `http://3.131.240.216:1337`
2. `NEXT_PUBLIC_STRAPI_API_URL` = `http://3.131.240.216:1337`

## 部署步骤

### 方法一：通过 Vercel CLI

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录 Vercel
vercel login

# 部署
vercel
```

### 方法二：通过 GitHub 集成

1. 将代码推送到 GitHub
2. 在 Vercel 网站上导入 GitHub 仓库
3. 配置环境变量
4. 部署

## 重要注意事项

1. **Strapi 权限**：确保 Strapi API 的 Public 角色有 `find` 和 `findOne` 权限
2. **HTTPS**：生产环境建议使用 HTTPS 的 Strapi 地址
3. **域名**：如果 Strapi 使用自定义域名，需要更新环境变量

## 验证部署

部署后检查以下内容：

- [ ] 页面可以正常加载
- [ ] 文章数据显示正常
- [ ] 图片可以正常显示
- [ ] 控制台没有错误信息
