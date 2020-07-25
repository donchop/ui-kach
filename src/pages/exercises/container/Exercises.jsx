import React from "react";
import { Grid, makeStyles, Container, Box } from "@material-ui/core";

import legsImg from "../images/legs.svg";
import chestImg from "../images/chest.svg";
import shouldersImg from "../images/shoulders.svg";
import backImg from "../images/back.svg";
import bicepsImg from "../images/biceps.svg";
import tricepsImg from "../images/triceps.svg";
import forearmImg from "../images/forearm.svg";
import pressImg from "../images/press.svg";
import GroupMuscle from "../components/GroupMuscle";

const useStyle = makeStyles({
  mainContainer: {
    background: "#1d1f2a",
    width: "100%",
  },
  blockConrainer: {
    marginTop: "5%",
  },
});

const Exercises = () => {
  const styles = useStyle();
  const muscleGroups = [
    { title: "Грудь", imgSrc: chestImg },
    { title: "Плечи", imgSrc: shouldersImg },
    { title: "Спина", imgSrc: backImg },
    { title: "Бицепс", imgSrc: bicepsImg },
    { title: "Трипецс", imgSrc: tricepsImg },
    { title: "Предплечье", imgSrc: forearmImg },
    { title: "Ноги", imgSrc: legsImg },
    { title: "Пресс", imgSrc: pressImg },
  ];

  return (
    <Box component="div" className={styles.mainContainer}>
      <Container className={styles.blockConrainer}>
        <Grid container direction="row" justify="center">
          {muscleGroups.map((muscle, index) => (
            <GroupMuscle
              title={muscle.title}
              imgSrc={muscle.imgSrc}
              key={index}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Exercises;
