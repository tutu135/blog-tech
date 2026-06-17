---
title: ReAct 循环与 Thought-Action-Observation
column: ai-agent
pubDate: "2026-03-12"
summary: 拆解 Agent 的思考-行动-观察循环,理解它如何决定下一步调用哪个工具。
---

ReAct(Reasoning + Acting)循环是大多数 Agent 框架的核心调度逻辑。模型在每一轮里先输出一段思考(Thought),再决定要执行的动作(Action),执行后把结果作为观察(Observation)重新喂回上下文,如此循环直到任务完成。

这种结构的好处是把"决策"和"执行"显式分开,方便调试——可以单独看模型在哪一步推理出了问题,而不是一个黑盒的端到端输出。

smolagents 里的 Code Agent 进一步把 Action 这一步换成了直接生成可执行代码,而不是固定格式的 JSON 调用,实测下来对复杂任务的成功率有明显提升。
