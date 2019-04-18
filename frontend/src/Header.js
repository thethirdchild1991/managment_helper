import React from 'react'
import {Component} from 'react'
import MainLogo from './MainLogo'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'



class Header extends Component{
    constructor(){
        super()
    }

    render(){
        return (
            <header className = 'header'>
                <MainLogo />
                <SignInForm />      
                <SignUpForm />          
            </header>        
        );
    }    
}

export default Header;