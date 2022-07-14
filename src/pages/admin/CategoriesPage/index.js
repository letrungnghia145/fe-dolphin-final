import { AdminLayout } from "../../../common/layout/AdminLayout";
import { CategoriesPage as Wrappered } from "./CategoriesPage";

export const CategoriesPage = () => (
  <AdminLayout header="Manage Categories">
    <Wrappered />
  </AdminLayout>
);
