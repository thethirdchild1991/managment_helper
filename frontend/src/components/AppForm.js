import React, {Component} from 'react'
import LabeledInput from './LabeledInput'

/*
id
proto
submitText
url
*/

class AppForm extends Component{
    constructor(props){
        super(props)
        
        this._url = props.url
        this.extSubmitHandler=props.extSubmitHandler
        this.state = {
            loggedIn : false
        }
        this.props.proto.forEach( elem => {
            this.state[elem.id] = elem.text           
        })
    }

    changeHandle = event => {
        event.preventDefault();
        this.setState({
            [event.target.id] : event.target.value
        })
    }

    submitHandle = event => {
        event.preventDefault();       
        
        fetch(
            this._url,
            {
                method: "POST",
                headers: { 'Accept': 'application/json','Content-Type': 'application/json',},
                body:  JSON.stringify(this.state)
            }
        ).then( res => res.json())
        .then( res =>{
            if(this.extSubmitHandler){                      
                this.extSubmitHandler(JSON.parse(res.loggedIn))
            }            
        })
    }

    render() {
        
        return (
            <div className={this.props.mainClassName+' '+this.props.additionalClassName}  >
                <form id={this.props.id} onChange={this.changeHandle} onSubmit={this.submitHandle}>
                    {
                        this.props.proto ?
                            this.props.proto.map( element => {
                                return <LabeledInput key={element.id} params={element} />
                            })
                        :
                            ''
                    }
                    {
                        this.props.submitText ? 
                            <input type="submit" value={this.props.submitText} className='submitButton'/>
                        :
                            ''
                    }
                </form>
            </div>
        );
    }

}

export default AppForm