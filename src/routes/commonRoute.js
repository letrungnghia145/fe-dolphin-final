import {
  CategoryPage,
  HomePage,
  LoginPage,
  PostDetailsPage,
  RegisterPage,
  SearchPage,
  TagPage,
  UserInfoPage
} from "../pages";
import { URL } from "./../constants";

export const commonRoutes = [
  {
    path: `${URL.HOME_URL}`,
    exact: true,
    roles: [],
    component: (props) => <HomePage {...props} />,
  },
  {
    path: `${URL.LOGIN_URL}`,
    exact: true,
    roles: [],
    component: (props) => <LoginPage {...props} />,
  },
  {
    path: `${URL.REGISTER_URL}`,
    exact: true,
    roles: [],
    component: (props) => <RegisterPage {...props} />,
  },
  {
    path: `${URL.POST_DETAILS_URL}/:id`,
    exact: true,
    roles: [],
    component: (props) => <PostDetailsPage {...props} />,
  },
  {
    path: `${URL.POST_SEARCH}`,
    exact: true,
    roles: [],
    component: (props) => <SearchPage {...props} />,
  },
  {
    path: `${URL.CATEGORY_URL}`,
    exact: true,
    roles: [],
    component: (props) => <CategoryPage {...props} />,
  },
  {
    path: `${URL.TAG_URL}/:id`,
    exact: true,
    roles: [],
    component: (props) => <TagPage {...props} />,
  },
  {
    path: `${URL.USER_INFO_URL}/:id`,
    exact: true,
    roles: [],
    component: (props) => <UserInfoPage {...props} />,
  },
];
