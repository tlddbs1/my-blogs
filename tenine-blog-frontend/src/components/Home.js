import React, { Component } from 'react';



import Header from './Header';
import Footer from './Footer';


class Home extends Component{
    render() {
        return (
            <React.Fragment>
                <Header/>
                <div className="contents">
                    <div>
                        <h3>협찬 : 뽀꼬로꼬</h3>
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default Home;