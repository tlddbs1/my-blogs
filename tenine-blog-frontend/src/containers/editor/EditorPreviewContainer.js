import React, { Component } from 'react';
import { connect } from 'react-redux';

import Editorpreview from '../../components/editor/Editorpreview';

class EditorPreviewContainer extends Component {
  render() {
    const { markdown, title } = this.props;

    return (
      <Editorpreview
        title={title}
        markdown={markdown}
      />
    );
  }
}

export default connect(
  (state) => ({
    title: state.editor.get('title'),
    markdown: state.editor.get('markdown')
  })
)(EditorPreviewContainer);