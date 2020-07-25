import React from "react";
import { makeStyles, Card, CardActionArea, Grid } from "@material-ui/core";

import imgExercise1 from "../images/exercise1.jpg";
import imgExercise2 from "../images/exercise2.jpg";
import imgExercise3 from "../images/exercise3.jpg";
import imgExercise4 from "../images/exercise4.jpg";

const useStyle = makeStyles({
  exercisesContainer: {
    background: "#1d1f2a",
    paddingTop: 80,
    paddingBottom: 80,
  },

  card: {
    maxWidth: 345,
    background: "transparent",
    color: "#fff",
    boxShadow: "none",
    marginRight: 10,
  },
  imageExercise: {
    width: "100%",
  },
});

const Exercises = () => {
  const classes = useStyle();
  const exercisesArr = [imgExercise1, imgExercise2, imgExercise3, imgExercise4];

  return (
    <Grid
      container
      direction="row"
      className={classes.exercisesContainer}
      justify="center"
    >
      {exercisesArr.map((exercise, index) => (
        <Grid item key={index}>
          <Card className={classes.card}>
            <CardActionArea>
              <img
                className={classes.imageExercise}
                src={exercise}
                alt="exercise"
              />
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Exercises;
