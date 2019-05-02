import React, {Component} from 'react'
import LabeledInput from './LabeledInput'

/*
id
mainClassName
additionalClassName
url
httpMethod
proto
submitText
extSubmitHandler
errorMessage
successMessage
extConsts
*/

class AppForm extends Component{
    constructor(props){
        super(props)
        
        this._url = props.url
        this.extSubmitHandler=props.extSubmitHandler
        this.httpMethod = props.httpMethod
        if(this.props.extID){            
            this.state = {
                loggedIn : false,
                id : this.props.extID
            }
        }else{
            this.state = {
                loggedIn : false            
            }
        }
        this.props.proto.forEach( elem => {
            this.state[elem.id] = elem.defaultValue           
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
        console.log(this.state.startDate)
        console.log( Date(this.state.startDate) )
        fetch(
            this._url,
            {
                method: this.httpMethod,
                headers: { 'Accept': 'application/json','Content-Type': 'application/json',},
                body:  JSON.stringify(this.state)
            }
        ).then( res => res.json() )
        .then( res =>{
            if(this.extSubmitHandler){                      
                this.extSubmitHandler(res)
            }            
        })
    }
    dateChangeHandler = ( value ) => {
        console.log( value )
        this.setState( value )
    }

    render() { 
        console.log(this.state)       
        return (
            <div className={this.props.mainClassName+' '+this.props.additionalClassName}  >
                <form id={this.props.id} onChange={this.changeHandle} onSubmit={this.submitHandle}>
                    {
                        this.props.proto ?
                            this.props.proto.map( element => {
                                return <LabeledInput key={element.id} params={element} dateOnChangeHandler={this.dateChangeHandler}/>
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
                    {
                        this.props.errorMessage ?                         
                        this.props.errorMessage.map( errorText => {return <div>{errorText}</div>})
                        :
                        <></>
                    }
                    {
                        this.props.successMessage ?                         
                        this.props.successMessage.map( errorText => {return <div>{errorText}</div>})
                        :
                        <></>
                    }
                </form>
            </div>
        );
    }

}

export default AppForm