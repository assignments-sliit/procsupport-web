import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class MaterialItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MaterialList: [],
      MasterChecked: false,
      SelectedList: [],
      prs: [],
    };
  }

  // Select/ UnSelect Table rows
  onMasterCheck(e) {
    let tempList = this.state.List;
    // Check/ UnCheck All Items
    tempList.map((requestor) => (requestor.selected = e.target.checked));

    //Update State
    this.setState({
      MasterChecked: e.target.checked,
      List: tempList,
      SelectedList: this.state.List.filter((e) => e.selected),
    });
  }

  componentDidMount() {
    axios
      .get("https://procsupport-api.onrender.com/api/material/auth/get/all", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => {
        this.setState({
          MaterialList: response.data.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="viewMatrialItemList">
        <div className="container">
          <div className="row">
            <div className="col-md-128 m-auto">
              <br />
              <h2>All Available Materials</h2>

              <br />
              <div className="table-responsive-lg">
                <table className="table" style={{ width: "100%" }}>
                  <thead style={{ textAlign: "center" }}>
                    <tr className="table-success">
                      <th scope="col">Material Name</th>
                      <th scope="col">Material Type</th>
                      <th scope="col">Unit Price</th>
                      <th scope="col">Available Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.MaterialList.map((mList) => (
                      <tr
                        key={mList.id}
                        className={mList.selected ? "selected" : ""}
                      >
                        <td>{mList.materialName}</td>
                        <td>{mList.materialType}</td>{" "}
                        <td style={{ textAlign: "center" }}>
                          {mList.unitPrice}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {mList.availableQty}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <br />
              <Link
                to="/addMaterialItem"
                className="btn btn-lg btn-primary float-right"
              >
                <i className="fa-duotone fa-plus"></i> Add New Material
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MaterialItemList;
