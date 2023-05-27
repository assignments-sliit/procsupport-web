import React, { Component } from "react";
import { Link } from "react-router-dom";
import SupplierListItem from "./SupplierListItem";

const SupplierList = () => {
  return (
    <div className="viewSupplierList">
      <div className="container">
        <div className="row">
          <div className="col-md-128 m-auto">
            <br />
            <h2>All Suppliers</h2>

            <br />
            <SupplierListItem />

            <br />
            <Link
              to="/addNewSupplier"
              className="btn btn-lg btn-primary float-right"
            >
              <i className="fa-duotone fa-plus"></i> Add New Supplier
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplierList;
