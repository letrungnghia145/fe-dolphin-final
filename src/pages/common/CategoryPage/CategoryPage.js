import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { UIActions } from "../../../actions";
import { Heading } from "../../../common";
import { Accordion } from "./Accordion/Accordion";

export const CategoryPage = () => {
  const dispatch = useDispatch();
  const pageFilters = {
    categoriesFilters: { limit: 7 },
  };
  useEffect(() => {
    dispatch(UIActions.fetchDataCategoryPage(pageFilters));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <React.Fragment>
      <Heading pageText="All categories" />
      <hr />
      <Accordion />
    </React.Fragment>
  );
};
