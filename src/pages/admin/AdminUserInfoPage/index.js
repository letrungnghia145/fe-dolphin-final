import { AdminLayout } from "../../../common/layout/AdminLayout";
import { AdminUserInfoPage as Wrappered } from "./AdminUserInfoPage";

export const AdminUserInfoPage = () => {
  return (
    <AdminLayout>
      <Wrappered />
    </AdminLayout>
  );
};
