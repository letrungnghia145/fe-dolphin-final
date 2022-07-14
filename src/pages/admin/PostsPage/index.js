import { AdminLayout } from "../../../common/layout/AdminLayout";
import { PostsPage as Wrappered } from "./PostsPage";

export const PostsPage = () => {
  return (
    <AdminLayout header="Posts list">
      <Wrappered />
    </AdminLayout>
  );
};
