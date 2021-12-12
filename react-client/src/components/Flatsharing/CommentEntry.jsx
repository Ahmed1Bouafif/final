import React from "react";
import moment from "moment";
class CommentEntry extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="card p-3">
            <div className="d-flex justify-content-between align-items-center">
                <div className="user d-flex flex-row align-items-center"> <img src={this.props.comment.userPic} width="30" className="user-img rounded-circle mr-2"/> <span><small className="font-weight-bold text-primary"> {this.props.comment.userName} :</small> <small className="font-weight-bold">{this.props.comment.msg}</small></span> </div> <small>{moment(this.props.comment.date).fromNow()}</small>
            </div>
        </div>
        )
  
    }
}
export default CommentEntry