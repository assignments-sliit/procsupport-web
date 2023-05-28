import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.css";

//import component layouts
import AddNewUser from "./components/admin/AddNewUser";
import UserList from "./components/admin/UsersList";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
//import Footer from "./components/layout/Footer";
import Login from "./components/auth/Login";
import CreatePurchaseOrder from "./components/purchaser/CreatePurchaseOrder";
import ApprovedPurchaseList from "./components/purchaser/ApprovedPurchaseList";
import NewCreatePurchaseOrder from "./components/purchaser/NewCreatePurchaseOrder";
import PRListView from "./components/requestor/PRListview";
import AddNewPR from "./components/requestor/AddNewPR";
import ApproverListView from "./components/approver/ApproverListView";
import ViewSelectedPRRecord from "./components/approver/ViewSelectedPRRecord";
import ReceiverListView from "./components/receiver/ViewDeliveryList";
import CreateNewDelivery from "./components/receiver/CreateNewDelivery";
import ViewSelectedDelivery from "./components/receiver/ViewSelectedDelivery";
import AdminHomePage from "./components/admin/AdminHomePage";
import SupplierList from "./components/admin/SupplierList";
import AddNewSupplier from "./components/admin/AddNewSupplier";
import AddMaterialType from "./components/admin/AddMaterialType";
import MaterialList from "./components/admin/MatrialList";
import MaterialItemList from "./components/admin/MaterialItemList";
import AddMaterialItem from "./components/admin/AddMaterialItem";
import Alert from "./components/layout/Alert";
import SupplierLogin from "./components/auth/SupplierLogin";

import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Alert />

        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/slogin" element={<SupplierLogin />} />
          <Route exact path="/viewPRList" element={<PRListView />} />

          <Route
            exact
            path="/approvedPurchaseList"
            element={<ApprovedPurchaseList />}
          />

          <Route
            exact
            path="/viewApproverList"
            element={<ApproverListView />}
          />

          <Route
            exact
            path="/viewDeliveryList"
            element={<ReceiverListView />}
          />

<Route
            exact
            path="/viewSelectedDelivery/:id"
            element={<ViewSelectedDelivery />}
          />
          <Route exact path="/addNewPR" element={<AddNewPR />} />

          <Route
            exact
            path="/createPurchaseOrder/:id"
            element={<CreatePurchaseOrder />}
          />

<Route
            exact
            path="/newCreatePurchaseOrder/"
            element={<NewCreatePurchaseOrder />}
          />

          <Route
            exact
            path="/viewSelectedPRRecord/:id"
            element={<ViewSelectedPRRecord />}
          />

          <Route exact path="/createDelivery" element={<CreateNewDelivery />} />

          {/* Admin tasks */}
          <Route exact path="/adminHomePage" element={<AdminHomePage />} />
          <Route exact path="/viewUserList" element={<UserList />} />
          <Route exact path="/addNewUser" element={<AddNewUser />} />
          <Route exact path="/viewSupplierList" element={<SupplierList />} />
          <Route exact path="/addNewSupplier" element={<AddNewSupplier />} />
          <Route exact path="/addMaterialType" element={<AddMaterialType />} />
          <Route exact path="/viewMatrialList" element={<MaterialList />} />
          <Route exact path="/addMaterialItem" element={<AddMaterialItem />} />
          <Route
            exact
            path="/viewMatrialItemList"
            element={<MaterialItemList />}
          />
        </Routes>

        {/* <Footer /> */}
      </Router>
    </Provider>
  );
};

export default App;
