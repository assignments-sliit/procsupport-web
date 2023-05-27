import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class MatrialListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      List: [],
      MasterChecked: false,
      SelectedList: [],
      prs: [],
    };
  }

  componentDidMount() {
    this.fetchMatrialList();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.updatedMatrial !== this.props.updatedMatrial) {
      this.fetchMatrialList();
    }
  }

  fetchMatrialList = () => {
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
  };

  render() {
    return (
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
              <tr key={mType.id} className={mType.selected ? "selected" : ""}>
                <td>{mType.materialType}</td>
                <td style={{ textAlign: "center" }}>{mType.uom}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MatrialListItem;
