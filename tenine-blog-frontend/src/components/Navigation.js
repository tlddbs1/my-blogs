import React , { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/Navigation.css';

class Navigation extends Component {
    render() {
        const activeStyle = {
            color : '#3dc4c4',
            textDecoration : 'none'
        }

        return (
            <div className="navBar">
                <ul className="navigation">
                    <li><NavLink exact to="/" activeStyle={activeStyle}>HOME</NavLink></li>
                    <li><NavLink exact to="/blog" activeStyle={activeStyle}>BLOG</NavLink></li>
                    <li><NavLink exact to="/portfolio" activeStyle={activeStyle}>PORTFOLIO</NavLink></li>
                    <li><NavLink exact to="/posts" activeStyle={activeStyle}>POSTS</NavLink></li>
                </ul>
            </div>
        )
    } 
}

export default Navigation;