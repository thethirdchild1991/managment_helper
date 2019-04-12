import React from 'react'
import {Component} from 'react'
import MainLogo from './MainLogo'
import LogInForm from './LogInForm'



class Header extends Component{
    constructor(){
        super()
    }

    render(){
        return (
            <header className = 'header'>
                <MainLogo />
                <LogInForm />                
            </header>        
        );
    }    
}

export default Header;