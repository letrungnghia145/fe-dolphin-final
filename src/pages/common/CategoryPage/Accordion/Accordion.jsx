import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { CategoryActions } from "../../../../actions";
import { Pagination } from "../../../../common";
import { AccordionItem } from "./AccordionItem";

export const Accordion = () => {
  const categories = useSelector((state) => state.page.categories);
  const [ currentCategoryShow, setCurrentCategoryShow ] = useState(0);
  const dispatch = useDispatch();
  if (categories) {
    const { data, pagination } = categories;
    const onChangePage = (page) => {
      dispatch(CategoryActions.getAllCategories({limit: pagination.limit, page}));
      window.scroll({ top: 0, left: 0, behavior: "smooth"})
    }
    return (<>
      <div id="accordion" className="myaccordion w-100 text-center py-4 px-1 px-md-4" >
          {data.map((category) => {
              const { id } = category;
              return <AccordionItem category = { category } key = { id }
              active = { currentCategoryShow === id ? true : false }
              setCurrentCategoryShow = { setCurrentCategoryShow } />
          })}
      </div>
      <hr />
      <Pagination page={pagination.page} total={pagination.total} onChangePage={onChangePage}/></>
    );
  }
  return <div>No categories found.</div>;
};
