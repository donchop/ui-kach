import React from "react";
import { Button, TextField, Grid, Typography } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";


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

const Register = ({ triggerAuthType, changeFormHandler, submitForm }) => {
  const classes = useStyles();
  return (
    <div className={classes.paper}>
      <Typography component="h1" variant="h5">
        Регистрация
      </Typography>
      <form className={classes.form} noValidate>
      <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          type="text"
          id="name"
          label="Имя"
          name="name"
          onChange={changeFormHandler}
        />
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
           <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          type="password"
          id="password2"
          minLength="6"
          label="Повторите пароль"
          name="password2"
          autoComplete="current-password"
          onChange={changeFormHandler}
        />
        <Button
          fullWidth
          variant="contained"
          className={classes.submit}
          onClick={submitForm}
        >
          Зарегистрироваться
        </Button>
        <Grid container justify="flex-end">
          <Button
            variant="text"
            className={classes.btnAuth}
            onClick={triggerAuthType}
          >
            Авторизироваться
          </Button>
        </Grid>
      </form>
    </div>
  );
};

export default Register;
