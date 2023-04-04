import React, { Component } from "react";


class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      List: [],
      MasterChecked: false,
      SelectedList: [],
      prs: [],
    };
  }

  render() {
    return (
      <div className="viewApproverList">
        <div className="container">
          <div className="row">
            <div className="col-md-128 m-auto">
              <h3 className="mb-2 float-left">User List</h3>
              <br />
              <br />
              <div className="table-responsive-lg">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">User Type</th>
                      <th scope="col">UserName</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                        <td>Linisha</td>
                        <td>Purchaser</td>
                        <td>linishas</td>
                      </tr>
                  </tbody>
                </table>
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

export default UserList;
