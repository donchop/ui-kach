import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import {
  Container,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  makeStyles,
  Typography,
  Box,
  IconButton,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { getExercises, deleteExercise } from "../actions/exercises";
import Alert from "../../../components/alert";

const useStyles = makeStyles((theme) => ({
  loading: {
    margin: "50%",
  },
  list: {
    marginTop: "10%",
    marginLeft: "25%",
    marginRight: "25%",
    width: "60%",
    backgroundColor: "#fff",
    "@media (max-width: 900px)": {
      marginLeft: "0",
      marginRight: "0",
      width: "100%",
    },
  },
  listItem: {
    paddingLeft: theme.spacing(4),
  },
  textName: {
    color: "rgba(0,0,0,0.6)",
    fontSize: "1.2rem",
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
}));

const MuscleGroup = ({ getExercises, deleteExercise, list, user }) => {
  const { musclegroup } = useParams();
  const classes = useStyles();
  const history = useHistory();
  useEffect(() => {
    getExercises(musclegroup);
  }, [getExercises, musclegroup]);

  const deleteProgramHandler = (id) => {
    const answer = window.confirm("Удалить программу тренировок?");
    if (answer) {
      deleteExercise(id);
    }
  };

  return (
    <Container>
      <Alert />
      {list === null || list.length === 0 ? (
        <CircularProgress className={classes.loading} />
      ) : (
        <List className={classes.list}>
          {list.map((listItem) => (
            <ListItem
              button
              key={listItem._id}
              className={classes.listitem}
              onClick={() =>
                history.push(`/exercises/musclegroup/${listItem._id}`)
              }
            >
              <ListItemText
                primary={
                  <Typography className={classes.textName}>
                    {listItem.name}
                  </Typography>
                }
              />
              {user !== null && user.fullRights && (
                <Box component="div">
                  <IconButton
                    className={classes.editIconContainer}
                    onClick={(e) => {
                      e.stopPropagation();
                      history.push(`/editExercise/${listItem._id}`);
                    }}
                  >
                    <EditIcon className={classes.editIcon} />
                  </IconButton>
                  <IconButton
                    className={classes.deleteIconContainer}
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteProgramHandler(listItem._id);
                    }}
                  >
                    <DeleteIcon className={classes.deleteIcon} />
                  </IconButton>
                </Box>
              )}
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

MuscleGroup.propTypes = {
  getExercises: PropTypes.func.isRequired,
  deleteExercise: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  list: state.exercises.exercises.list,
  user: state.auth.auth.user,
});

export default connect(mapStateToProps, { getExercises, deleteExercise })(
  MuscleGroup
);
