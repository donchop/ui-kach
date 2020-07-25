import React, { useState } from "react";
import { connect } from "react-redux";
import {  Container } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import Alert from "../../../components/alert";
import { setAlert } from "../../../components/alert/actions/alert";
import Login from "../components/Login";
import Register from "../components/Register";
import { register, login } from "../actions/auth";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),
  },
}));

const Auth = ({ register, login, setAlert, isAuthenticated }) => {
  const classes = useStyles();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const [authType, setAuthType] = useState(false);

  const { name, email, password, password2 } = form;

  const changeFormHandler = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = () => {
    if (authType) {
      if (password !== password2) {
        setAlert("Пароли не совпадают", "error");
      } else {
        register({ name, email, password });
      }
    } else {
      login({ email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/main" />;
  }

  return (
    <Container component="main" className={classes.container} maxWidth="xs">
      {authType ? (
        <Register
          triggerAuthType={() => setAuthType(!authType)}
          changeFormHandler={changeFormHandler}
          submitForm={submitForm}
        />
      ) : (
        <Login
          triggerAuthType={() => setAuthType(!authType)}
          changeFormHandler={changeFormHandler}
          submitForm={submitForm}
        />
      )}
      <Alert />
    </Container>
  );
};

Auth.propTypes = {
  register: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register, login, setAlert })(Auth);
