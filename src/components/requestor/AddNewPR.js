import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import { setAlert } from "../../actions/Alert";
import { addPR } from "../../actions/PR";

const AddNewPR = ({ setAlert, addPR, isAuthenticated }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    prName: "",
    description: "",
    amount: "",
  });

  const { prName, description, amount } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = async (e) => {
    e.preventDefault();
    addPR({
      prName,
      description,
      amount,
    });
    navigate("/viewPRList");
  };

  return (
    <section className="addNewPR">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <div className="mb-2 float-left">
              <h2>Add New PR</h2>
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
                  placeholder="PR Name"
                  name="prName"
                  value={prName}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Description"
                  name="description"
                  value={description}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
              <select
                  id="supplier"
                  className="form-control"

                >
                  <option selected>Material</option>
                  <option>Cement</option>
                  <option>Sand</option>
                  <option>Tiles </option>
                </select>
              </div>
              <div className="form-group">
                <input
                  type="number"
                  className="form-control form-control-lg"
                  placeholder="Amount"
                  name="amount"
                  value={amount}
                  onChange={onChange}
                />
              </div>
              <input
                type="submit"
                className="btn btn-md btn-success float-right"
                value="Add new PR"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

AddNewPR.propTypes = {
  setAlert: PropTypes.func.isRequired,
  addSupplier: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStatetoProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStatetoProps, { setAlert, addPR })(AddNewPR);
