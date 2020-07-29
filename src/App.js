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
import Auth from "./pages/auth/";
import Programs from "./pages/programs/";
import Diets from "./pages/diets/";
import Exercises from "./pages/exercises/";
import MuscleGroup from "./pages/exercises/components/MuscleGroup";
import AddProgram from "./pages/addProgram/";
import EditProgram from "./pages/editProgram/";
import Program from "./pages/program";

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
              <Route path="/exercises/musclegroup/:id" component={MuscleGroup} exact />
              <Route path="/auth" component={Auth} exact />
              <Route path="/editProgram/:id" component={EditProgram} exact />
              <PrivateRoute
                path="/addProgram"
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
