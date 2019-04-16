import React, {Component} from 'react'

class LogInForm extends Component{
    constructor( props ){
        super(props);
    }

    submitHandle = event => {
        event.preventDefault();
        console.log('form Submited')
    }

    render(){
        return (
            <div id="logInForm">
                <form onSubmit={this.submitHandle}>
                    <input type="text" value="username" required/> <br />
                    <input type="password" required/> <br />
                    <input type="submit" value="login" className="button"/>
                </form>
            </div>

        );
    }
}

export default LogInForm;