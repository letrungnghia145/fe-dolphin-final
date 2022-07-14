import { UserWrapper } from "../../../common";
import { HomePage as Wrappered } from "./HomePage";

export const HomePage = () => UserWrapper(Wrappered);
