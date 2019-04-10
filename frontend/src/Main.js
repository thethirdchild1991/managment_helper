import React, {Component} from 'react'
import {guestContent} from './guestContentSettings'

class Main extends Component{
    constructor( props ){
        super(props);
        this.state = false;
    }

    contentOnState(){
        return this.state === true ? 
                    'Empty' : 
                    guestContent.map( elem => {
                        return (
                        <li>
                            {elem.name}
                        </li>
                        )
                    });
    }

    render(){
        return (
            <main id="main">
                {this.contentOnState()}
            </main>
        );
    }    
}
export default Main;