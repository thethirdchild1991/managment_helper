import React, {Component} from 'react'
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

    render(){                
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
                authHandler={this.authHandler}
            />   
                
            <AppForm 
                id='signUp'
                mainClassName='signUp'
                additionalClassName={this.state.active === 'signUpTab' ? 'notHidden' : 'hidden'}
                proto={SignUpFormConfig}
                submitText='SignUp'
                url={API.singUp}
            /> 
            </div>
            
        </main>
        )        
    }
}

export default Auth