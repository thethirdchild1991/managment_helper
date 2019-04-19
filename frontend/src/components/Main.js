import React, {Component} from 'react'
import {guestContent} from '../configs/guestContentSettings'
import ProjectElem from './ProjectElem'
import ProjectsView from './ProjectsView'
import ProjectFormConfig from '../configs/ProjectFormConfig'
import SignInFormConfig from '../configs/SignInFormConfig'
import SignUpFormConfig from '../configs/SignUpFormConfig'
import CreateDeveloperFormConfig from '../configs/CreateDeveloperFormConfig'
import AppForm from './AppForm'
import {API} from '../configs/APISettings'

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
        fetch(API.addr)
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
                    url={API.createProject}
                    proto={ProjectFormConfig} 
                    submitText="Save Project" />
                <AppForm
                    id='SignInForm'
                    url={API.singIn}
                    proto={SignInFormConfig} 
                    submitText="SignIn" />  
                <AppForm
                    id='SignUpForm'
                    url={API.singUp}
                    proto={SignUpFormConfig} 
                    submitText="SignUp" />   
                <AppForm
                    id='CreateDeveloper'                         
                    url={API.createDeveloper}
                    proto={CreateDeveloperFormConfig}
                    submitText="Create" />


            </main>
        );
    }    
}
export default Main;