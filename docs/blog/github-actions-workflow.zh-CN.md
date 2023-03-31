---
title: 使用 GitHub Actions 为 antd 提效
date: 2023-04-10
author: Wxh16144
---

大家好，我是 [Wxh16144](https://github.com/Wxh16144)，通过学习 Ant Design 的组件库，并参与社区开源贡献，我发现了一些提高开发效率和代码质量的工具。借此机会，我希望与大家分享我的经验，帮助更好地了解 Ant Design，并将这些技巧应用到自己的项目中。

## 前言

Ant Design 以开源的形式托管在 GitHub，方便更好的与全球开发者进行交流和合作，也方便开发者提交 issue 和 PR。同时借助 [GitHub Actions](https://github.com/features/actions) 和 CI/CD 能力，使得我们更好的管理代码仓库和自动化测试、部署等工作流程。

### 什么是 GitHub Actions

GitHub Actions 是一个自动化软件开发工作流程的平台，从想法构建到生成，开发者只需在`.github/workflows` 目录中添加 `yml` 格式文件，定义 Workflow（工作流程） 去实现 CI（持续集成）通过 [了解 GitHub Actions](https://docs.github.com/zh/actions/learn-github-actions/understanding-github-actions)，我们可以掌握 Workflow 中一些概念。

- **Event(触发事件)**：触发运行事件，例如，有人创建了 issue、PR 或者推送了代码到某个分支。
- **Job(作业)**：一个 Workflow 包含一个或多个 **Job**，默认情况下并行运行，我们可以设置让其按顺序执行，每个 **Job** 可以包含多个 **Step**。
- **Step(步骤)**：定义每一个部分的工作内容，每一个 **Step** 都是一个单独的进程运行。该部分下每个项目都是一个单独操作或者 shell 脚本。

引用官方文档的 Workflow 图，我们可以直观的看懂 **Event**、**Job**和 **Step** 之间的关系：

![overview-actions-simple](https://docs.github.com/assets/cb-25535/mw-1000/images/help/actions/overview-actions-simple.webp)

## 如何使用

Ant Design 的所有 Workflow 都在 [`.github/workflows`](https://github.com/ant-design/ant-design/tree/master/.github/workflows) 目录中，我将从参与 OSS 角度介绍 Ant Design 使用 GitHub Actions 都做了哪些事情。

### Issue

### Pull Request

### 单元测试

### 部署

### 其他

## 引入自己项目

如何在自己的项目中借鉴 Ant Design 的 GitHub Actions

## 总结

本次文章到这里就结束了，希望可以帮助大家更进一步了解 Ant Design，如果有疑问欢迎前往 [Discussion](https://github.com/ant-design/ant-design/discussions) 讨论交流。
