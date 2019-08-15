import React from "react";
import news_logo from "../img/logo-ALTA@2x.png";
import {
  Link,
  withRouter
} from "react-router-dom";

function Header(props) {
  return (
    <div>
      <div className="container-fluid">
        <div className="row bg-light">
          <div className="col-md-2">
            <nav className="navbar navbar-light bg-light">
              <a className="navbar-brand" href="#">
                <img
                  src={news_logo}
                  width="80"
                  height="40"
                  className="d-inline-block align-top"
                  alt=""
                />
                Berita
              </a>
            </nav>
          </div>
          <div className="col-md-4 mt-2">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      Beranda <span className="sr-only">(current)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="col-md-2 mt-2">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <Link to="/profil" className="nav-link">
                      Profil <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link to="/masuk" className="nav-link">
                      Masuk <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/"
                      className="nav-link"
                      onClick={() => props.handleSignOut()}
                    >
                      Keluar <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Header);
