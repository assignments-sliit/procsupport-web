import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class SupplierListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      List: [],
      MasterChecked: false,
      SelectedList: [],
      prs: [],
    };
  }

  componentDidMount() {
    this.fetchSupplierList();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.updatedSupplier !== this.props.updatedSupplier) {
      this.fetchSupplierList();
    }
  }

  fetchSupplierList = () => {
    axios
      .get("https://procsupport-api.onrender.com/api/suppliers/get/all", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => {
        this.setState({
          List: response.data.records,
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
              <th scope="col">Supplier Name</th>
              <th scope="col">Username</th>
              <th scope="col">Main Supply</th>
              <th scope="col">Address</th>
            </tr>
          </thead>
          <tbody>
            {this.state.List.map((supplier) => (
              <tr
                key={supplier.id}
                className={supplier.selected ? "selected" : ""}
              >
                <td>{supplier.supplierName}</td>
                <td>{supplier.supplierUsername}</td>
                <td>{supplier.mainSupply}</td>
                <td>{supplier.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SupplierListItem;
