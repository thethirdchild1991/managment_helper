import React, {Component} from 'react'
import {
    Redirect,    
  } from "react-router-dom";

import {guestContent} from '../configs/guestContentSettings'
import ProjectsView from './ProjectsView'
import ProjectFormConfig from '../configs/ProjectFormConfig'
import CreateDeveloperFormConfig from '../configs/CreateDeveloperFormConfig'
import AppForm from './AppForm'
import ProjectNavCol from './ProjectNavCol'
import {API} from '../configs/APISettings'

class Main extends Component{
    constructor(props){
        super(props);        
        const authState = Boolean(localStorage.getItem('loggedIn'))
        this.state = {
            authState: authState,
            inited : false,
            data : [],
        };
    }

    ProjectNavBarOnState = () =>{        
        return  this.state.inited === true ?                                                         
                    <ProjectNavCol data={this.state.data} />
                    :
                    guestContent.map( elem => {
                        return (
                        <li key={elem.name}>
                            {elem.name}
                        </li>
                        )
                    });        
    }

    ProjectTableOnState(){        
        return  this.state.inited === true ?                                                                                 
                    <ProjectsView data = {this.state.data}/>
                    :
                    guestContent.map( elem => {
                        return (
                        <li key={elem.name}>
                            {elem.name}
                        </li>
                        )
                    });
    }

    componentDidMount(){        
        this.fetchProjects();
    }

    componentWillUnmount(){
        //fix fetch after unmount
        //to call that - click several times at header link
    }

    fetchProjects = param => {        
        fetch(API.selectAllProjects)
            .then(res => res.json())
            .then(
                    // data => console.log(data)
                    (res) => {                          
                        if(res.length > 0)
                            this.setState({inited:true, data:res});                        
                    },                
                    (error) => { console.log('error')}
            );
    }

    render(){        
        if(this.state.authState !== true){
            return <Redirect push to='/auth' />
        }
        return (
            <main id="main">
                {this.ProjectNavBarOnState()}  
                <div className="main">
                    {this.ProjectTableOnState()}
                    <div className="formWrapper">
                        <AppForm
                            id='ProjectForm'
                            mainClassName='ProjectForm'                    
                            additionalClassName=''
                            url={API.createProject}
                            proto={ProjectFormConfig} 
                            submitText="Save Project" 
                            submitHandler={this.fetchProjects}                
                            />                 
                        <AppForm
                            id='CreateDeveloper'                         
                            mainClassName='CreateDeveloper'
                            additionalClassName=''
                            url={API.createDeveloper}
                            proto={CreateDeveloperFormConfig}
                            submitText="Create" />
                    </div>
                </div>
                <div className='MainNavWrapper'>                   
                </div>
            </main>
            
        );
    }    
}
export default Main;