import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addMaterialType, getMaterialTypes } from "../../actions/Materials";

const AddMaterialType = ({ addMaterialType, getMaterialTypes }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    materialType: "",
    uom: "",
  });

  const [isReset, setIsReset] = useState(false);

  const { materialType, uom } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = async (e) => {
    e.preventDefault();

    const newMaterialType = {
      materialType,
      uom,
    };

    addMaterialType(newMaterialType).then(() => {
      getMaterialTypes();
      navigate("/viewMatrialList");
    });
  };

  const handleReset = () => {
    setFormData({
      materialType: "",
      uom: "",
    });
    setIsReset(true);
  };

  const handleCancel = () => {
    navigate("/viewMatrialList");
  };

  return (
    <section className="addMaterialType">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <div className="mb-2 float-left">
              <h2>Add New Material Types</h2>
            </div>
            <br />
            <br />
            <form className="form" onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Material Type - Sand, Tiles, Chairs"
                  name="materialType"
                  value={materialType}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Unit of Measurement - kg, ponunds"
                  name="uom"
                  value={uom}
                  onChange={onChange}
                  required
                />
              </div>
              <input
                type="submit"
                className="btn btn-md btn-success float-right"
                value="Add new material type"
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
                Back to material type list
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

AddMaterialType.propTypes = {
  addMaterialType: PropTypes.func.isRequired,
  getMaterialTypes: PropTypes.func.isRequired,
};

export default connect(null, { addMaterialType, getMaterialTypes })(
  AddMaterialType
);
