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
                  <i> "All your orders now in one place!!"</i>
                </p>
                <hr />
                <Link to="/login" className="btn btn-lg btn-primary">
                  Get Started
                </Link>

                <br />
                <br />
                <br />
                <p>
                  Are you a supplier for Procsupport? &nbsp;&nbsp;&nbsp;{" "}
                  <a href="/slogin">
                    <u>Click here for login..</u>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
