import React , { Component } from 'react';
import '../assets/BlogInfo.css'
import removeMd from 'remove-markdown';

class BlogInfo extends Component{

    render() {
        const {title, contents, createdDate} = this.props.info;
        return(
            <div className="list_box" onClick={this.handleClick}>
                <div className="list_tit">{title}</div>
                <p className="list_cont">{removeMd(contents)}</p>
                <div className="list_footer">{createdDate}</div>
            </div>
        )
    }
}

export default BlogInfo;