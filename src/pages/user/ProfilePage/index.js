import { UserWrapper } from "../../../common";
import { ProfilePage as Wrappered } from "./ProfilePage";

export const ProfilePage = () => UserWrapper(Wrappered);
