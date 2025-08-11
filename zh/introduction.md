# 介绍

## 什么是 Vue Pivottable？

**Vue Pivottable** 是一个 Vue 3 兼容的透视表组件库。它是流行的 [react-pivottable](https://github.com/plotly/react-pivottable) 的 Vue 包装器，允许您使用透视表 UI 轻松汇总、转换和可视化大型数据集。

## 主要特性

- 基于 **Vue 3 Composition API** 构建
- 支持 **多种聚合器和渲染器**
- **拖拽** 字段配置的交互式 UI
- **可定制**（渲染器、聚合器、样式）
- **TypeScript** 支持

## 基本概念

### 透视表是什么

透视表是一个强大的数据分析工具，可以按不同维度聚合数据并以交叉表格式显示。

### 组件

- **VuePivottable**: 渲染静态透视表的基础组件
- **VuePivottableUi**: 允许用户动态更改配置的交互式组件

### 数据结构

Vue Pivottable 支持以下数据格式：

- **对象数组**: `[{name: "Alice", age: 25}, {name: "Bob", age: 30}]`
- **数组的数组**: `[["姓名", "年龄"], ["Alice", 25], ["Bob", 30]]`
- **函数**: 异步提供数据的函数

## 为什么选择 Vue Pivottable？

1. **Vue 3 优化**: 利用最新的 Vue 3 Composition API
2. **灵活性**: 通过自定义渲染器和聚合器扩展以满足您的需求
3. **性能**: 为大型数据集优化（lazy table renderer）
4. **开发者体验**: TypeScript 支持和丰富的文档

## 下一步

- 查看 [安装和设置](/zh/getting-started)
- 学习 [属性](/zh/props) 详情
- 探索 [渲染器](/zh/renderer) 定制