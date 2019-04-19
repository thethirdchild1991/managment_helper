import React, {Component} from 'react'
/*
id
text
BR
required
*/
class LabeledInput extends Component{
    constructor(props){
        super(props);    
    }

    render() {        
        return(
            <div>
                <label htmlFor={this.props.params.id}>{this.props.params.text}</label>            
                {this.props.params.BR === true ? <br /> : ''}
                <input 
                    type="text" 
                    id={this.props.params.id} 
                    name={this.props.params.id}
                    defaultValue={this.props.params.text}
                    required={this.props.params.required} />
                
            </div>
        );
    }
}
export default LabeledInput;