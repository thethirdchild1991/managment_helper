import React, { Component } from 'react';
import {navData} from './navSettings';

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
    constructor(props){
        super(props);
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