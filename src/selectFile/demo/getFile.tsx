import React, { useState } from 'react';
import { selectFile } from 'dbfront-tools';
const App: React.FC = () => {

  const [fileState, setfileState] = useState<File>();
  const getFile = () => {
    selectFile('xlxs', setfileState);
  };

  return (
    <>
      <button type="button" onClick={getFile}>
        {fileState ? fileState.name : '调用系统文件'}
      </button>
    </>
  );
};

export default App;
