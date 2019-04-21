import React, { Component } from 'react';
import {navData} from '../configs/navSettings';
// import { Route, Link, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";

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
        console.log('From Nav constructor')
        this.state = {
            authState : Boolean(localStorage.getItem('loggedIn')),
            redirect : false,
        }
    }

    logOutHandle = event =>{
        event.preventDefault();        
        localStorage.clear()
        this.setState({
            authState : Boolean(localStorage.getItem('loggedIn')),
            redirect : true,
        })        
    }

    componentWillUpdate(){
        console.log('Nav will update:')
        console.log('authState: ', this.state.authState)
        console.log('redirect: ', this.state.redirect)
        // if( this.state.authState === false && this.state.redirect === true ){
        //     console.log('Here?')
        //     this.setState({redirect : false})
        // }
    }
    componentDidMount(){
        console.log('Nav did mount')
    }

    render(){        
        console.log('From Nav render')
        if (this.state.redirect === true) {            
            this.setState({redirect : false})
            console.log('From Nav render defore redirect')
            
            return <Redirect to='/index'/>;
        }

        return (
            <nav id="nav">
                <ul>
                    {/* {navElements} */}
                    <li>
                        { this.state.authState ? <a href='/' onClick={this.logOutHandle}>logOut</a> : 'HI' }
                    </li>
                </ul>
            </nav>
        );
    }
}
export default Nav;