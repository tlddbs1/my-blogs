import React, { Component } from 'react';
import axios from 'axios';
import BlogList from './BlogList';
import Write from './Write';
import {TiPencil} from 'react-icons/ti';
import {Link} from 'react-router-dom';

import '../assets/Blog.css';

class Blog extends Component{
    state = {
        "info" : 
            [
                {
                    "title" : "test" ,
                    "contents" : "test",
                    "createdDate" : "2019-06-10",
                    "id":0
                }
            ]
        }

    async componentDidMount() {
        let listData;
        listData = await axios.get("http://localhost:8080/blog");
        console.log(listData);
        this.setState({
            info : listData.data
        })
    }

    handleClick = (id) => {
        console.log("click! :: " + id)
    }

    render() {
        return (
            <React.Fragment>
                <BlogList info={this.state.info}
                            onClick={this.handleClick}/>
                <Link exact to="/Write" Component={Write}>
                    <div className="write-btn">
                        <TiPencil/>
                    </div>
                </Link>
            </React.Fragment>
        )
    }
}

export default Blog;