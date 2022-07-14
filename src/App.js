import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { AuthActions } from "./actions";
import "./App.css";
import { NotFound, PrivateRoute } from "./common";
import { TOKEN_KEY, URL } from "./constants";
import { routes } from "./routes";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem(TOKEN_KEY)) {
      dispatch(AuthActions.authorizeUser());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Switch>
      {showRoutes(routes)}
      <Redirect exact from="/" to={URL.HOME_URL} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default App;

const showRoutes = (routes) => {
  return routes.map((route, index) => {
    const { roles } = route;
    if (roles.length > 0) {
      return <PrivateRoute key={index} {...route} />;
    } else {
      return <Route key={index} {...route} />;
    }
  });
};
