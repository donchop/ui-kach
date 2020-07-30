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
import Diets from "./pages/diets/";
import Programs from "./pages/programs/";
import Program from "./pages/program";
import AddProgram from "./pages/addProgram/";
import EditProgram from "./pages/editProgram/";
import Exercises from "./pages/exercises/";
import Exercise from "./pages/exercise/";
import MuscleGroup from "./pages/exercises/components/MuscleGroup";
import AddExercise from "./pages/addExercise/";
import EditExercise from "./pages/editExercise/";

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
              <Route
                path="/exercises/musclegroup/:id"
                component={Exercise}
                exact
              />
              <Route
                path="/exercises/:musclegroup"
                component={MuscleGroup}
                exact
              />
              <Route path="/auth" component={Auth} exact />
              <PrivateRoute
                path="/editProgram/:id"
                component={EditProgram}
                exact
              />
              <Route path="/editexercise/:id" component={EditExercise} exact />
              <PrivateRoute path="/addProgram" component={AddProgram} exact />
              <Route
                path="/addexercise"
                component={AddExercise}
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
