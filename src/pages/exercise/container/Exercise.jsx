import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import {
  makeStyles,
  Container,
  Card,
  CardContent,
  Typography,
  Box,
  CircularProgress,
} from "@material-ui/core";
import Alert from "../../../components/alert";
import { getExercise } from "../../exercises/actions/exercises";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "50%",
    "@media (max-width: 1200px)": {
      width: "100%",
    },
  },
  card: {
    marginBottom: "20px",
  },
  ytplayerContainer: {
    marginTop:"50px",
    
  },
  ytplayer: {
    width: "640px",
    height: "480px",
    marginLeft:"15%",
    "@media (max-width: 1200px)": {
      marginLeft:"6%",
      width: "320px",
      height: "320px",
    },
  },
  loading: {
    margin: "50%",
  },
  title: {
    fontSize: 40,
    fontWeight: 600,
  },
  text: {
    marginTop: 10,
  },
}));

const Exercise = ({ loading, exercise, getExercise, user }) => {
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    getExercise(id);
  }, [getExercise, id]);

  return (
    <Container className={classes.container}>
      <Alert />
      {loading || exercise === null ? (
        <Box component="div" className={classes.loading}>
          <CircularProgress />
        </Box>
      ) : (
        <Fragment>
          <Card className={classes.card}>
            <Box component="div" className={classes.ytplayerContainer}>
              <iframe
                className={classes.ytplayer}
                title="ytplayer"
                type="text/html"
                src={
                  "https://www.youtube.com/embed/" +
                  exercise.video.split("/watch?v=")[1]
                }
                frameBorder="0"
              />
            </Box>
            <CardContent>
              <Typography
                className={classes.title}
                variant="h5"
                component="h1"
                align="center"
              >
                {exercise.name}
              </Typography>

              <Typography
                className={classes.text}
                variant="body1"
                align="center"
                component="p"
              >
                {exercise.text}
              </Typography>
              
            </CardContent>
          </Card>
        </Fragment>
      )}
    </Container>
  );
};
Exercise.propTypes = {
  getExercise: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  exercise: state.exercises.exercises.listItem,
  loading: state.exercises.exercises.loading,
});


export default connect(mapStateToProps, {
  getExercise,
})(Exercise);
