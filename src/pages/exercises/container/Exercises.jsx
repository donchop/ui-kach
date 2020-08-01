import React from "react";
import { connect } from "react-redux";
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
  Button,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import legsImg from "../images/legs.svg";
import chestImg from "../images/chest.svg";
import shouldersImg from "../images/shoulders.svg";
import backImg from "../images/back.svg";
import armsImg from "../images/arms.svg";
import pressImg from "../images/press.svg";

const useStyle = makeStyles({
  mainContainer: {
    background: "#1d1f2a",
    width: "100%",
  },
  btnAddContainer: {
    width: "100%",
  },
  btnAdd: {
    border: "2px solid #ff9908",
    width: "60%",
    height: "80px",
    color: "#ff9908",
    "&:hover": {
      border: "2px solid #dc3545",
      color: "#dc3545",
    },
  },
  blockContainer: {
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

const Exercises = ({ user }) => {
  const classes = useStyle();
  const history = useHistory();
  const muscleGroups = [
    { title: "Грудь", imgSrc: chestImg, muscleGroup: "chest" },
    { title: "Плечи", imgSrc: shouldersImg, muscleGroup: "shoulders" },
    { title: "Спина", imgSrc: backImg, muscleGroup: "back" },
    { title: "Руки", imgSrc: armsImg, muscleGroup: "arms" },
    { title: "Ноги", imgSrc: legsImg, muscleGroup: "legs" },
    { title: "Пресс", imgSrc: pressImg, muscleGroup: "press" },
  ];

  return (
    <Box component="div" className={classes.mainContainer}>
      <Container className={classes.blockContainer}>
        <Grid container>
          {user !== null && user.fullRights && (
            <Grid
              item
              container
              justify="center"
              className={classes.btnAddContainer}
            >
              <Button
                variant="outlined"
                fullWidth
                className={classes.btnAdd}
                onClick={() => history.push("/addExercise")}
              >
                <AddIcon className={classes.iconAdd} />
                <Typography>Добавить Упражнение</Typography>
              </Button>
            </Grid>
          )}

          <Grid item container direction="row" justify="center">
            {muscleGroups.map((muscle, index) => (
              <Card className={classes.card} key={index}>
                <CardActionArea
                  onClick={() =>
                    history.push(`/exercises/${muscle.muscleGroup}`)
                  }
                  className={classes.cardArea}
                >
                  <img
                    className={classes.imageMuscle}
                    src={muscle.imgSrc}
                    alt="imgDietSvg"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      align="center"
                      className={classes.title}
                    >
                      {muscle.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.auth.user,
});

export default connect(mapStateToProps)(Exercises);
