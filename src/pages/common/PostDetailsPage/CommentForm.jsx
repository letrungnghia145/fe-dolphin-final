import { push } from "connected-react-router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Utils } from './../../../helper';

export const CommentForm = (props) => {
  const location = useLocation();
  const [content, setContent] = useState("");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const onComment = (event) => {
    event.preventDefault();
    if (auth) {
      props.onComment(content);
    } else {
      Utils.alertNotice("You need login to write comment", "Go to login").then(result=>{
        if(result.isConfirmed) dispatch(push("/login", { from: location.pathname }));
      })
    }
    setContent("");
  };
  return (
    <>
      <div className="card my-4">
        <h5 className="card-header">{props.message}</h5>
        <div className="card-body">
          <form onSubmit={(event) => onComment(event)}>
            <div className="form-group">
              <textarea
                className="form-control"
                rows={3}
                value={content}
                onChange={(event) => setContent(event.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
