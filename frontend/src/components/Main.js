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
import {projectKeys} from '../configs/projectTableConfig'
import {userKeys} from '../configs/userTableConfig'
import {ROLESobj} from '../configs/userRolesConfig'

class Main extends Component{
    constructor(props){
        super(props);           
           
        const authState = localStorage.getItem('loggedIn')
        this.state = {
            authState: authState ? authState : false,            
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
                    <TableView 
                        data={this.state.projects} 
                        dataKeys={projectKeys}
                        path='project'
                        withLink={ROLESobj[this.state.authState].viewProject > 0}
                    />
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
                    <TableView 
                        data = {this.state.users}                         
                        dataKeys={userKeys}
                        path='user'
                        withLink={ROLESobj[this.state.authState].editRole > 0}
                    />
                : <></>

    }

    componentDidMount(){    
        if(this.state.authState !== false) {
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
                                    errors : [],
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
                        errors: []
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
        
        if(this.state.authState === false){
            return <Redirect push to='/auth' />
        }
        return (
            <main id="main">
                {this.ProjectNavBarOnState()}  
                <div className="main">
                    {
                        ROLESobj[this.state.authState].viewProjectsTable === true ? 
                            this.ProjectTableOnState() 
                        : 
                            <></>
                    }
                    {
                        ROLESobj[this.state.authState].viewUsersTable === true ?
                            this.UsersTableOnState()
                        :
                            <></>
                    }
                    <div className="formWrapper">
                    {
                        ROLESobj[this.state.authState].createProject === true ?
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
                            : 
                                <></> 
                    }
                    {
                        ROLESobj[this.state.authState].createUser === true ?
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
                            :
                            <></>
                    }
                    </div>
                </div>
                <div className='MainNavWrapper'>                   
                </div>
            </main>
            
        );
    }    
}
export default Main;