import { useRef, useState } from "react";

export const PostsItem = (props) => {
  const itemRef = useRef();
  const checkBoxRef = useRef();
  const { selected, setSelected, post, handleDeleteBatch } = props;
  const { content, title, id } = post;
  const [isShowControl, setShowControl] = useState(false);
  const handleAddCheck = (event) => {
    const { id, checked } = event.target;
    const temp = [...selected];
    if (checked) {
      temp.push(id);
    } else {
      temp.splice(selected.indexOf(id), 1);
    }
    setSelected(temp);
  };
  return (
    <li
      ref={itemRef}
      className="list-group-item clearfix cus"
      onMouseOver={() => {
        itemRef.current.classList.add("active");
      }}
      onMouseLeave={() => {
        if (!checkBoxRef.current.checked) {
          itemRef.current.classList.remove("active");
        }
      }}
    >
      <img
        className="img-responsive img-rounded img-ad-item"
        src="http://placehold.it/256/163a63"
        alt=""
      />
      <h3 className="list-group-item-heading">
        {title}
        {/* <span className="label label-danger pull-right">NEW !</span> */}
        <div className="form-check pull-right">
          <label className="custom-control fill-checkbox">
            <input
              type="checkbox"
              className="fill-control-input"
              id={id}
              ref={checkBoxRef}
              onClick={(event) => {
                handleAddCheck(event);
              }}
            />
            <span className="fill-control-indicator cus-check" />
          </label>
        </div>
      </h3>
      <p className="list-group-item-text lead">
        <span className="lead-modifier">{content}</span>
        <br />
        <a href="#">
          <small>Details…</small>
        </a>
      </p>
      <div className="btn-toolbar pull-right" role="toolbar" aria-label>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-default dropdown-toggle"
            onClick={() => setShowControl(!isShowControl)}
          >
            <i className="fa fa-fw fa-list" /> <span className="caret" />
          </button>
          {isShowControl ? (
            <ul
              className="dropdown-menu"
              style={{ display: "block", left: -65, padding: 18 }}
            >
              <li>
                <a href="">Edit</a>
              </li>
              <li>
                <a href="">Hide</a>
              </li>
              <li>
                <a href="" onClick={(event) => {event.preventDefault(); handleDeleteBatch([id])}}>Delete</a>
              </li>
            </ul>
          ) : null}
        </div>
      </div>
    </li>
  );
};
