import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { PostActions } from "../../../../actions";
import { Pagination } from "../../../../common";
import { ResultItem } from "./ResultItem";

export const ResultList = () => {
  const posts = useSelector((state) => state.page.posts);
  const dispatch = useDispatch();
  if (posts && posts.data.length > 0) {
    const { data, pagination } = posts;
    const { page, total, limit } = pagination;
    const onChangePage = (page) => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      dispatch(PostActions.getAllPosts({ page, limit }));
    };
    return (
      <>
        {data.map((post) => {
          return (
            <React.Fragment key={post.id}>
              <ResultItem post={post} />
              <hr />
            </React.Fragment>
          );
        })}
        <Pagination page={page} total={total} onChangePage={onChangePage} />
      </>
    );
  }
  return <h1>No posts found.</h1>;
};
