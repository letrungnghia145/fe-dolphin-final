import { push } from "connected-react-router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { CategoryActions } from "../../../actions";
import { URL } from "../../../constants";
import { Utils } from "../../../helper";
import { categoryService } from "./../../../apis";

export const FormCreate = (props) => {
  const options = {
    ADD_TAG: "ADD_TAG",
    REMOVE_TAG: "REMOVE_TAG",
  };
  const dispatch = useDispatch();
  const [category, setCategoryProps] = useState({
    name: "",
    tags: [],
  });
  const [tag, setTagProps] = useState({
    name: "",
  });
  const handleTagsChange = (option, tag) => {
    const temp = [...category.tags];
    if (option === options.ADD_TAG) {
      temp.push(tag);
      setTagProps({ name: "" });
    } else {
      temp.splice(temp.indexOf(tag), 1);
    }
    setCategoryProps({ ...category, tags: temp });
  };
  const onCreateCategory = (event) => {
    event.preventDefault();
    categoryService.createCategory(category).then((response) => {
      if (response.status === 201) {
        Utils.alertSuccess("Add category successfully").then((result) => {
          dispatch(CategoryActions.getAllCategories({ limit: 5, page: 1 }));
          window.scroll({ top: 0, left: 0, behavior: "smooth" });
          setCategoryProps({ tags: [], name: "" });
          props.setActive(false);
        });
      }
    });
  };
  return (
    <form
      style={{ margin: "20px 130px" }}
      onSubmit={(event) => onCreateCategory(event)}
    >
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Category's name:</label>
        <input
          type="text"
          required
          name="name"
          className="form-control"
          placeholder="Enter category's name"
          value={category.name}
          onChange={(event) => {
            const { name, value } = event.target;
            setCategoryProps({ ...category, [name]: value });
          }}
        />
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Add tags:</label>
            <div className="input-group mb-3">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter tag's name"
                value={tag.name}
                onChange={(event) => {
                  const { name, value } = event.target;
                  setTagProps({ ...tag, [name]: value });
                }}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => handleTagsChange(options.ADD_TAG, tag)}
                >
                  Add tag
                </button>
              </div>
            </div>
            <small id="emailHelp" className="form-text text-muted">
              Type and press button to add category's tag.
            </small>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <div
          className="col-md-6"
          style={{ padding: "37px", borderLeft: "1px solid" }}
        >
          {category.tags.length > 0
            ? category.tags.map((tag, index) => {
                return (
                  <span
                    key={index}
                    className="badge badge-pill badge-success p-2 px-3 mr-1"
                    onClick={() => handleTagsChange(options.REMOVE_TAG, tag)}
                  >
                    {tag.name}
                  </span>
                );
              })
            : "Category's tags with show here."}
        </div>
      </div>
    </form>
  );
};
