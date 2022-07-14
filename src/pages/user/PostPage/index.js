import { UserWrapper } from "../../../common";
import { PostPage as Wrappered } from "./PostPage";

export const PostPage = () => UserWrapper(Wrappered);
