import { useDispatch, useSelector } from "react-redux";
import { UserActions } from "../../../actions";
import { Pagination, PostUtilItem } from "../../../common";

export const PostedPostsList = (props) => {
  const postedPosts = useSelector((state) => state.page.postedPosts);
  const dispatch = useDispatch();
  if (postedPosts && postedPosts.data.length > 0) {
    const { data, pagination } = postedPosts;
    const onChangeSharedPostsPage = (page) => {
      dispatch(UserActions.getUserPostedPosts(props.id, {page, limit: pagination.limit}))
    }
    return (
      <>
        <div className="row">
          {data.map((post) => {
            return <PostUtilItem actionText="Read again" key={post.id} post={post} />;
          })}
        </div>
        <hr />
        <Pagination page={pagination.page} total={pagination.total} onChangePage={onChangeSharedPostsPage}/>
      </>
    );
  } else {
    return <div className="text-center">No shared posts found.</div>;
  }
};
