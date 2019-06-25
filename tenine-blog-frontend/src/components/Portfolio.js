import React, { Component } from 'react';


import Header from './Header';
import Footer from './Footer';

class Portfolio extends Component{
    render() {
        return (
            <React.Fragment>
                <Header/>
                <div className="contents">
                    <div>
                        Portfolio's Page
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default Portfolio;