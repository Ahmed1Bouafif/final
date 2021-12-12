import React from "react";
import Flatsharing from "../Flatsharing/Flatsharing.jsx";
import About from "./about.jsx";
import Profil from "./profile.jsx";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "home",
    };
  }
  renderView() {
    if (this.state.view === "Flatsharing") {
      return <Flatsharing change={this.changeView.bind(this)} userData={this.props.userData} />;
    }else if (this.state.view === "about"){
        return (<About change={this.changeView.bind(this)}/>)
    }else if (this.state.view === "profile"){
      return (<Profil userData={this.props.userData} change={this.changeView.bind(this)}/>)
  }
  }
  changeView(option) {
    this.setState({
      view: option,
    });
  }
  render() {
    console.log(this.props.userData.image)
    return (
      this.state.view==='home' ? (<div>
        <img id="n" src="https://cdn.dribbble.com/users/2984251/screenshots/14460986/easy_life_dirbbble.png" alt="" />
        <a onClick={()=>this.changeView("profile")} ><img id="fix"  src={this.props.userData.image} alt="Admin" className="rounded-circle" width="150"></img></a>
      <div className='bob'>
         
            <div className='b' >
                <img id="ll" src="https://cdn.xxl.thumbs.canstockphoto.com/home-for-rent-3d-concept-isolated-on-white-clipart_csp5431971.jpg" alt="" />
                <h3>Collocation</h3>
                <p>here you can find your everything you want , best prices and also you can contact the owner of the house directly</p>
                <button onClick={()=>this.changeView("Flatsharing")} >Let's Go</button>
            </div>
            <div className='bb' >
                <img id="ll" src="https://www.leparisien.fr/resizer/1o2oEBc7nWpfaLXf2qBqLttu4K4=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/W4KZA7YQOQ7U6T4OPRLKUIIOBI.jpg" alt="" />
                <h3>Couvoiturage</h3>
                <p>here you can find people who live near from you and take place with them , it's really better than public transport</p>
                <button>Let's Go</button>
            </div>
            <div className='bbb' >
                <img id="ll" src="https://www.peveca.com/image/catalog/About%20Us.jpg" alt="" />
                <h3>About Us</h3>
                <p>here you will find out the owners of this web site and if you are a developper u can join us and let's try to make this top 1</p>
                <button onClick={()=>this.changeView("about")}>Join Us</button>
            </div>

        
      </div>
      
      </div>):this.renderView()        
      
    );
  }
}
export default Home;
