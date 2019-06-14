import React, { Component } from 'react';
import EditorTemplate from './EditorTemplate';
import EditorHeaderContainer from 'containers/editor/EditorHeaderContainer';
import EditorPaneContainer from '../../containers/editor/EditorPaneContainer';
import EditorPreviewContainer from '../../containers/editor/EditorPreviewContainer';

class Editorpage extends Component {
  render() {
    return (
      <EditorTemplate
        header={<EditorHeaderContainer/>}
        editor={<EditorPaneContainer/>}
        preview={<EditorPreviewContainer/>}
      />
    );
  }
}

export default Editorpage;