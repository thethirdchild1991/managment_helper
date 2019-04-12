import React, {Component} from 'react'
import {guestContent} from './guestContentSettings'

// const APIAddr = 'https://swapi.co/api/people/1'
const APIAddr = 'http://localhost:5000'

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            inited : false,
            data : [],
        };
    }

    contentOnState(){
        return this.state.inited === true ?                                         
                    this.state.data.map( elem => {
                        console.log(elem.props);
                        return (
                            <li>
                                {elem.props.agent}
                            </li>
                        )}
                    ) : 
                    guestContent.map( elem => {
                        return (
                        <li>
                            {elem.name}
                        </li>
                        )
                    });
    }

    componentDidMount(){
        fetch(APIAddr)
            .then(res => res.json())
            .then(
                    // data => console.log(data)
                    (res) => {                        
                        this.setState({inited:true, data:res});
                    },                
                    (error) => { console.log('error')}
            );
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