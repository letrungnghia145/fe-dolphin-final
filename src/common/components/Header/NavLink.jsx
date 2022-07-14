import { Link, Route } from "react-router-dom";


export const NavLink = ({ path, activeOnlyWhenExact, label }) => {
  return (
    <Route path={path} exact={activeOnlyWhenExact} children={(props) => {
        return (
        <li className={`nav-item d-flex ${props.match ? "active" : ""}`}>
          <Link to={path} className="nav-link d-flex align-items-center">{label}</Link>
        </li>
        )
    }}/>
  );
};