import React, { Component } from "react";
import { Link } from "react-router-dom";
import MaterialList from "./MatrialList";
import UsersListItem from "./UsersListItem";
import SupplierListItem from "./SupplierListItem";

// class AdminHomePage extends Component {
//   render() {
//     return (
//       <div className="adminHomePage">
//         <div className="dark-overlay landing-inner text-light">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-12 text-center">
//                 <h1 className="display-3 mb-4">ProcSupport</h1>
//                 <p className="lead">
//                   <i> Welcome Admin Home Page! </i>
//                 </p>
//                 <hr />
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-around",
//                     alignItems: "center",
//                   }}
//                 >
//                   <Link
//                     to="/viewUserList"
//                     className="btn btn-lg btn-primary"
//                     style={{ marginRight: "-400px" }}
//                   >
//                     View list of users
//                   </Link>
//                   <Link
//                     to="/addNewUser"
//                     className="btn btn-lg btn-primary"
//                     style={{ marginRight: "8px" }}
//                   >
//                     Add New User
//                   </Link>
//                 </div>
//                 <hr />

//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-around",
//                     alignItems: "center",
//                   }}
//                 >
//                   <Link
//                     to="/viewSupplierList"
//                     className="btn btn-lg btn-primary"
//                     style={{ marginRight: "-400px" }}
//                   >
//                     View list of suppliers
//                   </Link>
//                   <Link
//                     to="/addNewSupplier"
//                     className="btn btn-lg btn-primary"
//                     style={{ marginRight: "8px" }}
//                   >
//                     Add New Suppliers
//                   </Link>
//                 </div>
//                 <hr />
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-around",
//                     alignItems: "center",
//                   }}
//                 >
//                   <Link
//                     to="/viewMatrialList"
//                     className="btn btn-lg btn-primary"
//                     style={{ marginRight: "-400px" }}
//                   >
//                     View Material Types
//                   </Link>
//                   <Link
//                     to="/addMaterialType"
//                     className="btn btn-lg btn-primary"
//                     style={{ marginRight: "-400px" }}
//                   >
//                     Add New Material Type
//                   </Link>
//                 </div>
//                 <hr />
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-around",
//                     alignItems: "center",
//                   }}
//                 >
//                   <Link
//                     to="/viewMatrialItemList"
//                     className="btn btn-lg btn-primary"
//                     style={{ marginRight: "-400px" }}
//                   >
//                     View Material List
//                   </Link>
//                   <Link
//                     to="/addMaterialItem"
//                     className="btn btn-lg btn-primary"
//                     style={{ marginRight: "-400px" }}
//                   >
//                     Add New Material
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default AdminHomePage;

class AdminHomePage extends Component {
  render() {
    return (
      <div className="adminHomePage">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h3 className="display-3 mb-4">ProcSupport Admin</h3>

                <hr />

                <div className="row">
                  <div className="col-md-12" style={{ color: "black" }}>
                    <div className="card">
                      <div className="card-body">
                        <div className="card-header">
                          <h4
                            className="card-title"
                            style={{ textAlign: "left" }}
                          >
                            <b>Existing Users</b>
                          </h4>
                        </div>
                        <div
                          className="scrollable"
                          style={{ maxHeight: "300px", overflowY: "auto" }}
                        >
                          <br />
                          <UsersListItem />
                        </div>
                        <div
                          className="card-footer"
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                          }}
                        >
                          <Link
                            to="/viewUserList"
                            style={{
                              color: "blue",
                            }}
                          >
                            View all users...
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Supplier List</h5>
                        <p className="card-text">View a list of suppliers.</p>
                        <Link
                          to="/viewSupplierList"
                          className="btn btn-primary"
                        >
                          View List
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6" style={{ color: "black" }}>
                    <div className="card">
                      <div className="card-body">
                        <MaterialList />
                        <Link to="/viewMatrialList" className="btn btn-primary">
                          View Material Types
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-md-12" style={{ color: "black" }}>
                    <div className="card">
                      <div className="card-body">
                        <div className="card-header">
                          <h4
                            className="card-title"
                            style={{ textAlign: "left" }}
                          >
                            <b>Suppliers</b>
                          </h4>
                        </div>
                        <div
                          className="scrollable"
                          style={{ maxHeight: "300px", overflowY: "auto" }}
                        >
                          <br />
                          <SupplierListItem />
                        </div>
                        <div
                          className="card-footer"
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                          }}
                        >
                          <Link
                            to="/viewSupplierList"
                            style={{
                              color: "blue",
                            }}
                          >
                            View all suppliers...
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminHomePage;
