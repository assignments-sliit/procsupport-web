import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class AddNewPR extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pr: null,
      materials: [],
      name: '',
      id: '',
      selectOptions: []
    };

    this.addPR = this.addPR.bind(this);
  }

  addPR() {
    axios
      .put("https://procsupport-api.onrender.com/api/pr/create", {
        token: localStorage.getItem("token"),
        prid: this.state.pr?.prid,
      })
      .then((response) => {
        if (response.status === 200) {
          this.props.navigate("/viewApproverList");
        }
      })
      .catch((error) => { });
  }


  // getMateralType() {
  //   axios
  //     .get("https://procsupport-api.onrender.com/api/mt/get/all", {
  //       headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  //     })
  //     .then((response) => {
  //       console.log(response.data.response);
  //       this.setState({
  //         materials: response.data.data
  //       });
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

  async getOptions() {
    const res = await axios.get('https://procsupport-api.onrender.com/api/mt/get/all', {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    const data = res.data

    const options = data.map(d => ({
      "materialType": d.name,
      "materialTypeId": d.id
    }))

    this.setState({selectOptions: options})
      // .catch(function (error) {
      //   console.log(error);
      // });
  }

  componentDidMount() {
    this.getOptions()
  }

  render() {
    console.log(this.state.selectOptions)
    const { showing, setDisable, disable, setInputValue } = this.state;
    return (
      <div className="addNewPR">
        <div className="container">
          <div className="row">
            <div className="col-md-128 m-auto">
              <h2>Add New Purchase Request</h2>
              <hr />
              <form>
                <div className="form-row">
                  <div className="form-group col-md-9">
                    <label htmlFor="prName">PR Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="prName"
                      placeholder="Purchase request name"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    placeholder="Purpose of the purchase"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label htmlFor="createdOn">Amount</label>
                    <input
                      type="number"
                      className="form-control"
                      id="quantity"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="status">Status</label>
                    <input
                      type="text"
                      className="form-control"
                      id="description"
                      placeholder="New"
                      readOnly
                    />
                  </div>
                </div>
                <hr />

                <h3>Materials details</h3>
                <div class="row">
                  <div class="col-6 col-sm-3">Materal Type</div>
                  <div class="col-6 col-sm-3">
                    {/* {this.state.materials.map((materials) => (
                  <select
                      id="material"
                      className="form-control"
                      value={this.state.material}
                      onChange={this.onChangematerial}
                    >
                      <option selected>Choose...</option>
                      <option>{materials.materialType}</option>
                    </select>))} */}
                    
                    <select className="form-control" options={this.state.selectOptions} />
                  </div>
                  <br />
                  <br />
                  <div class="w-100"></div>
                  <div class="col-6 col-sm-3">Quantity</div>
                  <div class="col-6 col-sm-3">
                    <input
                      type="number"
                      className="form-control"
                      id="quantity"
                      required
                    />
                  </div>
                </div>

              </form>
              <br />
              <button
                    onClick={this.addPR}
                    className="btn btn-md btn-success float-right"
                  >
                    Create purchase request
                  </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddNewPR;
