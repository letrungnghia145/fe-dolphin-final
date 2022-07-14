import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router";
import { TagActions, UIActions } from "../../../actions";
import { ItemRow } from "./ItemRow";
import { Pagination, Heading } from "./../../../common";

export const TagPage = () => {
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const pageFilters = {
    id: match.params.id,
    postsFilters: { limit: 10 },
  };
  const columns = ["Title", "Posted date", "View", "Author"];
  const posts = useSelector((state) => state.page.posts);
  const tag = useSelector((state) => state.page.tag);
  const pagination = posts ? posts.pagination : undefined;
  const showPosts = (posts) => {
    if (posts.length > 0) {
      return posts.map((post) => <ItemRow key={post.id} post={post} />);
    }
    return <div className="text-center">No posts</div>;
  };
  const onChangePage = (page) => {
    dispatch(
      TagActions.getTagPosts(match.params.id, { limit: pagination.limit, page })
    );
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };
  useEffect(() => {
    dispatch(UIActions.fetchDataTagPage(pageFilters));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <React.Fragment>
      <Heading pageText={tag ? tag.name : null} />
      <table className="table table-hover table-bordered text-center">
        <thead className="bg-light table-header">
          <tr>
            {columns.map((column, index) => (
              <th key={index}>
                <div>
                  {column}
                  <i className="fa fa-arrow-down" aria-hidden="true" />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{posts ? showPosts(posts.data) : null}</tbody>
      </table>
      {pagination ? (
        <Pagination
          page={pagination.page}
          total={pagination.total}
          onChangePage={onChangePage}
        />
      ) : null}
    </React.Fragment>
  );
};
