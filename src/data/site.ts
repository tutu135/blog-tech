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
    title: '智能客服 Agent 平台',
    year: '2026',
    summary: '多轮对话、工具调用和知识库检索的占位项目，用于展示 AI Agent 架构设计。',
    tags: ['LLM', 'RAG', 'Agent'],
  },
  {
    title: '自动化流程引擎',
    year: '2026',
    summary: '面向工作流编排、任务调度和执行监控的占位项目。',
    tags: ['Workflow', 'Web', 'Automation'],
  },
  {
    title: '个人知识索引',
    year: '2026',
    summary: '把阅读、代码片段和技术文章组织成可检索知识网络的占位项目。',
    tags: ['Notes', 'Search', 'PKM'],
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
