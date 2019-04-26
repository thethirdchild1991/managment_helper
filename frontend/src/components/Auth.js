import React, {Component} from 'react'
import {
    Redirect,    
  } from "react-router-dom";
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
        const AuthStatus = JSON.parse(param.loggedIn)                  
        if(AuthStatus === true ){
            localStorage.setItem('loggedIn', AuthStatus)            
            this.setState({authState : AuthStatus})
        }else{
            localStorage.setItem('loggedIn', false)            
            this.setState({authState : false})
        }        
    }

    onSignUpHandler = event =>{        
    }

    

    render(){       
        
        if(this.state.authState === true){            
            console.log('redirect')
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
                extSubmitHandler={this.onSignInHandler}                
            />   
                
            <AppForm 
                id='signUp'
                mainClassName='signUp'
                additionalClassName={this.state.active === 'signUpTab' ? 'notHidden' : 'hidden'}
                proto={SignUpFormConfig}
                submitText='SignUp'
                url={API.singUp}
                extSubmitHandler={this.onSignUpHandler}
            /> 
            </div>
            
        </main>
        )        
    }
}

export default Auth