import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import PropTypes from "prop-types";

import { setAlert } from "../../actions/Alert";
import { addUser } from "../../actions/Auth";

const AddNewUser = ({ setAlert, addUser, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    userstatus: "",
    usertype: "",
    password: "",
    password2: "",
  });

  const { name, username, userstatus, usertype, password, password2 } =
    formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      addUser({
        name,
        username,
        userstatus,
        usertype,
        password,
      });
    }

    if (isAuthenticated) {
      return <Navigate to="/" />;
    }
  };

  return (
    <section className="addNewUser">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h3 className="mb-2 float-left">
              <b>Add New User</b>
            </h3>
            <br />
            <br />
            <p className="lead">* All fields are required.</p>
            <br />
            <form className="form" onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Name of employee"
                  name="name"
                  value={name}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={username}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="User Status"
                  name="userstatus"
                  value={userstatus}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="User Role"
                  name="usertype"
                  value={usertype}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Confirm password"
                  name="password2"
                  value={password2}
                  onChange={onChange}
                />
              </div>
              <input
                type="submit"
                className="btn btn-md btn-success float-right"
                value="Add new user"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

AddNewUser.propTypes = {
  setAlert: PropTypes.func.isRequired,
  addUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStatetoProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStatetoProps, { setAlert, addUser })(AddNewUser);
