import { Link } from "react-router-dom";
import { URL } from './../../../../constants';

export const ResultItem = (props) => {
  const { title, content, tags, id } = props.post;
  const showPostTags = (tags) => {
    return tags.map((tag) => {
      const { id, name } = tag;
      return <Link className="badge badge-pill badge-primary p-2 px-3 ml-1" to={`${URL.TAG_DETAILS_URL}/${id}`} key={id}>
                {name}
      </Link>
    });
  };
  return (
    <div className="row">
      <div className="col-md-7">
        <Link to={`${URL.POST_DETAILS_URL}/${id}`}>
          <img className="img-fluid rounded mb-3 mb-md-0" src="http://placehold.it/700x300" alt="img"/>
        </Link>
      </div>
      <div className="col-md-5" style={{padding: "25px"}}>
        <h3>{title}</h3>
        <p className="content-post">{content}</p>
        <div className="post-pill">
          <Link className="btn btn-primary" to={`${URL.POST_DETAILS_URL}/${id}`}>Read</Link>
          <div className="inner-post-pill">Tags:
            {showPostTags(tags)}
          </div>
        </div>
      </div>
    </div>
  );
};
