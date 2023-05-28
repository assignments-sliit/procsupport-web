import React, { Component } from "react";
import { Link } from "react-router-dom";
import SupplierListItem from "./SupplierListItem";

const SupplierList = () => {
  return (
    <div className="viewSupplierList">
      <div className="container">
        <div className="row">
          <div className="col-md-128 m-auto">
            <div className="d-flex align-items-center mb-3">
              <Link to="/adminHomePage" className="btn btn-white">
                <i className="fa-duotone fa-arrow-left me-2"></i> Back to
                dashboard
              </Link>
            </div>
            <br />
            <h2>All Suppliers</h2>

            <br />
            <br />
            <Link
              to="/addNewSupplier"
              className="btn btn-lg btn-primary float-right"
            >
              <i className="fa-duotone fa-plus"></i> Add New Supplier
            </Link>
            <br />
            <br />
            <SupplierListItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplierList;
