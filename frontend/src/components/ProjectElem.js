import React, {Component} from 'react'

class ProjectElem extends Component{
    render(){               
        return (            
            <tr>
                {
                    Object.entries(this.props.data).map( pair => {                    
                        const [key, value] = pair;                        
                        // return (`${key} : ${value}`);
                        return <td key={key+value}>{value}</td>;
                    })
                }
            </tr>
        );        
    }
}

export default ProjectElem;