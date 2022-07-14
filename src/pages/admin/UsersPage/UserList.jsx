import { useSelector } from "react-redux";
import { UserItem } from "./UserItem";
import {useEffect} from "react";

export const UsersList = (props) => {
  const {users, auth} = props;
  const data = users ? users.data : undefined;
  const length = data ? data.length : undefined;
  const showUsers = () => {
    return users.map((user) => {
      return user.id !== auth.id ? <UserItem key={user.id} user={user} /> : null;
    });
  };
  useEffect(() => {
    console.log(users)
  });

  if (users && users.data && users.data.length > 0) {
    return showUsers(users.data);
  } else {
    return null;
  }
};
