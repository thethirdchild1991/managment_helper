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
        const authState = localStorage.getItem('loggedIn')
        this.state = {
            authState : authState ? authState : false,        
            active : 'signInTab',
            errors :    {
                            signIn : [],
                            signUp : [],
                        },
            success :    {
                signIn : [],
                signUp : [],
            },
        }
    }

    onClickHandler = event => {
        this.setState({
            active : event.target.id
        }, () =>{console.log(this.state)})
    }

    onSignInHandler = param =>{   
        // console.log(param.loggedIn)      
        const AuthStatus = (param.loggedIn === 'false') ? false : param.loggedIn;
        if(AuthStatus !== false ){
            localStorage.setItem('loggedIn', AuthStatus)            
            this.setState({authState : AuthStatus})
        }else{
            localStorage.setItem('loggedIn', false)            
            const errors = this.state.errors
            errors.signIn = param.errors;            
            this.setState({ 
                            errors : errors,
                            authState : false
                        })
        }        
    }

    onSignUpHandler = param =>{  
        let status = false;
        if(param.status === 'OK'){
            status = true;
            const success = this.state.success
            success.signUp = ['Done']    
            const errors = this.state.errors
            errors.signUp = []   
            this.setState({ 
                            success : success,                            
                            errors : errors
                        })

        }else{
            status = false;
            const errors = this.state.errors
            errors.signUp = param.errors;                        
            const success = this.state.success
            success.signUp = []    
            this.setState({ 
                            errors : errors,
                            success : success,                            
                            authState : false
                        })
        }
    }
   

    render(){       
        
        if(this.state.authState !== false){            
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
                httpMethod='POST'
                extSubmitHandler={this.onSignInHandler} 
                errorMessage={this.state.errors.signIn}               
            />   
                
            <AppForm 
                id='signUp'
                mainClassName='signUp'
                additionalClassName={this.state.active === 'signUpTab' ? 'notHidden' : 'hidden'}
                proto={SignUpFormConfig}
                submitText='SignUp'
                url={API.singUp}
                httpMethod='POST'
                extSubmitHandler={this.onSignUpHandler}
                errorMessage={this.state.errors.signUp}
                successMessage={this.state.success.signUp}
            /> 
            </div>
            
        </main>
        )        
    }
}

export default Auth