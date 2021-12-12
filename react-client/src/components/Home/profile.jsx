import Axios from "axios";
import React from "react";


export default class Profil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        fullName: this.props.userData.fullName ,
        userName: this.props.userData.userName ,
      email: this.props.userData.email ,
      newP: "",
      rpeatP: "",
      wrong: false,
      education: this.props.userData.education ,
      facebook: this.props.userData.facebook ,
      postcode: this.props.userData.postcode ,
      image:this.props.userData.image ,
      address: this.props.userData.address ,
      number: this.props.userData.number ,
      car:{
        model: this.props.userData.car.model ,
        details: this.props.userData.car.details ,
      }
     
    };
    this.save = this.save.bind(this);
    this.handelChange = this.handelChange.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
  }

  save() {
    if (this.state.rpeatP !== this.state.newP) {
      this.setState({ wrong: true });
    } else {
      var user = {
        fullName: this.state.fullName,
        address: this.state.address,
        number: Number(this.state.number),
        image: this.state.image,
        education: this.state.education,
        postcode: this.state.post,
        facebook: this.state.facebook,
        car: { model: this.state.model, details: this.state.details },
      };
      Axios.put(`/profil/${this.props.user._id}`, user)
        .then(({ data }) => {})
        .catch((err) => {
          console.error(err);
        });
    }
  }

  handelChange(e) {
    var obj = this.state;
    obj[e.target.name] = e.target.value;
    this.setState(obj);
  }

  uploadImage(e) {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "easy-life");

    Axios.post("https://api.cloudinary.com/v1_1/REZmed/image/upload", data)
      .then(({ data }) => {
        var obj = this.state;
        obj[e.target.name] = data.secure_url;
        console.log(obj);
        this.setState(obj);
      })
      .catch((err) => console.error(err));
  }
  render() {
    return (
        <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src={this.state.image}
              />
              <span className="font-weight-bold">{this.state.userName}</span>
              <span className="text-black-50">{this.state.email}</span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
                {this.state.wrong ? (
                  <h5 className="text-right red">check your password</h5>
                ) : null}
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">fullName</label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="first name"
                    name="Firstname"
                    value={this.state.fullName}
                    onChange={this.handelChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">fullName</label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    name="Lastname"
                    value={this.state.fullName}
                    placeholder="surname"
                    onChange={this.handelChange}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Mobile Number</label>
                  <input
                    required
                    type="number"
                    className="form-control"
                    placeholder="enter phone number"
                    name="number"
                    value={this.state.number}
                    onChange={this.handelChange}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Address</label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="enter address"
                    name="address"
                    value={this.state.address}
                    onChange={this.handelChange}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Postcode</label>
                  <input
                    required
                    type="number"
                    className="form-control"
                    placeholder="Post CODE"
                    name="post"
                    value={this.state.postcode}
                    onChange={this.handelChange}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">FaceBook account</label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="FaceBook account"
                    name="facebook"
                    value={this.state.facebook}
                    onChange={this.handelChange}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Profile PIC</label>
                  <input
                    className="form-control"
                    name="image"
                    required
                    type="file"
                    name="image"
                    placeholder="Upload an image"
                    onChange={this.uploadImage}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Education</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="education"
                    name="education"
                    value={this.state.education}
                    onChange={this.handelChange}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <label className="labels">New Password</label>
                  <label className="labels">{this.state.wrong}</label>
                  <input
                    type="password"
                    className={
                      this.state.rpeatP === this.state.newP
                        ? "form-control passvalid"
                        : "form-control passinvalid"
                    }
                    placeholder="New Password"
                    name="newP"
                    value={this.state.newP}
                    onChange={this.handelChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">Confirm Password</label>
                  <label className="labels">{this.state.wrong}</label>
                  <input
                    type="password"
                    className={
                      this.state.rpeatP === this.state.newP
                        ? "form-control passvalid"
                        : "form-control passinvalid"
                    }
                    name="rpeatP"
                    value={this.state.rpeatP}
                    placeholder="Confirm Password"
                    onChange={this.handelChange}
                  />
                </div>
              </div>
              <div className="mt-5 text-center">
                <button
                  className="btn btn-primary profile-button"
                  onClick={this.save}
                  type="button"
                >
                  Save Profile
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center experience">
                <span>if you have a car</span>
                {/* <span className="border px-3 p-1 add-experience">
                  <i className="fa fa-plus" />
                  &nbsp;Add car info
                </span> */}
              </div>
              <br />
              <div className="col-md-12">
                <label className="labels">Model of Car</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Model of car"
                  name="model"
                  value={this.state.car.model}
                  onChange={this.handelChange}
                />
              </div>{" "}
              <br />
              <div className="col-md-12">
                <label className="labels">Additional Details</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="additional details"
                  name="details"
                  value={this.state.car.details}
                  onChange={this.handelChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}