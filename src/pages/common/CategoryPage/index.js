import { UserWrapper } from "../../../common";
import { CategoryPage as Wrappered } from "./CategoryPage";

export const CategoryPage = () => UserWrapper(Wrappered);
