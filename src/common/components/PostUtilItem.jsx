import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { URL } from './../../constants';

export const PostUtilItem = (props) => {
  const { title, content, id } = props.post;
  const { actionText } = props;
  const dispatch = useDispatch();
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body pb-5 px-4">
          <h5 className="card-title cus-item">{title}</h5>
          <p className="card-text rlt-item-content">{content}</p>

          <button onClick={() => dispatch(push(`${URL.POST_DETAILS_URL}/${id}`))} className="btn btn-info">
            {actionText}
          </button>
        </div>
      </div>
    </div>
  );
};
