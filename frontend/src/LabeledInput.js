import React, {Component} from 'react'
class LabeledInput extends Component{
    constructor(props){
        super(props);    
    }

    render() {
        return(
            <div>
                <label for={this.props.id}>{this.props.text}</label>            
                {this.props.BR === true ? <br /> : ''}
                <input type="text" id={this.props.id} value={this.props.text}/>
            </div>
        );
    }
}
export default LabeledInput;