import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class ApprovedPurchaseList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      selectedList: [],
      masterChecked: false,
    };
  }

  onItemCheck(e, item) {
    const tempList = this.state.list.map((user) => {
      if (user._id === item._id) {
        user.selected = e.target.checked;
      }
      return user;
    });

    const totalItems = this.state.list.length;
    const totalCheckedItems = tempList.filter((e) => e.selected).length;

    this.setState({
      masterChecked: totalItems === totalCheckedItems,
      list: tempList,
      selectedList: tempList.filter((e) => e.selected),
    });
  }

  componentDidMount() {
    axios
      .get("https://procsupport-api.onrender.com/api/pr/get/approved/all", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => {
        console.log(response.data.response);
        this.setState({
          list: response.data.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="approvedPurchaseList">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>Approved Purchase Request List</h2>
            </div>
          </div>
          <hr />
          <Link to="/newCreatePurchaseOrder" className="btn btn-md btn-success float-right">
                <i className="fa-duotone fa-plus"></i> Create Purchase Order
              </Link>
              <br/>
              <br/>
              <br/>

          <div className="table-responsive-lg">
            <table className="table">
              <thead>
                <tr className="table-success">
                  {/* <th scope="col"></th> */}
                  <th scope="col">PR ID</th>
                  <th scope="col">PR Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Created On</th>
                  {/* <th scope="col">Updated On</th> */}
                  <th scope="col">Status</th>
                  {/* <th scope="col">Action</th> */}
                </tr>
              </thead>
              <tbody>
                {this.state.list.map((approver) => (
                  <tr
                    // key={approver._id}
                    // className={approver.selected ? "selected" : ""}
                  >
                    {/* <th scope="row">
                      <input
                        type="checkbox"
                        checked={approver.selected}
                        className="form-check-input"
                        id={`rowcheck${approver.id}`}
                        onChange={(e) => this.onItemCheck(e, approver)}
                      />
                    </th> */}
                    <td>{approver.prid}</td>
                    <td>{approver.prName}</td>
                    <td>{approver.description}</td>
                    <td>{approver.amount}</td>
                    <td>{approver.createdOn}</td>
                    {/* <td>{approver.updatedOn}</td> */}
                    <td>{approver.status}</td>
                    {/* <td>
                      <Link
                        to={`/createPurchaseOrder/${approver.prid}`}
                        className="btn btn-success"
                      >
                        Action
                      </Link>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ApprovedPurchaseList;
