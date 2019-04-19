import React, {Component} from 'react'
import AppForm from './AppForm'
import SignInFormConfig from '../configs/SignInFormConfig'
import SignUpFormConfig from '../configs/SignUpFormConfig'
import {API} from '../configs/APISettings'

class Auth extends Component{
    render(){
        return(
        <main id='main'>
            <AppForm 
                id='SignIn'
                proto={SignInFormConfig}
                submitText='SignIn'
                url={API.singIn}
            />       
            <AppForm 
                id='SignUp'
                proto={SignUpFormConfig}
                submitText='SignUp'
                url={API.singUp}
            /> 
        </main>
        )        
    }
}

export default Auth