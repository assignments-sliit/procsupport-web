import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { userTypes } from "../../utils/constants";

const SupplierLogin = () => {
  const [supplierUsername, setUsername] = useState("");
  const [supplierUserPassword, setPassword] = useState("");

  const navigate = useNavigate();

  const onChangeID = (e) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const user = {
      supplierUsername,
      supplierUserPassword,
    };

    if (!user.supplierUsername && !user.supplierUserPassword) {
      alert("Login Failed! Please enter Credentials");
    } else if (!user.supplierUserPassword) {
      alert("Login Failed! Please enter Password");
    } else if (!user.supplierUsername) {
      alert("Login Failed! Please enter Username");
    } else {
      console.log(user);
      try {
        await axios
          .post(`https://procsupport-api.onrender.com/api/suppliers/login`, {
            supplierUsername,
            supplierUserPassword,
          })
          .then((res) => {
            if (res.status === 200) {
              console.log(res.data);
              //const userType = res.data.data.usertype;
              localStorage.setItem("token", res.data.data.token);

              navigate("/");
            } else {
              alert("Login Failed! Please try again!");
            }
          });
      } catch (e) {
        if (e.response?.status === 401) {
          alert("Login Failed! Please enter the correct password");
        } else if (e.response?.status === 404) {
          alert("Login Failed! Please enter a correct username");
        } else {
          alert("Login Failed! Please try again!");
        }
      }
    }
  };

  return (
    <div className="slogin">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Supplier Sign in</h1>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter username"
                  name="supplierUsername"
                  value={supplierUsername}
                  onChange={onChangeID}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                  name="supplierUserPassword"
                  value={supplierUserPassword}
                  onChange={onChangePassword}
                />
              </div>
              <input
                type="submit"
                className="btn btn-success btn-block mt-4"
                value={"Login"}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplierLogin;
