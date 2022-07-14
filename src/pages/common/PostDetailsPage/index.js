import { UserWrapper } from "../../../common";
import { PostDetailsPage as Wrappered } from "./PostDetailsPage";

export const PostDetailsPage = () => UserWrapper(Wrappered);
