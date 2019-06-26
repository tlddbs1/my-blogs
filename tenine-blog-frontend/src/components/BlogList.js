import React , { Component } from 'react';
import BlogInfo from './BlogInfo';
import {Link} from 'react-router-dom';

class BlogList extends Component{
    render() {
        const {info , onClick} = this.props;
        const activeStyle = {
            color : '#3dc4c4',
            textDecoration : 'none'
        }
        const list = info.map((data,index) => 
            (<Link key={index} exact="true" to={`/blog/${data.idx}` }><BlogInfo key={index} info={data} onClick={onClick}/></Link>)
        );
        return(
            <div>
                {list}
            </div>
        )
    }
}

export default BlogList;