import React, {Component} from 'react'
import AppForm from './AppForm'
import SignInFormConfig from '../configs/SignInFormConfig'
import SignUpFormConfig from '../configs/SignUpFormConfig'
import {API} from '../configs/APISettings'

class Auth extends Component{
    render(){
        return(
        <main id='main'>
            <div className='authWrapper'>
                <div className='authTypeSelector'>
                    <div>SignIn</div>
                    <div>SignUp</div>
                </div>
            <AppForm 
                id='signIn'
                proto={SignInFormConfig}
                submitText='SignIn'
                url={API.singIn}
            />   
                
            <AppForm 
                id='signUp'
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