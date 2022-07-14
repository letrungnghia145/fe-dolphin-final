import { AdminLayout } from "../../../common/layout/AdminLayout";
import { AdminDashBoardPage as Wrappered } from "./AdminDashBoardPage";

export const AdminDashBoardPage = () => (
  <AdminLayout header="Admin dashboard">
    <Wrappered />
  </AdminLayout>
);
