import {
  AdminDashBoardPage,
  AdminUserInfoPage,
  CategoriesPage,
  PostsPage,
  UsersPage
} from "../pages";

const prefix = "/admin";

export const adminRoutes = [
  {
    path: `${prefix}/dashboard`,
    exact: true,
    roles: [1],
    component: (props) => <AdminDashBoardPage {...props} />,
  },
  {
    path: `${prefix}/category`,
    exact: false,
    roles: [1],
    component: (props) => <CategoriesPage {...props} />,
  },
  {
    path: `${prefix}/users`,
    exact: true,
    roles: [1],
    component: (props) => <UsersPage {...props} />,
  },
  {
    path: `${prefix}/users/info/:id`,
    exact: true,
    roles: [1],
    component: (props) => <AdminUserInfoPage {...props} />,
  },
  {
    path: `${prefix}/profile/:id`,
    exact: true,
    roles: [1],
    component: (props) => <AdminUserInfoPage {...props} />,
  },
  {
    path: `${prefix}/posts`,
    exact: true,
    roles: [1],
    component: (props) => <PostsPage {...props} />,
  },
];
