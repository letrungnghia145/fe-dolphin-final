import { Link } from "react-router-dom";
import { URL } from "../../../../constants";

export const PostsItem = (props) => {
  const { post } = props;
    console.log(post)
  const { authorId, title, content, id } = post;
  // const showPostTags = (tags) => {
  //   return tags.map(tag =>{
  //     const { id, name } = tag;
  //     return (
  //       <Link className="badge badge-pill badge-primary p-2 px-3 ml-1"
  //         to={`${URL.TAG_URL}/${id}`}
  //         key={id}
  //       >
  //         {name}
  //       </Link>
  //   )})
  // }
  return (
    <div className="card mb-4">
      {/* <img className="card-img-top" src="http://placehold.it/750x300" alt="Card image cap" /> */}
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-text content-post">{content}</p>
        <div className="post-pill">
          <Link to={`${URL.POST_DETAILS_URL}/${id}`} className="btn btn-primary">
            Read More →
          </Link>
          <div className="inner-post-pill">
            {/*Tags:*/}
            {/*{showPostTags(tags)}*/}
          </div>
        </div>
      </div>
      <div className="card-footer text-muted">
        Created at {post.createdDate} by
        <Link to={`${URL.USER_INFO_URL}/${authorId}`}> user {authorId}</Link>
      </div>
    </div>
  );
};
