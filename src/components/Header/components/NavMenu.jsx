import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Menu, MenuItem, Button, makeStyles, Link } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyle = makeStyles({
  menuIcon: {
    color: "#ff9908",
  },
  menuBtn: {
    justifyContent: "flex-end",
  },
});

const NavMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyle();

  const pagesList = [
    { name: "Главная", link: "/" },
    { name: "Программы", link: "/programs" },
    { name: "Упражнения", link: "/exercises" },
    { name: "Диеты", link: "/diets" },
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
        <MenuIcon className={classes.menuIcon} />
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




export default NavMenu;
