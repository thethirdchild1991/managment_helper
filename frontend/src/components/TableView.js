import React, {Component} from 'react'
import TableRowElem from './TableRowElem';

class TableView extends Component{
    render(){          
        return  <table className="projectTable">
                    <thead>
                        <tr>
                        { 
                            Object.keys(this.props.data[0]).map( key => {                    
                                // const [key, value] = pair;
                                return <th key={key}>{key}</th>;
                            }) 
                        }
                        </tr>
                    </thead>
                    <tbody>
                    { 
                        this.props.data.map( elem => {
                            return <TableRowElem data={elem} linkedColumn='_id' path={this.props.path}/>
                        }) 
                    }
                    </tbody>
                </table>
    }
}

export default TableView;