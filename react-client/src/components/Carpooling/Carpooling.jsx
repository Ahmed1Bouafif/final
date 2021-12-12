import React from "react";
import AddEvent from "./AddEvent.jsx";
import PostList from "./PostList.jsx";
import axios from "axios";
import Search from "./Search.jsx";

class Carpooling extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            addPanel: false,
            searchPanel:false
        };
        this.saveEvent = this.saveEvent.bind(this);
        this.toggleAddPanel = this.toggleAddPanel.bind(this);
        this.toggleSearchPanel=this.toggleSearchPanel.bind(this)
        this.search=this.search.bind(this)
        this.fetchData=this.fetchData.bind(this)
        this.addComment=this.addComment.bind(this)
    }
    fetchData() {
        console.log(this.state.data)
        axios
            .get("/carpoolingData")
            .then((result) => {
                this.setState({
                    data: result.data,
                });
            })
            .catch((err) => console.log(err));
    }
    toggleAddPanel() {
        this.setState({
            addPanel: !this.state.addPanel,
        });
    }
    toggleSearchPanel() {
      this.setState({
          searchPanel: !this.state.searchPanel,
      });
  }
    componentDidMount() {
        this.fetchData();
    }
    saveEvent(option) {
        axios
            .put("/newCarpoolingEvent", option)
            .then(() => this.fetchData())
            .catch((err) => console.log(err));
    }
    addComment(id,comment){
        axios.patch(`/addCarpoolingComment/${id}`,{comment})
        .then((response)=>this.fetchData())
        .catch((err)=>console.log(err))
    }
    search(filter){
        axios.post("/searchCarpooling",filter)
        .then((response)=>this.setState({
            data:response.data
        }))
        .catch((err)=>console.log(err))
    }
    render() {
        return (
            <div id="flatsharingComponent" >
                <div className="wrapper">
                    <div className="sidebar">
                        <ul>
                        <li>
                            <a onClick={()=>{this.props.change("home")}}>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a onClick={this.toggleAddPanel}>
                                    Post
                                </a>
                                </li>
                                { this.state.addPanel? (
                      <div>
                      <AddEvent userData={this.props.userData} saveEvent={this.saveEvent}/>
                 </div>
                   ):null}
                        
                            <li>
                                <a onClick={ this.toggleSearchPanel} >
                                Search
                                </a>
                                </li>
                                { this.state.searchPanel? (
                      <div>
                      <Search search={this.search} fetchData={this.fetchData}/>
                 </div>
                   ):null}
                            
                        </ul>
                    </div>
                </div>

                <div >
                    <PostList userData={this.props.userData} data={this.state.data} addComment={this.addComment} />
                </div>
            </div>
        );
    }
}
export default Carpooling;
