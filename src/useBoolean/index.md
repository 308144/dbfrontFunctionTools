---
category: Components
title: useBoolean
toc: content
group:
  title: 自定义hooks
  order: 5
---

# useBoolean

优雅的管理 boolean 状态的 Hook。
在我们的项目中通常用一下的形式使用事件
`const [state,setState]=useState(true)`
`
const getDate=()=>{
  setState(state=>!state)
}`

`<button type="button" onClick={getData}>
          Set true
        </button>`
而虽然没问题，但是我们的getDate的地址会一直变，也就是每次点击会生成一个新的函数，而且不是很方便,来看看我们的aHooks

## 代码演示

### 基础用法

<code src="./demo/demo1.tsx">基础示例</code>

## API

```typescript
const [state, setTrue, setFalse ] = useBoolean(initialState: boolean);
```

### Params

| 参数         | 说明   | 类型      |
| ------------ | ------ | --------- |
| initialState | 必填项 | `boolean` |

### Result

| 参数     | 说明         | 类型         |
| -------- | ------------ | ------------ |
| state    | 切换 state   | `boolean`    |
| setTrue  | 设置为 true  | `() => void` |
| setFalse | 设置为 false | `() => void` |
