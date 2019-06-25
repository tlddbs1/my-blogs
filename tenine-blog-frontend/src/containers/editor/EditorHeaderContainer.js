import React , { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { EditorHeader } from 'components/editor';
import * as EditorActions from 'store/modules/editor'

class EditorHeaderContainer extends Component {
    componentDidMount() {
        const { EditorActions } = this.props;
        EditorActions.initialize();
    }

    handleBack = () => {
        const { history } = this.props;
        history.goBack();
    }

    handleSubmit = async () => {
        const {title , markdown , EditorActions, history} = this.props;
        const post = {title , contents : markdown};
        console.log(post);
        try{
            await EditorActions.writePost(post)
                                    .then(()=>{
                                                const {idx} = this.props;
                                                history.push(`/blog/${idx}`)
                                            }
                                    )
        }catch(err){
            console.log(err);
        }
    }


    render(){
        const {handleBack, handleSubmit} = this;
        return(
            <EditorHeader
                onBack={handleBack}
                onSubmit={handleSubmit}
            />
        );
    } 
}

export default connect(
    (state) =>({
        title : state.editor.get('title'),
        markdown : state.editor.get('markdown'),
        idx : state.editor.get('postId')
    }),
    (dispatch)=>({
        EditorActions : bindActionCreators(EditorActions,dispatch)
    })
)(withRouter(EditorHeaderContainer));