import React , { Component } from 'react';
import BlogInfo from './BlogInfo';

class BlogList extends Component{
    render() {
        const {info , onClick} = this.props;
        const list = info.map((data,index) => 
            (<BlogInfo key={index} info={data} onClick={onClick}/>)
        );

        return(
            <div>
                {list}
            </div>
        )
    }
}

export default BlogList;