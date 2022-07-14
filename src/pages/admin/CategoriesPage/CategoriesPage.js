import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { UIActions } from "../../../actions";
import { Accordion } from "./Accordion/Accordion";
import { SideControl } from "./SideControl";

export const CategoriesPage = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(undefined);
  const pageFilters = {
    categoriesFilters: { limit: 5 },
  };
  const [reset, resetSelected] = useState(false);
  useEffect(() => {
    dispatch(UIActions.fetchDataAdminCategoriesPage(pageFilters));
  }, []);
  return (
    <>
      <Accordion reset={reset} setSelectedCategory={setSelectedCategory} resetSelected={resetSelected} />
      <SideControl category={selectedCategory} resetSelected={resetSelected} setSelectedCategory={setSelectedCategory} />
    </>
  );
};
