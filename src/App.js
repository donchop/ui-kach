import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Grid, CssBaseline } from "@material-ui/core";
import { Provider } from "react-redux";
import store from "./store";

import PrivateRoute from "./components/routing/privateRoute";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./pages/auth/actions/auth";
import Header from "./components/Header";
import Main from "./pages/main/";
import Programs from "./pages/programs/";
import Diets from "./pages/diets/";
import Exercises from "./pages/exercises/";
import AddProgram from "./pages/programs/components/AddProgram";
import Program from "./pages/programs/components/Program";
import Auth from "./pages/auth/";

const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <CssBaseline>
          <Header />
          <Grid item container style={{ height: "100vh", marginTop: "60px" }}>
            <Switch>
              <Route path="/" component={Main} exact />
              <Route path="/programs" component={Programs} exact />
              <Route path="/programs/:id" component={Program} exact />
              <Route path="/diets" component={Diets} exact />
              <Route path="/exercises" component={Exercises} exact />
              <Route path="/auth" component={Auth} exact />
              <PrivateRoute
                path="/programs/addProgram"
                component={AddProgram}
                exact
              />
              <Redirect to="/" />
            </Switch>
          </Grid>
        </CssBaseline>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
