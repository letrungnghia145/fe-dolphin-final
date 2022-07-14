import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { URL } from "../../constants";

export const TagBoard = (props) => {
  const tags = useSelector((state) => state.page.tags);
  if (tags && tags.data) {
    const { data } = tags;
    return (
      <div className="col-md-4">
        <div className="card">
          <h5 className="card-header">Tags</h5>
          <div className="card-body">
            {data.length> 0 ? <div className="row">{showTagBoard(data)}</div>: <div>No tags found.</div>}
          </div>
          <Link to={URL.CATEGORY_URL} className="btn btn-primary" style={{borderRadius: 0}} >{"Show more ->"}</Link>
        </div>
        <div className="card my-4">
          <h5 className="card-header">Side Widget</h5>
          <div className="card-body">
            You can put anything you want inside of these side widgets. They are
            easy to use, and feature the new Bootstrap 4 card containers!
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

const showTagBoard = (tags) => {
  return (
    <>
      <div className="col-lg-12">
        <ul className="list-unstyled mb-0">
          {tags.map((tag) => {
            return (
              <li key={tag.id}>
                <Link to={`${URL.TAG_URL}/${tag.id}`}>{tag.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
