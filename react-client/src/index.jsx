import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import $ from "jquery";
import Authentification from "./Authentification.jsx"
import Home from "./components/Home/Home.jsx";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: "login",
        };
        this.renderView = this.renderView.bind(this);
        this.signUp = this.signUp.bind(this);
        this.login = this.login.bind(this);
    }
    renderView() {
        if (this.state.view === "login") {
            return <Authentification signUp={this.signUp} login={this.login} />;
        } else  {
            return <Home  userData={this.state.view} />;
        }
    }
    signUp(data) {
        axios
            .post("/signUp", data)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => console.log(err));
    }

    login(data) {
        axios
            .post("/login", data)
            .then((response) => {
                
                    this.setState({
                        view: response.data,
                    });
            })
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <div>
               <div>{this.renderView()}</div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
