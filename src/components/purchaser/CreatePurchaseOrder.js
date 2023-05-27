import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import withRouter from "../../HOC/withRouter";

class CreatePurchaseOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pr: null,
    };

    this.createPO = this.createPO.bind(this);
  }

  componentDidMount() {
    this.getPRRecord(this?.props?.params?.id);
  }

  async getPRRecord(priId) {
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

  createPO() {
    axios
      .put("https://procsupport-api.onrender.com/api/po/create", {
        token: localStorage.getItem("token"),
        poid: this.state.po?.poid,
      })
      .then((response) => {
        if (response.status === 200) {
          this.props.navigate("/approvedPurchaseList");
        }
      })
      .catch((error) => { });
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
                Create Purchase Order
              </button>
              <Link
                to="/approvedPurchaseList"
                className="btn btn-primary float-right">
                View all purchase requests
              </Link>
              
              <br/>
              <br/>
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
                  <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
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
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CreatePurchaseOrder);
