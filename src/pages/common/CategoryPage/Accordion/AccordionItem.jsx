import { TagItem } from "./TagItem";
import { categoryService } from './../../../../apis'
import { useState } from "react";

export const AccordionItem = (props) => {
    const { active, category, setCurrentCategoryShow } = props;
    const { name, id } = category;
    const [tags, setTags] = useState([]);
    const showCategoryTags = () => {
      active ? setCurrentCategoryShow(0): setCurrentCategoryShow(id);
      if (!tags.length>0) {
        categoryService.getCategoryTags(id, { limit: 30 }).then((response) => {
        setTags(response.data.data)
      })}
    }
    return (
        <div className="card">
          <div className="card-header">
            <h2 className="mb-0">
              <button className="d-flex align-items-center justify-content-between btn btn-link collapsed"
               data-toggle="collapse"
               onClick = {()=>{showCategoryTags()}}
               >
                {name}
                <i className="fa" aria-hidden="true" />
              </button>
            </h2>
          </div>
          <div className={`collapse${active ? " show":""}`} data-parent="#accordion">
            <div className="card-body text-left">
              <div>
                {tags.length > 0 ? tags.map(tag => <TagItem tag={tag} key={tag} />) : <span>There's no such tag.</span>}
              </div>
            </div>
          </div>
        </div>
    )
}
