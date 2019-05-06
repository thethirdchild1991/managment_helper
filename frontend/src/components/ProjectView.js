import React, {Component} from 'react'
import {
    Redirect,    
  } from "react-router-dom";
import {API} from '../configs/APISettings'
import AppForm from './AppForm'
import {ROLESobj} from '../configs/userRolesConfig'
import PostsView from './PostsView'


class ProjectView extends Component{
    constructor(props){
        super(props)
        const { match: { params } } = this.props.data;        

        const authState = localStorage.getItem('loggedIn')
        const username = localStorage.getItem('username')
        this.state={
            status : 'empty',
            authState: authState ? authState : false,  
            username : username ? username : '',         
            showEditForm : false,
            data : {},
            dataKeys : this.props.dataKeys,
            params : params,
            path :  this.props.path,
            proto : this.props.proto,
            errors: [],
            postsData: [],
        }
    }

    componentDidMount(){        
        if( this.props.data ){
            this.fetchElem()   
            this.fetchPostData()         
        }
    }

    saveHandler = (params) => {        
        if(params.status === 'Fail'){
            this.setState({ 
                errors : params.errors,            
            })
        }else{
            this.fetchElem()
        }
    }

    fetchElem =  ( params ) => {        
        fetch(
            this.state.path.fetch+`?id=${this.state.params.id}`                
        )
        .then(res => res.json())
        .then(                    
                (res) => {                     
                        this.setState({
                                status:'inited',
                                data : res,
                                showEditForm : false,
                            })                     
                },                
                (error) => { console.log('here error')}
        );
    }

    editHandler = event => {
        let tmpProto = this.state.proto;
        tmpProto = tmpProto.map(element => {
            element.defaultValue = this.state.data[element.id]            
            return element;
        });        
        this.setState({ 
            showEditForm : true ,            
        })        
    }
    

    deleteHandler = event =>{        
        fetch(
            this.props.path.delete,
            {
                method: "DELETE",
                headers: { 'Accept': 'application/json','Content-Type': 'application/json',},
                body:  JSON.stringify({id : this.state.data._id})
            }
        )
        .then( res => res.json() )
        .then(                    
            (res) => {                
                if(res.status === 'ok')                       
                    this.setState({status : 'redirect'})                     
            },                
            (error) => { console.log('here error')}
        );        

    }

    fetchPostData = () => {
        fetch(
            this.props.path.fetchPostsData+`?id=${this.state.params.id}` 
        )
        .then( res => res.json() )
        .then(
            (res) => {
                this.setState({
                    postsData : res
                })            },
            (error) => { console.log('here Posts fetch error')}
        )
    }

    postsOnState = () => {        
        return <PostsView data={this.state.postsData} />
    }


    render(){        
        if( this.state.status === 'redirect' ){
            return <Redirect to='/index'/>                        
        }
        
        if( this.state.status === 'inited'){
            return(
                <main id="main">            
                    <div className="main">
                        <table className="projectTable">
                            <thead>
                                <tr>
                                { 
                                    this.state.dataKeys.map( key => {
                                      return <th>{key}</th>  
                                    })
                                }
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                { 
                                    this.state.dataKeys.map( key => {
                                        if(key == 'id')
                                            return <td>{this.state.data['_id']}</td>
                                        else
                                            return <td>{this.state.data[key]}</td>
                                    })
                                }
                                </tr>
                            </tbody>
                        </table>
                        {
                            this.props.showPosts ?
                                <div className='Posts'>
                                    {this.postsOnState()}                 
                                </div>
                            : 
                                <></>
                        }
                        {
                            this.props.showPosts === true && ROLESobj[this.state.authState].creatPosts === true ?
                            <div className='formWrapper'>
                                <AppForm 
                                    id='Post'
                                    mainClassName='Post'
                                    url={this.state.path.savePost}
                                    httpMethod='POST'
                                    proto={[
                                        {
                                            LabelText:'',                                            
                                            id: 'postProject',                                            
                                            defaultValue: this.state.params.id,
                                            required: true,
                                            hidden:true
                                        },
                                        {
                                            LabelText:'',                                            
                                            id: 'postAuthor',
                                            defaultValue: this.state.username,
                                            required: true,
                                            hidden:true
                                        },
                                        {
                                            LabelText:'',                                            
                                            id: 'postText',
                                            type: 'textarea',                                            
                                            required: true
                                        },                                   
                                    ]}
                                    submitText='Post'
                                    extSubmitHandler={this.fetchPostData}
                                />
                            </div>
                            :
                                <></>
                        }
                        {this.state.showEditForm === true ? 
                            <div className="formWrapper">
                                <AppForm
                                    id='EditUser'                         
                                    mainClassName='EditUser'
                                    additionalClassName=''
                                    url={this.state.path.edit}
                                    httpMethod='PUT'
                                    proto={this.state.proto}
                                    submitText="Save" 
                                    extSubmitHandler={this.saveHandler}                
                                    errorMessage={this.state.errors}
                                    // successMessage={}
                                    extID={  this.state.data._id }
                                />
                            </div>
                            :
                             <></>}  
                        {                             
                            
                            ROLESobj[this.state.authState][this.props.editPermition] ?
                                <div className='ProjectEditWrapper'>
                                    <input type='submit' value='Edit' onClick={this.editHandler}/>
                                    <input type='submit' value='Delete' onClick={this.deleteHandler} />
                                </div>  
                            :
                                <></>
                        }

                    </div>
                </main>
            )
        }
        return <main></main>;
    };
};

export default ProjectView;