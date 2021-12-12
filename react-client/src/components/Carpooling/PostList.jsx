import React from "react";
import EventEntry from "./EventEntry.jsx"
class PostList extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(

<div className="row">
{ this.props.data.map((item,index) => <EventEntry item={item} key={index} addComment={this.props.addComment} userData={this.props.userData}/>)}
</div>

        )
    }
}
export default PostList