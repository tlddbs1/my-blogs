import React , { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BlogDetail from 'components/BlogDetail'
import * as BlogActions from 'store/modules/Blog';

import Header from 'components/Header';
import Footer from 'components/Footer';

class BlogDetailContainer extends Component {
    
    initialize = async () => {
        const { BlogActions , match } = this.props;

        try{
            await BlogActions.listGet(match.params.idx);
        }catch(err) {
            console.log(err);
        }
    }

    componentDidMount(){
        this.initialize();
    }

    render(){
        const {title , contents, idx} = this.props; 
        return(
            <React.Fragment>
                <Header/>
                <div className="contents">
                    <BlogDetail
                        title={title}
                        contents={contents}
                        idx={idx}
                    />
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default connect(
    (state) => ({
        title : state.blog.title,
        contents : state.blog.contents,
        idx : state.blog.title
    }),
    (dispatch) => ({
        BlogActions : bindActionCreators(BlogActions,dispatch)
    })
)(BlogDetailContainer);