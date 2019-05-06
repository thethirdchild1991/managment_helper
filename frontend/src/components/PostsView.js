import React, {Component} from 'react'
import PostElem from './PostElem'

class PostsView extends Component {
    render(){
        return this.props.data.map( (PostData) => {
            return <PostElem data={PostData} />
        })        
    }
}

export default PostsView