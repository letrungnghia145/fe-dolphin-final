import { UserWrapper } from "../../../common";
import { SearchPage as Wrappered } from "./SearchPage";

export const SearchPage = () => UserWrapper(Wrappered);
