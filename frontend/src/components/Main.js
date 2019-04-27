import React, {Component} from 'react'
import {
    Redirect,    
  } from "react-router-dom";

import {guestContent} from '../configs/guestContentSettings'
import TableView from './TableView'
import ProjectFormConfig from '../configs/ProjectFormConfig'
import CreateDeveloperFormConfig from '../configs/CreateDeveloperFormConfig'
import AppForm from './AppForm'
import ProjectNavCol from './ProjectNavCol'
import {API} from '../configs/APISettings'

class Main extends Component{
    constructor(props){
        super(props);           
        const authState = JSON.parse(localStorage.getItem('loggedIn'))        
        this.state = {
            authState: authState,
            inited : false,
            errors : {
                        projects : [],
                        users : [],
                     },
            projects : [],
            users : []
        };
    }

    ProjectNavBarOnState = () =>{        
        return  this.state.inited === true ?                                                         
                    <ProjectNavCol data={this.state.projects} />
                    :
                    guestContent.map( elem => {
                        return (
                        <li key={elem.name}>
                            {elem.name}
                        </li>
                        )
                    });        
    }

    ProjectTableOnState = () => {        
        return  this.state.projects.length > 0 ?                                                                                 
                    <TableView data = {this.state.projects} path='project'/>
                    :
                    guestContent.map( elem => {
                        return (
                        <li key={elem.name}>
                            {elem.name}
                        </li>
                        )
                    });
    }

    UsersTableOnState = () => {
        return  this.state.users.length > 0 ?
                    <TableView data = {this.state.users} path='user'/>
                : <></>

    }

    componentDidMount(){    
        if(this.state.authState === true) {
            this.fetchProjects();
            this.fetchUsers();
        }
    }

    fetchProjects = param => { 
        let status = true;
        if(param){
            console.log(param.status)                   
            if(param.status === 'OK')
                status = true
            else
                status = false
        }
            

        if(status === true){
            fetch(API.selectAllProjects)
                .then(res => res.json())
                .then(                    
                        (res) => {                          
                            if(res.length > 0)
                                this.setState({
                                    inited : true, 
                                    projects : res,
                                });                        
                        },                
                        (error) => { console.log('error')}
                );
        }else{            
            const errors = this.state.errors
            errors.projects = param.errors;
            this.setState({ errors : errors })
        }
    }

    fetchUsers = param =>{        
        let status = true;
        if(param){
            console.log(param.status)                   
            if(param.status === 'OK')
                status = true
            else
                status = false
        }

        if(status === true){
            fetch(API.selectAllUsers)
            .then( res => res.json())
            .then(
                res =>{
                    if(res.length > 0)
                    this.setState({
                        inited : true, 
                        users : res,
                    });                        
                },
                error => { console.log('error') }
            );
        }else{            
            const errors = this.state.errors
            errors.users = param.errors;
            this.setState({ errors : errors })
        }
    }

    render(){  
        console.log('Main state: ', this.state)
        
        if(this.state.authState !== true){
            return <Redirect push to='/auth' />
        }
        return (
            <main id="main">
                {this.ProjectNavBarOnState()}  
                <div className="main">
                    {this.ProjectTableOnState()}
                    {this.UsersTableOnState()}
                    <div className="formWrapper">
                        <AppForm
                            id='ProjectForm'
                            mainClassName='ProjectForm'                    
                            additionalClassName=''
                            url={API.createProject}
                            httpMethod='POST'
                            proto={ProjectFormConfig} 
                            submitText="Save Project" 
                            extSubmitHandler={this.fetchProjects}                
                            errorMessage={this.state.errors.projects}
                            />                 
                        <AppForm
                            id='CreateDeveloper'                         
                            mainClassName='CreateDeveloper'
                            additionalClassName=''
                            url={API.createDeveloper}
                            httpMethod='POST'
                            proto={CreateDeveloperFormConfig}
                            submitText="Create" 
                            extSubmitHandler={this.fetchUsers}                
                            errorMessage={this.state.errors.users}
                            />
                    </div>
                </div>
                <div className='MainNavWrapper'>                   
                </div>
            </main>
            
        );
    }    
}
export default Main;