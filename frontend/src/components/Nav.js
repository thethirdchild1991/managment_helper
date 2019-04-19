import React, { Component } from 'react';
import {navData} from '../configs/navSettings';

const navElements = navData.map(
    val => {
        return (
            <li>
                <a href={val.link}>
                    {val.text}
                </a>
            </li>
        );
    }
);

class Nav extends Component{
    constructor(){
        super();
    }

    render(){
        return (
            <nav id="nav">
                <ul>
                    {navElements}
                </ul>
            </nav>
        );
    }
}
export default Nav;