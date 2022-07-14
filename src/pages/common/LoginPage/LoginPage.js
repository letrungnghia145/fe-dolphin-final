import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { AuthActions } from "../../../actions";
import { URL } from "../../../constants";

export const LoginPage = (props) => {
  const { state } = props.location;
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [user, setInput] = useState({ username: "", password: "" });
  const doLogin = (event) => {
    event.preventDefault();
    dispatch(AuthActions.authenticateUser(user));
  };
  if (auth) {
    const redirect = state
      ? state.from
      : auth.role === "ROLE_ADMIN"
      ? "/admin/dashboard"
      : URL.HOME_URL;
    return <Redirect to={redirect} />;
  }
  return (
    <div className="lgu-container">
      <div className="card card-login py-4" style={{ width: "500px" }}>
        <Link to={URL.HOME_URL} className="text-white no-layout-page-link">
          <i className="fa fa-share" aria-hidden="true"></i>Back to home
        </Link>
        <form
          className="form-login"
          onSubmit={(event) => {
            doLogin(event);
          }}
        >
          <div className="card-header card-header-primary text-center">
            <h4 className="card-title">Login to continue</h4>
          </div>
          <div className="card-body px-4 pb-4 pt-2">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="ion-ios-contact" />
                </span>
              </div>
              <input
                type="input"
                name="username"
                className="form-control"
                placeholder="Enter your username"
                required
                value={user.username}
                onChange={(event) => {
                  setInput({ ...user, username: event.target.value });
                }}
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="ion-ios-lock" />
                </span>
              </div>
              <input
                type="password"
                className="form-control"
                placeholder="Your password"
                required
                value={user.password}
                onChange={(event) => {
                  setInput({ ...user, password: event.target.value });
                }}
              />
            </div>
          </div>
          <div className="footer text-center">
            <button
              type="submit"
              className="btn btn-outline-white font-weight-bold mr-3"
            >
              Login
            </button>
            <Link
              className="btn btn-outline-white font-weight-bold mr-3"
              to={URL.REGISTER_URL}
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
