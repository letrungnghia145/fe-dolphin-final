import React from "react";
import { Footer, Header } from "../components";

export const UserLayout = (props) => {
  return (
    <>
      <Header />
      <div className="container">
        {props.children}
      </div>
      <Footer />
    </>
  );
};
