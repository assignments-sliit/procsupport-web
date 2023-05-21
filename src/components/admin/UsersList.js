import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class UsersList extends Component {
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
      .get("https://procsupport-api.onrender.com/api/users/admin/get/all", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => {
        this.setState({
          List: response.data.users,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="viewUserList">
        <div className="container">
          <div className="row">
            <div className="col-md-128 m-auto">
              <h2>All Users</h2>
              <br />
              <br />
              <div className="table-responsive-lg">
                <table className="table">
                  <thead>
                    <tr class="table-success">
                      <th scope="col">Employee Name</th>
                      <th scope="col">Username</th>
                      <th scope="col">User Type</th>
                      <th scope="col">User Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.List.map((user) => (
                      <tr
                        key={user.id}
                        className={user.selected ? "selected" : ""}
                      >
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.usertype}</td>
                        <td>{user.userstatus}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <br />
              <Link
                to="/addNewUser"
                className="btn btn-md btn-info float-right"
              >
                <i className="fa-duotone fa-plus"></i> Add New User
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UsersList;
