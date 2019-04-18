import React, {Component} from 'react'
import LabeledInput from './LabeledInput';

class ProjectForm extends Component{
    constructor( props ){
        super( props );
    }

    onSubmitHandler = (event) =>{
        event.preventDefault();
        console.log('Project Form Submited')
    }

    render (){
        return (
            <form onSubmit={this.onSubmitHandler}>
                {
                    this.props.proto ?
                        this.props.proto.map( elem => {
                            return <LabeledInput text={elem.text} BR={elem.BR} id={elem.id}/>
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