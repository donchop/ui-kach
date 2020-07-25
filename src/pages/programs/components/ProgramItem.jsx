import React from "react";
import PropTypes from "prop-types";
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
import { useHistory } from "react-router-dom";
import Moment from "react-moment";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyle = makeStyles({
  card: {
    marginTop: "10%",
    boxShadow: "none",
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
    justifyContent: "center",
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
});

const ProgramItem = ({ program }) => {
  const classes = useStyle();
  const history = useHistory();
  return (
    <Card className={classes.card}>
      <img className={classes.imageProgram} src={program.imgUrl} alt="" />
      <CardContent>
        <Typography
          className={classes.title}
          variant="h5"
          component="h1"
          align="center"
        >
          {program.title}
        </Typography>
        <Typography
          className={classes.date}
          variant="body1"
          component="h1"
          align="center"
        >
          <Moment format="DD-MM-YYYY">{program.date}</Moment>
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
     
      </CardActions>
    </Card>
  );
};
ProgramItem.propTypes = {
  program: PropTypes.object.isRequired,
};

export default ProgramItem;
