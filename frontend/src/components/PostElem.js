import React, {Component} from 'react'

class PostElem extends Component {
    render(){        
        const currDate = new Date(this.props.data.postDate)        
        return (
            <div className="PostElement">
                {/* postProject : {this.props.data.postProject} */}
                {/* postSubject : {this.props.data.postSubject} */}
                <div className='postHeader'>
                    <div className='postAuthor'>
                        postAuthor  : {this.props.data.postAuthor}
                    </div>
                    <div className='postDate'>
                        postDate    : { `${currDate.getFullYear()}.${currDate.getMonth()+1}.${currDate.getDate()} `}
                    </div>
                </div>
                <div className='postText'>
                    {this.props.data.postText}
                </div>
            </div>
        )
    }
}
export default PostElem