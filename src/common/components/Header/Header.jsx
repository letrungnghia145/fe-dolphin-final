import React, { useEffect } from "react";
import { NavLink } from "./NavLink";
import { HeaderSearchForm } from "./HeaderSearchForm";
import { PageLoading } from "../PageLoading";
import { useSelector } from "react-redux";
import { LoginStatus } from "./LoginStatus";
import { Link } from "react-router-dom";
import { URL } from "../../../constants";

export const Header = () => {
  const page = useSelector((state) => state.page);
  const menus = [
    // {
    //   path: "/home",
    //   exact: true,
    //   label: "Home",
    // },
    // {
    //   path: "/category",
    //   exact: true,
    //   label: "Category",
    // },
    // {
    //   path: "/event",
    //   exact: true,
    //   label: "Event",
    // },
    // {
    //   path: "/about",
    //   exact: true,
    //   label: "About",
    // },
  ];
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <PageLoading isLoading={page ? page.isLoading : false} />
      <div className="px-0 bg-primary navbar-wrap mb-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <nav className="navbar px-0 navbar-expand-lg navbar-light">
                <Link className="navbar-brand" to={URL.HOME_URL}>
                  Dolphin
                </Link>
                <div className="collapse navbar-collapse" id="navbarsExample03">
                  <ul className="navbar-nav m-auto">
                    {menus.map((menu, index) => {
                      return (
                        <NavLink
                          label={menu.label}
                          path={menu.path}
                          activeOnlyWhenExact={menu.exact}
                          key={index}
                        />
                      );
                    })}
                  </ul>
                  <HeaderSearchForm />
                </div>
              </nav>
              <LoginStatus />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
