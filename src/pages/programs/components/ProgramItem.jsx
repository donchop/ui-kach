import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  IconButton,
  Box,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useHistory } from "react-router-dom";
import Moment from "react-moment";

import { deleteProgram } from "../actions/program";

const useStyle = makeStyles({
  card: {
    marginTop: "10%",
    boxShadow: "none",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px",
  },
  userName: {
    fontSize: 16,
    fontWeight: 600,
    color: "#ff9908",
  },
  title: {
    fontSize: 40,
    fontWeight: 600,
  },
  date: {
    color: "#64677c",
  },
  description: {
    overflow: "hidden",
    marginTop: 10,
    height: "200px",
    "@media (max-width: 960px)": {
      height: "200px",
    },
  },
  imageProgram: {
    height: "100%",
    width: "100%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  btnContainer: {
    justifyContent: "space-evenly",
    marginBottom: "16px",
  },
  btn: {
    color: "#fff",
    fontWeight: 600,
    marginTop: 10,
    width: "150px",
    height: "50px",
    background: "#ff9908",
    "&:hover": {
      background: "#dc3545",
    },
  },
  editIconContainer: {
    color: "green",
  },
  editIcon: {
    color: "green",
  },
  deleteIconContainer: {
    color: "red",
  },
  deleteIcon: {
    color: "red",
  },
});

const ProgramItem = ({ program, isAuthenticated, deleteProgram, auth }) => {
  const classes = useStyle();
  const history = useHistory();

  const deleteProgramHandler = (id) => {
    const answer = window.confirm("Удалить программу тренировок?");
    if (answer) {
      deleteProgram(id);
      history.push("/programs/#alert");
    }
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Box component="div" className={classes.cardHeader}>
          <Typography variant="body1" className={classes.userName}>
            {program.name}
            {"  "}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="span">
            <Moment format="DD-MM-YYYY">{program.date}</Moment>
          </Typography>
        </Box>
        <img className={classes.imageProgram} src={program.imgUrl} alt="" />
        <Typography
          className={classes.title}
          variant="h5"
          component="h1"
          align="center"
        >
          {program.title}
        </Typography>
        <Typography
          className={classes.description}
          variant="body1"
          align="center"
          component="p"
        >
          {program.text}
        </Typography>
      </CardContent>
      <CardActions className={classes.btnContainer}>
        <Button
          className={classes.btn}
          size="medium"
          color="primary"
          align="center"
          onClick={() => history.push(`/programs/${program._id}`)}
        >
          Узнать больше
        </Button>
        {isAuthenticated && auth.user._id === program.user && (
          <Box component="div">
            <IconButton className={classes.editIconContainer}>
              <EditIcon
                className={classes.editIcon}
                onClick={() => history.push(`/editProgram/${program._id}`)}
              />
            </IconButton>
            <IconButton
              className={classes.deleteIconContainer}
              onClick={() => deleteProgramHandler(program._id)}
            >
              <DeleteIcon className={classes.deleteIcon} />
            </IconButton>
          </Box>
        )}
      </CardActions>
    </Card>
  );
};
ProgramItem.propTypes = {
  program: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  deleteProgram: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

export default connect(null, { deleteProgram })(ProgramItem);
