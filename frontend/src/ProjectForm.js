import React, {Component} from 'react'
import LabeledInput from './LabeledInput';
import {APIAddr} from './APISettings'

class ProjectForm extends Component{
    constructor( props ){
        super( props );
        
        this.state = {};
        props.proto.forEach( elem => {            
            this.state[elem.id] = elem.text
        })

    }

    onSubmitHandler = (event) =>{
        event.preventDefault();
        console.log('Project Form Submited')
                
        fetch(APIAddr, {
            method: "POST",
            headers: { 'Accept': 'application/json','Content-Type': 'application/json',},
            body:  JSON.stringify(this.state)
        })
        // .then(function(response){ 
        //     return response.json();   
        // })
        //     .then(function(data){ 
        //     console.log(data)
        // });        

    }
    onChangeHandler = event => {
        event.preventDefault();        
        const id = event.target.id
        const value = event.target.value
        
        this.setState({
            [id] : value
        }, () =>{console.log('Done: ', this.state)})
    }

    render (){
        return (
            <form onSubmit={this.onSubmitHandler} onChange={this.onChangeHandler}>
                {
                    this.props.proto ?
                        this.props.proto.map( elem => {
                            return <LabeledInput text={elem.text} BR={elem.BR} id={elem.id} required={elem.required}/>
                        })
                    : ''
                }                
                {
                    this.props.submitText ?
                        <input type="submit" value={this.props.submitText} />
                    :
                        ''
                }
            </form>
            )
    }
}

export default ProjectForm;