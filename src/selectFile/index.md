---
category: Components
title: 获取系统文件
group:
  title: 通用
  order: 1
---

# 调用系统文件

## 示例

<!-- prettier-ignore -->
<code src="./demo/getFile.tsx">调用系统文件</code>

## APi

### Options

| 参数       | 说明                                                   | 类型                | 返回值 |
| ---------- | ------------------------------------------------------ | ------------------- | ------ |
| `xlsx`     | 设置系统哪一种文件可以上传  (上传不是此类型会弹出提醒框) | `String`            |        |
| `callback` | 回调(可以放到 useState 中)                             | `(n: File) => void` |        |
