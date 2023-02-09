/**
 * title: 基础用法
 * desc: 频繁调用 run，但只会在所有点击完成 500ms 后执行一次相关函数
 */

import { useDebounceFn } from 'dbfront-tools';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(0);
  const onDebounceFn = useDebounceFn(
    () => {
      setValue(value + 1);
    },
    {
      wait: 500,
    },
  );

  return (
    <div>
      <p style={{ marginTop: 16 }}> Clicked count: {value} </p>
      <button type="button" onClick={onDebounceFn}>
        Click fast!
      </button>
    </div>
  );
};
