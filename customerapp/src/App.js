import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Customer from "./components/Customer";
import AuthService from "./services/auth.service";

const App = () => {
  const [token, setToken] = useState(undefined);
  useEffect(() => {
    const token = AuthService.getToken();
    setToken(token);
  },[]);
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          Customer App
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>
        </div>

        {token ? (
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/logout"} className="nav-link">
                Logout
              </Link>
            </li>
          </div>
        ) : (
          <>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>
            </div>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          </>
        )}
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route exact path={"/home"} element={<Home />} />
          <Route exact path={"/login"} element={<Login />} />
          <Route exact path={"/register"} element={<Register />} />
          <Route exact path={"/customer"} element={<Customer />} />
        </Routes>
      </div>
    </div>
  );
};
export default App;
