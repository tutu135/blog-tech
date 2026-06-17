export const site = {
  name: 'lvy-neko',
  owner: 'lvy',
  status: '开发中',
  title: 'lvy-tech',
  description: 'AI Agent、CUDA、强化学习与个人知识管理笔记。',
  avatar: '/assets/avatar-neko.svg',
  banner: '/assets/sticker-board.svg',
  navItems: [
    { label: '近期文章', href: '#recent', icon: 'book', active: true },
    { label: '我的项目', href: '#columns', icon: 'grid' },
    { label: '关于网站', href: '#hello', icon: 'smile' },
    { label: '推荐分享', href: '#recommend', icon: 'star' },
    { label: '优秀博客', href: '#columns', icon: 'globe' },
  ],
  socials: [
    { label: 'Github', href: 'https://github.com/', icon: 'github', featured: true },
    { label: 'Bilibili', href: 'https://www.bilibili.com/', icon: 'bilibili' },
    { label: '小红书', href: 'https://www.xiaohongshu.com/', icon: 'redbook' },
    { label: '邮箱', href: 'mailto:hello@example.com', icon: 'mail' },
  ],
};

export const dashboard = {
  greeting: 'Good Evening',
  intro: "I'm lvy, Nice to meet you!",
  writingHref: '#recent',
  music: {
    title: 'Close To You',
    progress: 34,
  },
  recommendation: {
    title: 'CMU 15-445 & 大数据',
    summary: '一些 lab、架构、文档笔记，踩坑记录与复盘。',
    meta: 'Views: 18,367  Marks: 320',
  },
  likes: '18970',
};
