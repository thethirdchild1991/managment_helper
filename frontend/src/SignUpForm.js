import React, {Component} from 'react'

class SignUpForm extends Component{
    constructor( props ){
        super( props );
        this.state = {
            username : '',
            password : '',
            email : ''
        }
    }

    render() {
        return (
            <form>
            <input type='text' required={true} />
            <input type='password' required={true} />
            <input type='submit' value='SignUp' />
            </form>
        );
    }
}

export default SignUpForm
