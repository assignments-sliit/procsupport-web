import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

//import { setAlert } from "../../actions/Alert";
import { CreatePO, getPRList } from "../../actions/PO";

const AddPO = ({ setAlert, CreatePO, getPRList }) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        supplierId: "",
        description: "",
        prid: "",
    });

    const { supplierId, description, prid } = formData;

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
            (item) => item.prid === selectedOption
        ).prid;
        setSelectedTypeId(selectedTypeId);
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const newPOItem = {
            supplierId,
            description,
            prid: selectedTypeId,
        };

        CreatePO(newPOItem).then(() => {
            getPRList();
            navigate("/ApprovedPurchaseList");
        });
    };

    useEffect(() => {
        axios
            .get("https://procsupport-api.onrender.com/api/pr/get/approved/all", {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            })
            .then((response) => {
                // Handle the received data
                console.log(response.data.data);

                const { data } = response.data;
                const itemNames = data.map((item) => ({
                    prid: item.prid,
                    //   materialTypeId: item.materialTypeId,
                }));

                // Update the item names state
                setItemNames(itemNames);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <section className="addPOItem">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">

                        <h2> Create Purchase Order</h2>
                        <hr />
                        <Link to="/approvedPurchaseList" className="btn btn-md btn-success float-right">
                            <i className="fa-duotone fa-plus"></i> Approved Purchase List
                        </Link>
                        <br />
                        <br />
                        <form className="form" onSubmit={onSubmit}>
                            <div className="form-group">
                                <select
                                    className="form-control form-control-lg"
                                    name="prid"
                                    value={selectedItem}
                                    onChange={handleSelectChange}
                                    required
                                >
                                    <option value="">PR ID</option>
                                    {itemNames.map((itemName, index) => (
                                        <option key={index} value={itemName.prid}>
                                            {itemName.prid}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group">
                                <select
                                    id="supplier"
                                    className="form-control"
                                    value={supplierId}
                                    onChange={onChange}
                                >
                                    <option selected>Suplier</option>
                                    <option>Holcim</option>
                                    <option>DSI</option>
                                    <option>Kinetic </option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Description"
                                    name="description"
                                    value={description}
                                    onChange={onChange}
                                    required
                                />
                            </div>
                            {/* <div className="form-group">
                <input
                  type="text"
                  placeholder="Available Quantity"
                  name="availableQty"
                  value={availableQty}
                  onChange={onChange}
                  required
                />
              </div> */}
                            <input
                                type="submit"
                                className="btn btn-md btn-success float-right"
                                value="Create Purchse Order"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

AddPO.propTypes = {
    CreatePO: PropTypes.func.isRequired,
    getPRList: PropTypes.func.isRequired,
};

export default connect(null, { CreatePO, getPRList })(
    AddPO
);