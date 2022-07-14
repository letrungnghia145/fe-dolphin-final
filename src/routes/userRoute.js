import { ProfilePage, PostPage } from "./../pages";
import { URL } from "./../constants";

export const userRoutes = [
  {
    path: `${URL.USER_PROFILE_URL}`,
    exact: true,
    roles: [2, 1],
    component: (props) => <ProfilePage {...props} />,
  },
  {
    path: `${URL.POST_CREATE_URL}`,
    exact: true,
    roles: [2, 1],
    component: (props) => <PostPage {...props} />,
  },
  {
    path: `${URL.POST_EDIT_URL}/:id`,
    exact: true,
    roles: [2, 1],
    component: (props) => <PostPage {...props} />,
  },
];
