---
title: 配置 VSCode Remote-SSH 连接共享服务器
column: devtools
pubDate: "2025-08-22"
summary: 在共享实验室服务器上搭建开发环境,记录端口和权限相关的注意事项。
---

共享服务器最容易踩的坑是端口冲突——多个人同时用同一台机器开发,默认端口很容易被占用。配置 SSH config 时建议固定一个不常用的端口,并在团队内部做好登记。

Remote-SSH 连接稳定后,本地模型(比如这里用 Ollama 跑的 qwen2:7b)和远程 GPU 资源都可以直接复用,不需要在本地额外配置环境。
