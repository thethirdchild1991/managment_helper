import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";
import { createBrowserHistory } from 'history';
 


import AppForm from './AppForm'
import SignInFormConfig from '../configs/SignInFormConfig'
import SignUpFormConfig from '../configs/SignUpFormConfig'
import {API} from '../configs/APISettings'


class Auth extends Component{
    constructor(props){
        super(props)        
        this.authHandler = props.authHandler
        this.state = {
            authState : props.authState,            
            active : 'signInTab'
        }
    }

    onClickHandler = event => {
        this.setState({
            active : event.target.id
        }, () =>{console.log(this.state)})
    }

    onSignInHandler = param =>{        
        console.log('loggedIn: ', param)
        if(param === true ){
            localStorage.setItem('loggedIn', Boolean(param))
            this.setState({authState : param})
        }else{
            localStorage.setItem('loggedIn', Boolean(false))
            this.setState({authState : false})
        }
        // this.authHandler()
    }

    onSignUpHandler = event =>{        
    }

    componentDidUpdate(){         
    }

    render(){
        
        if(this.state.authState === true){            
            return <Redirect to='/index'/>            
        }        
                      
        return(
        <main id='main'>
            <div className='authWrapper'>
                <div className='authTypeSelector'>
                    <div 
                        className={this.state.active === 'signInTab' ? 'active' : 'notActive'} 
                        id='signInTab' 
                        onClick={this.onClickHandler}>
                            SignIn
                    </div>
                    <div 
                        className={this.state.active === 'signUpTab' ? 'active' : 'notActive'} 
                        id='signUpTab'
                        onClick={this.onClickHandler}>
                            SignUp
                    </div>
                </div>
            <AppForm 
                id='signIn'
                mainClassName='signIn'
                additionalClassName={this.state.active === 'signInTab' ? 'notHidden' : 'hidden'}
                proto={SignInFormConfig}
                submitText='SignIn'
                url={API.singIn}
                submitHandler={this.onSignInHandler}                
            />   
                
            <AppForm 
                id='signUp'
                mainClassName='signUp'
                additionalClassName={this.state.active === 'signUpTab' ? 'notHidden' : 'hidden'}
                proto={SignUpFormConfig}
                submitText='SignUp'
                url={API.singUp}
                submitHandler={this.onSignUpHandler}
            /> 
            </div>
            
        </main>
        )        
    }
}

export default Auth