import React, {Component} from 'react'
import {
    Link,    
  } from "react-router-dom";
class TableRowElem extends Component{
    render(){               
        return (            
            <tr>
                {
                    // Object.entries(this.props.data).map( pair => {                    
                    //     const [key, value] = pair;                        
                    //     // return (`${key} : ${value}`);
                    //     return  <td key={key+value}>                        
                    //             { key === this.props.linkedColumn ? 
                    //                 <Link to={`/${this.props.path}/${value}`}>{value}</Link> 
                    //                 : value
                    //             }
                    //             </td>;
                    // })
                    <Link to={`/${this.props.path}/${this.props.data['_id']}`}>
                        {
                            this.props.keys.map( key =>{
                                return(
                                (key === 'id') ?
                                    <td>{this.props.data['_id']}</td>
                                :
                                    <td>{this.props.data[key]}</td>)
                            })
                        }
                    </Link>
                }
            </tr>
        );        
    }
}

export default TableRowElem;