import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { UIActions } from "../../../actions";
import { Heading, TagBoard } from "../../../common";
import { PostsList } from "./PostsList";


export const HomePage = (props) => {
  const dispatch = useDispatch();
  const pageFilters = {
    postsFilters: {
      limit: 3,
      sort: "countViews:desc"
    },
    tagsFilters: {}
  }
  useEffect(() => {
    dispatch(UIActions.fetchDataHomePage(pageFilters));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (<>
    <Heading pageText={"Welcome to Dolphin's home"} />
    <div className="row">
      <PostsList filters={pageFilters.postsFilters} />
      <TagBoard/>
    </div>
  </>);
};
