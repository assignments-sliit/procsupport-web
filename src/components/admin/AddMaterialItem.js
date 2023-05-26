import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//import { setAlert } from "../../actions/Alert";
import { addMaterialItem } from "../../actions/Materials";

const AddMaterialItem = ({ setAlert, addMaterialItem }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    materialTypeId: "",
    materialName: "",
    unitPrice: "",
    availableQty: "",
  });

  const { materialTypeId, materialName, unitPrice, availableQty } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = async (e) => {
    e.preventDefault();

    addMaterialItem({
      materialTypeId,
      materialName,
      unitPrice,
      availableQty,
    });
    setAlert("Material added successfully", "success");
    navigate("/adminHomePage");
  };

  useEffect(() => {
    axios
      .get("https://procsupport-api.onrender.com/api/mt/get/all", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => {
        // Handle the received data
        console.log(response.data.data);

        const { data } = response.data;
        const idObj = {};
        const nameObj = {};

        // Create ID and Name objects
        data.forEach((item) => {
          idObj[item.materialTypeId] = item.materialTypeId;
          nameObj[item.materialType] = item.materialType;
        });

        console.log("ID Object:", idObj);
        console.log("Name Object:", nameObj);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="addMaterialItem">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <div className="mb-2 float-left">
              <h2>Add New Material</h2>
            </div>
            <br />
            <br />
            <form className="form" onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="materialtype"> Select material type</label>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Material Name"
                  name="materialName"
                  value={materialName}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Unit Price"
                  name="unitPrice"
                  value={unitPrice}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Available Quantity"
                  name="availableQty"
                  value={availableQty}
                  onChange={onChange}
                  required
                />
              </div>
              <input
                type="submit"
                className="btn btn-md btn-success float-right"
                value="Add new Material Type"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

AddMaterialItem.propTypes = {
  addMaterialType: PropTypes.func.isRequired,
};

export default connect(null, { addMaterialItem })(AddMaterialItem);
