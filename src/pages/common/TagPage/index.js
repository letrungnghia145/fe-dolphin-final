import { UserWrapper } from "../../../common";
import { TagPage as Wrappered } from "./TagPage";

export const TagPage = () => UserWrapper(Wrappered);
