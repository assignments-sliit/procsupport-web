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
            <h2>All Users</h2>

            <br />
            <UsersListItem />

            <br />
            <Link
              to="/addNewUser"
              className="btn btn-lg btn-primary float-right"
            >
              <i className="fa-duotone fa-plus"></i> Add New User
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
