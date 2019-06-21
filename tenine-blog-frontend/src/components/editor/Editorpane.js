import React, { Component } from 'react';
import './Editorpane.scss';

import CodeMirror from 'codemirror';

import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/css/css';
import 'codemirror/mode/shell/shell';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';

class EditorPane extends Component {
    editor = null;
    codeMirror = null;
    cursor = null;
  
    initializeEditor = () => {
      this.codeMirror = CodeMirror(this.editor, {
        mode: 'markdown',
        theme: 'monokai',
        lineNumbers: true,
        lineWrapping: true
      });
      this.codeMirror.on('change', this.handleChangeMarkdown);
    }
  
    componentDidMount() {
      this.initializeEditor();
    }
  
    handleChange = (e) => {
      const { onChangeInput } = this.props;
      const { value, name } = e.target;
  
      onChangeInput({ name, value });
    }
  
    handleChangeMarkdown = (body) => {
      const { onChangeInput } = this.props;
  
      this.cursor = body.getCursor();
      onChangeInput({ name: 'markdown', value: body.getValue() });
    }
  
    componentDidUpdate(prevProps, prevState) {
      if (prevProps.markdown !== this.props.markdown) {
        const { codeMirror, cursor } = this;
  
        if (!codeMirror) return;
        codeMirror.setValue(this.props.markdown);
  
        if (!cursor) return;
        codeMirror.setCursor(cursor);
      }
    }
  
    render() {
      const { title } = this.props;
      const { handleChange } = this;
  
      return (
        <div className="editor-pane">
          <input className="title" placeholder="제목 입력" name="title"
            value={title} onChange={handleChange}
          />
          <div className="code-editor" ref={ref => this.editor=ref}></div>
        </div>
      );
    }
  }
  
  export default EditorPane;