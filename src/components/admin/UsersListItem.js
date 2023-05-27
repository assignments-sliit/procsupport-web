import React, { Component } from "react";
import axios from "axios";

class UsersListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      List: [],
    };
  }

  componentDidMount() {
    this.fetchUserList();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.updatedUser !== this.props.updatedUser) {
      this.fetchUserList();
    }
  }

  fetchUserList = () => {
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
  };

  render() {
    return (
      <div className="table-responsive-lg">
        <table className="table" style={{ width: "950px" }}>
          <thead>
            <tr className="table-success">
              <th scope="col">Employee Name</th>
              <th scope="col">Username</th>
              <th scope="col">Employee Type</th>
              <th scope="col">Active Status</th>
            </tr>
          </thead>
          <tbody>
            {this.state.List.map((user) => (
              <tr key={user.id} className={user.selected ? "selected" : ""}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.usertype}</td>
                <td>{user.userstatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UsersListItem;
