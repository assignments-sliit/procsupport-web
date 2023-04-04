import React, { Fragment, userEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Spinner from "../layout/Spinner";
import { getUserAccounts } from "../../actions/UserList";
import UserListItem from "./UserListItems";

const ViewUserList = ({ getUserAccounts, userRec: { users, loading } }) => {
  userEffect(() => {
    getUserAccounts();
  }, [getUserAccounts]);

  return (
    <section className="container">
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className="container">
            <div className="row">
              <div className="col-md-128 m-auto">
                <h3 className="mb-2 large text-primary float-left">
                  Existing user records
                </h3>
                <br />
                <br />
                <div className="table-responsive-lg">
                  <table className="table">
                    <thead>
                      <tr>
                        <th></th>
                        <th scope="col">Employee Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">User Role</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <div className="users">
                        {users.length > 0 ? (
                          users.map((user) => (
                            <UserListItem key={user.username} user={user} />
                          ))
                        ) : (
                          <h4>No users found...</h4>
                        )}
                      </div>
                    </tbody>
                  </table>
                </div>
                <br />
                <Link
                  to="/addNewUser"
                  className="btn btn-md btn-info float-right"
                >
                  <i className="fa-duotone fa-plus"></i> Create new user
                </Link>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </section>
  );
};

ViewUserList.propTypes = {
  getUserAccounts: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { getUserAccounts })(ViewUserList);
