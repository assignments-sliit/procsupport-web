import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import { setAlert } from "../../actions/Alert";
import { addUser, getUsers } from "../../actions/Auth";

const AddNewUser = ({ setAlert, addUser, getUsers, isAuthenticated }) => {
  const navigate = useNavigate();

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

  const [isReset, setIsReset] = useState(false);

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
      const newUser = {
        name,
        username,
        userstatus,
        usertype,
        password,
      };

      addUser(newUser).then(() => {
        getUsers();
        navigate("/viewUserList");
      });
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      username: "",
      userstatus: "",
      usertype: "",
      password: "",
      password2: "",
    });
    setIsReset(true);
  };

  const handleCancel = () => {
    navigate("/viewUserList");
  };

  return (
    <section className="addNewUser">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h3 className="mb-2 float-left">
              <h2>Add New User</h2>
            </h3>
            <br />
            <br />
            <hr></hr>
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
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={username}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="User Status"
                  name="userstatus"
                  value={userstatus}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="User Role"
                  name="usertype"
                  value={usertype}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Confirm password"
                  name="password2"
                  value={password2}
                  onChange={onChange}
                  required
                />
              </div>
              <input
                type="submit"
                className="btn btn-md btn-success float-right"
                value="Add new user"
              />
              <button
                type="button"
                className="btn btn-md btn-primary float-right mr-2 btn-no-shadow"
                onClick={handleReset}
                name="Reset"
              >
                Reset data
              </button>
              <button
                type="button"
                className="btn btn-md btn-danger float-right mr-2 btn-no-shadow"
                onClick={handleCancel}
              >
                Back to user list
              </button>
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
  getUsers: PropTypes.func.isRequired, //new
  isAuthenticated: PropTypes.bool,
};

const mapStatetoProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStatetoProps, { setAlert, addUser, getUsers })(
  AddNewUser
);
