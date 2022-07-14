import { go } from "connected-react-router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { CategoryActions } from "../../../actions";
import { categoryService } from "../../../apis/category";
import { Utils } from "../../../helper";

export const FormEdit = (props) => {
  const [newCategory, setNewCategoryProps] = useState({ ...props.category });
  const { name, tags } = newCategory;
  const [tag, setTagProps] = useState({
    name: "",
  });

  const options = {
    ADD_TAG: "ADD_TAG",
    REMOVE_TAG: "REMOVE_TAG",
  };

  const dispatch = useDispatch();

  const handleTagsChange = (option, tag) => {
    const temp = [...newCategory.tags];
    if (option === options.ADD_TAG) {
      temp.push(tag);
      setTagProps({ name: "" });
    } else {
      temp.splice(temp.indexOf(tag), 1);
    }
    setNewCategoryProps({ ...newCategory, tags: temp });
  };

  const onUpdateCategory = (event) => {
    event.preventDefault();
    categoryService.updateCategory(newCategory).then((response) => {
      if (response.status === 200)
        Utils.alertSuccess("Updated category successfully").then((result) => {
          dispatch(CategoryActions.getAllCategories({ limit: 5, page: 1 }));
          window.scroll({ top: 0, left: 0, behavior: "smooth" });
          setNewCategoryProps({ tags: [], name: "" });
          props.setSelectedCategory(undefined)
          props.setActive(false);
        });
    });
  };

  return (
    <form
      style={{ margin: "20px 130px" }}
      onSubmit={(event) => onUpdateCategory(event)}
    >
      <div className="form-group">
        <label>Category's name:</label>
        <input
          type="text"
          required
          name="name"
          className="form-control"
          value={name}
          onChange={(event) =>
            setNewCategoryProps({ ...newCategory, name: event.target.value })
          }
        />
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>Add tags:</label>
            <div className="input-group mb-3">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter tag's name"
                value={tag.name}
                onChange={(event) => {
                  setTagProps({ ...tag, name: event.target.value });
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
          {/* {status ? <span className="ml-2 text-success">Created &#10004;</span>:null} */}
        </div>
        <div
          className="col-md-6"
          style={{ padding: "37px", borderLeft: "1px solid" }}
        >
          {tags.length > 0
            ? tags.map((tag, index) => {
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
            : "Category have no tags."}
        </div>
      </div>
    </form>
  );
};
