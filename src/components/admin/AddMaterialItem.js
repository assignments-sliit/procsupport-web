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

  const [itemNames, setItemNames] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedTypeId, setSelectedTypeId] = useState("");

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const handleSelectChange = (e) => {
    const selectedOption = e.target.value;
    setSelectedItem(selectedOption);

    const selectedTypeId = itemNames.find(
      (item) => item.materialType === selectedOption
    ).materialTypeId;
    setSelectedTypeId(selectedTypeId);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    addMaterialItem({
      materialTypeId: selectedTypeId,
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
        // const idObj = {};
        // const nameObj = {};

        // // Create ID and Name objects
        // data.forEach((item) => {
        //   idObj[item.materialTypeId] = item.materialTypeId;
        //   nameObj[item.materialType] = item.materialType;
        // });

        // console.log("ID Object:", idObj);
        // console.log("Name Object:", nameObj);

        // Extract the item names

        const itemNames = data.map((item) => ({
          materialType: item.materialType,
          materialTypeId: item.materialTypeId,
        }));

        // Update the item names state
        setItemNames(itemNames);
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
                <select
                  className="form-control form-control-lg"
                  name="materialType"
                  value={selectedItem}
                  onChange={handleSelectChange}
                  required
                >
                  <option value="">Select Material Type</option>
                  {itemNames.map((itemName, index) => (
                    <option key={index} value={itemName.materialType}>
                      {itemName.materialType}
                    </option>
                  ))}
                </select>
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