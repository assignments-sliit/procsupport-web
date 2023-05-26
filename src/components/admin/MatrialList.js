import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class MaterialList extends Component {
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

  componentDidMount() {
    axios
      .get("https://procsupport-api.onrender.com/api/mt/get/all", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => {
        this.setState({
          List: response.data.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="viewMatrialList">
        <div className="container">
          <div className="row">
            <div className="col-md-128 m-auto">
              <br />
              <h2>All Material Types</h2>

              <br />
              <div className="table-responsive-lg">
                <table className="table" style={{ width: "100%" }}>
                  <thead style={{ textAlign: "center" }}>
                    <tr className="table-success">
                      <th scope="col">Material Type</th>
                      <th scope="col">Unit of Measurement</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.List.map((mType) => (
                      <tr
                        key={mType.id}
                        className={mType.selected ? "selected" : ""}
                      >
                        <td>{mType.materialType}</td>
                        <td style={{ textAlign: "center" }}>{mType.uom}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <br />
              <Link
                to="/addMaterialType"
                className="btn btn-lg btn-primary float-right"
              >
                <i className="fa-duotone fa-plus"></i> Add New Material Type
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MaterialList;
