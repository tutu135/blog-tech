export const site = {
  name: 'JIMMY',
  title: "HELLO, I'M JIMMY",
  location: 'Haikou',
  language: 'CN / EN',
  description: '一页式个人技术博客，记录 AI、Web 与系统设计实践。',
};

export const navItems = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#writing', label: 'Writing' },
];

export const skills = [
  {
    name: 'AI Agent',
    summary: '从任务拆解、工具调用到记忆检索，搭建可维护的智能体工作流。',
    tags: ['Agent', 'Tool Use', 'Workflow'],
  },
  {
    name: 'LLM',
    summary: '关注提示工程、评测、上下文管理，以及大模型应用的产品化落地。',
    tags: ['Prompting', 'Eval', 'Context'],
  },
  {
    name: 'RAG',
    summary: '把知识库检索、重排、引用和答案生成串成稳定的信息系统。',
    tags: ['Retrieval', 'Ranking', 'Knowledge'],
  },
  {
    name: 'Web',
    summary: '用轻量前端技术构建清晰、快速、可长期维护的个人产品。',
    tags: ['Astro', 'TypeScript', 'UX'],
  },
  {
    name: 'System Design',
    summary: '拆分复杂系统边界，设计清楚的数据流、接口和故障处理方式。',
    tags: ['Architecture', 'Data Flow', 'Reliability'],
  },
];

export const projects = [
  {
    title: '日常工作站',
    slug: 'daily-workstation',
    year: '2026',
    summary: '我给自己做的个人工作台，把想做的事、稍后再看的内容和常用链接集中在一个地方。',
    tags: ['待办收集', '稍后再看', '常用链接'],
    motivation: '一件想做的事可能记在聊天里，一篇想读的文章则留在浏览器标签页。等有空回来处理时，还得先想起它们放在哪里。我做这个工作台，是想给这些暂时顾不上的东西一个固定的入口。',
    example: '比如聊到一个博客改进点，我可以先在聊天里确认要记录的事项，再把它存入工作站的「想做清单」。下次有空改博客时，打开清单就能找到这条记录。',
  },
];

export const articles = [
  {
    title: '如何设计一个可维护的 Agent 工作流',
    date: '2026-07-01',
    tags: ['Agent', 'Architecture'],
    summary: '从任务边界、工具协议和错误恢复三个角度梳理 Agent 系统的基础结构。',
    slug: 'maintainable-agent-workflow',
  },
  {
    title: 'RAG 应用里最容易被忽略的检索质量',
    date: '2026-06-24',
    tags: ['RAG', 'Search'],
    summary: '占位文章：记录检索增强生成系统从 demo 到生产环境时需要补齐的环节。',
    slug: 'rag-retrieval-quality',
  },
  {
    title: '用 Astro 搭一个足够轻的个人技术站',
    date: '2026-06-18',
    tags: ['Astro', 'Web'],
    summary: '占位文章：用静态站方式保留速度、内容组织和恰到好处的前端交互。',
    slug: 'astro-personal-tech-site',
  },
];
