import React, {Component} from 'react'
import {guestContent} from './guestContentSettings'
import ProjectElem from './ProjectElem'
import ProjectsView from './ProjectsView'
import ProjectFormConfig from './configs/ProjectFormConfig'
import SignInFormConfig from './configs/SignInFormConfig'
import SignUpFormConfig from './configs/SignUpFormConfig'
import AppForm from './AppForm'

// const APIAddr = 'https://swapi.co/api/people/1'
import {APIAddr} from './APISettings'

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            inited : false,
            data : [],
        };
    }

    contentOnState(){
        return  this.state.inited === true ?                                         
                    // this.state.data.map( elem => {                        
                    //     return (                            
                    //             // <ProjectElem mdata={elem.props} />                            
                    //             <ProjectsView data = {elem.props} />
                    //     );
                    // }) :                     
                    <ProjectsView data = {this.state.data}/>
                    :
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
                        // console.log(this.state.data);
                    },                
                    (error) => { console.log('error')}
            );
    }

    render(){
        return (
            <main id="main">
                {/* {this.contentOnState()} */}
                <AppForm
                    id='ProjectForm'
                    url={APIAddr}
                    proto={ProjectFormConfig} 
                    submitText="Save Project" />
                <AppForm
                    id='SignInForm'
                    url={APIAddr}
                    proto={SignInFormConfig} 
                    submitText="SignIn" />  
                <AppForm
                    id='SignUpForm'
                    url={APIAddr}
                    proto={SignUpFormConfig} 
                    submitText="SignUp" />                            

            </main>
        );
    }    
}
export default Main;