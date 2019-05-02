import React, {Component} from 'react'
import {
    Redirect,    
  } from "react-router-dom";
import {API} from '../configs/APISettings'
import AppForm from './AppForm'


class ProjectView extends Component{
    constructor(props){
        super(props)
        const { match: { params } } = this.props.data;
        // console.log('from constructor: ', params.id)
        this.state={
            status : 'empty',
            showEditForm : false,
            data : {},
            dataKeys : this.props.dataKeys,
            params : params,
            path :  this.props.path,
            proto : this.props.proto,
            errors: [],
        }
    }

    componentDidMount(){
        console.log(this.props.path.fetch)
        if( this.props.data ){
            // const { match: { params } } = this.props.data;
            console.log(this.state.params.id)
            console.log(this.state.path.fetch+`?id=${this.state.params.id}`) 
            this.fetchElem()            
        }
    }

    saveHandler = (params) => {
        console.log('saveHandler: ', params)
        if(params.status === 'Fail'){
            this.setState({ 
                errors : params.errors,            
            })
        }else{
            this.fetchElem()
        }
    }

    fetchElem =  ( params ) => {
        console.log('fetching : ', params)                
        fetch(
            this.state.path.fetch+`?id=${this.state.params.id}`                
        )
        .then(res => res.json())
        .then(                    
                (res) => { 
                    console.log('fetch res: ', res)                      
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
        console.log('Delete Handler: ', this.state.data._id, this.props.path.delete)
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
                console.log(res.status)   
                if(res.status === 'ok')                       
                this.setState({status : 'redirect'})                     
            },                
            (error) => { console.log('here error')}
        );        

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
                                    // Object.keys(this.state.data).map( key => {                    
                                    //     // const [key, value] = pair;
                                    //     return <th>{key}</th>;
                                    // }) 
                                    this.state.dataKeys.map( key => {
                                      return <th>{key}</th>  
                                    })
                                }
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                { 
                                    // Object.entries(this.state.data).map( entry => {
                                    //     return (
                                    //     <td>
                                    //         {/* <input type="text" defaultValue={entry[1]} id={entry[0]}/>   */}
                                    //         {entry[1]}                                      
                                    //     </td>
                                    //     )
                                    // }) 
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
                        <div className='ProjectEditWrapper'>
                            <input type='submit' value='Edit' onClick={this.editHandler}/>
                            <input type='submit' value='Delete' onClick={this.deleteHandler} />
                        </div>  

                    </div>
                </main>
            )
        }
        return <main></main>;
    };
};

export default ProjectView;