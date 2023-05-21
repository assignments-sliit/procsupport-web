import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class ApproverListView extends Component {
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
    axios
    .get("https://procsupport-api.onrender.com/api/pr/get/all", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((response) => {
      console.log(response.data.response);
      this.setState({
        List: response.data.purchase_requests
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="viewApproverList">
        <div className="container">
          <div className="row">
            <div className="col-md-128 m-auto">
              {/* <h3 className="mb-2 text-center">Available Budget</h3>
              <p className="text-center h1">50000.00 LKR</p>
              <br /> <br /> */}
              <h2>All Purchase Requests</h2>
              <br />
              <br />
              <div className="table-responsive-lg">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">PR ID</th>
                      <th scope="col">PR Name</th>
                      <th scope="col">Description</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Created On</th>
                      <th scope="col">Updated On</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.List.map((approver) => (
                      <tr
                        key={approver.id}
                        className={approver.selected ? "selected" : " "}
                      >
                        {/* <th scope="row">
                          <input
                            type="checkbox"
                            checked={approver.selected}
                            className="form-check-input"
                            id="rowcheck{user.id}"
                            onChange={(e) => this.onItemCheck(e, approver)}
                          />
                        </th> */}
                        <td>{approver.prid}</td>
                        <td>{approver.prName}</td>
                        <td>{approver.description}</td>
                        <td>{approver.amount}</td>
                        <td>{approver.createdOn}</td>
                        <td>{approver.updatedOn}</td>
                        <td>{approver.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Link
                  to={`/viewSelectedPRRecord/${
                    this.state.List.filter((e) => e.selected)[0]?.prid
                  }`}
                >
                  <button className="btn btn-primary float-right">
                    View Purchase Request details
                  </button>
                </Link>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ApproverListView;
