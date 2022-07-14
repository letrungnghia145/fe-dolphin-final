import { useDispatch, useSelector } from "react-redux";
import { UserActions } from "../../../actions";
import { Pagination, PostUtilItem } from "../../../common";

export const SharedPostsList = (props) => {
  const sharedPosts = useSelector((state) => state.page.sharedPosts);
  const dispatch = useDispatch();
  if (sharedPosts && sharedPosts.data.length > 0) {
    const { data, pagination } = sharedPosts;
    const onChangeSharedPostsPage = (page) => {
      dispatch(UserActions.getUserSharedPosts(props.id, {page, limit: pagination.limit}))
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
