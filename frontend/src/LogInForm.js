import React, {Component} from 'react'

class LogInForm extends Component{
    constructor( props ){
        super(props);
    }

    render(){
        return (
            <div id="logInForm">
                <form>
                    <input type="text" value="username" required/> <br />
                    <input type="password" required/> <br />
                    <input type="submit" value="Submit" className="button" />
                </form>
            </div>

        );
    }
}

export default LogInForm;