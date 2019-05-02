import React, {Component} from 'react'
/*
id
LabelText
defaultValue
BR
required
*/
class LabeledInput extends Component{
    render() {        
        return(
            <div>
                <label htmlFor={this.props.params.id}>{this.props.params.LabelText}</label>            
                {this.props.params.BR === true ? <br /> : ''}
                <input 
                    type="text" 
                    id={this.props.params.id} 
                    name={this.props.params.id}
                    defaultValue={this.props.params.defaultValue}
                    required={this.props.params.required} />
                
            </div>
        );
    }
}
export default LabeledInput;