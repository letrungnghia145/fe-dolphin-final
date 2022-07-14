import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CategoryActions } from "../../../../actions";
import { Pagination } from "../../../../common";
import { AccordionItem } from "./AccordionItem";

export const Accordion = (props) => {
  const categories = useSelector((state) => state.page.categories);
  const dispatch = useDispatch();
  const [current, setCurrent] = useState(0);
  useEffect(()=>{
    if (current > 0) {
      const filter = categories.data.filter((category) => category.id === current);
      props.setSelectedCategory(filter[0]);
    } else {
      props.setSelectedCategory(undefined);
    }
  },[current]);
  if (categories) {
    const { data, pagination } = categories;
    const onChangePage = (page) => {
      dispatch(CategoryActions.getAllCategories({limit: pagination.limit, page}));
      window.scroll({ top: 0, left: 0, behavior: "smooth"})
    }
    return (<>
      <div id="accordion" className="mb-4" >
          {data.map((category) => {
              const { id } = category;
              return <AccordionItem reset={props.reset} resetSelected={props.resetSelected}
              current = { current } setCurrent = { setCurrent }
              category = { category } key = { id }/>
          })}
      </div>
      <hr />
      <Pagination page={pagination.page} total={pagination.total} onChangePage={onChangePage}/></>
    );
  }
  return <div>No categories found.</div>;
};
