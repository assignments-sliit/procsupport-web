import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class ApprovedPurchaseList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      approvedPurchase: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://procsupport-api.onrender.com/api/po/get/approved", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => {
        console.log(response.data.response);
        this.setState({
          approvedPurchase: response.data.response
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onSubmit() {
    const { navigate } = this.props;
    // Navigate to Another Component
    navigate("/CreatePurchaseOrder");
  }

  render() {
    return (
      <div className="approvedPurchaseList">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>Approved Purchase Request List</h2>
              <hr />
              <h3>Budget: LKR 200000 </h3>
              {/* <h3>Budget: {this.ViewBudget}</h3> */}
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-6 col-md-2">
              <Link className="btn btn-success" to="/createPurchaseOrder">
                Create Purchse Order
              </Link>
            </div>
          </div>
          <hr />
          <table className="table">
            <thead className="thead-dark">
              <tr class="table-success">
                <th scope="col"> </th>
                <th scope="col">PR ID</th>
                <th scope="col">Description</th>
                <th scope="col">Amount</th>
                <th scope="col">supplier Id</th>
                <th scope="col">Created On</th>
                <th scope="col">Updated On</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
            {this.state.approvedPurchase.map((approvedPO) => (
                      <tr
                        key={approvedPO.poid}
                        className={approvedPO.selected ? "selected" : ""}
                      >
                        <td>{approvedPO.prid}</td>
                        <td>{approvedPO.description}</td>
                        <td>{approvedPO.amount}</td>
                        <td>{approvedPO.supplierId}</td>
                        <td>{approvedPO.createdOn}</td>
                        <td>{approvedPO.updatedOn}</td>
                        <td>{approvedPO.status}</td>
                      </tr>
                    ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ApprovedPurchaseList;
