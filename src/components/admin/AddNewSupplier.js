import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import { setAlert } from "../../actions/Alert";
import { addSupplier, getSuppliers } from "../../actions/Suppliers";

const AddNewSupplier = ({
  setAlert,
  addSupplier,
  getSuppliers,
  isAuthenticated,
}) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    supplierName: "",
    supplierUsername: "",
    mainSupply: "",
    address: "",
    contactPersonName: "",
    contactNumber: "",
    supplierUserPassword: "",
  });

  const {
    supplierName,
    supplierUsername,
    mainSupply,
    address,
    contactPersonName,
    contactNumber,
    supplierUserPassword,
    supplierUserPassword_2,
  } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = async (e) => {
    e.preventDefault();

    if (supplierUserPassword !== supplierUserPassword_2) {
      setAlert("Passwords do not match", "danger");
    } else {
      const newSupplier = {
        supplierName,
        supplierUsername,
        mainSupply,
        address,
        contactPersonName,
        contactNumber,
        supplierUserPassword,
        supplierUserPassword_2,
      };

      addSupplier(newSupplier).then(() => {
        getSuppliers();
        navigate("/viewSupplierList");
      });
    }
  };

  return (
    <section className="addNewSupplier">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <div className="mb-2 float-left">
              <h2>Add New Supplier</h2>
            </div>
            <br />
            <br />
            <p className="lead" style={{ textAlign: "left" }}>
              * All fields are required.
            </p>
            <br />
            <form className="form" onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Vendor/Company name"
                  name="supplierName"
                  value={supplierName}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Preferred username"
                  name="supplierUsername"
                  value={supplierUsername}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Main supply"
                  name="mainSupply"
                  value={mainSupply}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Password"
                  name="supplierUserPassword"
                  value={supplierUserPassword}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Confirm password"
                  name="supplierUserPassword_2"
                  value={supplierUserPassword_2}
                  onChange={onChange}
                  required
                />
              </div>
              <hr />
              <h4>Contact Information</h4>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Name of contact person"
                  name="contactPersonName"
                  value={contactPersonName}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Vendor address"
                  name="address"
                  value={address}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Preferred contact number"
                  name="contactNumber"
                  value={contactNumber}
                  onChange={onChange}
                  required
                />
              </div>
              <input
                type="submit"
                className="btn btn-md btn-success float-right"
                value="Add new supplier"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

AddNewSupplier.propTypes = {
  setAlert: PropTypes.func.isRequired,
  addSupplier: PropTypes.func.isRequired,
  getSuppliers: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStatetoProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStatetoProps, {
  setAlert,
  addSupplier,
  getSuppliers,
})(AddNewSupplier);
