import React, { Component } from 'react';
import {
    Redirect,    
  } from "react-router-dom";

// const navElements = navData.map(
//     val => {
//         return (
//             <li>
//                 <a href={val.link}>
//                     {val.text}
//                 </a>
//             </li>
//         );
//     }
// );

class Nav extends Component{
    constructor(){
        super();        
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
    }
    componentDidMount(){        
    }

    render(){               
        if (this.state.redirect === true) {                        
            return <Redirect to='/auth'/>;
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