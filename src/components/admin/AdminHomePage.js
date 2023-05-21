import React, { Component } from "react";
import { Link } from "react-router-dom";

class AdminHomePage extends Component {
  render() {
    return (
      <div className="adminHomePage">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">ProcSupport</h1>
                <p className="lead">
                  <i> Welcome Admin Home Page! </i>
                </p>
                <hr />
                <Link to="/viewUserList" className="btn btn-lg btn-primary">
                  View list of users
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminHomePage;
