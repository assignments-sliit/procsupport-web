import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class ViewSelectedDelivery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      po: null,
    };

    this.creteDevlivery = this.creteDevlivery.bind(this);
  }

  async creteDevlivery(priId) {
    console.log(priId)
    const response = await axios.get(
      `https://procsupport-api.onrender.com/api/pr/get/pr/${priId}`
    );

    if (response.status === 200) {
      this.setState({
        pr: response.data.purchase_request,
      });
    }
  }


  componentDidMount() {
    this.getPRRecord(this?.props?.params?.id);
  }

  async getPRRecord(poId) {
    console.log(poId)
    const response = await axios.get(
      `https://procsupport-api.onrender.com/api/po/get/one/${poId}`
    );

    if (response.status === 200) {
      this.setState({
        pr: response.data.purchase_request,
      });
    }
  }

  render() {
    return (
      <div className="viewSelectedDelivery">
        <div className="container">
          <div className="row">
            <div className="col-md-128 m-auto">
              <h2>Create Delivery</h2>
              <hr/>
              {this.state.po?.status === "PENDING" && (
                <>
                  <button onClick={this.approvePR} className="btn btn-md btn-success float-left">
                    Create Delivery Order
                  </button>
                </>
              )}
              <form>
                <div className="form-row">
                  <div className="form-group col-md-3">
                    <label htmlFor="poid">PO ID</label>
                    <input
                      type="text"
                      className="form-control"
                      id="poid"
                      readOnly
                      value={this.state.po?.poid}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="supplier">Supplier</label>
                    <input
                      type="text"
                      className="form-control"
                      id="supplier"
                      readOnly
                      value={this.state.po?.supplierId}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-3">
                    <label htmlFor="status">Delivery Status</label>
                    <select id="status" class="form-control">
                      <option selected>Choose...</option>
                      <option> In store </option>
                      <option> En Route </option>
                      <option> Delivered </option>
                    </select>
                  </div>
                 
                  <div className="form-group col-md-4">
                    <label htmlFor="status">Payment Method</label>
                    <input
                      type="text"
                      className="form-control"
                      id="status"
                      readOnly
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="amount">Payment Status</label>
                    <input
                      type="text"
                      className="form-control"
                      id="amount"
                      readOnly
                    />
                  </div>
                </div>
              </form>

              <br />
              <Link to="/login" className="btn btn-md btn-success">
                Save delivery status
              </Link>

              <Link
                to="/viewDeliveryList"
                className="btn btn-primary float-right"
              >
                View all deliveries
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewSelectedDelivery;
