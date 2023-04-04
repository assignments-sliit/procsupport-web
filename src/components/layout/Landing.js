import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">ProcSupport</h1>
                <p className="lead">
                  {" "}
                  "All your orders now in one place!!”
                </p>
                <hr />
                <Link to="/login" className="btn btn-lg btn-info">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
