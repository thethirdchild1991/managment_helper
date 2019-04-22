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
        this.extSubmitHandler=props.submitHandler
        this.state = {
            loggedIn : false
        }
        this.props.proto.forEach( elem => {
            this.state[elem.id] = elem.text           
        })
        // console.log('props: ',props)
        // this.authHandler(true)
    }

    changeHandle = event => {
        event.preventDefault();
        this.setState({
            [event.target.id] : event.target.value
        })
    }

    submitHandle = event => {
        event.preventDefault();
        console.log('Hello from '+event.target.id+' to '+this._url)
        
        fetch(
            this._url,
            {
                method: "POST",
                headers: { 'Accept': 'application/json','Content-Type': 'application/json',},
                body:  JSON.stringify(this.state)
            }
        ).then( res => res.json())
        .then( res =>{
            console.log(res)
            console.log(this.extSubmitHandler)
            // console.log('fetched : ', res.loggedIn)
            // this.setState({loggedIn: res.loggedIn})
            // if(this.authHandler)
            //     this.authHandler(res.loggedIn)
            if(this.extSubmitHandler){      
                console.log('hi')          
                this.extSubmitHandler((res.loggedIn))
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