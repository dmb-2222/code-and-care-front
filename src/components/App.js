import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuth} from '../redux/Auth/authSelectors';
import routes from "../routes";

import "./App.css";
import Header from "./Header";

const App = () => {
  const isLogin = useSelector(isAuth)
  return (
    <div>
      <Header />
      <Switch>
        <Suspense fallback={<h2>Загрузка...</h2>}>
          <Route
            path={routes.AUTH_PAGE.path}
            component={routes.AUTH_PAGE.component}
          />
          <Route
            path={routes.CALENDAR_PAGE.path}
            component={routes.CALENDAR_PAGE.component}
          />
          {!isLogin ? <Redirect to="/auth" /> : <Redirect to="/calendar" />}
        </Suspense>
      </Switch>
    </div>
  );
};

export default App;
