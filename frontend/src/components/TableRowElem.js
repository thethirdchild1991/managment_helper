import React, {Component} from 'react'
import {
    Link,    
  } from "react-router-dom";
class TableRowElem extends Component{
    render(){               
        return (            
            <tr>
                {       
                    this.props.keys.map( key =>{
                        const helper = (key === 'id') ? this.props.data['_id'] : this.props.data[key]
                        if(this.props.withLink){
                            return(
                                <td>
                                    <Link to={`/${this.props.path}/${this.props.data['_id']}`}>                                
                                        {helper}
                                    </Link>
                                </td>
                            )                        
                        }else{
                            return(
                                <td>                                    
                                    {helper}                                    
                                </td>
                            )
                        }
                    })
                }
            </tr>
        );        
    }
}

export default TableRowElem;