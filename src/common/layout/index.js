import { UserLayout } from "./UserLayout";
import { AdminLayout } from "./AdminLayout";

export const UserWrapper = (Component) => {
  return (
    <UserLayout>
      <Component />
    </UserLayout>
  );
};
export const AdminWrapper = (Component) => {
  return (
    <AdminLayout>
      <Component />
    </AdminLayout>
  );
};
