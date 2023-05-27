import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class ReceiverListView extends Component {
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
      .get("https://procsupport-api.onrender.com/api/po/get/all"
        //  {
        //   headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        // }
      )
      .then((response) => {
        console.log(response.data.response);
        this.setState({
          List: response.data.response
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="POList">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>Approved Purchase Order List</h2>
            </div>
          </div>
          <hr />
          <Link to="/createDelivery" className="btn btn-md btn-success float-right">
                <i className="fa-duotone fa-plus"></i> Add Purchase Request
              </Link>
              <br/>
          <hr/>
          <div className="table-responsive-lg">
            <table className="table">
              <thead>
                <tr class="table-success">
                  <th scope="col">             </th>
                  <th scope="col">PO ID</th>
                  <th scope="col">Supplier Id</th>
                  <th scope="col">Description</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Created On</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Status</th>
                  <th scope="col">Update Status</th>
                </tr>
              </thead>
              <tbody>
                {this.state.List.map((poList) => (
                  <tr
                    key={poList.id}
                    className={poList.selected ? "selected" : " "}
                  >
                    <th scope="row">
                      <input
                        type="checkbox"
                        checked={poList.selected}
                        className="form-check-input"
                        id="rowcheck{user.id}"
                        onChange={(e) => this.onItemCheck(e, poList)}
                      />
                    </th>
                    <td>{poList.poid}</td>
                    <td>{poList.supplierId}</td>
                    <td>{poList.description}</td>
                    <td>{poList.amount}</td>
                    <td>{poList.createdOn}</td>
                    <td>{poList.amount}</td>
                    <td>{poList.status}</td>
                    <td> <Link to={`/viewSelectedDelivery/${this.state.List.filter((e) => e.selected)[0]?.prid
                      }`}>
                      <button checked={poList.selected} className="btn btn-success" id="rowcheck{user.id}" onClick={(e) => this.onItemCheck(e, poList)}>
                        Update
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

export default ReceiverListView;
