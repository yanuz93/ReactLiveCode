import React from "react";
import { Link } from "react-router-dom";

class Toparticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kategori: ['romance', 'action', 'fiction', 'comedy']
    };
  }

  render() {
    return (
      <div className="col-md-3">
        {this.state.kategori.map((item, index) => {
          if (this.props.value == item) {
            return (
              <div className="card mb-3" key={index}>
                <h3>{item}</h3>
                <img src={item.Poster} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item}</h5>
                  <p className="card-text">
                    <button>
                      <Link to={item.Category}>Romance</Link>
                    </button>
                  </p>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-4">
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                        >
                          Like <i className="icon-heart-empty" />
                        </button>
                      </div>
                      <div className="col-md-4 text-center">
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                        >
                          Comment <i className="icon-comments-alt" />
                        </button>
                      </div>
                      <div className="col-md-4 text-right">
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                        >
                          Share <i className="icon-share" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default Toparticle;
