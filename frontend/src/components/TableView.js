import React, {Component} from 'react'
import TableRowElem from './TableRowElem';

class TableView extends Component{
    render(){          
        return  <table className="projectTable">
                    <thead>
                        <tr>
                        { 
                            // Object.keys(this.props.data[0]).map( key => {                    
                            //     // const [key, value] = pair;
                            //     return <th key={key}>{key}</th>;
                            // }) 
                            this.props.dataKeys.map( key => {
                                return <th key={key}>{key}</th>;
                            })                           

                        }
                        </tr>
                    </thead>
                    <tbody>
                    { 
                        this.props.data.map( elem => {
                            return <TableRowElem 
                                        data={elem} 
                                        keys={this.props.dataKeys} 
                                        linkedColumn='_id' 
                                        path={this.props.path}
                                        withLink={this.props.withLink}
                                    />
                        }) 
                    }
                    </tbody>
                </table>
    }
}

export default TableView;