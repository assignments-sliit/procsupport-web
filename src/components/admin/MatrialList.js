import React, { Component } from "react";
import { Link } from "react-router-dom";
import MatrialListItem from "./MatrialListItem";

const MatrialList = () => {
  return (
    <div className="viewMatrialList">
      <div className="container">
        <div className="row">
          <div className="col-md-128 m-auto">
            <div className="d-flex align-items-center mb-3">
              <Link to="/adminHomePage" className="btn btn-white">
                <i className="fas fa-duotone fas fa-arrow-left me-2"></i>{" "}
                &nbsp;&nbsp; Back to dashboard
              </Link>
            </div>
            <br />
            <h2>All Material Types</h2>

            <br />
            <Link
              to="/addMaterialType"
              className="btn btn-lg btn-primary float-right"
            >
              <i className="fas fa-duotone fas fa-plus"></i> &nbsp;&nbsp; Add
              new material type
            </Link>
            <br />
            <br />
            <MatrialListItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatrialList;
