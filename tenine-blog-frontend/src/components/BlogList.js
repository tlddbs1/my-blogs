import React , { Component } from 'react';
import BlogInfo from './BlogInfo';
import {Link} from 'react-router-dom';

class BlogList extends Component{
    render() {
        const {info , onClick} = this.props;
        console.log("info");
        console.log(info);
        const list = info.map((data,index) => 
            (<Link key={index} exact="true" to={`/blog/${data.idx}`}><BlogInfo key={index} info={data} onClick={onClick}/></Link>)
        );
        return(
            <div>
                {list}
            </div>
        )
    }
}

export default BlogList;