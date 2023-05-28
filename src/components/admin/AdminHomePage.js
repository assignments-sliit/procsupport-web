import React, { Component } from "react";
import { Link } from "react-router-dom";
import UsersListItem from "./UsersListItem";
import SupplierListItem from "./SupplierListItem";
import MatrialListItem from "./MatrialListItem";
import MaterialItemsList from "./MaterialItemsList";

import Carousel from "react-bootstrap/Carousel";

class AdminHomePage extends Component {
  render() {
    return (
      <div className="adminHomePage">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h5 className="display-3 mb-4" style={{ color: "white" }}>
                  ProcSupport Admin
                </h5>

                <hr />

                <div className="row">
                  <div className="col-md-12" style={{ color: "black" }}>
                    <div className="card">
                      <div className="card-body">
                        <div className="card-header">
                          <h4
                            className="card-title"
                            style={{ textAlign: "left" }}
                          >
                            <b>Existing Users</b>
                          </h4>
                        </div>
                        <div
                          className="scrollable"
                          style={{ maxHeight: "300px", overflowY: "auto" }}
                        >
                          <br />
                          <UsersListItem />
                        </div>
                        <div
                          className="card-footer"
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                          }}
                        >
                          <Link
                            to="/viewUserList"
                            style={{
                              color: "blue",
                            }}
                          >
                            View all users...
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-md-6" style={{ color: "black" }}>
                    <div className="card">
                      <div className="card-body">
                        <div className="card-header">
                          <h4
                            className="card-title"
                            style={{ textAlign: "left" }}
                          >
                            <b>Material Types</b>
                          </h4>
                        </div>
                        <div
                          className="scrollable"
                          style={{ maxHeight: "300px", overflowY: "auto" }}
                        >
                          <br />
                          <MatrialListItem />
                        </div>
                        <div
                          className="card-footer"
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                          }}
                        >
                          <Link
                            to="/viewMatrialList"
                            style={{
                              color: "blue",
                            }}
                          >
                            View all material types...
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6" style={{ color: "black" }}>
                    <div className="card">
                      <div className="card-body">
                        <div className="card-header">
                          <h4
                            className="card-title"
                            style={{ textAlign: "left" }}
                          >
                            <b>Material Items</b>
                          </h4>
                        </div>
                        <div
                          className="scrollable"
                          style={{ maxHeight: "300px", overflowY: "auto" }}
                        >
                          <br />
                          <MaterialItemsList />
                        </div>
                        <div
                          className="card-footer"
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                          }}
                        >
                          <Link
                            to="/viewMatrialItemList"
                            style={{
                              color: "blue",
                            }}
                          >
                            View all material items...
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-md-12" style={{ color: "black" }}>
                    <div className="card">
                      <div className="card-body">
                        <div className="card-header">
                          <h4
                            className="card-title"
                            style={{ textAlign: "left" }}
                          >
                            <b>Suppliers</b>
                          </h4>
                        </div>
                        <div
                          className="scrollable"
                          style={{ maxHeight: "300px", overflowY: "auto" }}
                        >
                          <br />
                          <SupplierListItem />
                        </div>
                        <div
                          className="card-footer"
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                          }}
                        >
                          <Link
                            to="/viewSupplierList"
                            style={{
                              color: "blue",
                            }}
                          >
                            View all suppliers...
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminHomePage;
