import React , { Component } from 'react';
import Navigation from './Navigation';
import '../assets/Header.css';

class Header extends Component {
    render() {
        return(
            <div className="header">
                <div className="title_area">
                    <h2 className="title">arirang's blog</h2>
                    <Navigation/>
                </div>
            </div>
        )
    }
}

export default Header;