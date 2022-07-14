import { useDispatch, useSelector } from "react-redux";
import { PostActions } from "../../../../actions";
import { Pagination } from "../../../../common";
import { PostsItem } from "./PostsItem";

export const PostsList = (props) => {
  const { filters } = props;
  const posts = useSelector((state) => state.page.posts);
  const dispatch = useDispatch();
  const showPosts = (posts) => {
    return posts.map((post) => {
      return <PostsItem post={post} key={post.id} />;
    });
  };
  if (posts && posts.data.length > 0) {
    const { data, pagination } = posts;
    const onChangePage = (page) => {
      window.scrollTo({top: 0, left: 0, behavior: "smooth"})
      dispatch(PostActions.getAllPosts({...filters, page}))
    }
    return (
      <>
        <div className="col-md-8">
          {showPosts(data)}
          <Pagination total={pagination.total} page={pagination.page} onChangePage={onChangePage} />
        </div>
      </>
    );
  } else {
    return <div className="text-center col-md-8">No posts found.</div>;
  }
};
