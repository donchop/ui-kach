import React from "react";
import PropTypes from "prop-types";
import { NavLink, useHistory } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  Box,
  IconButton,
  Link,
  Hidden,
} from "@material-ui/core";
import { connect } from "react-redux";

import { logout } from "../../../pages/auth/actions/auth";
import logoIcon from "../../images/logo.png";
import NavMenu from "../components/NavMenu";
import ProfileMenu from "../components/ProfileMenu";

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: "#000",
    color: "#fff",
    borderBottom: "2.5px solid #ff9908",
  },
  logoText: {
    color: "#ff9908",
  },
  logoIcon: {
    position: "relative",
    top: "-5px",
    width: "auto",
    height: "30px",
  },
  toolbar: {
    "@media (min-width: 544px)": {
      padding: "0 15%",
    },
    "@media (max-width: 960px)": {
      justifyContent: "space-between",
    },
  },
  toolbarLink: {
    textTransform: "upperCase",
    textDecoration: "none",
    fontWeight: 600,
    padding: theme.spacing(3),
    "&:hover": {
      color: "#ff9908",
    },
  },
  activeLink: {
    color: "#ff9908",
  },
  loginBtn: {
    fontWeight: 600,
    backgroundColor: "#ff9908",
  },
}));

const Header = ({ isAuthenticated, logout }) => {
  const classes = useStyles();
  const history = useHistory();

  const pagesList = [
    { name: "Главная", link: "/" },
    { name: "Программы", link: "/programs" },
    { name: "Упражнения", link: "/exercises" },
    { name: "Диеты", link: "/diets" },
  ];
  return (
    <AppBar className={classes.headerContainer}>
      <Toolbar className={classes.toolbar}>
        <Hidden mdUp>
          <NavMenu />
        </Hidden>
        <IconButton onClick={()=> history.push('/main')}>
          <Typography variant="h5" className={classes.logoText}>
            kach
          </Typography>
          <img src={logoIcon} alt="logo_icon" className={classes.logoIcon} />
        </IconButton>
        <Hidden smDown>
          <Box className={classes.title} component="nav" align="center">
            {pagesList.map((page, key) => (
              <Link
                color="inherit"
                underline="none"
                className={classes.toolbarLink}
                key={key}
                component={NavLink}
                activeClassName={classes.activeLink}
                exact
                to={page.link}
              >
                {page.name}
              </Link>
            ))}
          </Box>
          </Hidden>
          {isAuthenticated ? (
            <ProfileMenu logout={logout} />
          ) : (
            <Button
              color="inherit"
              variant="contained"
              style={{ background: "#ff9908" }}
              className={classes.loginBtn}
              onClick={() => history.push("/auth")}
            >
              Войти
            </Button>
          )}
        
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.auth.isAuthenticated,
});

export default connect(mapStateToProps, {logout})(Header);
