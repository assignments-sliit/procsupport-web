import React, { Component } from "react";
import axios from "axios";

class MaterialItemsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MaterialList: [],
      MasterChecked: false,
      SelectedList: [],
      prs: [],
    };
  }

  componentDidMount() {
    this.fetchMaterialItems();
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.updatedfetchMaterialItems !==
      this.props.updatedfetchMaterialItems
    ) {
      this.fetchMaterialItems();
    }
  }

  fetchMaterialItems = () => {
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
  };

  render() {
    return (
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
              <tr key={mList.id} className={mList.selected ? "selected" : ""}>
                <td>{mList.materialName}</td>
                <td>{mList.materialType}</td>{" "}
                <td style={{ textAlign: "center" }}>{mList.unitPrice}</td>
                <td style={{ textAlign: "center" }}>{mList.availableQty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MaterialItemsList;
