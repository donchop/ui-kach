import React, { useState } from "react";
import PropTypes from "prop-types";
import { Menu, MenuItem, Button, makeStyles, Link } from "@material-ui/core";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { NavLink } from "react-router-dom";

const useStyle = makeStyles({
  AccountBoxIcon: {
    color: "#ff9908",
  },
  menuBtn: {
    justifyContent: "flex-end",
  },
});

const ProfileMenu = ({ logout }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyle();

  const pagesList = [
    { name: "Профиль", link: "/main" },
    { name: "Выйти", link: "/auth", func: logout },
  ];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        className={classes.menuBtn}
        onClick={handleClick}
      >
        <AccountBoxIcon className={classes.AccountBoxIcon} />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {pagesList.map((page, key) => (
          <MenuItem key={key} onClick={handleClose}>
            <Link
              color="inherit"
              underline="none"
              component={NavLink}
              activeClassName={classes.activeLink}
              exact
              onClick={() => (page.func ? page.func() : null)}
              to={page.link}
            >
              {page.name}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
ProfileMenu.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default ProfileMenu;
