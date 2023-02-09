import React from 'react';
import { sleep } from 'dbfront-tools';

const App = () => {
  const handleSleepClick = async () => {
    await sleep(2000);
    alert('延迟2s执行的alert');
  };
  return (
    <>
      <button onClick={handleSleepClick}>延迟两秒后执行事件回调</button>
    </>
  );
};

export default App;
