import React from 'react';
import './Editorpreview.scss';
import MarkdownRender from './MarkdownRender';

const Editorpreview = ({ title, markdown }) => (
    <div className="editor-preview">
      <h1 className="tit">{title}</h1>
      <div>
        <MarkdownRender markdown={markdown} />
      </div>
    </div>
  );
  
  export default Editorpreview;