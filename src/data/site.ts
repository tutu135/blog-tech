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
  {
    title: '智能客服 Agent 平台',
    slug: 'customer-support-agent',
    year: '2026',
    summary: '多轮对话、工具调用和知识库检索的占位项目，用于展示 AI Agent 架构设计。',
    tags: ['LLM', 'RAG', 'Agent'],
    motivation: '这个构想把对话、知识库检索和业务工具放进同一个客服流程。客服助手先理解用户的问题，再判断该查资料、调用工具，还是转交给人工处理。',
    example: '比如用户想查退款进度。助手可以先确认订单信息，再查询状态；如果查不到结果，就把上下文交给人工客服。',
  },
  {
    title: '自动化流程引擎',
    slug: 'automation-workflow-engine',
    year: '2026',
    summary: '面向工作流编排、任务调度和执行监控的占位项目。',
    tags: ['Workflow', 'Web', 'Automation'],
    motivation: '这个构想把重复执行的流程拆成有依赖关系的任务。执行记录可以用来查看每一步的状态，并定位失败出在哪一步。',
    example: '比如每天生成一份报表。流程可以先拉取数据，再计算指标并生成报表；拉取失败时，流程停在对应步骤，便于定位问题。',
  },
  {
    title: '个人知识索引',
    slug: 'personal-knowledge-index',
    year: '2026',
    summary: '把阅读、代码片段和技术文章组织成可检索知识网络的占位项目。',
    tags: ['Notes', 'Search', 'PKM'],
    motivation: '这个构想为笔记、代码片段和技术文章提供一个共同的搜索入口，并用主题把相关内容串起来。',
    example: '比如重新做一个检索功能时，可以按主题找到以前收藏的文章、自己的笔记和试过的代码片段。',
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
