import React , { Component } from 'react';
import { MarkdownRender } from 'components/editor';
class BlogDetail extends Component {
    render() {
        const {title , contents, idx } = this.props;
        const style = {
            width: '100%'
        }
        return(
            <div style={style}>
                <div className="blog_tit">
                    <h1>{title}</h1>
                </div>
                <hr/>
                <div className="blog_cont">
                    <MarkdownRender markdown={contents}/>
                </div>
            </div>
        )
    }
}
export default BlogDetail;