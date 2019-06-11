import React , { Component } from 'react';
import '../assets/BlogInfo.css'

class BlogInfo extends Component{

    handleClick = () => {
        const {onClick} = this.props;
        onClick(this.props.info.id);
    };

    render() {
        const {title, contents, createdDate} = this.props.info;
        return(
            <div className="list_box" onClick={this.handleClick}>
                <div className="list_tit">{title}</div>
                <p className="list_cont">{contents}</p>
                <div className="list_footer">{createdDate}</div>
            </div>
        )
    }
}

export default BlogInfo;