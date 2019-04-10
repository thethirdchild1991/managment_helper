import React from 'react'
import {Component} from 'react'

class Header extends Component{
    constructor( props ){
        super( props )
    }

    render(){
        return (
            <header className = 'App-header'>
                <a href="#">
                    <img src="http://ardeonova.com/sites/all/themes/riftek/logo.png" alt="logo"/>
                </a>
            </header>        
        );
    }    
}

export default Header;