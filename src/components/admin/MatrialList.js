import React, { Component } from "react";
import { Link } from "react-router-dom";
import MatrialListItem from "./MatrialListItem";

const MatrialList = () => {
  return (
    <div className="viewMatrialList">
      <div className="container">
        <div className="row">
          <div className="col-md-128 m-auto">
            <br />
            <h2>All Material Types</h2>

            <br />
            <MatrialListItem />
            <br />
            <Link
              to="/addMaterialType"
              className="btn btn-lg btn-primary float-right"
            >
              <i className="fa-duotone fa-plus"></i> Add New Material Type
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatrialList;
