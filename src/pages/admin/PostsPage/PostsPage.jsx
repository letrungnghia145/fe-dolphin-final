import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { PostActions, UIActions } from "../../../actions";
import { PostsList } from "./PostsList";

export const PostsPage = () => {
  const dispatch = useDispatch();
  const pageFilters = {
    postsFilters: { limit: 5 },
  };
  const [isSelectAll, setSelectAll] = useState(false);
  useEffect(() => {
    dispatch(UIActions.fetchDataAdminPostsPage(pageFilters));
  }, []);
  return (
    <div className="container">
      <PostsList isSelectAll={isSelectAll} />
    </div>
  );
};
