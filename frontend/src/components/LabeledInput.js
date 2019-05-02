import React, {Component} from 'react'
import DatePicker from "react-datepicker";
/*
id
LabelText
defaultValue
BR
required
*/
class LabeledInput extends Component{

    constructor(props) {
        super(props);
        this.props = props;        
        this.state = {
          Date: new Date(),          
        };
        
      }
     
    dateOnChangeHandler = (date) => {                
        this.setState( {Date : date})
        this.props.dateOnChangeHandler( {[this.props.params.id] : date} )
    }

    render() { 
        return(
            <div className='labeledInputWrapper'>
                <label htmlFor={this.props.params.id}>{this.props.params.LabelText}</label>            
                {this.props.params.BR === true ? <br /> : ''}
                

                { this.props.params.type === Date ? 
                    <DatePicker
                        selected={this.state.Date}
                        onChange={this.dateOnChangeHandler}
                    />
                : 
                <input 
                    type="text"                     
                    id={this.props.params.id} 
                    name={this.props.params.id}
                    defaultValue={this.props.params.defaultValue}
                    required={this.props.params.required} />
                }
                
            </div>
        );
    }
}
export default LabeledInput;