import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UserActions } from '../../../../actions';
import { URL } from "../../../../constants";
import { PostedPostItem } from "./PostedPostsItem";
import * as postActions from "../../../../actions/postAction";

export const PostedPostsList = (props) => {
  const postedPosts = useSelector((state) => state.page.posts);
  const dispatch = useDispatch();
  if (postedPosts) {
    const { data, pagination } = postedPosts;
    const { page, limit, total } = pagination;
    const handleChangePage = (page) =>
        dispatch(postActions.getAllPosts({ limit, page}))
    return (
        <>
          <section className="card" style={{border: 0, paddingTop: "11px"}}>
            <div className="card-header bg-primary" style={{display: "flex", justifyContent: "space-between"}}>
              <h4 className="text-white" style={{fontWeight: "bold"}}>Posted posts list</h4>
              <Link to={`${URL.POST_CREATE_URL}`} className="btn btn-success font-weight-bold">Post new</Link>
            </div>
            <div className="card-body posted">
              {data.length > 0 ? data.map((post) => <PostedPostItem key={post.id} post={post}/>):"No posted posts found."}
            </div>
            <div className="text-center">
          <span
              className={`mr-3 ctrl ctrl-p${page === 1 ? " ctrl-disabled" : ""}`}
              onClick={() => handleChangePage(page - 1)}>
            {"<<"}
          </span>
              <span
                  className={`ctrl ctrl-n${page < total ? "" : " ctrl-disabled"}`}
                  onClick={() => handleChangePage(page + 1)}>
            {">>"}
          </span>
            </div>
          </section>
        </>
    );
  } else {
    return null;
  }
};
