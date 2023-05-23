import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class ApprovedPurchaseList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      List: [],
      SelectedList: [],
      MasterChecked: false,
      prs: [],
    };
  }

  onItemCheck(e, item) {
    let tempList = this.state.List;
    tempList.map((user) => {
      console.log("-------------", user, item);
      if (user._id === item._id) {
        user.selected = e.target.checked;
      }
      return user;
    });

    //To Control Master Checkbox State
    const totalItems = this.state.List.length;
    const totalCheckedItems = tempList.filter((e) => e.selected).length;

    // Update State
    this.setState({
      MasterChecked: totalItems === totalCheckedItems,
      List: tempList,
      SelectedList: this.state.List.filter((e) => e.selected),
    });
  }

  componentDidMount() {
    axios
      .get("https://procsupport-api.onrender.com/api/pr/get/approved/all"
        //  {
        //   headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        // }
      )
      .then((response) => {
        console.log(response.data.response);
        this.setState({
          List: response.data.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // onSubmit() {
  //   const { navigate } = this.props;
  //   // Navigate to Another Component
  //   navigate("/CreatePurchaseOrder");
  // }

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
          <div className="table-responsive-lg">
            <table className="table">
              <thead>
                <tr class="table-success">
                  <th scope="col">             </th>
                  <th scope="col">PR ID</th>
                  <th scope="col">PR Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Created On</th>
                  <th scope="col">Updated On</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.List.map((approver) => (
                  <tr
                    key={approver.id}
                    className={approver.selected ? "selected" : " "}
                  >
                    <th scope="row">
                      <input
                        type="checkbox"
                        checked={approver.selected}
                        className="form-check-input"
                        id="rowcheck{user.id}"
                        onChange={(e) => this.onItemCheck(e, approver)}
                      />
                    </th>
                    <td>{approver.prid}</td>
                    <td>{approver.prName}</td>
                    <td>{approver.description}</td>
                    <td>{approver.amount}</td>
                    <td>{approver.createdOn}</td>
                    <td>{approver.updatedOn}</td>
                    <td>{approver.status}</td>
                    <td> <Link to={`/createPurchaseOrder/${this.state.List.filter((e) => e.selected)[0]?.prid
                      }`}>
                      <button checked={approver.selected} className="btn btn-success" id="rowcheck{user.id}" onClick={(e) => this.onItemCheck(e, approver)}>
                        Action
                      </button></Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default ApprovedPurchaseList;
