import { useDispatch, useSelector } from "react-redux";
import { PostActions } from "../../../actions";
import { Pagination, PostUtilItem } from "../../../common";

export const RelatedPostList = (props) => {
  const posts = useSelector(state=>state.page.posts);
  const dispatch = useDispatch();
  if (posts) {
    const {data, pagination} = posts;
    const onChangePage = (page) => {
      dispatch(PostActions.getAllPosts({limit: pagination.limit, page}))
    }
    
    return (
      <>
        <div className="row">
          {data.map((post) => {
            return <PostUtilItem actionText="Continue reading" key={post.id} post={post} />;
          })}
        </div>
        <hr />
        <Pagination page={pagination.page} total={pagination.total} onChangePage={onChangePage}/>
      </>
    );
  } else {
    return null;
  }
};
