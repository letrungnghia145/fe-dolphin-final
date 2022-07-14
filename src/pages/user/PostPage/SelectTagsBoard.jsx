import React, { useEffect, useState } from "react";
import {categoryService, tagService} from "../../../apis";
import {useSelector} from "react-redux";

export const SelectTagsBoard = (props) => {
  const { setPostProps, post } = props;
  const tags = useSelector(state => state.page.tags);
  const [isShowSelect, setShowSelect] = useState(false);
  const ADD_TAG = "ADD_TAG";
  const REMOVE_TAG = "REMOVE_TAG";

  const onHandleSelectTag = (flag, tag) => {
    if (flag === ADD_TAG && !post.tags.includes(tag)) post.tags.push(tag);
    else if (flag === REMOVE_TAG) {
      const index = post.tags.indexOf(tag);
      if (index !== -1) {
        post.tags.splice(index, 1);
      }
    }
    setPostProps({ ...post, tags: post.tags });
  };

  const showSelect = () => {
    return tags ? <div className="custom-dropdown">
      <ul style={{ left: "-16px", color: "white" }}>
        {tags.data.map((tag) => {
          return ( <li key={tag.id} onClick={() => {
            onHandleSelectTag(ADD_TAG, tag)
            setShowSelect(false);
          }}>{tag.name}</li>);
        })}
      </ul>
    </div> : null;
  }

  const showSelectedTags = (tags) => {
    const items = tags.map((tag) => {
      const { id, name } = tag;
      return (
        <span
          key={id}
          className="badge custom-badge badge-pill badge-success p-2 px-3"
          onClick={() => {
            onHandleSelectTag(REMOVE_TAG, tag);
          }}
        >
          {name}
        </span>
      );
    });
    return items;
  };
  useEffect(() => {
    // setPostProps({...post, tags: []})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });
  return (
    <div className="info-wrap bg-primary w-100 p-md-5 p-4">
      {/*<h3 style={{ fontWeight: "bold", color: "white" }}>Select post's tags</h3>*/}
      <div className="mb-4">
        <div className="form-group dropdown-wrapper">
          <label className="label" htmlFor="tag">
            Category
          </label>
          <div className="form-control">
            <div className="custom-select-input" onClick={() => setShowSelect(!isShowSelect)}>
              {"Add more tags"}
              <i className="fa fa-caret-down" aria-hidden="true"></i>
            </div>
            {isShowSelect ? showSelect() : null}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12"></div>
        <div className="col-lg-12">
          <h2 className="heading-section mb-4">Selected tags</h2>
          {showSelectedTags(post.tags)}
        </div>
      </div>
    </div>
  );
};
