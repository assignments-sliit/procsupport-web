import React from "react";
import { Link } from "react-router-dom";
import MaterialItemsList from "./MaterialItemsList";

const MaterialItemList = () => {
  return (
    <div className="viewMatrialItemList">
      <div className="container">
        <div className="row">
          <div className="col-md-128 m-auto">
            <br />
            <h2>All Available Materials</h2>

            <br />
            <MaterialItemsList />
            <br />
            <Link
              to="/addMaterialItem"
              className="btn btn-lg btn-primary float-right"
            >
              <i className="fa-duotone fa-plus"></i> Add New Material
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialItemList;
