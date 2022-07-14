import { push } from "connected-react-router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { URL } from "../../../constants";

export function HeaderSearchForm() {
  const [searchKey, setSearchKey] = useState("");
  const dispatch = useDispatch();
  const onSearch = (event) => {
    event.preventDefault();
    dispatch(push({
      search: `key=${searchKey}`,
      pathname: URL.POST_SEARCH
    }))
  }
  return (
    <form className="form-inline my-2 my-lg-0" onSubmit={(event) => onSearch(event)}>
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Find post"
        value={searchKey}
        onChange={(event) => setSearchKey(event.target.value)}
      />
      <button className="btn btn-white btn-round my-2 my-sm-0" type="submit">
        <i className="ion-ios-search" />
      </button>
    </form>
  );
}
