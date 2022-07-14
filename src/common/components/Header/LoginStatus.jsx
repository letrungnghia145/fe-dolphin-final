import { push } from "connected-react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { URL } from "../../../constants";
import { AuthActions } from "./../../../actions";

export const LoginStatus = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const doLogout = (event) => {
    event.preventDefault();
    dispatch(AuthActions.logout());
  };
  if (auth) {
    return (
      <div className="navbar-brand float-right">
        <i
          className="fa fa-user-circle-o user-class"
          style={{ cursor: "pointer" }}
          aria-hidden="true"
        >
          <span className="mr-2" />
          {auth.fullname}
        </i>
        <div className="user-dropdown">
          <ul style={{zIndex: 1}}>
            <li>
              <i className="fa fa-address-card-o mr-2" aria-hidden="true" />
              <Link to={`${URL.USER_PROFILE_URL}`}>Profile</Link>
            </li>
            <li>
              <i className="fa fa-pencil mr-2" aria-hidden="true" />
              <Link to={`${URL.POST_CREATE_URL}`}>Create post</Link>
            </li>
            {auth.roleId == 1 ? (
              <li>
                <i className="fa fa-share mr-2" aria-hidden="true" />
                <Link to={URL.ADMIN_HOME_URL}>Go to admin home</Link>
              </li>
            ) : null}
            <li>
              <i className="fa fa-forward mr-2" aria-hidden="true" />
              <Link to="/logout" onClick={(event) => doLogout(event)}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div
        className="navbar-brand float-right login"
        onClick={() => dispatch(push(URL.REGISTER_URL))}
      >
        register
      </div>
      <div className="navbar-brand float-right login">/</div>
      <div
        className="navbar-brand float-right login"
        onClick={() => dispatch(push(URL.LOGIN_URL))}
      >
        login
      </div>
    </div>
  );
};
