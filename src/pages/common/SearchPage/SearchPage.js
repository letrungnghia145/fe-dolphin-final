import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { UIActions } from "../../../actions";
import { Heading } from "../../../common";
import { ResultList } from "./ResultList";

export const SearchPage = (props) => {
  const location = useLocation();
  const param = new URLSearchParams(location.search);
  const key = param.get("key");
  const dispatch = useDispatch();
  const pageFilters = {
    postsFilters: { limit: 5, keyword: `like:%${key}%` },
  };
  useEffect(() => {
    dispatch(UIActions.fetchDataSearchPage(pageFilters));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
  return (
    <>
      <Heading pageText="Results match keyword" />
      <ResultList />
    </>
  );
};
