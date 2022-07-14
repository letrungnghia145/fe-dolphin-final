import { adminRoutes } from "./adminRoute";
import { userRoutes } from "./userRoute";
import { commonRoutes } from "./commonRoute";

export const routes = [...adminRoutes, ...commonRoutes, ...userRoutes];
