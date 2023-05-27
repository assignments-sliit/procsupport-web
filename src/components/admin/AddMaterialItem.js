import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//import { setAlert } from "../../actions/Alert";
import { addMaterialItem, getMaterialItems } from "../../actions/Materials";

const AddMaterialItem = ({ setAlert, addMaterialItem, getMaterialItems }) => {
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
  const [isReset, setIsReset] = useState(false);

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

    const newMaterialItem = {
      materialTypeId: selectedTypeId,
      materialName,
      unitPrice,
      availableQty,
    };

    addMaterialItem(newMaterialItem).then(() => {
      getMaterialItems();
      navigate("/viewMatrialItemList");
    });
  };

  const handleReset = () => {
    setFormData({
      materialTypeId: "",
      materialName: "",
      unitPrice: "",
      availableQty: "",
    });
    setIsReset(true);
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

    if (isReset) {
      setIsReset(false);
    }
  }, [isReset]);

  const handleCancel = () => {
    navigate("/viewMatrialItemList");
  };

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
                value="Add new material item"
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
                Back to material items list
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

AddMaterialItem.propTypes = {
  addMaterialType: PropTypes.func.isRequired,
  getMaterialItems: PropTypes.func.isRequired,
};

export default connect(null, { addMaterialItem, getMaterialItems })(
  AddMaterialItem
);
