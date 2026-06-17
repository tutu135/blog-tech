---
title: 把 smolagents 部署到 Hugging Face Space
column: ai-agent
pubDate: "2026-03-20"
summary: 从本地跑通到打包发布,记录部署过程中踩到的几个坑。
---

部署 smolagents Space 的整体流程比想象中顺畅,核心是把依赖锁定清楚,避免 Space 构建环境和本地环境不一致导致的版本冲突。

需要留意 Gradio 版本和 smolagents 的兼容范围,以及工具函数里涉及到的环境变量(比如 API Key)要通过 Space 的 Secrets 配置,而不是写进代码里。
