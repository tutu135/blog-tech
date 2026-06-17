# lvy-tech-blog

技术博客原型,基于 Astro Content Layer API + 玻璃拟态(glassmorphism)卡片设计。

## 结构说明

- `src/content/columns/` —— 每个 `.md` 文件是一个专栏,frontmatter 字段:`title`、`year`、`tag`、`icon`(卡片左侧手写体方块文字,用 `\n` 换行)、`summary`。
- `src/content/articles/` —— 每个 `.md` 文件是一篇文章,frontmatter 里的 `column` 字段引用对应专栏的文件名(不含扩展名),正文就是 Markdown 内容。
- `src/components/GlassCard.astro` —— 可复用的玻璃卡片组件,鼠标移入会有光斑跟随 + 轻微 3D 倾斜。
- `src/layouts/Layout.astro` —— 全局背景、字体、View Transitions 配置,以及卡片交互的 JS(用 `astro:page-load` 事件保证页面切换后依然生效)。

路由:

```
/                              首页,专栏卡片网格
/columns/[slug]/                某个专栏下的文章列表
/columns/[slug]/[article]/      文章详情页
```

## 本地运行

```bash
npm install
npm run dev
```

打开 http://localhost:4321 即可看到效果。

## 添加新内容

新增一个专栏:在 `src/content/columns/` 下新建一个 `.md` 文件,按已有文件的 frontmatter 格式填写即可,首页会自动出现新卡片。

新增一篇文章:在 `src/content/articles/` 下新建 `.md` 文件,`column` 字段填对应专栏的文件名(不带 `.md`),正文用 Markdown 写。

## 接下来可以做的事

- 把配色/字体换成跟生活博客统一,或者保留这套更"技术感"的独立视觉
- 给 GlassCard 加一个 featured 变体,让首页置顶文章更突出
- 接入 Pagefind 做全文搜索
- 部署到 Vercel/Netlify,流程跟现有 Hugo 博客一致
