import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class CreatePurchaseOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pr: null
    };
    this.createPO = this.createPO.bind(this);
  }

  createPO() {
    axios
      .put(" http://localhost:5000/api/po/create", {
        token: localStorage.getItem("token"),
        prid: this.state.pr?.prid,
      })
      .then((response) => {
        if (response.status === 200) {
          this.props.navigate("/approvedPurchaseList");
        }
      })
      .catch((error) => { });
  }


  componentDidMount() {
    this.getPRRecord(this?.props?.params?.id);
  }

  async getPRRecord(priId) {
    const response = await axios.get(
      `http://localhost:5000/api/pr/get/pr/${priId}`
    );

    if (response.status === 200) {
      this.setState({
        pr: response.data.purchase_request,
      });
    }
  }


  render() {
    const { showing, setDisable, disable, setInputValue } = this.state;
    return (
      <div className="createPurchaseOrder">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>Create Purchase Order</h2>
              <hr />
              <button
                onClick={this.createPO}
                className="btn btn-md btn-success float-left">
                Create
              </button>
              <Link
                to="/viewApproverList"
                className="btn btn-primary float-right">
                View all purchase requests
              </Link>
              <hr/>
              <form>
                <div className="row">
                  <div className="col-6 col-md-4">
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col">
                    <label for="supplier">Supplier</label>
                    <select
                      id="supplier"
                      className="form-control"
                      value={this.state.supplier}
                      onChange={this.onChangesupplier}
                    >
                      <option selected>Choose...</option>
                      <option>Holcim</option>
                      <option>DSI</option>
                      <option>Kinetic </option>
                    </select>
                  </div>
                  <div className="form-group col">
                    <label for="amount">Amount</label>
                    <input
                      type="text"
                      className="form-control"
                      id="amount"
                      value={this.state.amount}
                      onChange={this.onChangeamount}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col">
                    <label for="createdon">Created On</label>
                    <input
                      type="date"
                      className="form-control"
                      id="createdon"
                      value={this.state.createdon}
                      onChange={this.onChangecreatedon}
                      required
                    />
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="prid">Description</label>
                    <input
                      type="text"
                      className="form-control"
                      id="prid"
                      readOnly
                      value={this.state.pr?.description}
                    />
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="prid">PR ID</label>
                    <input
                      type="text"
                      className="form-control"
                      id="prid"
                      readOnly
                      value={this.state.pr?.prid}
                    />
                  </div>
                </div>
              </form>
            </div>

            {showing ? (
              <div>
                <hr />
                <br />
                <br />
                <h2>Materials</h2>
                <h4>Total Material Cost: LKR 23000</h4>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Requirement Id</th>
                      <th>Material Type</th>
                      <th>Material Name</th>
                      <th>Quantity</th>
                      <th>Quantity UoM</th>
                      <th>Unit Price</th>
                      <th>Total Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {getMaterial.map(render_getMaterial)}  */}
                    <tr>
                      <td>MR-001</td>
                      <td>Cement</td>
                      <td>Holcim Cement</td>
                      <td>10</td>
                      <td>10kg Packs</td>
                      <td>2300</td>
                      <td>23000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default CreatePurchaseOrder;
