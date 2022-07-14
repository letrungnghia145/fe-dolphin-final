import { useState } from "react";
import { Link } from "react-router-dom";

export const DropDownItem = (props) => {
  const [isShowSubMenu, setShowSubMenu] = useState(false);
  const { name, to, submenus, icon } = props.menu;
  return (
    <li className={`sidebar-dropdown${isShowSubMenu ? " active" : ""}`}>
      <Link to={to} onClick={(event) => {event.preventDefault(); setShowSubMenu(!isShowSubMenu)}}>
        <i className={`fa fa-${icon}`} />
        <span>{name}</span>
      </Link>
      {isShowSubMenu ? <div className="sidebar-submenu" >
        <ul>
            {submenus.map((submenu, index)=><li key={index}><Link to={submenu.to}>{submenu.name}</Link></li>)}
        </ul>
      </div>:null}
    </li>
  );
};
