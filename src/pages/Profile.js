import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../initial/Initial";

const Profile = props => {
  if (props.is_login === false) {
    return <Redirect to={{ pathname: "/masuk" }} />;
  } else {
    return (
      <div>
        <div class="container">
          <div class="row mt-4 justify-content-center">
            <div class="col-md-8 text-center">
              <img
                src={props.avatar}
                alt=""
              />
            </div>
          </div>
          <div class="row mt-4 justify-content-center">
            <div class="col-md-8 text-center">
              <h3>Name : {props.name}</h3>
              <h3>Email : {props.email}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default connect(
  "email, name, is_login, avatar",
  actions
)(Profile);

//
{
  /* <p className="card-text">name : {name}</p>

<p className="card-text">Email : {email}</p> */
}
