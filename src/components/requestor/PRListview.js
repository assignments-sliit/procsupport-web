import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class PRListView extends Component {
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
      <div className="viewPRList">
        <div className="container">
          <div className="row">
            <div className="col-md-128 m-auto">
              <h2>Your Purchase Requests</h2>
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
                    {this.state.List.map((requestor) => (
                      <tr
                        key={requestor.id}
                        className={requestor.selected ? "selected" : ""}
                      >
                        {/* <th scope="row">
                          <input
                            type="checkbox"
                            checked={requestor.selected}
                            className="form-check-input"
                            id="rowcheck{user.id}"
                            onChange={(e) => this.onItemCheck(e, requestor)}
                          />
                        </th> */}
                        <td>{requestor.prid}</td>
                        <td>{requestor.prName}</td>
                        <td>{requestor.description}</td>
                        <td>{requestor.amount}</td>
                        <td>{requestor.createdOn}</td>
                        <td>{requestor.updatedOn}</td>
                        <td>{requestor.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <br />
              <Link to="/addNewPR" className="btn btn-primary float-right">
                <i className="fa-duotone fa-plus"></i> Add Purchase Request
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PRListView;
