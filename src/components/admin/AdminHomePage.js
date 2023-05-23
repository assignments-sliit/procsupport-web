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
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Link
                    to="/viewUserList"
                    className="btn btn-lg btn-primary"
                    style={{ marginRight: "-400px" }}
                  >
                    View list of users
                  </Link>
                  <Link
                    to="/addNewUser"
                    className="btn btn-lg btn-primary"
                    style={{ marginRight: "8px" }}
                  >
                    Add New User
                  </Link>
                </div>
                <hr />

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Link
                    to="/viewSupplierList"
                    className="btn btn-lg btn-primary"
                    style={{ marginRight: "-400px" }}
                  >
                    View list of suppliers
                  </Link>
                  <Link
                    to="/addNewSupplier"
                    className="btn btn-lg btn-primary"
                    style={{ marginRight: "8px" }}
                  >
                    Add New Suppliers
                  </Link>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminHomePage;
