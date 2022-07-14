import { go, push } from "connected-react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { URL, TOKEN_KEY } from "../../constants";
import { DropDownItem } from "./DropDownItem";
import { Utils } from "./../../helper";

export const SideBar = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogout = (event) => {
    event.preventDefault();
    Utils.alertNotice("Are you sure to log out?").then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem(TOKEN_KEY);
        dispatch(go(0));
      }
    });
  };
  return (
    <nav id="sidebar" className="sidebar-wrapper">
      <div className="sidebar-content">
        <div className="sidebar-brand">
          <Link to="/admin/dashboard">Admin Dashboard</Link>
          <div id="close-sidebar">
            <i className="fa fa-share" aria-hidden="true">
              <span
                className="ml-1"
                onClick={() => dispatch(push(URL.HOME_URL))}
              >
                Dolphin
              </span>
            </i>
          </div>
        </div>
        <div className="sidebar-header">
          <div className="user-pic">
            <Link to={`${URL.ADMIN_PROFILE_URL}/${auth.id}`}>
              <img
                className="img-responsive img-rounded"
                src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg"
                alt="User picture"
              />
            </Link>
          </div>
          <div className="user-info">
            <span className="user-name">
              {auth.lastName}
              <strong> {auth.firstName}</strong>
            </span>
            <span className="user-role">Administrator</span>
            <span className="user-status">
              <i className="fa fa-circle" />
              <span>Online</span>
            </span>
          </div>
        </div>
        {/* sidebar-header  */}
        <div className="sidebar-search">
          <div>
            <div className="input-group">
              <input
                type="text"
                className="form-control search-menu"
                placeholder="Search..."
              />
              <div className="input-group-append">
                <span className="input-group-text">
                  <i className="fa fa-search" aria-hidden="true" />
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* sidebar-search  */}
        <div className="sidebar-menu">
          <ul>
            <li className="header-menu">
              <span>General</span>
            </li>
            {menus.map((menu, index) => (
              <DropDownItem key={index} menu={menu} />
            ))}
            {/* Extra */}
          </ul>
        </div>
      </div>
      {/* sidebar-content  */}
      <div className="sidebar-footer">
        <a href="#">
          <i className="fa fa-bell" />
          <span className="badge badge-pill badge-warning notification">3</span>
        </a>
        <a href="#">
          <i className="fa fa-envelope" />
          <span className="badge badge-pill badge-success notification">7</span>
        </a>
        <a href="#">
          <i className="fa fa-cog" />
          <span className="badge-sonar" />
        </a>
        <Link
          to={URL.LOGOUT_URL}
          onClick={(event) => {
            handleLogout(event);
          }}
        >
          <i className="fa fa-power-off" />
        </Link>
      </div>
    </nav>
  );
};

const menus = [
  {
    name: "Categories",
    to: "",
    icon: "th-list",
    submenus: [
      {
        name: "All categories",
        to: URL.ADMIN_CATEGORY_URL,
        submenus: [],
      },
    ],
  },
  {
    name: "Users",
    to: "",
    icon: "users",
    submenus: [
      {
        name: "All users",
        to: URL.ADMIN_USERS_URL,
        submenus: [],
      },
    ],
  },
  {
    name: "Posts",
    to: "",
    icon: "files-o",
    submenus: [
      {
        name: "All posts",
        to: URL.ADMIN_POSTS_URL,
        submenus: [],
      },
      {
        name: "Need censorship posts",
        to: "/admin/posts/censorship",
        submenus: [],
      },
    ],
  },
];

export const Extra = () => {
  return (
    <>
      <li className="header-menu">
        <span>Extra</span>
      </li>
      <li>
        <a href="#">
          <i className="fa fa-book" />
          <span>Documentation</span>
          <span className="badge badge-pill badge-primary">Beta</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fa fa-calendar" />
          <span>Calendar</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fa fa-folder" />
          <span>Examples</span>
        </a>
      </li>
    </>
  );
};
