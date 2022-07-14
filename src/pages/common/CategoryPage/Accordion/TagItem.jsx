import { Link } from "react-router-dom";
import { URL } from "../../../../constants";

export const TagItem = (props) => {
  const { tag } = props;
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="mb-0">
          <Link to={`${URL.TAG_URL}/${tag.id}`} aria-expanded="false">
            <i className="fa fa-tag mr-2" aria-hidden="true"></i>
            {tag.name}
          </Link>
        </h5>
      </div>
    </div>
  );
};
