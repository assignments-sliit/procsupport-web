import React from "react";
import { Link } from "react-router-dom";
import POListItem from "./POListItem";

const POList = () => {
  return (
    <div className="viewPOList">
      <div className="container">
        <div className="row">
          <div className="col-md-128 m-auto">
            <br />
            <div className="d-flex align-items-center mb-3">
              <Link to="/adminHomePage" className="btn btn-white">
                <i className="fas fa-duotone fas fa-arrow-left me-2"></i>{" "}
                &nbsp;&nbsp; Back to dashboard
              </Link>
            </div>

            <h2 className="mb-0">Purchase Orders</h2>

            <br />
            <br />
            <POListItem />

            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default POList;
