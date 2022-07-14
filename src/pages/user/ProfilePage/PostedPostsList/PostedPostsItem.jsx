import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UserActions } from "../../../../actions";
import { URL } from "../../../../constants";
import { Utils } from "../../../../helper";
import { postService } from './../../../../apis';
import * as PostActions from "../../../../actions/postAction";

export const PostedPostItem = (props) => {
    const { title, createdDate, id, counter, content } = props.post;
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth)
    const handleDeletePost = (event) => {
        event.preventDefault();
        Utils.alertNotice("Are you sure you want to delete?", "Delete", "danger").then((result) => {
            if(result.isConfirmed) {
                postService.deletePost(id).then(response => {
                    if(response.status === 200) dispatch(PostActions.getAllPosts({limit: 3}))
                });
            }
        })
    };
    return (
      <details style={{marginTop: "10px"}}>
        <summary className="summary-description">
            <div>{title}</div>
            <Link to={`${URL.POST_DETAILS_URL}/${id}`} className="badge badge-pill badge-success p-2"
             style={{marginLeft: "10px"}}>{`${counter} views`}</Link>
        </summary>
        <p className="details-content">
            {content}
        </p>
        <div className="details-control">
          <span>Created: {createdDate}</span>
          <div>
            <Link to={`${URL.POST_EDIT_URL}/${id}`} className="btn btn-outline-warning btn-round btn-sm mr-1">Edit post</Link>
            <Link to={`${URL.POST_DELETE_URL}`} className="btn btn-outline-danger btn-round btn-sm"
              onClick={(event) => {handleDeletePost(event)}}
            >Delete post</Link>
          </div>
        </div>
      </details>
    );
  };