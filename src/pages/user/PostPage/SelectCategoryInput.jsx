import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CategoryActions } from "../../../actions";

export const SelectCategoryInput = (props) => {
  const { post, setPostProps } = props;
  const ref = useRef();
  const categories = useSelector((state) => state.page.categories);
  const [currentCates, setCurrentCates] = useState([]);
  const [isShowSelect, setShowSelect] = useState(false);
  const dispatch = useDispatch();

  const handleScroll = () => {
    const height = ref.current.scrollHeight;
    const bottom = Math.floor(
      ref.current.scrollTop + ref.current.offsetHeight + 1
    );
    const { page, total } = categories.pagination;
    if (height === bottom && page < total) {
      dispatch(CategoryActions.getAllCategories({ page: page + 1, total }));
    }
  };
  
  useEffect(() => {
    if (categories) {
      setCurrentCates([...currentCates, ...categories.data]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories]); 

  const showCategories = (categories) => {
    if (categories.length > 0)
      return (
        <div className="custom-dropdown">
          <ul style={{ width: "307px", color: "white" }} onScroll={() => handleScroll()} ref={ref}>
            {categories.map((category) => {
              return ( <li key={category.id} onClick={() => {
                setPostProps({ ...post, category: category})
                setShowSelect(false);
              }}>{category.name}</li>);
            })}
          </ul>
        </div>);
    return null};
  return (
    <div className="form-group dropdown-wrapper">
      <label className="label" htmlFor="tag">
        Category
      </label>
      <div className="form-control">
        <div className="custom-select-input" onClick={() => setShowSelect(!isShowSelect)}>
          {!post.category.name ? "Select category": post.category.name}
          <i className="fa fa-caret-down" aria-hidden="true"></i>
        </div>
      </div>
      {isShowSelect ? showCategories(currentCates) : null}
    </div>
  );
};
