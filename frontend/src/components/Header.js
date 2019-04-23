import React from 'react'
import {Component} from 'react'
import MainLogo from './MainLogo'

class Header extends Component{
    render(){
        return (
            <header className = 'header'>
                <MainLogo />
            </header>        
        );
    }    
}

export default Header;