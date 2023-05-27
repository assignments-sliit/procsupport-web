import React from "react";
import { Link } from "react-router-dom";
import UsersListItem from "./UsersListItem";

const UserList = () => {
  return (
    <div className="viewUserList">
      <div className="container">
        <div className="row">
          <div className="col-md-128 m-auto">
            <br />
            <div className="d-flex align-items-center mb-3">
              <Link to="/adminHomePage" className="btn btn-white">
                <i className="fa-duotone fa-arrow-left me-2"></i> Back to
                dashboard
              </Link>
            </div>

            <h2 className="mb-0">All Users</h2>

            <br />
            <Link
              to="/addNewUser"
              className="btn btn-lg btn-primary float-right"
            >
              <i
                className="fad fa-duotone fa-plus"
                style={{ color: "white" }}
              ></i>{" "}
              Add New User
            </Link>
            <br />
            <br />
            <UsersListItem />

            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
