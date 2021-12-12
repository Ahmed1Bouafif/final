import React from "react";
import moment from "moment";
import CommentEntry from './CommentEntry.jsx';

class EventEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          comments:false,
          msg:''
        }
        this.toggleComments=this.toggleComments.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.addComment=this.addComment.bind(this)
    }
    handleChange(event){
        console.log(event.target.value)
        this.setState({
            msg:event.target.value
        })
    }
    toggleComments() {
      this.setState({
        comments: !this.state.comments,
      });
  }
  addComment(e){
      console.log('username :',this.props.userData.userName )
      console.log('id:', e.target.id)
      var comment={
        userName:this.props.userData.userName,
        userPic:this.props.userData.image,
        date:new Date(),
        msg:this.state.msg
      }
      this.props.addComment(e.target.id,comment)
  }
    render() {
        return (
            <div className="entry">
                <div className="media g-mb-30 media-comment">
                    <div className="media-body u-shadow-v18 g-bg-secondary g-pa-30">
                        <div>
                            <div className="topFlatsharing">
                                <img
                                    className="d-flex g-width-50 g-height-50 rounded-circle g-mt-3 g-mr-15"
                                    src={this.props.item.userPic}
                                    alt="Image Description"
                                />
                                <div className="g-mb-15">
                                    <h5 className="h5 g-color-gray-dark-v1 mb-0">
                                        {this.props.item.userName}
                                    </h5>
                                    <span className="g-color-gray-dark-v4 g-font-size-12">
                                        {moment(
                                            this.props.item.createdAt
                                        ).fromNow()}
                                    </span>
                                </div>
                            </div>
                            <div className="ul">
                                <li className="li">
                                    {this.props.item.city}{" "}
                                    {this.props.item.adress}
                                </li>
                                <li className="li">
                                    From : {this.props.item.from}
                                </li>
                                <li className="li">
                                    to :
                                    {this.props.item.to}
                                </li>
                                <li className="li">
                                    date : {this.props.item.date}
                                </li>
                                <li className="li">
                                    number of places : {this.props.item.numberOfPlaces}
                                </li>
                                <li className="li">
                                    car type : {this.props.item.carType}
                                </li>
                                <li className="li">
                                    price : {this.props.item.price}
                                </li>
                                <li className="li">
                                    phone number : {this.props.item.phoneNumber}
                                </li>
                            </div>
                            <li className="list-inline-item ml-auto">
                                <a className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" onClick={this.toggleComments}>
                                    <i className="fa fa-reply g-pos-rel g-top-1 g-mr-3"></i>
                                    {this.props.item.comments.length} comments
                                </a>
                            </li>
                        </div>
                        <div className="imgDiv">
                            <img
                                className="imgInfo"
                                src={this.props.item.image}
                            />
                        </div>
                    </div>
                </div>
               {
                 this.state.comments?(        <div className="commentsContainer mt-5">
                 <div id='commentInput' className="col-lg-6">
     <div className="input-group">
       <input type="text" className="form-control" placeholder="Say something..." onChange={this.handleChange}/>
       <span className="input-group-btn">
         <button id={this.props.item._id} className="btn btn-primary" type="button" onClick={this.addComment}>Go!</button>
       </span>
     </div>
   </div>{
       this.props.item.comments.map((comment,i)=>{
           return(
        <div>
            <CommentEntry comment={comment} key={i}/>
        </div>
           )
       })
   }
           
 </div>):null  
               }
        
                
            </div>
        );
    }
}
export default EventEntry;
