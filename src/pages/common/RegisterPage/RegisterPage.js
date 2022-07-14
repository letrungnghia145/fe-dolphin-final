import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthActions } from "../../../actions";
import { URL } from "../../../constants";
import {Utils} from "../../../helper";
import {put} from "redux-saga/effects";
import {push} from "connected-react-router";
import {authService} from "../../../apis";
import * as AppConstant from "../../../constants/appConstant";
import {HOME_URL, LOGIN_URL} from "../../../constants/urlConstant";

export const RegisterPage = (props) => {
  const [user, setUserProps] = useState({
    email: "",
    password: "",
    username: "",
    fullname: "",
    age: "",
    phoneNumber: "",
  });
  const register = useSelector((state) => state.register);
  const dispatch = useDispatch();

  const doRegister = (event) => {
    event.preventDefault();
    authService.register(user).then(response => {
      const { message } = response.data;
      if (message === AppConstant.MESSAGE_RESPONSE_OK) {
        Utils.alertSuccess("", "Get to login")
            .then(confirm => {
              if (confirm.isConfirmed) {
                dispatch(push(LOGIN_URL))
              } else {
                dispatch(push(HOME_URL))
              }
            })
      } else {
        Swal.fire({
          title: "Notice",
          icon: "warning",
          text: message,
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-primary",
          },
        });
      }
    }).catch(error => {
      console.log(error)});
  };
  return (
    <div className="lgu-container">
      <div className="card card-login py-4" style={{ minWidth: "600px" }}>
        <Link to={URL.HOME_URL} className="text-white no-layout-page-link">
          <i className="fa fa-share" aria-hidden="true"></i>Back to home
        </Link>
        <form
          className="form-login"
          onSubmit={(event) => {
            doRegister(event);
          }}
        >
          <div className="card-header card-header-primary text-center">
            <h4 className="card-title">Register account</h4>
          </div>
          <div className="card-body px-4 pb-4 pt-2">
            <InputBoard user={user} setUserProps={setUserProps} />
          </div>
          <div className="footer text-center">
            <button
              type=""
              className="btn btn-outline-white font-weight-bold mr-3"
            >
              Register
            </button>
            <Link
              type=""
              className="btn btn-outline-white font-weight-bold mr-3"
              to={URL.LOGIN_URL}
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export const InputBoard = (props) => {
  const dispatch = useDispatch();
  const { user, setUserProps } = props;
  const handleInput = (event) => {
    const { name, value } = event.target;
    setUserProps({ ...user, [name]: value });
  };
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="ion-ios-mail" />
              </span>
            </div>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Your email"
              value={user.email}
              onChange={(event) => handleInput(event)}
              required
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="ion-ios-contact" />
              </span>
            </div>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Your username"
              value={user.username}
              onChange={(event) => handleInput(event)}
              // onBlur={(event) => {
              //   if (event.target.value)
              //     dispatch(
              //       AuthActions.checkIfNotRegistered(event.target.value)
              //     );
              // }}
              required
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="ion-ios-call" />
              </span>
            </div>
            <input
              type="text"
              name="phoneNumber"
              className="form-control"
              placeholder="Your phone number"
              value={user.phoneNumber}
              onChange={(event) => handleInput(event)}
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="ion-ios-contact" />
              </span>
            </div>
            <input
              type="text"
              name="fullname"
              className="form-control"
              placeholder="Your full name"
              value={user.fullname}
              onChange={(event) => handleInput(event)}
              required
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="ion-ios-lock" />
              </span>
            </div>
            <input
              name="password"
              type="password"
              className="form-control"
              placeholder="Your password"
              value={user.password}
              onChange={(event) => handleInput(event)}
              required
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="ion-ios-contact" />
              </span>
            </div>
            <input
              name="age"
              type="text"
              className="form-control"
              placeholder="Your age"
              value={user.age}
              onChange={(event) => handleInput(event)}
              required
            />
          </div>
        </div>
      </div>
    </>
  );
};
