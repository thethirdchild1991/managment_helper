import React, {Component} from 'react'
import {APIAddr} from './APISettings'



class SignInForm extends Component{
    constructor( props ){
        super(props);
        this.state = {
            username : '',
            password : ''
        }
        
    }

    submitHandle = event => {
        event.preventDefault();
        console.log('form Submited')
        fetch(APIAddr, {
            method: 'POST',
            headers: { 'Accept': 'application/json','Content-Type': 'application/json',},
            body: JSON.stringify(this.state)
        })
    }

    changeHandle = event => {
        event.preventDefault();        
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render(){
        return (
            <div id="logInForm">
                <form onSubmit={this.submitHandle} onChange={this.changeHandle}>
                    <input id='username' name='username' type="text" required/> <br />
                    <input id='password' name='password' type="password" required/> <br />
                    <input type="submit" value="SignIn" className="button"/>
                </form>
            </div>

        );
    }
}

export default SignInForm;