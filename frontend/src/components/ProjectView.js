import React, {Component} from 'react'
import {
    Redirect,    
  } from "react-router-dom";
import {API} from '../configs/APISettings'
import AppForm from './AppForm'
import {ROLESobj} from '../configs/userRolesConfig'


class ProjectView extends Component{
    constructor(props){
        super(props)
        const { match: { params } } = this.props.data;        

        const authState = localStorage.getItem('loggedIn')
        this.state={
            status : 'empty',
            authState: authState ? authState : false,            
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
        if( this.props.data ){
            this.fetchElem()            
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
                            this.props.showDetails ?
                                <div className='elementDetails'>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus eleifend orci, id posuere leo imperdiet quis. Etiam eget est vitae leo consequat dapibus eu in eros. Sed in tempus ligula, vitae tincidunt quam. Mauris ullamcorper ante sodales, mattis orci pellentesque, feugiat ligula. Donec vitae pharetra libero. Praesent at ligula vehicula, fermentum metus non, egestas neque. In laoreet ipsum tortor, aliquam aliquet ligula volutpat vitae. Nullam in libero mauris. Aenean tristique tincidunt massa. Aenean id egestas ipsum. Praesent sodales malesuada felis, a facilisis enim tincidunt ac. Nam non urna vehicula, ultrices neque at, finibus diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus pharetra nulla urna, id finibus velit ultricies at. Curabitur egestas arcu neque, ac mollis ex iaculis at. Donec sit amet sapien porttitor, fringilla eros in, pellentesque nisi. Morbi aliquet ornare lectus vitae consequat. Phasellus in ligula elementum, placerat nulla eget, ultrices orci. Proin laoreet condimentum elit sed viverra. Quisque varius, enim et facilisis sodales, nunc mi euismod justo, mollis dapibus metus ligula ac neque.
        Ut aliquet metus leo, ac condimentum risus fermentum in. Aenean imperdiet nisl non sem dignissim, et volutpat nulla fermentum. Donec tincidunt suscipit molestie. Etiam et tortor egestas, imperdiet nunc a, lobortis quam. Etiam non tortor id augue placerat pellentesque eu quis mauris. Fusce mollis laoreet commodo. Donec sagittis tincidunt aliquet. Nunc eu placerat lectus. Aliquam euismod pharetra libero eget lobortis. Praesent gravida pretium mauris, et ornare diam egestas ac. Fusce ligula tellus, vulputate vel porttitor eget, pharetra quis justo. Nullam sed mollis quam. Proin bibendum tristique velit quis vulputate. In faucibus tortor in auctor molestie. Nam diam quam, accumsan sed nibh ut, egestas vulputate ligula. Vivamus quis justo sed nisl bibendum tincidunt vitae at eros.
        Maecenas nibh enim, dapibus quis egestas vitae, vestibulum a est. Duis dolor magna, tempus sit amet tortor a, blandit egestas sem. Etiam mauris mi, tincidunt sit amet justo a, semper tincidunt velit. Phasellus quis mi et magna cursus aliquet sit amet nec neque. Proin rhoncus ipsum in sem sagittis, sed mollis nisi molestie. Donec euismod pellentesque leo sit amet pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi a mi ac tortor facilisis ultrices vitae vitae augue. Ut a eleifend ipsum. Praesent rhoncus volutpat justo, sit amet scelerisque mauris consectetur vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus varius at dui aliquam rhoncus. Aliquam est tellus, porttitor sed augue quis, laoreet rhoncus nibh. Nulla molestie, urna scelerisque mattis sodales, arcu dui convallis orci, eu sodales turpis metus quis orci. In eget mi lacinia, vestibulum tellus nec, commodo metus. Integer non egestas leo.
        Nam leo mauris, congue et interdum vitae, dignissim eu nunc. Suspendisse dapibus porta erat ac ornare. Etiam in efficitur odio. In aliquet enim non orci dapibus, a imperdiet dolor vestibulum. Praesent mattis molestie malesuada. Nulla aliquet leo elementum, tempus mi ac, volutpat mi. Nullam id efficitur diam. Vestibulum vestibulum accumsan ligula, rhoncus consectetur libero. Proin accumsan tortor eget tempor gravida. Nulla facilisi. Etiam eu facilisis magna. Vivamus justo massa, varius non enim in, lacinia sollicitudin mi. Maecenas vestibulum venenatis tortor, sit amet ullamcorper metus pharetra at. Nam vitae nibh ut dolor finibus faucibus. Praesent sed nunc eu est tempor tempus sed et lectus. 
                                    </p>                                
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