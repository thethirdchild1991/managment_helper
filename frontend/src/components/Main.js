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
        const authState = Boolean(localStorage.getItem('loggedIn'))
        this.state = {
            authState: authState,
            inited : false,
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
                            this.setState({
                                inited : true, 
                                projects : res,
                            });                        
                    },                
                    (error) => { console.log('error')}
            );
    }

    fetchUsers = peram =>{
        console.log('fetch Users')
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
                    {this.UsersTableOnState()}
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
                            submitText="Create" 
                            submitHandler={this.fetchUsers}                
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