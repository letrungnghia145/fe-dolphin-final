import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useRouteMatch } from "react-router-dom";
import { UIActions } from "../../../actions";
import { URL } from "../../../constants";
import { InfoBoard } from "./InfoBoard";
import { PostedPostsList } from "./PostedPostList";
import { SharedPostsList } from "./SharedPostList";

export const UserInfoPage = (props) => {
  const match = useRouteMatch();
  const { id } = match.params;
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const pageFilters = {
    id: id,
    sharedPostsFilters: { limit: 3 },
    postedPostsFilters: { limit: 3 },
  };
  useEffect(() => {
    dispatch(UIActions.fetchDataUserInfoPage(pageFilters));
  }, []);
  if (auth && auth.id === parseInt(id)) {
    return <Redirect to={URL.USER_PROFILE_URL} />;
  }
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-lg-6"
          style={{ display: "flex", alignItems: "center" }}
        >
          <img
            className="img-fluid rounded mb-4"
            src="http://placehold.it/750x450"
            alt=""
          />
        </div>
        <div className="col-lg-6">
          <InfoBoard />
        </div>
      </div>
      <hr />
      <h4
        className="bg-primary text-white text-bold"
        style={{ padding: "10px", fontWeight: "bold" }}
      >
        Posted posts list
      </h4>
      <hr />
      <PostedPostsList id={id} />
      <hr />
      <h4
        className="bg-primary text-white text-bold"
        style={{ padding: "10px", fontWeight: "bold" }}
      >
        Shared posts list
      </h4>
      <hr />
      <SharedPostsList id={id} />
    </div>
  );
};
