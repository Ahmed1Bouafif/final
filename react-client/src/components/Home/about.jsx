import React from "react";
import axios from "axios";

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data:[]
    };
  }


  render(){
      return(
          <div>
        <div id='rr' className="container">
        <div id='tt' className="row">
        <div id='ii' className="col-lg-0"></div>
        <button id="bb" onClick={()=>this.props.change("home")}>Home</button>
            <div  id='gg' className="col-lg-3 col-xlg-3 col-md-3">
                <div id="mm" className="card">
                    <div  className="card-body">
                        <center className="m-t-30"> <img src="https://ca.slack-edge.com/T02E5DNSTR6-U02E5F792U8-da3cca97550c-512" className="img-circle" width="150"/>
                            <h4 className="card-title m-t-10">Ahmed Bouafif</h4>
                            <h6 className="card-subtitle">Junior Developer Studying In RBK</h6>
                        </center>
                    </div>
                    <div>
                    <hr/> </div>
                    <div className="card-body"> <small className="text-muted">Email address </small>
                        <h6>ahmedbouafif500@gmail.com</h6> <small className="text-muted p-t-30 db">Phone</small>
                        <h6>+216 56 031 900</h6> <small className="text-muted p-t-30 db">Address</small>
                        <h6>Kelibia</h6>
                        <div className="map-box">
                            <iframe src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJeZh74YwzHRMR83_2Le7iHDU&key=AIzaSyDdSkmlziIC9ABRkYo1zY1VK2gnp7uI8Ak" width="100%" height="150" frameBorder="0"  allowFullScreen=""></iframe>
                        </div> <small className="text-muted p-t-30 db">Social Profile</small>
                        <br/>
                        <button className="btn btn-circle btn-secondary"><i className="fa fa-facebook"></i></button>
                        <button className="btn btn-circle btn-secondary"><i className="fa fa-twitter"></i></button>
                        <button className="btn btn-circle btn-secondary"><i className="fa fa-youtube"></i></button>
                        
                        
                    </div>
                </div>
            </div>
            
            <div className="col-lg-3 col-xlg-3 col-md-3">
                <div className="card">
                    <div className="card-body">
                        <center className="m-t-30"> <img src="https://ca.slack-edge.com/T02E5DNSTR6-U02E5F75SBA-07578c1aaff8-512" className="img-circle" width="150"/>
                            <h4 className="card-title m-t-10">Sadem Aydi</h4>
                            <h6 className="card-subtitle">Junior Developer Studying In RBK</h6>
                        </center>
                    </div>
                    <div>
                    <hr/> </div>
                    <div className="card-body"> <small className="text-muted">Email address </small>
                        <h6>sdouma91@gmail.com</h6> <small className="text-muted p-t-30 db">Phone</small>
                        <h6>+216 56 120 796</h6> <small className="text-muted p-t-30 db">Address</small>
                        <h6>Sfax</h6>
                        <div className="map-box">
                            <iframe src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJlcaGFNosABMRb85QLKbg3yI&key=AIzaSyDdSkmlziIC9ABRkYo1zY1VK2gnp7uI8Ak" width="100%" height="150" frameBorder="0"  allowFullScreen=""></iframe>
                        </div> <small className="text-muted p-t-30 db">Social Profile</small>
                        <br/>
                        <button className="btn btn-circle btn-secondary"><i className="fa fa-facebook"></i></button>
                        <button className="btn btn-circle btn-secondary"><i className="fa fa-twitter"></i></button>
                        <button className="btn btn-circle btn-secondary"><i className="fa fa-youtube"></i></button>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-xlg-3 col-md-3">
                <div className="card">
                    <div className="card-body">
                        <center className="m-t-30"> <img src="https://ca.slack-edge.com/T02E5DNSTR6-U02K996LJQ1-554beb755deb-512" className="img-circle" width="150"/>
                            <h4 className="card-title m-t-10">Mohammed Rezgui</h4>
                            <h6 className="card-subtitle">Junior Developer Studying In RBK</h6>
                        </center>
                    </div>
                    <div>
                    <hr/> </div>
                    <div className="card-body"> <small className="text-muted">Email address </small>
                        <h6>mohamedrezguimedrezz@gmail.com</h6> <small className="text-muted p-t-30 db">Phone</small>
                        <h6>+216 21 856 598</h6> <small className="text-muted p-t-30 db">Address</small>
                        <h6>Tunis</h6>
                        <div className="map-box">
                            <iframe src="https://www.google.com/maps/embed/v1/place?q=Tunis%2C%20Tunisia&key=AIzaSyDdSkmlziIC9ABRkYo1zY1VK2gnp7uI8Ak" width="100%" height="150" frameBorder="0"  allowFullScreen=""></iframe>
                        </div> <small className="text-muted p-t-30 db">Social Profile</small>
                        <br/>
                        <button className="btn btn-circle btn-secondary"><i className="fa fa-facebook"></i></button>
                        <button className="btn btn-circle btn-secondary"><i className="fa fa-twitter"></i></button>
                        <button className="btn btn-circle btn-secondary"><i className="fa fa-youtube"></i></button>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-xlg-3 col-md-3">
                <div className="card">
                    <div className="card-body">
                        <center className="m-t-30"> <img src="https://ca.slack-edge.com/T02E5DNSTR6-U02E5F7DYSU-64b4c87a0552-512" className="img-circle" width="150"/>
                            <h4 className="card-title m-t-10">Med Ali Baklouti</h4>
                            <h6 className="card-subtitle">Junior Developer Studying In RBK</h6>
                        </center>
                    </div>
                    <div>
                    <hr/> </div>
                    <div className="card-body"> <small className="text-muted">Email address </small>
                        <h6>bakloutimedali118@gmail.com</h6> <small className="text-muted p-t-30 db">Phone</small>
                        <h6>+216 58 769 219</h6> <small className="text-muted p-t-30 db">Address</small>
                        <h6>Tunis</h6>
                        <div className="map-box">
                            <iframe src="https://www.google.com/maps/embed/v1/place?q=Tunis%2C%20Tunisia&key=AIzaSyDdSkmlziIC9ABRkYo1zY1VK2gnp7uI8Ak" width="100%" height="150" frameBorder="0"  allowFullScreen=""></iframe>
                        </div> <small className="text-muted p-t-30 db">Social Profile</small>
                        <br/>
                        <button className="btn btn-circle btn-secondary"><i className="fa fa-facebook"></i></button>
                        <button className="btn btn-circle btn-secondary"><i className="fa fa-twitter"></i></button>
                        <button className="btn btn-circle btn-secondary"><i className="fa fa-youtube"></i></button>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
</div>
      )
  }


}