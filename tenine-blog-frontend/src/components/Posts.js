import React, { Component } from 'react';



import Header from './Header';
import Footer from './Footer';


class Posts extends Component{
    render() {
        return (
            <React.Fragment>
                <Header/>
                <div className="contents">
                    <div>
                        Posts's Page
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default Posts;