import React from 'react';
import './EditorHeader.scss';

const EditorHeader = ({ onBack, onSubmit }) => {
  return (
    <div className="editor-header">
      <div className="back">
        <button onClick={onBack} className="btn_back">뒤로가기</button>
      </div>
      <div className="submit"> 
        <button onClick={onSubmit} className="btn_save">저장하기</button>
      </div>
    </div>
  );
};

export default EditorHeader;