import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../initial/Initial";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
  }

  state = { email: "", password: "" };

  changeInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  postLogin = () => {
    const { username, password } = this.state;
    const mydata = {
      username: username,
      password: password
    };
    axios
      .post("https://api-todofancy.herokuapp.com/api/auth", mydata)
      .then(response => {
        console.log(response.data);
        console.log(this.props.is_login);
        if (response.data.hasOwnProperty("status")) {
          this.props.setLogin(true);
          this.props.setEmail(response.data.user_data.email);
          this.props.setName(response.data.user_data.username);
          this.props.setAvatar(response.data.user_data.avatar);
          this.props.history.push("/");
        }
      })
      .catch(error => {
        console.log("ini Error", error);
      });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4">
              <form onSubmit={e => e.preventDefault()}>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    required
                    type="email"
                    class="form-control"
                    name="Email"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={e => this.changeInput(e)}
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    name="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    onChange={e => this.changeInput(e)}
                  />
                </div>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button
                  type="submit"
                  class="btn btn-primary"
                  onClick={() => this.postLogin()}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "email, name, is_login",
  actions
)(withRouter(SignIn));
