import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { URL } from "../../../constants";
import postImg from './../../../assets/images/900x300.png';

export const PostContent = (props) => {
  const { post } = props;
  if (post) {
    const { firstName, lastName, id } = post.author;
    return (
      <>
        <img className="img-fluid rounded" src={postImg} alt="" />
        <hr />
        <p>
          Posted on {post.createdDate}
          <span className="float-right">
            By <Link to={`${URL.USER_INFO_URL}/${id}`}>{`${firstName} ${lastName}`}</Link>
          </span>
        </p>
        <hr />
        <p>{post.content}</p>
      </>
    );
  } else {
    return null;
  }
};
