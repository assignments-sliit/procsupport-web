import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.css";

//import component layouts
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Footer from "./components/layout/Footer";
import Login from "./components/auth/Login";
import ApprovedPurchaseList from "./components/purchaser/ApprovedPurchaseList";
import PRListView from "./components/requestor/PRListview";
import ApproverListView from "./components/approver/ApproverListView";
import AddNewUser from "./components/admin/AddNewUser";
//import ViewUserList from "./components/admin/ViewUserList";

import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/login" element={<Login />} />
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

          <Route exact path="/addNewUser" element={<AddNewUser />} />
        </Routes>

        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
