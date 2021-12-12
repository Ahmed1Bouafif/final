import React from "react";
import axios from "axios";
class Authentification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createAccount: false,
      userName: "",
      password: "",
      signUpFullName: "",
      signUpUsername: "",
      signUpEmail: "",
      signUpPassword: "",
      signUpbirthday: "",
      signUpaddress: "",
      signUpnumber: 0,
      signUpimage: "https://i.stack.imgur.com/l60Hf.png",
      signUpeducation: "",
      signUppostcode: 0,
      signUpfacebook: "",
      signUpcar: {
        model:"",
        details:""
      },
    };
    this.toggleLogin = this.toggleLogin.bind(this);
    this.signUp = this.signUp.bind(this);
    this.login = this.login.bind(this);
  }
  toggleLogin(event) {
    event.preventDefault();
    this.setState({
      createAccount: !this.state.createAccount,
    });
  }
  signUp(event) {
    event.preventDefault();
    var BD = this.state.signUpbirthday.split("-");
    var data = {
      fullName: this.state.signUpFullName,
      userName: this.state.signUpUsername,
      email: this.state.signUpEmail,
      password: this.state.signUpPassword,
      birthday: {
        day: parseInt(BD[2], 10),
        month: parseInt(BD[1], 10),
        year: parseInt(BD[0], 10),
      },
      address: this.state.signUpaddress,
      number: this.state.signUpnumber,
      image: this.state.signUpimage,
      education: this.state.signUpeducation,
      postcode: this.state.signUppostcode,
      facebook: this.state.signUpfacebook,
      car: this.state.signUpcar,
    };
    this.props.signUp(data);
  }
  login(event) {
    event.preventDefault();
    var data = {
      userName: this.state.userName,
      password: this.state.password,
    };
    this.props.login(data);
  }
  render() {
    return (
      <div>
        {!this.state.createAccount ? (
          <div className="authContainer">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputUsername1" className="form-label">
                  Username :
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputUserName1"
                  onChange={(e) => {
                    this.setState({
                      userName: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password :
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => {
                    this.setState({
                      password: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="buttons">
                <button type="submit" className="btn btn-primary" onClick={this.login}>
                  login
                </button>
                <button type="submit" className="btn btn-primary" onClick={this.toggleLogin}>
                  Signup
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="authContainer">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputUsername1" className="form-label">
                  Fullname :
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="signUpFullName"
                  onChange={(e) => {
                    this.setState({
                      signUpFullName: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputUsername1" className="form-label">
                  Username : <p id="parag">{this.props.existOrAdded}</p>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="signUpUsername"
                  onChange={(e) => {
                    this.setState({
                      signUpUsername: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputUsername1" className="form-label">
                  {" "}
                  birthday : <p id="parag">{this.props.existOrAdded}</p>
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="signUpUsername"
                  onChange={(e) => {
                    this.setState({
                      signUpbirthday: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address :
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="signUpEmail"
                  aria-describedby="emailHelp"
                  onChange={(e) => {
                    this.setState({
                      signUpEmail: e.target.value,
                    });
                  }}
                />
                <div id="emailHelp" className="form-text"></div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password :
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="signUpPassword"
                  onChange={(e) => {
                    this.setState({
                      signUpPassword: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="buttons">
                <button type="submit" className="btn btn-primary" onClick={this.toggleLogin}>
                  Sign in
                </button>
                <button type="submit" className="btn btn-primary" onClick={this.signUp}>
                  Create account
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    );
  }
}
export default Authentification;
