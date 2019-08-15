import React from "react";
import axios from "axios";
import Header from "./HeaderNews";
import { actions } from "../initial/Initial";
import { connect } from "unistore/react";

class List extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   data: this.props.data
    // };
  }

  render() {
    // console.log(this.props.data);
    return (
      <div>
        <div className="list-group">
          <a href="#" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h6 className="mb-1 text-primary">
                <strong>BERITA TERKINI</strong>
              </h6>
              <small className="text-primary">Lihat Semua</small>
            </div>
          </a>
          {this.props.values.map((value, index) => {
            if (index < 4) {
              return (
                <a
                  href={value.url}
                  className="list-group-item list-group-item-action"
                  key={index}
                >
                  <div className="d-flex w-100 justify-content-between">
                    <h6 className="mb-1 text-danger">#{index + 1}</h6>
                    <small className="text-muted">
                      {value.publishedAt.slice(0, 10)}
                    </small>
                  </div>
                  <p className="mb-1">
                    <strong>{value.title}</strong>
                  </p>
                </a>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default connect(
  "values",
  actions
)(List);
