import React from "react";
import Header from "../components/HeaderNews";
import Toparticle from "../components/TopArticle";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../initial/Initial";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      value:[]
    }
  }

  handleSignOut = () => {
    this.props.setLogin(false);
    this.props.history.push("/");
  };

  componentDidMount = () => {
    const self=this;
    axios
      .get("https://api-todofancy.herokuapp.com/api/movies")
      .then(response => {
        self.setState({value:response.data.movies});
        console.log(response.data.movies);
      })
      .catch(error => {
        console.log("terdapat eror ini :", error);
      });
  };

  render() {
    return (
      <div>
        <Header
          handle={this.handleChange}
          handleSignOut={this.handleSignOut}
          is_login={this.props.is_login}
        />
        <div className="container">
          <div className="row mt-3">
            <Toparticle value={this.state.value} />
          </div>
        </div>
      </div>
    );
  }
}

const NewsW = withRouter(News);

export default connect(
  "email, name, is_login, avatar, values",
  actions
)(NewsW);
