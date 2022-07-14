import React from "react";
import { useSelector } from "react-redux";
import { SideBar } from "./SideBar";
import { PageLoading } from './../components';

export const AdminLayout = (props) => {
  const isLoading = useSelector((state) => state.page.isLoading);
  const header = props.header;
  return (<>
  <PageLoading isLoading={isLoading}/>
    <div className="page-wrapper chiller-theme toggled">
      <SideBar />
      <main className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="form-group col-md-12">
              {/* Heading */}
              <h2>{header}</h2>
              <hr />
              {/* Heading */}
              {props.children}
              <hr />
            </div>
          </div>
          <footer className="text-center">
            <div className="mb-2">
              <small>
                © 2021 made with {" "}
                <i className="fa fa-heart" style={{ color: "red" }} /> by - {" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/letrungnghia145/fe-dacnpm"
                >
                  Dolphins
                </a>
              </small>
            </div>
          </footer>
        </div>
      </main>
    </div>
    </>
  );
};
