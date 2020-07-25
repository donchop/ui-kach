import React from "react";
import { Button, TextField, Grid, Typography} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#ff9908",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#ff5e08",
    },
  },
  btnAuth: {
    color: "#3f51b5",
    textTransform: "none",
  },
}));

const Login = ({ triggerAuthType, changeFormHandler, submitForm }) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.paper}>
      <Typography component="h1" variant="h5">
        Авторизация
      </Typography>
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={changeFormHandler}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          type="password"
          id="password"
          label="Пароль"
          name="password"
          autoComplete="current-password"
          onChange={changeFormHandler}
        />
        <Button
          fullWidth
          variant="contained"
          className={classes.submit}
          onClick={submitForm}
        >
          Войти
        </Button>
        <Grid container justify="space-between">
          <Grid item>
            <Button
              variant="text"
              className={classes.btnAuth}
              onClick={() => history.push("/")}
            >
              Забыли пароль?
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="text"
              className={classes.btnAuth}
              onClick={triggerAuthType}
            >
              Зарегистрироваться
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Login;
