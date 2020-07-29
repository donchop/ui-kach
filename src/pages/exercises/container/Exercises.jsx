import React from "react";
import { useHistory } from "react-router-dom";
import {
  Grid,
  makeStyles,
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  CardActionArea,
} from "@material-ui/core";

import legsImg from "../images/legs.svg";
import chestImg from "../images/chest.svg";
import shouldersImg from "../images/shoulders.svg";
import backImg from "../images/back.svg";
import bicepsImg from "../images/biceps.svg";
import tricepsImg from "../images/triceps.svg";
import forearmImg from "../images/forearm.svg";
import pressImg from "../images/press.svg";

const useStyle = makeStyles({
  mainContainer: {
    background: "#1d1f2a",
    width: "100%",
  },
  blockConrainer: {
    marginTop: "5%",
  },
  card: {
    width: 300,
    background: "transparent",
    boxShadow: "none",
    marginTop: 25,
    marginBottom: 25,
  },
  cardArea: {
    "&:hover": {
      background: "rgba(0, 0, 0, 0.3)",
    },
  },
  imageMuscle: {
    height: "50%",
    display: "block",
    paddingTop: 15,
    marginLeft: "auto",
    marginRight: "auto",
  },
  title: {
    color: "#fff",
  },
});

const Exercises = () => {
  const styles = useStyle();
  const history = useHistory();
  const muscleGroups = [
    { title: "Грудь", imgSrc: chestImg, muscleGroup: "chest" },
    { title: "Плечи", imgSrc: shouldersImg, muscleGroup: "shoulders" },
    { title: "Спина", imgSrc: backImg, muscleGroup: "back" },
    { title: "Бицепс", imgSrc: bicepsImg, muscleGroup: "biceps" },
    { title: "Трипецс", imgSrc: tricepsImg, muscleGroup: "triceps" },
    { title: "Предплечье", imgSrc: forearmImg, muscleGroup: "forearm" },
    { title: "Ноги", imgSrc: legsImg, muscleGroup: "legs" },
    { title: "Пресс", imgSrc: pressImg, muscleGroup: "press" },
  ];

  return (
    <Box component="div" className={styles.mainContainer}>
      <Container className={styles.blockConrainer}>
        <Grid container direction="row" justify="center">
          {muscleGroups.map((muscle, index) => (
            <Card className={styles.card} key={index}>
              <CardActionArea
                onClick={() => history.push(`/exercises/musclegroup/${muscle.muscleGroup}`)}
                className={styles.cardArea}
              >
                <img
                  className={styles.imageMuscle}
                  src={muscle.imgSrc}
                  alt="imgDietSvg"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    align="center"
                    className={styles.title}
                  >
                    {muscle.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Exercises;
