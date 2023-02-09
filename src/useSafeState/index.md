---
category: Components
title: useSafeState
toc: content
group:
  title: 自定义hooks
---

# useSafeState

用法与 `React.useState` 完全一样，但是在组件卸载后异步回调内的 `setState` 不再执行，避免因组件卸载后更新状态而导致的内存泄漏。
例如，我们在初始化的时候去请求数据，并对state赋值，然后数据没有回来我们就切换到下一个页面了，我们的实例消失了，但是还能进行state赋值就会导致我们的内存泄露；

## 代码演示

### 基础用法

<code src="./demo/demo1.tsx">基础示例</code>

## API

```typescript
const [state, setState] = useSafeState(initialState);
```

### Params

| 参数         | 说明   | 类型 |
| ------------ | ------ | ---- |
| initialState | 必填项 | `T`  |

### Result

| 参数     | 说明     | 类型         |
| -------- | -------- | ------------ |
| state    | 当前状态 | `boolean`    |
| setState | 设置状态 | `() => void` |
