import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { supplierLogin } from "../../actions/supplierAuth";

const SupplierLogin = ({ supplierLogin, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    supplierUsername: "",
    supplierUserPassword: "",
  });

  const { supplierUsername, supplierUserPassword } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    supplierLogin(supplierUsername, supplierUserPassword);
  };

  if (isAuthenticated) {
    return <Navigate to="/adminHomePage" />;
  }

  return (
    <section className="container">
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user" /> Sign Into Supplier Account
      </p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Enter supplier username"
            name="supplierUsername"
            value={supplierUsername}
            onChange={onChange}
            style={{ width: "680px" }}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control form-control-sm"
            placeholder="Enter supplier password"
            name="supplierUserPassword"
            value={supplierUserPassword}
            onChange={onChange}
            style={{ width: "680px" }}
            minLength="3"
          />
        </div>
        <input
          type="submit"
          className="btn btn-success btn-block mt-4"
          style={{ width: "680px" }}
          value="Login"
        />
      </form>
    </section>
  );
};

SupplierLogin.propTypes = {
  supplierLogin: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { supplierLogin })(SupplierLogin);
