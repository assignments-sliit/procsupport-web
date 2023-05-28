import React, { Component } from "react";
import axios from "axios";

class POListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      List: [],
    };
  }

  componentDidMount() {
    this.fetchPOList();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.updatedPO !== this.props.updatedPO) {
      this.fetchPOList();
    }
  }

  fetchPOList = () => {
    axios
      .get("https://procsupport-api.onrender.com/api/po/get/all", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => {
        this.setState({
          List: response.data.purchase_request,
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
              <th scope="col">Supplier ID</th>
              <th scope="col">PR ID</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {this.state.List.map((po) => (
              <tr key={po.id} className={po.selected ? "selected" : ""}>
                <td>{po.supplierId}</td>
                <td>{po.prid}</td>
                <td>{po.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default POListItem;
