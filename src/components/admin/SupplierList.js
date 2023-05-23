import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class SupplierList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      List: [],
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

  //token
  componentDidMount() {
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
  }

  render() {
    return (
      <div className="viewSupplierList">
        <div className="container">
          <div className="row">
            <div className="col-md-128 m-auto">
              <br />
              <h2>All Suppliers</h2>

              <br />
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
              <br />
              <Link
                to="/addNewSupplier"
                className="btn btn-lg btn-primary float-right"
              >
                <i className="fa-duotone fa-plus"></i> Add New Supplier
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SupplierList;
